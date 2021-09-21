/*
 *
 * HomePage
 *
 */

import React, { memo, useState, useEffect } from 'react';
import {
  ALink,
  Block,
  Container,
  LinkWrapper,
  P,
  Wave,
  Separator,
  ListItem,
} from "./components";
import "semantic-ui-css/semantic.min.css";
import { Button, Table, Flag, Ref } from "semantic-ui-react";
import { request } from "strapi-helper-plugin";
import { Select, List, Label, InputText } from "@buffetjs/core";
import {
  Grab,
  GrabLarge,
 
} from '@buffetjs/icons';
import { get, has, isEmpty, pickBy, set } from "lodash";
import pluginId from "../../pluginId";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";



const icons = [
  
  {
    name: "grab",
    Compo: Grab,
    props: {
      fill: "#b3b5b9",
    },
  },
  {
    name: "grab-large",
    Compo: GrabLarge,
    props: {
      fill: "#b3b5b9",
    },
  }
  
];



const getHelper = async (helperId) => {
  try {
  const response = await request("/helpers/"+helperId, {
      method: "GET"
    });
    // const cuadros = response;
    // console.log(response);

    // const frameSectorOptions = response.sectors.map(sector => {
    //   return {
    //     label: sector.name,
    //     value: sector.id
    //   };
    // });
    return response;
  } catch (e) {
      strapi.notification.error(`${e}`);
  }
  return [];
};

// import PropTypes from 'prop-types';
// import pluginId from '../../pluginId';
const getUrl = to =>
to ? `/plugins/${pluginId}/${to}` : `/plugins/${pluginId}`;




const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging && ("lightblue"),
  ...draggableStyle,
})

