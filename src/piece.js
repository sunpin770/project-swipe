import { Actor, vec, Color } from "excalibur"
export class Piece extends Actor {
    constructor(x, y, name) {
        super({
            name: name,
            pos: vec(x, y),
            radius: 25,
            color: Color.Blue,
        });
    }
}