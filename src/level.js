
import { Scene } from "excalibur";
import { Background } from "./player.js";

export class MyLevel extends Scene {
    onInitialize(engine) {
        const b1 = new Background(300, 800, 'b1');
        const b2 = new Background(800, 300, 'b2');

        //add stuff
        this.add(b1);
        this.add(b2);
    }
// 
    // onPreLoad(loader) {
    //     // Add any scene specific resources to load
    // }
// 
    // onActivate(context) {
    //     // Called when Excalibur transitions to this scene
    //     // Only 1 scene is active at a time
    // }
// 
    // onDeactivate(context) {
    //     // Called when Excalibur transitions away from this scene
    //     // Only 1 scene is active at a time
    // }
// 
    // onPreUpdate(engine, elapsedMs) {
    //     // Called before anything updates in the scene
    // }
// 
    // onPostUpdate(engine, elapsedMs) {
    //     // Called after everything updates in the scene
    // }
// 
    // onPreDraw(ctx, elapsedMs) {
    //     // Called before Excalibur draws to the screen
    // }
// 
    // onPostDraw(ctx, elapsedMs) {
    //     // Called after Excalibur draws to the screen
    // }
}// 