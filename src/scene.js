import { player1, player2, player3, player4 } from "./players.js";
import { Scene } from "excalibur";
import { Background } from "./background.js";
import { refill } from "./refill.js";

export class MyLevel extends Scene {
    onInitialize(engine) {
        const b1 = new Background(300, 800, 'b1');
        const b2 = new Background(800, 300, 'b2');
        this.add(b1);
        this.add(b2);

        refill(this);

        console.log(player1.pouch);
        console.log(player2.pouch);
        console.log(player3.pouch);
        console.log(player4.pouch);

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