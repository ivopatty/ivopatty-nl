import React, { useCallback, useState, useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleEmitter = () => {
  const [height, setHeight] = useState(200);

  useEffect(() => {
    const el = document.getElementById("experience");
    if (el) {
      setHeight(el.clientHeight);
    }
  }, []);

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{ position: "absolute", height: 'inherit', width: '100%' }}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 160,
            density: {
              enable: false
            }
          },
          color: {
            value: ["#64FFDA", "#00D9FF", "#4FC3F7"]
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3
            }
          },
          links: {
            enable: false
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            outModes: "out"
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            onClick: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0
            },
            repulse: {
              distance: 400,
              duration: 4
            }
          }
        }
      }}
    />
  );
};

export default ParticleEmitter;