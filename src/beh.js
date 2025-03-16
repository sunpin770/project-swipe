import { Kai } from "./type.js";
export class Pouch {
    constructor() {
        this.has = [];
        this.lost = [];
        for (let i = 0; i < 8; i++) {
            this.has.push(new Kai(0, 0, 0, 0));
        }
          
    }
}
/* Each pouch gets:
8 sakal (base damage, spread, right)
8 kai (base healing, pain, left)
6 m'ras (conjoining, varies, self)
8 rui (reordering, protecting, random opponent)
4 j'ar (high base damage, extra damage, accross)
4 khyii (created spell manipulation/casting, same, right or left)
6 plumoni (random damage, locates clusters, random two opponents)
4 tyer'n (adding chips/spinning wheel, same, bubbling)
*/