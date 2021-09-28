import React, { useState } from "react";
import Block from "../../Block";
import Scroll from "../../Scroll";
import "./style.css";

function PuntosInspeccionPanel() {
  return (
    <div id="puntosinspeccion-block" name="puntosinspeccion-block">
      <Block title="PuntosInspeccion" arrow={true} className="PuntosInspeccion-Block card">
        <h2 className="requirement-title hidable">
          (Requerimientos)
        </h2>
        <div className="links hidable">
          <Scroll type="id" element="sectores-block" offset={-85}>
            <a className="requirement-element">Sectores</a>
          </Scroll>
          <Scroll type="id" element="tipos-block" offset={-85}>
            <a className="requirement-element">Tipos</a>
          </Scroll>
          <Scroll type="id" element="clasificaciones-block" offset={-85}>
            <a className="requirement-element">Clasificaciones</a>
          </Scroll>
          <Scroll type="id" element="referencias-block" offset={-85}>
            <a className="requirement-element">Referencias</a>
          </Scroll>
          
        </div>
        <h3 className="hidable">Pasos</h3>
        <ol className="hidable">
          <li>
              En el sidebar izquierdo, seleccionas "Puntos de Inspección" en
              "TIPOS DE COLECCIÓN".
          </li>
          <li>
              En la nueva ventana, seleccionas "+ Agregar Puntos de Inspección".
          </li>
          <li>
            En la sección de en medio agregas:
            <ul>
              <li>
                <b>Nombre</b>
                <p className="step-element">
                  El nombre del Punto.
                </p>
              </li>
              <li>
                <b>Descripción</b>
                <p className="step-element">
                  Descripción del punto.
                </p>
              </li>
              <li>
                <b>Orden</b>
                <p className="step-element">
                  Orden de los puntos de inspección dentro de un sector.
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
                  Se asignan los sectores al punto.
                </p>
              </li>
              <li>
                <b>Tipos</b>
                <p className="step-element">
                  Se asignan los tipos al punto.
                </p>
              </li>
              <li>
                <b>Clasificación</b>
                <p className="step-element">
                  Se asignan las clasificaciones al punto.
                </p>
              </li>
              <li>
                <b>Referencia</b>
                <p className="step-element">
                  Se asignan las referencias al punto.
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

export default PuntosInspeccionPanel;