import { useEffect, useMemo } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import type { Container, MoveDirection, OutMode } from "@tsparticles/engine";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

type ParticlesBackgroundProps = {
  id: string;
  backgroundColor: string
};

const ParticlesBackground = (props: ParticlesBackgroundProps) => {

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options = useMemo(() => ({
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "repulse",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        push: {
          distance: 200,
          duration: 15,
        },
        grab: {
          distance: 150,
        },
      },
    },
    particles: {
      color: {
        value: props.backgroundColor,
      },
      links: {
        color: props.backgroundColor,
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none" as MoveDirection,
        enable: true,
        outModes: {
          default: "bounce" as OutMode,
        },
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 400,
      },
      opacity: {
        value: 1.0,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },


    detectRetina: true,
  }), [props.backgroundColor]);

  return (
    <Particles
      id={props.id}
      particlesLoaded={particlesLoaded}
      options={{
        ...options,
        fullScreen: { enable: false }
      }}
    />
  );
};

export default ParticlesBackground;
