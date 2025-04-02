import { Actor, vec } from "excalibur"
import { stealRandomFromArray } from "./utils.js";
export class Piece extends Actor {
    constructor(x, y, name, color, pos, owner) {
        super({
            name: name,
            pos: pos || vec(x, y),
            radius: 25,
            color: color,
        });
        this.owner = owner;
        this.on('pointerdown', evt => {
            // Pointer events tunnel in z order from the screen down, you can cancel them!
            // if (true) {
            //   evt.cancel();
            // }
            console.log('You clicked the actor @', evt.worldPos.toString(), this);
            this.kill();
            stealRandomFromArray(/*whatever thatis? */[], []) //beh in the logic here TODO EMERGE!!!
        });
    };
};
//I guess I need to just typesome random stuff here for visual effect; after all, isn't this file just... a bit too short? Or something like that. Either way, it makes nice typing noises, so it's fine-ish.