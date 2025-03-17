import { randomFromArray, stealRandomFromArray } from "./utils.js";
import { player1 } from "./players.js";
import { Scene, Color } from "excalibur";
import { Background } from "./background.js";
import { Pouch } from "./beh.js";
import { map } from "./map.js";
import { refill } from "./refill.js";
// import { Piece } from "./pieces/piece.js";
import { Jar, Kai, Khyii, Mras, Plumoni, Rui, Sakal, Tyern } from "./type.js"

export class MyLevel extends Scene {
    onInitialize(engine) {
        const b1 = new Background(300, 800, 'b1');
        const b2 = new Background(800, 300, 'b2');
        this.add(b1);
        this.add(b2);

        // refill();

        // const first = stealRandomFromArray(player1.pouch.has, [])
        // first.pos = map.m1;
        // this.add(first)
// 
        // const second = stealRandomFromArray(player1.pouch.has, [])
        // second.pos = map.m2;
        // this.add(second)
// 
        // const third = stealRandomFromArray(player1.pouch.has, [])
        // third.pos = map.m3;
        // this.add(third)
// 
        console.log(player1.pouch)

        // const testy1 = new Kai(340, 300, "testy", map.m1);
        // const testy2 = new Plumoni(400, 300, "testy2", map.m2);
        // const testy3 = new Sakal(460, 300, "testy3", map.m3);
// 
        // const testy4 = new Rui(300, 335, "testy4", map.m4);
        // const testy5 = new Jar(300, 400, "testy5", map.m5);
        // const testy6 = new Tyern(300, 460, "testy6", map.m6);
// 
        // const testy7 = new Khyii(340, 500, 'testy7', map.m7);
        // const testy8 = new Mras(400, 500, 'testy8', map.m8);
        // const testy9 = new Khyii(460, 500, 'testy9', map.m9);

        // const testy10 = new Khyii(500, 340, 'testy10');
        // const testy11 = new Mras(500, 400, 'testy11');
        // const test12 = new Khyii(500, 460, 'testy12');




        // this.add(testy1);
        // this.add(testy2);
        // this.add(testy3);
        // this.add(testy4);
        // this.add(testy5);
        // this.add(testy6);
        // this.add(testy7);
        // this.add(testy8);
        // this.add(testy9);
        // this.add(testy10);
        // this.add(testy11);
        // this.add(testy12);
        // testy6.kill();
    }
// 
    // onPreLoad(loader) {
    //     // Add any scene specific resources to load
    // }
// 
   // onActivate(context) {
   // }
// //
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