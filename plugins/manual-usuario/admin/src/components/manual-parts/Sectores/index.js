import React, { useState } from "react";
import Block from "../../Block";
import Scroll from "../../Scroll";
import "./style.css";

function SectoresPanel() {
  return (
    <div id="sectores-block" name="sectores-block">
      <Block title="Sectores" arrow={true} className="Sectores-Block card">
        <h2 className="requirement-title hidable">
          (Requerimientos)
        </h2>
        <div className="links hidable">
          <Scroll type="id" element="puntosinspeccion-block" offset={-85}>
            <a className="requirement-element">Puntos de Inspección</a>
          </Scroll>
          <Scroll type="id" element="frames-block" offset={-85}>
            <a className="requirement-element">Frames</a>
          </Scroll>
         
          
        </div>
        <h3 className="hidable">Pasos</h3>
        <ol className="hidable">
          <li>
              En el sidebar izquierdo, seleccionas "Sectores" en
              "TIPOS DE COLECCIÓN".
          </li>
          <li>
              En la nueva ventana, seleccionas "+ Agregar Sectores".
          </li>
          <li>
            En la sección de en medio agregas:
            <ul>
              <li>
                <b>Nombre</b>
                <p className="step-element">
                  Nombre del sector.
                </p>
              </li>
              <li>
                <b>Posición X</b>
                <p className="step-element">
                  Posición en X del sector.
                </p>
              </li>
              <li>
                <b>Posición Y</b>
                <p className="step-element">
                  Posición en Y del sector.
                </p>
              </li>
              <li>
                <b>Ancho</b>
                <p className="step-element">
                  Ancho del sector.
                </p>
              </li>
              <li>
                <b>Alto</b>
                <p className="step-element">
                  Alto del sector.
                </p>
              </li>
              
              
              
            </ul>
          </li>
          <li>
            En el panel de la derecha agregas:
            <ul>
              <li>
                <b>Frame</b>
                <p className="step-element">
                  Se asigna el frame del sector.
                </p>
              </li>
              <li>
                <b>Puntos de Inspección</b>
                <p className="step-element">
                  Se asignan los puntos de inspección del sector.
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

export default SectoresPanel;