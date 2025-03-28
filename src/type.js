import { Color } from 'excalibur';
import { Piece } from './piece.js';
export class Kai extends Piece {
    constructor(x, y, name, pos, owner) {
        super(x, y, name, Color.fromHex('#FFA500'), pos, owner);
    };
};
export class Sakal extends Piece {
    constructor(x, y, name, pos, owner) {
        super(x, y, name, Color.fromHex('#FF0000'), pos, owner);
    };
};
export class Rui extends Piece {
    constructor(x, y, name, pos,owner) {
        super(x, y, name, Color.fromHex('#008000'), pos, owner);
    };
};
export class Jar extends Piece {
    constructor(x, y, name, pos, owner) {
        super(x, y, name, Color.fromHex('#FFFFFF'), pos, owner);
    };
};
export class Plumoni extends Piece {
    constructor(x, y, name, pos, owner) {
        super(x, y, name, Color.fromHex('#FFFF00'), pos, owner);
    };
};
export class Mras extends Piece {
    constructor(x, y, name, pos, owner) {
        super(x, y, name, Color.fromHex('#0000ff'), pos, owner);
    };
};
export class Khyii extends Piece {
    constructor(x, y, name, pos, owner) {
        super(x, y, name, Color.fromHex('#800080'), pos, owner);
    };
};
export class Tyern extends Piece {
    constructor(x, y, name, pos, owner) {
        super(x, y, name, Color.fromHex('#Ff007f'), pos, owner);
    };
};
