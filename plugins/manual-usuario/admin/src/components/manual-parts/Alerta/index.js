import React, { useState } from "react";
import Block from "../../Block";
import Scroll from "../../Scroll";
import "./style.css";

function AlertaPanel() {
  return (
    <div id="alertas-block" name="alertas-block">
      <Block title="Alerta" arrow={true} className="Alerta-Block card">
        <h2 className="requirement-title hidable">
          (Requerimientos)
        </h2>
        <div className="links hidable">
          <Scroll type="id" element="supervisores-block" offset={-85}>
            <a className="requirement-element">Supervisores</a>
          </Scroll>
          <Scroll type="id" element="defectos-block" offset={-85}>
            <a className="requirement-element">Defectos</a>
          </Scroll>
        </div>
        <h3 className="hidable">Pasos</h3>
        <ol className="hidable">
          <li>
              En el sidebar izquierdo, seleccionas "Alertas" en
              "TIPOS DE COLECCIÓN".
          </li>
          <li>
              En la nueva ventana, seleccionas "+ Agregar Alertas".
          </li>
          <li>
            En la sección de en medio agregas:
            <ul>
              <li>
                <b>Nivel</b>
                <p className="step-element">
                  El nivel de la alerta.
                </p>
              </li>
              <li>
                <b>Código</b>
                <p className="step-element">Código de la alerta.</p>
              </li>
              <li>
                  <b>Descripción</b>
                  <p className="step-element">
                      Descripción de la alerta.
                  </p>
              </li>
            </ul>
          </li>
          <li>
            En el panel de la derecha agregas:
            <ul>
              <li>
                <b>Supervisores</b>
                <p className="step-element">
                  Se asignan los supervisores que quieres que reciban la alerta.
                </p>
              </li>
              <li>
                <b>Defectos</b>
                <p className="step-element">
                  Se asignan los defectos que estarán ligados a la alerta.
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

export default AlertaPanel;