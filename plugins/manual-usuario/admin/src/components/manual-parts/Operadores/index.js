import React, { useState } from "react";
import Block from "../../Block";
import Scroll from "../../Scroll";
import "./style.css";

function OperadoresPanel() {
  return (
    <div id="operadores-block" name="operadores-block">
      <Block title="Operadores" arrow={true} className="Operadores-Block card">
        {/* <h2 className="requirement-title hidable">
          (Requerimientos)
        </h2>
        <div className="links hidable">
          <Scroll type="id" element="sectores-block" offset={-85}>
            <a className="requirement-element">Sectores</a>
          </Scroll>
          
        </div> */}
        <h3 className="hidable">Pasos</h3>
        <ol className="hidable">
          <li>
              En el sidebar izquierdo, seleccionas "Operadores" en
              "TIPOS DE COLECCIÓN".
          </li>
          <li>
              En la nueva ventana, seleccionas "+ Agregar Operadores".
          </li>
          <li>
            En la sección de en medio agregas:
            <ul>
              <li>
                <b>Nombre</b>
                <p className="step-element">
                  El nombre del Operador.
                </p>
              </li>
              <li>
                <b>Número Operador</b>
                <p className="step-element">
                  El número del operador.
                </p>
              </li>
              <li>
                <b>Código de Empleado</b>
                <p className="step-element">
                  Imagen de código del operador.
                </p>
              </li>
              
              
            </ul>
          </li>
          {/* <li>
            En el panel de la derecha agregas:
            <ul>
              <li>
                <b>Sectores</b>
                <p className="step-element">
                  Se asignan los sectores al frame.
                </p>
              </li>
             

            </ul>
          </li> */}
          
          <li>Presionas "Guardar"</li>
        </ol>
      </Block>
    </div>
  );
}

export default OperadoresPanel;