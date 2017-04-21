let huynot = require('../enot.js');
let enot_buy = huynot.enot_buy;
let enot_play = huynot.enot_play;
let enot_feed = huynot.enot_feed;
let compare = huynot.compare;
let comres = huynot.comres;
let clone = huynot.private.clone;
let eq = huynot.private.eq;
let interp = huynot.private.interp;
let erondondon = huynot.private.erondondon;
let val = huynot.private.val;
let testhelper = require('./testhelper.js');
let testo = testhelper.testo;
//////////////////////////////////////////////////////////////////////////////////////////////////////



it("testenotplay", function () {
    for (let i = 0; i < 3; i++) {
        let enot = enot_buy(1, 100);
        let clon = clone(enot);
        enot_play(clon);
        testo(clon.hungry !== undefined, enot);
    }
});



it("testenothungry", function () {
    let hungryenot = {
        age: 2,
        energy: 24,
        hungry: 0,
        personality: 3,
        insult: 1
    };
    let jopa = enot_play(enot_feed(hungryenot));
    testo(jopa.hungry !== undefined);
});

it("comparetest", function () {
    let enot1 = {
        age: 15,
        energy: 76,
        hungry: 1,
        personality: 3,
        insult: 2
    };
    let enot2 = {
        age: 15,
        energy: 71,
        hungry: 1,
        personality: 3,
        insult: 4
    };
    let expected = {
        age: 0,
        energy: -5,
        hungry: 0,
        personality: 0,
        insult: 2
    };
    testo(eq(compare(enot1, enot2), expected));
});