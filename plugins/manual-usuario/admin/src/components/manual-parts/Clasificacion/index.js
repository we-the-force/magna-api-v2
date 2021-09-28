import React, { useState } from "react";
import Block from "../../Block";
import Scroll from "../../Scroll";
import "./style.css";

function ClasificacionPanel() {
  return (
    <div id="clasificaciones-block" name="clasificaciones-block">
      <Block title="Clasificacion" arrow={true} className="Clasificacion-Block card">
        {/* <h2 className="requirement-title hidable">
          (Requerimientos)
        </h2>
        <div className="links hidable">
          <Scroll type="id" element="supervisores-block" offset={-85}>
            <a className="requirement-element">Supervisores</a>
          </Scroll>
          <Scroll type="id" element="defectos-block" offset={-85}>
            <a className="requirement-element">Defectos</a>
          </Scroll>
        </div> */}
        <h3 className="hidable">Pasos</h3>
        <ol className="hidable">
          <li>
              En el sidebar izquierdo, seleccionas "Clasificaciones" en
              "TIPOS DE COLECCIÓN".
          </li>
          <li>
              En la nueva ventana, seleccionas "+ Agregar Clasificaciones".
          </li>
          <li>
            En la sección de en medio agregas:
            <ul>
              <li>
                <b>Nombre</b>
                <p className="step-element">
                  El nombre de la clasificación.
                </p>
              </li>
              <li>
                <b>Color</b>
                <p className="step-element">Código de color en hexadecimal.</p>
              </li>
              <li>
                  <b>Símbolo</b>
                  <p className="step-element">
                      Imagen del símbolo de la clasificación.
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

export default ClasificacionPanel;