const HomePage = () => {
  
 const [frameOptions, setFrameOptions] = useState(["Cargando..."]);
 const [frameSectorOptions, setFrameSectorOptions] = useState(["Selecciona un Frame primero..."]);
 const [selectedFrame, setSelectedFrame] = useState([]);

const onDragStart = (start) => {
  const id = start.draggableId;
  const selected = selectedRowIds.find((selectedId) => selectedId === id);

  // If dragging an item that is not selected, unselect all items
  if (!selected) {
    this.unselectAll();
  }

  setDraggingRowId(start.draggableId);
};

const unselect = () => {
  unselectAll();
};

const unselectAll = () => {
  selectedRowIds([]);
};
const fetchHelper = (helperId) => {
  getHelper(helperId).then((helper) => {
    // let sectorP = sector;
    // optionsSelect.unshift({
    //   label: "Selecciona un Sector...",
    //   value: "",
    // });
    // setFrameSectorOptions(optionsSelect);
    // setInspectionPoints(inspectionP);
    setSelectedHelper(helper);
    // console.log(helper);
  });
};

const onDragEnd = (result) => {
  const { destination, source, reason } = result;

  // Not a thing to do...
  if (!destination || reason === "CANCEL") {
    setDraggingRowId(null);
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  const tableObjs = Object.assign([], inspectionPoints);
  const inspectionPoint = inspectionPoints[source.index];
  tableObjs.splice(source.index, 1);
  tableObjs.splice(destination.index, 0, inspectionPoint);
  // tableObjs.sort(function(a, b) {
  //   return a.order - b.order;
  // });
  setInspectionPoints(tableObjs);

  const promises = tableObjs.map((story, index) => {
    // return axios.get(base + story + extension).then(res => res.data)
    return saveInspectionPointOrder(story.id,index).then(res => res);
  })
  Promise.all(promises).then(data => {
    // console.log(data)
    // this.setState({ promises: data })
    data.sort(function(a, b) {
      return a.order - b.order;
    });
  // setInspectionPoints(data);
  strapi.notification.success("Orden guardado!");


  })
  // setInspectionPoints(tableObjs);

  // console.log(tableObjs);
};

const getFrame = async (frameId) => {
  try {
  const response = await request("/frames/"+frameId, {
      method: "GET"
    });
    const frame = response;
    // console.log(frame);

    // const cuadroOptions = response.map(cuadro => {
    //   return {
    //     label: cuadro.model_name,
    //     value: cuadro.id
    //   };
    // });
    return frame ;
  } catch (e) {
      strapi.notification.error(`${e}`);
  }
  return [];
};


const saveFrame = async (frameId,modelName, modelNumber, shortName) => {
  try {
    const response = await request("/frames/"+frameId, {
      method: "PUT",
      body: {
        model_name: modelName,
        model_number: modelNumber,
        model_short_name: shortName
      }
    });
    const frame = response;
    // console.log(frame);
    strapi.notification.success("Frame se guardó correctamente!");
    return frame;



  } catch (e) {
      strapi.notification.error(`${e}`);
  }

}

const saveInspectionPointOrder = async (inspectionPointId, Order) => {
  try {
  const response = await request("/inspectionpoints/"+inspectionPointId, {
      method: "PUT",
      body: {
        orden: Order
      }
    });
    const inspectionPoint = response;
    // console.log(inspectionPoint);

    // const cuadroOptions = response.map(cuadro => {
    //   return {
    //     label: cuadro.model_name,
    //     value: cuadro.id
    //   };
    // });
    return inspectionPoint ;
  } catch (e) {
      strapi.notification.error(`${e}`);
  }
  return [];
};

  const getFramesOptions = async () => {
    try {
    const response = await request("/frames", {
        method: "GET"
      });
      const cuadros = response;
      // console.log(response);
      
      const cuadroOptions = response.map(cuadro => {
        return {
          label: cuadro.model_name,
          value: cuadro.id
        };
      });
      return cuadroOptions ;
    } catch (e) {
        strapi.notification.error(`${e}`);
    }
    return [];
  };

  const getFrameSectorOptions = async (frameId) => {
    try {
    const response = await request("/frames/"+frameId, {
        method: "GET"
      });
      // const cuadros = response;
      // console.log(response.sectors);

      const frameSectorOptions = response.sectors.map(sector => {
        return {
          label: sector.name,
          value: sector.id
        };
      });
      return frameSectorOptions;
    } catch (e) {
        strapi.notification.error(`${e}`);
    }
    return [];
  };

  const getSectorInspectionPoints = async (sectorId) => {
    try {
    const response = await request("/sectors/"+sectorId, {
        method: "GET"
      });
    
      // const cuadros = response;
      // console.log(response.inspectionpoints);

      const inspectionPoints = 
       await Promise.all(
      response.inspectionpoints.map(
        async (inspectionP) =>  {
          
          let pointType = await request(
            "/pointtypes/" + inspectionP.pointtype,
            {
              method: "GET",
            }
          ).then((response) => {
            // console.log(response);
            return response;
          });
          let helper = await request(
            "/helpers/" + inspectionP.helper,
            {
              method: "GET",
            }
          ).then((response) => {
            // console.log(response);
            return response;
          });
          // const helper = await request(
          //   "/pointtypes/" + inspectionP.pointtype,
          //   {
          //     method: "GET",
          //   }
          // ).then((response) => {
          //   return response;
          // });
          // console.log(pointType);
          // console.log(helper);
          
          return {
            id: inspectionP.id,
            name: inspectionP.name,
            real_name: inspectionP.real_name,
            order: inspectionP.orden,
            description: inspectionP.description,
            // point_type: inspectionP.pointtype,
            point_type_id: inspectionP.pointtype,
            
            point_type_image: pointType.symbol_image,
            point_type: pointType.name,
            color: '#'+pointType.hex_color_code,
            helper: helper.title,
            helper_image: helper.imagehelp,
            helper_id: inspectionP.helper

            // point_type: inspectionP.pointtype,
          };
        }
      ));
      // console.log(inspectionPoints);
      return inspectionPoints;
    } catch (e) {
        strapi.notification.error(`${e}`);
        console.log(e);
    }
    return [];
  };
  // const getSectorInspectionPoints = async (sectorId) => {
  //   try {
  //   const response = await request("/sectors/"+sectorId, {
  //       method: "GET"
  //     });
  //     // const cuadros = response;
  //     console.log(response.inspectionpoints);

  //     const inspectionPoints = response.inspectionpoints.map(inspectionP => {
  //       return {
  //         id: inspectionP.id,
  //         name: inspectionP.name,
  //         real_name: inspectionP.real_name,
  //         order: inspectionP.orden,
  //         // point_type: inspectionP.pointtype,
  //         point_type: inspectionP.pointtype,
  //       };
  //     });
  //     return inspectionPoints;
  //   } catch (e) {
  //       strapi.notification.error(`${e}`);
  //   }
  //   return [];
  // };

  // const getHelperNpointType = async (pointTypeId, helperId) => {
  //   try {
  //   const response = await request("/pointtypes/"+pointTypeId, {
  //       method: "GET"
  //     });
  //   const response = await request("/pointtypes/"+pointTypeId, {
  //       method: "GET"
  //     });
  //     // const cuadros = response;
  //     console.log(response);

  //     const pointType = response.map(inspectionP => {
  //       return {
  //         id: inspectionP.id,
  //         name: inspectionP.name,
  //         real_name: inspectionP.real_name,
  //         order: inspectionP.orden,
  //         // point_type: inspectionP.pointtype,
  //         point_type: inspectionP.pointtype,
  //       };
  //     });
  //     return inspectionPoints;
  //   } catch (e) {
  //       strapi.notification.error(`${e}`);
  //   }
  //   return [];
  // };

  useEffect(() => {
    getFramesOptions().then(res => {
      let cuadroOptions = res;
      cuadroOptions.unshift({
        label: "Selecciona un Frame...",
        value: ""
      });
      // console.log(cuadroOptions);
      setFrameOptions(cuadroOptions);
      // console.log(frameOptions);
      return false;
    });
  }, []);
 
 const [frames, setFrames] = useState([])
  const [val, setValue] = useState('Selecciona un Frame');
  const [frameModelName, setFrameModelName] = useState('');
  const [frameModelNumber, setFrameModelNumber] = useState('');
  const [frameShortName, setFrameShortName] = useState('');
  const [sectorVal, setSectorValue] = useState('Selecciona un Sector');
  const [dropEnd, setDropEnd] = useState('DropEnded');
  const [draggingRowId, setDraggingRowId] = useState(null);
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [selectedHelper, setSelectedHelper] = useState([]);
  const [inspectionPoints, setInspectionPoints] = useState([]);
  const [listota, setListota] = useState([
    { id: 1, name: "" },
    { id: 2, name: "" },
  ]);



  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Block>
              <h2 id="mainHeader">Frame Editor</h2>
              <ALink
                rel="noopener noreferrer"
                href="http://127.0.0.1:8080/fullscreen.html"
                target="_blank"
                type="blog"
                style={{
                  verticalAlign: " bottom",
                  marginBottom: 5,
                  position: "absolute",
                  top: "5px",
                  right: "30px",
                }}
              >
                Open 3D Editor
              </ALink>
             
              
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <P>Selecciona el Frame</P>
                  <Select
                    name="select"
                    onChange={({ target: { value } }) => {
                      if (value !== "") {
                        setValue(value);
                        getFrame(value).then((frame) => {
                          let frameInfo = frame;
                          setSelectedFrame(frame);
                          setFrameModelName(frame.model_name);
                          setFrameModelNumber(frame.model_number);
                          setFrameShortName(frame.model_short_name);
                          // console.log(selectedFrame);
                        });
                        getFrameSectorOptions(value).then((sectorOptions) => {
                          let optionsSelect = sectorOptions;
                          optionsSelect.unshift({
                            label: "Selecciona un Sector...",
                            value: "",
                          });
                          setFrameSectorOptions(optionsSelect);
                          // console.log(frameSectorOptions);
                        });
                      }
                    }}
                    options={frameOptions}
                    value={val}
                  ></Select>
                </div>
                <div className="col-lg-6 col-md-12">
                  <P>Selecciona el Sector</P>
                  <Select
                    name="select"
                    onChange={({ target: { value } }) => {
                      if (value !== "") {
                        setSectorValue(value);
                        getSectorInspectionPoints(value).then((inspectionP) => {
                          // let sectorP = sector;
                          // optionsSelect.unshift({
                          //   label: "Selecciona un Sector...",
                          //   value: "",
                          // });
                          // setFrameSectorOptions(optionsSelect);
                          inspectionP.sort(function(a, b) {
                            return a.order - b.order;
                          });
                          setInspectionPoints(inspectionP);
                          // console.log(inspectionP);
                        });
                      }

                      // getFrameSectorOptions(value).then(sectorOptions => {

                      // });
                    }}
                    options={frameSectorOptions}
                    value={sectorVal}
                  ></Select>
                </div>
              </div>
              <Separator style={{ marginTop: 25, marginBottom: 15 }} />
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  {(() => {
                    if (selectedFrame.model_name != null) {
                      return (
                        <>
                          <h4 id="mainHeader">Frame Info</h4>
                          <Label htmlFor="input">Model Name</Label>
                          <InputText
                            name="input"
                            type="text"
                            value={frameModelName}
                            // value={selectedFrame.model_name}
                            onChange={({ target: { value } }) => {
                                setFrameModelName(value);
                                
                            }}
                          />
                          <Label htmlFor="input">Model Number</Label>
                          <InputText
                            name="input"
                            type="text"
                            value={frameModelNumber}
                            // value={selectedFrame.model_number}
                            onChange={({ target: { value } }) => {
                              
                                setFrameModelNumber(value);

                              
                            }}
                          />
                          <Label htmlFor="input">Nómbre Corto</Label>
                          <InputText
                            name="input"
                            type="text"
                            value={frameShortName}
                            // value={selectedFrame.model_short_name}
                            onChange={({ target: { value } }) => {
                                setFrameShortName(value);

                            }}
                          />

                          {/* <img src={"http://localhost:1337"+selectedFrame.reference.formats.thumbnail.url} alt="" /> */}
                        </>
                      );
                    } else {
                      return "";
                    }
                  })()}
                </div>
                <div className="col-lg-6 col-md-12">
                  {(() => {
                    if (selectedFrame.model_name != null) {
                      return (
                        <>
                          <img
                            src={
                              selectedFrame.reference.formats.small.url
                            }
                            style={{ width: "100%" }}
                            alt=""
                          />
                          <Button
                          onClick={(e) => {
                            e.preventDefault();
                            saveFrame(
                              selectedFrame.id, frameModelName, frameModelNumber, frameShortName
                            );
                          }}
                          color="green">Guardar</Button>
                        </>
                      );
                    } else {
                      return "";
                    }
                  })()}
                </div>
              </div>
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />

              <div className="row">
                <div className="col-12">
                  <h3>Puntos de Inspección</h3>
                  <p>
                    Arrastra y suelta para ordenar. Selecciona para ver Helpers.
                  </p>
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Table singleLine selectable>
                      <Table.Header>
                        <Table.Row>
                          <Table.HeaderCell />

                          <Table.HeaderCell>Nombre</Table.HeaderCell>
                          <Table.HeaderCell>Descripción</Table.HeaderCell>
                          <Table.HeaderCell>Clase</Table.HeaderCell>
                          <Table.HeaderCell>Color</Table.HeaderCell>
                          <Table.HeaderCell>Ayuda</Table.HeaderCell>
                          <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                      </Table.Header>
                      <Droppable droppableId="table">
                        {(provided, snapshot) => (
                          <Ref innerRef={provided.innerRef}>
                            <Table.Body {...provided.droppableProps}>
                              {inspectionPoints.map((inspectionPoint, idx) => {
                                return (
                                  <Draggable
                                    draggableId={inspectionPoint.id.toString()}
                                    index={idx}
                                    key={inspectionPoint.id}
                                  >
                                    {(provided, snapshot) => (
                                      <Ref innerRef={provided.innerRef}>
                                        <Table.Row
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                          )}
                                          key={inspectionPoint.id}
                                          className="project"
                                        >
                                          <Table.Cell>
                                            {/* <Icon
                                              name="bars"
                                              color="grey"
                                              className="ds__DispoGroup__row-drag"
                                            /> */}
                                            <Grab key="grab" fill="#b3b5b9" />
                                          </Table.Cell>

                                          <Table.Cell>
                                            {inspectionPoint.name}
                                          </Table.Cell>
                                          <Table.Cell>
                                            {inspectionPoint.description}
                                          </Table.Cell>

                                          <Table.Cell>
                                            <a
                                              href={
                                                "content-manager/collectionType/application::pointtype.pointtype/" +
                                                inspectionPoint.point_type_id
                                              }
                                              target="_blank"
                                              // onClick={(e) => {
                                              //   e.preventDefault();
                                              //   fetchHelper(
                                              //     inspectionPoint.helper
                                              //   );
                                              // }}
                                            >
                                              {inspectionPoint.point_type}
                                              {(() => {
                                                if (
                                                  inspectionPoint.point_type_image !=
                                                  null
                                                ) {
                                                  return (
                                                    <>
                                                      <img
                                                        style={{
                                                          height: 25,
                                                          marginLeft: 15,
                                                        }}
                                                        src={
                                                          inspectionPoint.point_type_image.formats.thumbnail.url
                                                        }
                                                        alt=""
                                                      />
                                                    </>
                                                  );
                                                } else {
                                                  return "";
                                                }
                                              })()}
                                              
                                            </a>
                                          </Table.Cell>
                                          <Table.Cell
                                            style={{
                                              background: inspectionPoint.color,
                                            }}
                                          ></Table.Cell>
                                          <Table.Cell>
                                            <a
                                              href={
                                                "content-manager/collectionType/application::helper.helper/" +
                                                inspectionPoint.helper_id
                                              }
                                              target="_blank"
                                              // onClick={(e) => {
                                              //   e.preventDefault();
                                              //   fetchHelper(
                                              //     inspectionPoint.helper
                                              //   );
                                              // }}
                                            >
                                              {inspectionPoint.helper}
                                              {(() => {
                                                if (
                                                  inspectionPoint.helper_image !=
                                                  null
                                                ) {
                                                  return (
                                                    <>
                                                      <img
                                                        style={{
                                                          height: 25,
                                                          marginLeft: 15,
                                                        }}
                                                        src={
                                                          inspectionPoint.helper_image.formats.thumbnail.url
                                                        }
                                                        alt=""
                                                      />
                                                    </>
                                                  );
                                                } else {
                                                  return "";
                                                }
                                              })()}
                                              

                                            </a>
                                          </Table.Cell>
                                          <Table.Cell>
                                            <a
                                              href={
                                                "content-manager/collectionType/application::inspectionpoint.inspectionpoint/" +
                                                inspectionPoint.id
                                              }
                                              target="_blank"
                                            >
                                              Editar
                                            </a>
                                          </Table.Cell>
                                        </Table.Row>
                                      </Ref>
                                    )}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </Table.Body>
                          </Ref>
                        )}
                      </Droppable>
                    </Table>
                  </DragDropContext>
                </div>
                <div className="row">
                  <div className="col-12"></div>
                </div>
              </div>

              {/* <Iframe url="http://127.0.0.1:8080/index.html"
              width="812px"
              height="650px"
              id="frame-3d-editor"
              className="iframe"
              display="initial"
              overflow="hidden"
              position="relative"
              styles={{
                border: 'none'
              }}
              /> */}
            </Block>
            {/* <Block>
                <h2>Helper</h2>
                 <Separator style={{ marginTop: 37, marginBottom: 36 }} />
                 <Table celled>
                   <Table.Header>
                     <Table.Row>
                       <Table.HeaderCell>Id</Table.HeaderCell>
                       <Table.HeaderCell>Título</Table.HeaderCell>
                       <Table.HeaderCell>Descripción</Table.HeaderCell>
                       <Table.HeaderCell>Imagen</Table.HeaderCell>
                       <Table.HeaderCell>Editar</Table.HeaderCell>
                     </Table.Row>
                   </Table.Header>

                   <Table.Body>
                     <Table.Row>
                       <Table.Cell>{selectedHelper.id}</Table.Cell>
                       <Table.Cell>{selectedHelper.title}</Table.Cell>
                       <Table.Cell>{selectedHelper.helptext}</Table.Cell>
                       <Table.Cell>
                       </Table.Cell>
                       <Table.Cell selectable>
                         <a href='#'>Editar</a>
                       </Table.Cell>
                     </Table.Row>
                     
                   </Table.Body>
                 </Table>
              </Block> */}
          </div>
          
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
