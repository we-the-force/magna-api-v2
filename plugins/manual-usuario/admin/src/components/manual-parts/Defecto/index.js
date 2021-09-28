import React, { useState } from "react";
import Block from "../../Block";
import Scroll from "../../Scroll";
import "./style.css";

function DefectoPanel() {
  return (
    <div id="defectos-block" name="defectos-block">
      <Block title="Defectos" arrow={true} className="Defecto-Block card">
        <h2 className="requirement-title hidable">
          (Requerimientos)
        </h2>
        <div className="links hidable">
          <Scroll type="id" element="alerta-block" offset={-85}>
            <a className="requirement-element">Alertas</a>
          </Scroll>
          
        </div>
        <h3 className="hidable">Pasos</h3>
        <ol className="hidable">
          <li>
              En el sidebar izquierdo, seleccionas "Defectos" en
              "TIPOS DE COLECCIÓN".
          </li>
          <li>
              En la nueva ventana, seleccionas "+ Agregar Defectos".
          </li>
          <li>
            En la sección de en medio agregas:
            <ul>
              <li>
                <b>Nombre</b>
                <p className="step-element">
                  El nombre del Defecto.
                </p>
              </li>
              
            </ul>
          </li>
          <li>
            En el panel de la derecha agregas:
            <ul>
              <li>
                <b>Alertas</b>
                <p className="step-element">
                  Se asignan las alertas al defecto.
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

export default DefectoPanel;