import React, { Component } from "react";
import ParticlesBg from "particles-bg";

export class Bg extends Component {
  render() {
    let config = {
      num: [4, 7],
      rps: 0.5,
      radius: [1, 10],
      life: [5, 10],
      v: [0.01, 0.5],
      tha: [-40, 40],
      alpha: [0.5, 0],
      scale: [.1, 2],
      position: "all",
      color: ["random", "#ff0000"],
      cross: "dead",
      // emitter: "follow",
      random: 10
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    }

    return (
      <div>
        <ParticlesBg type="custom" config={config} bg={true}  />
      </div>
    );
  }
}
