import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";

const ParticlesComponent = (props) => {
  const options = useMemo(() => {
    // Using an empty options object will load the default settings for the particles(static, no background, 3px radius, opacity 100%, white color)
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      background: {
        color: "#1f5bcc", // set background color
      },
      fullScreen: {
        enable: true, // enabling this will make the canvas fill the entire screen, its enabled by default
        zIndex: -99, // this is the z-index value used when the fullScreen is enabled, its a 0 by default
      },
      interactivity: {
        events: {
          // onClick: {
          //     enable: true, // enables click event
          //     mode: "push" // adds the particles on click
          // },
          onHover: {
            enable: true, // enables hover event
            mode: "repulse", // makes particles run away from cursor
          },
        },
        modes: {
          push: {
            quantity: 10, // number of particles to add on click
          },
          repulse: {
            distance: 100, // the distance of the particles from the cursor
          },
        },
      },
      particles: {
        color: {
          value: ["#C7E6E3", "#02ddfa", "#439A86", "#BF1363"], // color of particles
        },
        links: {
          enable: true, // enabling this will make particles linktogether
          distance: 150, // max distance for linking the particles
          color: {
            value: "#A8DCD1", // color of links
          },
        },
        move: {
          enable: true, // enabling this allows the particles to move
          speed: { min: 1, max: 2.5 }, // randomize the speed of the particles
        },
        opacity: {
          value: { min: 0.3, max: 0.7 }, // randomize the opacity of the particles creating a semitransparent effect.
        },
        size: {
          value: { min: 1, max: 8 }, // randomize the size of the particles
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine);
  }, []);
  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable component
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;
