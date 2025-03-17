import { player1, player2, player3, player4 } from "./players.js"
import { map } from "./map.js"
import { stealRandomFromArray } from "./utils.js"
export function refill() {
    i = 12
    for (m in map) {
        if (i < 4) { //so player1's turn
            let b = stealRandomFromArray(player1.pouch.has, []);
            b.loc = m;
            this.add(b)
        }
        else if (i < 7) {
            let b = stealRandomFromArray(player2.pouch.has, []);
            b.loc = m;
            this.add(b)
        }
        else if (i < 10) {
            let b = stealRandomFromArray(player3.pouch.has, []);
            b.loc = m;
            this.add(b)
        }
        else {
            let b = stealRandomFromArray(player4.pouch.has, []);
            b.loc = m;
            this.add(b)
        }
    }
}