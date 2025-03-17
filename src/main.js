import { DisplayMode, Engine, Color } from "excalibur";
import { loader } from "./resources.js";
import { MyLevel } from "./scene.js";
import { Pouch } from "./beh.js";

// Goal is to keep main.ts small and just enough to configure the engine

const game = new Engine({
  width: 800, // Logical width and height in game pixels
  height: 800,
  displayMode: DisplayMode.FitScreen, // Display mode tells excalibur how to fill the window
  // pixelArt: true, // pixelArt will turn on the correct settings to render pixel art without jaggies or shimmering artifacts
  scenes: {
    start: MyLevel
  },
  backgroundColor: Color.fromHex('#FFFFFF'),
  // physics: {
  //   solver: SolverStrategy.Realistic,
  //   substep: 5 // Sub step the physics simulation for more robust simulations
  // },
  // fixedUpdateTimestep: 16 // Turn on fixed update timestep when consistent physic simulation is important
});

game.start('start', { // name of the start scene 'start'
  loader, // Optional loader (but needed for loading images/sounds)
  // inTransition: new FadeInOut({ // Optional in transition
  //   duration: 1000,
  //   direction: 'in',
  //   color: Color.ExcaliburBlue
  // })
}).then(() => {

});