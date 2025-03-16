import { Actor, vec, Color } from "excalibur"
export class Piece extends Actor {
    constructor(x, y, name, color, pos) {
        super({
            name: name,
            pos: pos || vec(x, y),
            radius: 25,
            color: color,
        });
    }
}