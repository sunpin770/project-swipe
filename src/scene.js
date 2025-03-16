
import { Scene, Color } from "excalibur";
import { Background } from "./player.js";
// import { Piece } from "./pieces/piece.js";
import { Kai } from "./pieces/kai.js"

export class MyLevel extends Scene {
    onInitialize(engine) {
        const b1 = new Background(300, 800, 'b1');
        const b2 = new Background(800, 300, 'b2');
        const testy1 = new Kai(300, 300, "testy");
        const testy2 = new Kai(400, 300, "testy2");
        const testy3 = new Kai(500, 300, "testy3");
        const testy4 = new Kai(300, 400, "testy4");
        const testy5 = new Kai(300, 500, "testy5");
        const testy6 = new Kai(500, 500, "testy6");

        this.add(b1);
        this.add(b2);
        this.add(testy1);
        this.add(testy2);
        this.add(testy3);
        this.add(testy4);
        this.add(testy5);
        this.add(testy6);
        // testy6.kill();
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