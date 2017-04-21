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
 * @typedef {Object} World
 * @property {Environment} environment
 * @property {Enot} enot
 */


/**
 * @typedef {Object} Environment
 * @property {Number} time
 * Время нашей енотовой планеты, оно неизменно мы над ним невластны.мы ваще все дно.
 * кто мы?зачем мыздесь?какова цель нашего бесполезного существования, ладно пойду бухну.
 * @example
 * let environment = {
 * time = 13
 * }
 */


/**
 * Функция инициализации мира, установление времени на 0 значение.
 * @returns {Environment}
 */
function init() {
    let environment = {};
    environment.time = 0;
    return environment;
}


/**
 * Запуск функции enot_buy.
 * @param {Environment} environment Обьект содержащий информацию о текущем окружении енота(таком как время и так далее) 
 * @param {Number} min_age Минимальный возраст енота(должен быть указан пользователем, поидее)
 * @param {Number} max_age Максимальный возрас енота не включительно (должен быть указан юзверем...нно это не точно)
 * @returns {World}
 */
function lunch_buy(environment, min_age, max_age) {
    return enot_buy(min_age, max_age);
}
/**
 * Запуск функции enot_feed.
 * @param {World} world Обьект содержащий два встроеных обьекста, с информацие об окружении енота, и самом еноте с которым мы взаимодействуем.
 * @returns {World}
 */
function lunch_feed(world) {
    let res = {};
    res.environment = clone(world.environment);
    let newnot = enot_feed(world.enot);
    res.environment.time = world.environment.time + newnot.cooldown;
    newnot.cooldown = 0;
    res.enot = newnot;
    return res;
}
/**
 * Запуск функции enot_play.
 * @param {World} world 
 * @returns {World}
 */
function lunch_play(world) {
    let res = {};
    res.environment = clone(world.environment);
    let newnot = enot_play(world.enot);
    res.environment.time = world.environment.time + newnot.cooldown;
    newnot.cooldown = 0;
    res.enot = newnot;
    return res;
}
/**
 * запуск функции enot_wait
 * @param {World} world 
 * @param {Integer} timetowait время ожидания, в течении которого с енотом могут проиходить всякие ништяки, должно указываться ппользователем. 
 * @returns {World}
 */
function lunch_wait(world, timetowait) {
    let res = {};
    res.environment = clone(world.environment);
    let newnot = enot_wait(world, timetowait);
    res.environment.time = world.environment.time + timetowait;
    let i = newnot.length;
    res.enot = newnot[i - 1].resultEnot;
    return res;
}

//////////////////////////////////exports//////////////////////////////
module.exports = {
    lunch_buy: lunch_buy,
    lunch_feed: lunch_feed,
    lunch_play: lunch_play,
    lunch_wait: lunch_wait
};