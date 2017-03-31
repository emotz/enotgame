let huynot = require('./enot.js');
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


let timeenv = require('./time.js');
let is_daytime = timeenv.is_daytime;
let is_nighttime = timeenv.is_nighttime;


/**
 * @name jopa
 * @property environment
 * @property enot
 */


/**
 * @name environment
 * @property {Number} time
 * Время нашей енотовой планеты, оно неизменно мы над ним невластны.мы ваще все дно.
 * кто мы?зачем мыздесь?какова цель нашего бесполезного существования, ладно пойду бухну.
 * @example
 * let environment = {
 * time = 13
 * }
 */
function init() {
    let environment = {};
    environment.time = 0;
    return environment;
}

function lunch_buy(environment,min_age, max_age) {
    return enot_buy(min_age, max_age);
}

function lunch_feed(enot) {
        let res = {};
        let newnot = enot_feed(enot);
        environment.time = environment.time+newnot.cooldown;
        newnot.cooldown = 0;
        res.enot = newnot;
        res.environment = environment;
        return res;
}

function lunch_play(enot, time){
    let res = {};
    let newnot = enot_play(enot);
    environment.time = environment.time+newnot.cooldown;
    newnot.cooldown = 0;
    res.enot = newnot;
    res.environment = environment;
    return res;
}