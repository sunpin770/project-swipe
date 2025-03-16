import { Actor, vec, Color } from "excalibur"
export class Piece extends Actor {
    constructor(x, y, name) {
        super({
            name: name,
            position: vec(x, y),
            radius: 50,
            color: Color.Blue,
        });
    }
}