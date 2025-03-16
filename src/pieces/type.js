import { Color } from 'excalibur';
import { Piece } from './piece.js';
export class Kai extends Piece {
    constructor(x, y, name) {
        super(x, y, name, Color.fromHex('#FFA500'));
    };
};
export class Sakal extends Piece {
    constructor(x, y, name) {
        super(x, y, name, Color.fromHex('#FF0000'));
    };
};
export class Rui extends Piece {
    constructor(x, y, name) {
        super(x, y, name, Color.fromHex('#008000'));
    };
};
export class Jar extends Piece {
    constructor(x, y, name) {
        super(x, y, name, Color.fromHex('#FFFFFF'));
    };
};
export class Plumoni extends Piece {
    constructor(x, y, name) {
        super(x, y, name, Color.fromHex('#FFFF00'));
    };
};
export class Mras extends Piece {
    constructor(x, y, name) {
        super(x, y, name, Color.fromHex('#0000ff'));
    };
};
export class Khyii extends Piece {
    constructor(x, y, name) {
        super(x, y, name, Color.fromHex('#800080'));
    };
};
export class Tyern extends Piece {
    constructor(x, y, name) {
        super(x, y, name, Color.fromHex('#Ff007f'));
    };
};
