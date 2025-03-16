
import { Scene, Color } from "excalibur";
import { Background } from "./player.js";
// import { Piece } from "./pieces/piece.js";
import { Jar, Kai, Khyii, Mras, Plumoni, Rui, Sakal, Tyern } from "./pieces/type.js"

export class MyLevel extends Scene {
    onInitialize(engine) {
        const b1 = new Background(300, 800, 'b1');
        const b2 = new Background(800, 300, 'b2');
        const testy1 = new Kai(350, 300, "testy");
        const testy2 = new Plumoni(400, 300, "testy2");
        const testy3 = new Sakal(450, 300, "testy3");
        const testy4 = new Rui(300, 350, "testy4");
        const testy5 = new Jar(300, 400, "testy5");
        const testy6 = new Tyern(300, 450, "testy6");
        const testy7 = new Khyii(350, 500, 'testy7');
        const testy8 = new Mras(400, 500, 'testy8');
        const testy9 = new Khyii(450, 500, 'testy9');

        this.add(b1);
        this.add(b2);
        this.add(testy1);
        this.add(testy2);
        this.add(testy3);
        this.add(testy4);
        this.add(testy5);
        this.add(testy6);
        this.add(testy7);
        this.add(testy8);
        this.add(testy9);
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