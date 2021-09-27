import React from "react";
import "./styles/Footer.css";

const logosPie = [
  {
    textoAlternativo: "CineARTV",
    srcDeLogo: "http://cine.ar/img/tv.cine.ar.svg",
  },
  {
    textoAlternativo: "CineARPLAY",
    srcDeLogo: "http://cine.ar/img/play.cine.ar.svg",
  },
  {
    textoAlternativo: "CineAREstrenos",
    srcDeLogo: "http://cine.ar/img/estrenos.cine.ar.svg",
  },
];
const transformarLogos = logosPie.map(({ textoAlternativo, srcDeLogo }) => (
  <li className="li-logos">
    <a className="a-logos" href="/">
      <img className="img-logos" src={srcDeLogo} alt={textoAlternativo} />
    </a>
  </li>
));
const logosUlti = [
  {
    textoAlternativo: "CineAR",
    srcDeLogoUlti: "http://cine.ar/img/logo-cinear.svg",
  },
  {
    textoAlternativo: "ARSAT",
    srcDeLogoUlti: "http://cine.ar/img/logo-arsat.svg",
  },
  {
    textoAlternativo: "INCAA",
    srcDeLogoUlti: "http://cine.ar/img/logo-incaa.svg",
  },
];

const transformarLogosUltimos = logosUlti.map(
  ({ textoAlternativo, srcDeLogoUlti }) => (
    <li className="li-logosUlti">
      <a className="a-logosUlti" href="/">
        <img
          className="img-logosUlti"
          src={srcDeLogoUlti}
          alt={textoAlternativo}
        />
      </a>
    </li>
  )
);
const PieDePagina = () => {
  return (
    <footer>
      <div className="logosCineAr">
        <ul>{transformarLogos}</ul>
      </div>
      <div className="footerText">
        <p>
          Todos los derechos reservados 2003-2021. República Argentina. INCAA
        </p>
        <br />
        <p>Lima 319; Código Postal: C1073AAG, CABA; República Argentina.</p>
      </div>
      <div className="ultimosLogos">
        <ul>{transformarLogosUltimos}</ul>
      </div>
    </footer>
  );
};
export default PieDePagina;
