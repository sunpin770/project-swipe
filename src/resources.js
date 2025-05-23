import { ImageSource, Loader } from "excalibur";

// It is convenient to put your resources in one place
export const Resources = {
  Sword: new ImageSource("./src/images/sword.png") // Vite public/ directory serves the root images
}
// So when you type Resources.Sword -> ImageSource

// We build a loader and add all of our resources to the boot loader
// You can build your own loader by extending DefaultLoader
export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
