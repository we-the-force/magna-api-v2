'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const accountSid = "AC064aac29239c123602f31dfa98fdf96b";
const authToken = "d7ee6372592f4443b55181fc776f745b";
const client = require("twilio")(accountSid, authToken);



const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
const { info } = require("strapi-utils/lib/logger");

module.exports =  {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    let report;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      report = await strapi.services.report.create(data, { files });
    } else {
      report = await strapi.services.report.create(ctx.request.body);
    }
    if(report.report_inspection.length > 0){

      for (let inspection of report.report_inspection) {
        console.log('inspection');
        console.info(inspection);
        if(inspection.defects.length > 0){
          for(let defect of inspection.defects){
            let result = async function(defect_Id) {
              return strapi.query("alert-level").find({ id: defect_Id });
            }
            result(defect.alert_level).then(async function(resp) {
              console.log('resp query');
              console.log(resp);
              const alert = resp;
              if (alert.supervisors.length > 0) {
                for (let supervisor of alert.supervisors) {
                  // console.info(supervisor);
                  if(supervisor.receive_notifications){
                    const msgBody =
                      "El operador: " +
                      report.operator.name +
                      " levantó una Alerta nivel: " +
                      alert.level +
                      ", con el Código: " +
                      alert.code +
                      " y Descripción: " +
                      alert.description +
                      ", en el Chasis con el número de serie: " +
                      report.frame_serial +
                      " ";
                    const recipient = "whatsapp:+521" + supervisor.whatsapp;
                    client.messages
                      .create({
                        body: msgBody,
                        from: "whatsapp:+14155238886",
                        to: recipient,
                      })
                      .then((message) => console.log(message.sid))
                      .done();
                      if(supervisor.email!==''){
                        await strapi.plugins['email'].services.email.send({
                          to: supervisor.email,
                          from: 'about@wetheforce.com',

                          replyTo: 'about@wetheforce.com',
                          subject: 'Alerta de producción',
                          text: msgBody,
                          html: msgBody,
                        });
                      } else {}


                  } else {
                    console.log('no notifications for supervisor');
                  }


                }
              } else {
                console.log('no supervisor');
              }
            }).catch(e => {
              console.log('There has been a problem with your fetch operation: ' + e.message);
            });

            // const result = await strapi
            //   .query('alert-level')
            //   .model.query(qb => {
            //     qb.where('id', defect.id);
            //   })
            //   .fetch()
            //   .then((result) => {

            //     // expected output: "Success!"
            //   });
              // console.info(result)


          }


        } else {
          console.log('no defects');
        }
      }

    }else{
    console.log('no inspection');

    }


    return sanitizeEntity(report, { model: strapi.models.report });

  },
};
