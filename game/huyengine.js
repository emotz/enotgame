let huynot = require('./enot.js');
let enot_buy = huynot.enot_buy;
let enot_play = huynot.enot_play;
let enot_wait = huynot.enot_wait;
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
 * @name world
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


/**
 * Запуск функции enot_buy.
 * @param {object} environment Обьект содержащий информацию о текущем окружении енота(таком как время и так далее) 
 * @param {integer} min_age Минимальный возраст енота(должен быть указан пользователем, поидее)
 * @param {integer} max_age Максимальный возрас енота (должен быть указан юзверем...нно это не точно)
 */
function lunch_buy(environment,min_age, max_age) {
    return enot_buy(min_age, max_age);
}
/**
 * Запуск функции enot_feed.
 * @param {object} world Обьект содержащий два встроеных обьекста, с информацие об окружении енота, и самом еноте с которым мы взаимодействуем.
 */
function lunch_feed(world) {
        let res = {};
        res.environment = clone(world.environment);
        let newnot = enot_feed(world.enot);
        res.environment.time = world.environment.time+newnot.cooldown;
        newnot.cooldown = 0;
        res.enot = newnot;
        return res;
}
/**
 * Запуск функции enot_play.
 * @param {object} world 
 */
function lunch_play(world){
    let res = {};
    res.environment = clone(world.environment);
    let newnot = enot_play(world.enot);
    res.environment.time = world.environment.time+newnot.cooldown;
    newnot.cooldown = 0;
    res.enot = newnot;
    return res;
}
/**
 * запуск функции enot_wait
 * @param {object} world 
 * @param {integer} timetowait время ожидания, в течении которого с енотом могут проиходить всякие ништяки, должно указываться ппользователем. 
 */
function lunch_wait(world,timetowait){
    let res = {};
    res.environment = clone(world.environment);
    let newnot = enot_wait(world,timetowait);
    res.environment.time = world.environment.time + timetowait;
    let i = newnot.length;
    res.enot = newnot[i-1].resultenot;
    return res;
}

//////////////////////////////////exports//////////////////////////////
module.exports = {
    lunch_buy: lunch_buy,
    lunch_feed: lunch_feed,
    lunch_play: lunch_play,
    lunch_wait: lunch_wait
};