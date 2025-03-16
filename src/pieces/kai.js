import { Color } from 'excalibur';
import { Piece } from './piece.js';
export class Kai extends Piece {
    constructor(x, y, name) {
        super(x, y, name, Color.fromHex('#FF0000'));
    }
}
