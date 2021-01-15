"use strict";
/** * ImportContent.js service
 * * @description: A set of functions similar to controller's actions to avoid code duplication. */
const { resolveDataFromRequest, getItemsFromData } = require("./utils/utils");
const analyzer = require("./utils/analyzer");
const _ = require("lodash");
const importFields = require("./utils/importFields");
const importMediaFiles = require("./utils/importMediaFiles");

const import_queue = {};

module.exports = {
  preAnalyzeImportFile: async (ctx) => {
    const { dataType, body, options } = await resolveDataFromRequest(ctx);
    const { sourceType, items } = await getItemsFromData({
      dataType,
      body,
      options
    });
    const analysis = analyzer.analyze(sourceType, items);
    return { sourceType, ...analysis };
  },
  importItems: (importConfig, ctx) =>
    new Promise(async (resolve, reject) => {
      const { dataType, body } = await resolveDataFromRequest(ctx);
      console.log("importitems", importConfig);
      try {
        const { items } = await getItemsFromData({
          dataType,
          body,
          options: importConfig.options
        });
        import_queue[importConfig.id] = items;
      } catch (error) {
        reject(error);
      }
      resolve({
        status: "import started",
        importConfigId: importConfig.id
      });
      importNextItem(importConfig);
    }),
};