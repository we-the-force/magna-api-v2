import React, { useState } from "react";
import Block from "../../Block";
import Scroll from "../../Scroll";
import "./style.css";

function ReferenciasPanel() {
  return (
    <div id="referencias-block" name="referencias-block">
      <Block title="Referencias" arrow={true} className="Referencias-Block card">
        <h2 className="requirement-title hidable">
          (Requerimientos)
        </h2>
        <div className="links hidable">
          <Scroll type="id" element="puntosinspeccion-block" offset={-85}>
            <a className="requirement-element">Puntos de Inspección</a>
          </Scroll>
         
          
        </div>
        <h3 className="hidable">Pasos</h3>
        <ol className="hidable">
          <li>
              En el sidebar izquierdo, seleccionas "Referencias" en
              "TIPOS DE COLECCIÓN".
          </li>
          <li>
              En la nueva ventana, seleccionas "+ Agregar Referencias".
          </li>
          <li>
            En la sección de en medio agregas:
            <ul>
              <li>
                <b>Descripción</b>
                <p className="step-element">
                  Descripción de la referencia.
                </p>
              </li>
              <li>
                <b>Imagen</b>
                <p className="step-element">
                  Imagen de referencia.
                </p>
              </li>
              
              
              
            </ul>
          </li>
          <li>
            En el panel de la derecha agregas:
            <ul>
              <li>
                <b>Puntos de inspección</b>
                <p className="step-element">
                  Se asignan los puntos de inspección a la referencia.
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

export default ReferenciasPanel;