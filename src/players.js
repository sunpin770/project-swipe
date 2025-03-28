import { Pouch } from "./pouch.js"
class Player {
    constructor(owner) {
        this.pouch = new Pouch(owner);
    }
};
export let player1;
export let player2;
export let player3;
export let player4;

player1 = new Player(player1);
player2 = new Player(player2);
player3 = new Player(player3);
player4 = new Player(player4);