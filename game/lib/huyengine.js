/**
 * @module huyengine
 */

/**
 * @typedef {Object} World
 * @property {Environment} environment
 * @property {module:enot~Enot} enot
 */

/**
 * Содержит информацию о текущем окружении енота (таком как время).
 * @typedef {Object} Environment
 * @property {Number} time
 * Время нашей енотовой планеты, оно неизменно, мы над ним невластны. Мы ваще все дно.
 * Кто мы? Зачем мы здесь? Какова цель нашего бесполезного существования? Ладно пойду бухну.
 * @example
 * let environment = {
 *   time = 13
 * };
 */

let huynot = require('./enot.js');
let enot_buy = huynot.enot_buy;
let enot_play = huynot.enot_play;
let enot_wait = huynot.enot_wait;
let enot_feed = huynot.enot_feed;
let compare = huynot.compare;
let comres = huynot.comres;

let huyutility = require('../lib/huyutility.js');
let clone = huyutility.clone;
let erondondon = huyutility.erondondon;
let val = huyutility.val;

let timeenv = require('./time.js');
let is_daytime = timeenv.is_daytime;
let is_nighttime = timeenv.is_nighttime;

/**
 * Инициализирует мир, устанавливает время на 0 значение.
 * @returns {World}
 */
function init() {
    return {
        enot: undefined,
        environment: {
            time: 0
        }
    };
}

/**
 * Запускает функцию {@link module:enot~enot_buy}.
 * @param {World} world
 * @param {Number} min_age Минимальный возраст енота (должен быть указан пользователем, по идее)
 * @param {Number} max_age Максимальный возрас енота не включительно (должен быть указан юзверем...нно это не точно)
 * @returns {World}
 */
function lunch_buy(world, min_age, max_age) {
    return {
        enot: enot_buy(min_age, max_age),
        environment: clone(world.environment)
    };
}

/**
 * Запускает функцию {@link module:enot~enot_feed}.
 * @param {World} world
 * @returns {World} Не изменяет world, а создает новый.
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
 * Запускает функцию {@link module:enot~enot_play}.
 * @param {World} world 
 * @returns {World} Не изменяет world, а создает новый.
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
 * Запускает функцию {@link module:enot~enot_wait}.
 * @param {World} world 
 * @param {Number} timetowait Время ожидания (число минут), в течение которого с енотом могут проиходить всякие ништяки; должно указываться пользователем. 
 * @returns {World} Не изменяет world, а создает новый.
 */
function lunch_wait(world, timetowait) {
    let res = {};
    res.environment = clone(world.environment);
    let newnot = enot_wait(world, timetowait);
    res.environment.time = world.environment.time + timetowait;
    let i = newnot.length;
    if (i > 0) {
        res.enot = newnot[i - 1].resultEnot;
    } else {
        res.enot = clone(world.enot);
    }
    return res;
}

/////////////////////////exports//////////////////////////////

module.exports = {
    lunch_buy: lunch_buy,
    lunch_feed: lunch_feed,
    lunch_play: lunch_play,
    lunch_wait: lunch_wait,
    init: init,
    compare,
    comres
};
