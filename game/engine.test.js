let engine = require('./huyengine.js');
let lunch_buy = engine.lunch_buy;
let lunch_feed = engine.lunch_feed;
let lunch_wait = engine.lunch_wait;
let lunch_play = engine.lunch_play;
let utility = require('./huyutility.js');
let val = utility.val;
let clone = utility.clone;
let erondondon = utility.erondondon;
let huynot = require('./enot.js');
let enot_buy = huynot.enot_buy;
let enot_play = huynot.enot_play;
let enot_feed = huynot.enot_feed;
let compare = huynot.compare;
let comres = huynot.comres;
let eq = huynot.private.eq;
let interp = huynot.private.interp;

///////////////////////////////////////////////////////////////////////////////////////////////////////////
function testo(bool, enot) {
    if (bool === true) { console.log('пасет'); }
    else {
        if (enot !== undefined) { console.log(enot); }
        else { console.log('сАсет'); }
        throw new Error("сасет");
    }
}


it('testlunchbuy', function () {
    let res = [];
    let environment = {
        time: 11
    };
    for (let i = 0; i < 5; i++) {
        res[i] = lunch_buy(erondondon, 1, erondondon);
        testo(res !== undefined, res[i]);
    }
});

it('testlunchplay', function () {
    let res = [];
    for (let i = 0; i < 5; i++) {
        let rnjesus = erondondon(1, 7);
        let world = {
            environment: { time: 11 },
            enot: enot_buy(1, rnjesus)
        };
        res = lunch_play(world);
        testo(res !== undefined, res[i]);
    }
});

it('testlunchfeed', function () {
    let res = [];
    for (let i = 0; i < 5; i++) {
        let rnjesus = erondondon(1, 10);
        let world = {
            environment: { time: 11 },
            enot: enot_buy(1, rnjesus)
        };
        res = lunch_feed(world);
        testo(res.enot.hungry === 0,res[i]);
    }
});

it('testlunchwait', function(){
    let res = [];
    for (let i=0;i<5;i++){
        let rnjesus = erondondon(1, 10);
         let world = {
            environment: { time: 11 },
            enot: enot_buy(1, rnjesus)
        };
        res = lunch_wait(world,rnjesus);
        testo (res.environment.time !== undefined);
    }
});