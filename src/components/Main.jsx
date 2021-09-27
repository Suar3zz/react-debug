import React from "react";

const Main = () => {
  return (
    <main>
      <section className="main-section">
        <div className="main-overlay"></div>

        <div className="main-logo">
          <img
            src="./assets/logo-cinear-main.svg"
            alt="logo cinear seccion principal"
          />
        </div>

        <div className="main-gradient"></div>

        <video className="main-video" autoPlay muted loop>
          <source
            src="https://cdn.videvo.net/videvo_files/video/premium/video0040/large_watermarked/universal_countdown1_preview.mp4"
            type="video/mp4"
          />
        </video>
      </section>
      <section className="extern-links-section">
        links a sitios externos
      </section>
    </main>
  );
};

export default Main;
