import { DisplayMode, Engine, Color, Vector } from "excalibur";
import { loader } from "./resources.js";
import { MyLevel } from "./scene.js";
import { Pouch } from "./pouch.js";

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


const calculateExPixelConversion = (screen) => {
  const origin = screen.worldToScreenCoordinates(Vector.Zero);
  const singlePixel = screen.worldToScreenCoordinates(Vector(1, 0)).sub(origin);
  const pixelConversion = singlePixel.x;
  document.documentElement.style.setProperty('--pixel-conversion', pixelConversion.toString());
}
// Update pixel conversion on resize
game.screen.events.on('resize', () => calculateExPixelConversion(game.screen));

game.start('start', { // name of the start scene 'start'
  loader, // Optional loader (but needed for loading images/sounds)
  // inTransition: new FadeInOut({ // Optional in transition
  //   duration: 1000,
  //   direction: 'in',
  //   color: Color.ExcaliburBlue
  // })
}).then(() => {
  calculateExPixelConversion(game.screen);
});

//temp:
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


