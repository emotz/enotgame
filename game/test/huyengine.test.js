let engine = require('../lib/huyengine.js');
let lunch_buy = engine.lunch_buy;
let lunch_feed = engine.lunch_feed;
let lunch_wait = engine.lunch_wait;
let lunch_play = engine.lunch_play;

let utility = require('../lib/huyutility.js');
let val = utility.val;
let clone = utility.clone;
let erondondon = utility.erondondon;

let huynot = require('../lib/enot.js');
let enot_buy = huynot.enot_buy;
let enot_play = huynot.enot_play;
let enot_feed = huynot.enot_feed;
let compare = huynot.compare;
let comres = huynot.comres;
let eq = huynot.private.eq;
let interp = huynot.private.interp;

let testhelper = require('./testhelper.js');
let testo = testhelper.testo;
///////////////////////////////////////////////////////////////////////////////////////////////////////////

function init_world() {
    let rnjesus = erondondon(1, 7);
    let res = {
        environment: { time: 11 },
        enot: enot_buy(1, rnjesus)
    };
    return res;
}

it('testlunchbuy', function() {
    for (let i = 0; i < 5; i++) {
        let world = init_world();
        let res = lunch_buy(world, 1, erondondon(2, 10));
        testo(res !== undefined, res);
    }
});

it('testlunchplay', function() {
    for (let i = 0; i < 5; i++) {
        let world = init_world();
        let res = lunch_play(world);
        testo(res !== undefined, res);
    }
});

it('testlunchfeed', function() {
    for (let i = 0; i < 5; i++) {
        let world = init_world();
        let res = lunch_feed(world);
        testo(res.enot.hungry === 0, res);
    }
});

it('testlunchwait', function() {
    for (let i = 0; i < 5; i++) {
        let rnjesus = erondondon(1, 10);
        let world = init_world();
        let res = lunch_wait(world, rnjesus);
        testo(res.environment.time > world.environment.time);
    }
});


it('test lunch wait dva is sus 23', function() {
    for (let i = 0; i < 5; i++) {
        let rnjesus = erondondon(1, 10);
        let world = init_world();
        let res = lunch_wait(world, rnjesus);
        testo(res.enot.energy !== undefined && !isNaN(res.enot.energy), res);
    }
});

