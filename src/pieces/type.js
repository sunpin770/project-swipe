import { Color } from 'excalibur';
import { Piece } from './piece.js';
export class Kai extends Piece {
    constructor(x, y, name, pos) {
        super(x, y, name, Color.fromHex('#FFA500'), pos);
    };
};
export class Sakal extends Piece {
    constructor(x, y, name, pos) {
        super(x, y, name, Color.fromHex('#FF0000'), pos);
    };
};
export class Rui extends Piece {
    constructor(x, y, name, pos) {
        super(x, y, name, Color.fromHex('#008000'), pos);
    };
};
export class Jar extends Piece {
    constructor(x, y, name, pos) {
        super(x, y, name, Color.fromHex('#FFFFFF'), pos);
    };
};
export class Plumoni extends Piece {
    constructor(x, y, name, pos) {
        super(x, y, name, Color.fromHex('#FFFF00'), pos);
    };
};
export class Mras extends Piece {
    constructor(x, y, name, pos) {
        super(x, y, name, Color.fromHex('#0000ff'), pos);
    };
};
export class Khyii extends Piece {
    constructor(x, y, name, pos) {
        super(x, y, name, Color.fromHex('#800080'), pos);
    };
};
export class Tyern extends Piece {
    constructor(x, y, name, pos) {
        super(x, y, name, Color.fromHex('#Ff007f'), pos);
    };
};
