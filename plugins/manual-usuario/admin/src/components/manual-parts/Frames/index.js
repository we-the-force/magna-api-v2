import React, { useState } from "react";
import Block from "../../Block";
import Scroll from "../../Scroll";
import "./style.css";

function FramePanel() {
  return (
    <div id="frames-block" name="frames-block">
      <Block title="Frames" arrow={true} className="Frames-Block card">
        <h2 className="requirement-title hidable">
          (Requerimientos)
        </h2>
        <div className="links hidable">
          <Scroll type="id" element="sectores-block" offset={-85}>
            <a className="requirement-element">Sectores</a>
          </Scroll>
          
        </div>
        <h3 className="hidable">Pasos</h3>
        <ol className="hidable">
          <li>
              En el sidebar izquierdo, seleccionas "Frames" en
              "TIPOS DE COLECCIÓN".
          </li>
          <li>
              En la nueva ventana, seleccionas "+ Agregar Frames".
          </li>
          <li>
            En la sección de en medio agregas:
            <ul>
              <li>
                <b>Nombre Modelo</b>
                <p className="step-element">
                  El nombre del modelo.
                </p>
              </li>
              <li>
                <b>Número Modelo</b>
                <p className="step-element">
                  El número del modelo.
                </p>
              </li>
              <li>
                <b>Referencia</b>
                <p className="step-element">
                  Imagen de referencia del frame.
                </p>
              </li>
              <li>
                <b>Código Modelo</b>
                <p className="step-element">
                  Código del modelo.
                </p>
              </li>
              <li>
                <b>Nombre corto Modelo</b>
                <p className="step-element">
                  Nombre corto del modelo.
                </p>
              </li>
              
            </ul>
          </li>
          <li>
            En el panel de la derecha agregas:
            <ul>
              <li>
                <b>Sectores</b>
                <p className="step-element">
                  Se asignan los sectores al frame.
                </p>
              </li>
             

            </ul>
          </li>
          
          <li>Presionas "Guardar"</li>
        </ol>
      </Block>
    </div>
  );
}

export default FramePanel;