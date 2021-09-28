import React, { useState } from "react";
import Block from "../../Block";
import Scroll from "../../Scroll";
import "./style.css";

function SupervisoresPanel() {
  return (
    <div id="supervisores-block" name="supervisores-block">
      <Block title="Supervisores" arrow={true} className="Supervisores-Block card">
        <h2 className="requirement-title hidable">
          (Requerimientos)
        </h2>
        <div className="links hidable">
          <Scroll type="id" element="alertas-block" offset={-85}>
            <a className="requirement-element">Alertas</a>
          </Scroll>
          
         
          
        </div>
        <h3 className="hidable">Pasos</h3>
        <ol className="hidable">
          <li>
              En el sidebar izquierdo, seleccionas "Supervisores" en
              "TIPOS DE COLECCIÓN".
          </li>
          <li>
              En la nueva ventana, seleccionas "+ Agregar Supervisores".
          </li>
          <li>
            En la sección de en medio agregas:
            <ul>
              <li>
                <b>Nombre</b>
                <p className="step-element">
                  Nombre del supervisor.
                </p>
              </li>
              <li>
                <b>Email</b>
                <p className="step-element">
                  Email del supervisor.
                </p>
              </li>
              <li>
                <b>Whatsapp</b>
                <p className="step-element">
                  Whatsapp del supervisor.
                </p>
              </li>
              <li>
                <b>Imagen de perfil</b>
                <p className="step-element">
                  Imagen de perfil del supervisor.
                </p>
              </li>
              <li>
                <b>Password de desbloqueo</b>
                <p className="step-element">
                  Password de desbloqueo del supervisor.
                </p>
              </li>
              <li>
                <b>Recibir notificaciones</b>
                <p className="step-element">
                  Recibir notificaciones de alertas.
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
                  Se asignan las Alertas al supervisor.
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

export default SupervisoresPanel;