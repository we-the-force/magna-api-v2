/*
 *
 * Programacion Radio TV
 *
 */

import React, { memo, Component } from "react";
import ContentIndex from "../../components/manual-parts/ContentIndex";
import Alerta from "../../components/manual-parts/Alerta";
import Clasificacion from "../../components/manual-parts/Clasificacion";
import Defecto from "../../components/manual-parts/Defecto";
import Frames from "../../components/manual-parts/Frames";
import Operadores from "../../components/manual-parts/Operadores";
import PuntosInspeccion from "../../components/manual-parts/PuntosInspeccion";
import Referencias from "../../components/manual-parts/Referencias";
import Sectores from "../../components/manual-parts/Sectores";
import Supervisores from "../../components/manual-parts/Supervisores";
import Tipos from "../../components/manual-parts/Tipos";

import Block from "../../components/Block";
import Scroll from "../../components/Scroll.js";
import smoothscroll from "smoothscroll-polyfill";

import moment from "moment";
import "./style.css";

moment.locale("es");

class HomePage extends Component {
  render() {
    return (
      <div className="main container-fluid">
        <h1 className="Home-Title"> Manual de Usuario </h1>
        <ContentIndex />
        <Alerta />
        <Clasificacion />
        <Defecto />
        <Frames />
        <Operadores />
        <PuntosInspeccion />
        <Referencias />
        <Sectores />
        <Supervisores />
        <Tipos />
        
        <div className="divider"> </div>
        
      </div>
    );
  }
}

export default memo(HomePage);
