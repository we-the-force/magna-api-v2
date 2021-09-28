import React from "react";

import Block from "../../Block";
import Scroll from "../../Scroll";

import "./style.css";

function ContentIndex() {
    return (
        <Block title="Índice" arrow={false} className="indice">
            <div>
                <Scroll type="id" element="alertas-block" offset={-85}>
                    <a href="#alertas-block" className="Index-Element">
                        <div className="numCont">
                            <p className="numero">1</p>
                        </div>
                        <div className="container">
                            <p>Alertas</p>
                        </div>
                    </a>
                </Scroll>
                <Scroll type="id" element="clasificaciones-block" offset={-85}>
                    <a href="#clasificaciones-block" className="Index-Element">
                        <div className="numCont">
                            <p className="numero">2</p>
                        </div>
                        <div className="container">
                            <p>Clasificaciónes</p>
                        </div>
                    </a>
                </Scroll>
                <Scroll type="id" element="defectos-block" offset={-85}>
                    <a href="#defectos-block" className="Index-Element">
                        <div className="numCont">
                            <p className="numero">3</p>
                        </div>
                        <div className="container">
                            <p>Defectos</p>
                        </div>
                    </a>
                </Scroll>
                <Scroll type="id" element="frames-block" offset={-85}>
                    <a href="#frames-block" className="Index-Element">
                        <div className="numCont">
                            <p className="numero">4</p>
                        </div>
                        <div className="container">
                            <p>Frames</p>
                        </div>
                    </a>
                </Scroll>
                <Scroll type="id" element="operadores-block" offset={-85}>
                    <a href="#operadores-block" className="Index-Element">
                        <div className="numCont">
                            <p className="numero">5</p>
                        </div>
                        <div className="container">
                            <p>Operadores</p>
                        </div>
                    </a>
                </Scroll>
                <Scroll type="id" element="puntosinspeccion-block" offset={-85}>
                    <a href="#puntosinspeccion-block" className="Index-Element">
                        <div className="numCont">
                            <p className="numero">6</p>
                        </div>
                        <div className="container">
                            <p>Puntos de Inspección</p>
                        </div>
                    </a>
                </Scroll>
                <Scroll type="id" element="referencias-block" offset={-85}>
                    <a href="#referencias-block" className="Index-Element">
                        <div className="numCont">
                            <p className="numero">7</p>
                        </div>
                        <div className="container">
                            <p>Referencias</p>
                        </div>
                    </a>
                </Scroll>
                <Scroll type="id" element="sectores-block" offset={-85}>
                    <a href="#referencias-block" className="Index-Element">
                        <div className="numCont">
                            <p className="numero">8</p>
                        </div>
                        <div className="container">
                            <p>Sectores</p>
                        </div>
                    </a>
                </Scroll>
                <Scroll type="id" element="supervisores-block" offset={-85}>
                    <a href="#referencias-block" className="Index-Element">
                        <div className="numCont">
                            <p className="numero">9</p>
                        </div>
                        <div className="container">
                            <p>Supervisores</p>
                        </div>
                    </a>
                </Scroll>
                <Scroll type="id" element="tipos-block" offset={-85}>
                    <a href="#referencias-block" className="Index-Element">
                        <div className="numCont">
                            <p className="numero">10</p>
                        </div>
                        <div className="container">
                            <p>Tipos</p>
                        </div>
                    </a>
                </Scroll>
            </div>
        </Block>
    );
}

export default ContentIndex;
