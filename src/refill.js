import { player1, player2, player3, player4 } from "./players.js"
import { map } from "./map.js"
import { vec } from "excalibur"
import { stealRandomFromArray } from "./utils.js"
export function refill(game) {
    let i = 1
    Object.values(map).forEach(m => {
        if (i < 4) { //so player1's turn
            let b = stealRandomFromArray(player1.pouch.has, player1.pouch.lost);
            game.add(b);
            b.pos = m;
        }
        else if (i < 7) {
            let b = stealRandomFromArray(player2.pouch.has, []);
            b.pos = m;
            game.add(b)
        }
        else if (i < 10) {
            let b = stealRandomFromArray(player3.pouch.has, []);
            b.pos = m;
            game.add(b)
        }
        else {
            let b = stealRandomFromArray(player4.pouch.has, []);
            b.pos = m;
            game.add(b)
        };
        i++
    });
}
  