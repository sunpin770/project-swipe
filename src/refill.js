import { player1, player2, player3, player4 } from "./players.js"
import { map } from "./map.js"
import { stealRandomFromArray } from "./utils.js"
export function refill(game) {
    let i = 1
    Object.values(map).forEach(m => {
        if (i < 4) { //so player1's turn
            let b = stealRandomFromArray(player1.pouch.has, player1.pouch.lost);
            game.add(b);
            b.pos = m;
        }
        else if (i == 4 || i == 6 || i == 8) {
            let b = stealRandomFromArray(player2.pouch.has, player2.pouch.lost);
            b.pos = m;
            game.add(b)
        }
        else if (i > 9) {
            let b = stealRandomFromArray(player3.pouch.has, player3.pouch.lost);
            b.pos = m;
            game.add(b)
        }
        else if (i == 5 || i == 7 || i == 9) {
            let b = stealRandomFromArray(player4.pouch.has, player4.pouch.lost);
            b.pos = m;
            game.add(b)
        };
        i++
    });
}
  