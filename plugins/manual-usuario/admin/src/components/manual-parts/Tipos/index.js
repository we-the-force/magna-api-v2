import React, { useState } from "react";
import Block from "../../Block";
import Scroll from "../../Scroll";
import "./style.css";

function TiposPanel() {
  return (
    <div id="tipos-block" name="tipos-block">
      <Block title="Tipos" arrow={true} className="Tipos-Block card">
        <h2 className="requirement-title hidable">
          (Requerimientos)
        </h2>
        <div className="links hidable">
          <Scroll type="id" element="defectos-block" offset={-85}>
            <a className="requirement-element">Defectos</a>
          </Scroll>
          
         
          
        </div>
        <h3 className="hidable">Pasos</h3>
        <ol className="hidable">
          <li>
              En el sidebar izquierdo, seleccionas "Tipos" en
              "TIPOS DE COLECCIÓN".
          </li>
          <li>
              En la nueva ventana, seleccionas "+ Agregar Tipos".
          </li>
          <li>
            En la sección de en medio agregas:
            <ul>
              <li>
                <b>Título</b>
                <p className="step-element">
                  Título del tipo.
                </p>
              </li>
              <li>
                <b>Descripción</b>
                <p className="step-element">
                  Descripción del tipo.
                </p>
              </li>
              <li>
                <b>Imagen</b>
                <p className="step-element">
                  Imagen del tipo.
                </p>
              </li>
              
              
              
              
              
            </ul>
          </li>
          <li>
            En el panel de la derecha agregas:
            <ul>
              
              <li>
                <b>Defectos</b>
                <p className="step-element">
                  Se asignan los defectos al tipo.
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

export default TiposPanel;