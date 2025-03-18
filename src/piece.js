import { Actor, vec, Color } from "excalibur"
export class Piece extends Actor {
    constructor(x, y, name, color, pos) {
        super({
            name: name,
            pos: pos || vec(x, y),
            radius: 25,
            color: color,
        });
        this.on('pointerdown', evt => {
            // Pointer events tunnel in z order from the screen down, you can cancel them!
            // if (true) {
            //   evt.cancel();
            // }
            console.log('You clicked the actor @', evt.worldPos.toString(), this);
        });
    };
}