/**
 * @module huyutility
 */

/**
 * Валидация енота, проверяет определённые параметры енота на предмет превышения значений
 * И выхода их за пределы описанных нами возможностей енота.
 * @param {Enot} enot 
 * @returns {Enot}
 */
function val(enot) {
    if (enot.energy < 0) {
        enot.energy = 0;
    }
    if (enot.energy > 100) {
        enot.energy = 100;
    }
    if (enot.insult > 6) {
        enot.insult = 6;
    }
    if (enot.insult < 0) {
        enot.insult = 0;
    }
    return enot;
}
/**
 * Функция клонирования объекта
 * @param {Object} obj 
 * @returns {Object}
 */
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Генерация случайного числа в указанном диапазоне
 * @param {Number} min Минимальное значение (включительно)
 * @param {Number} max Максимальное значение (не включительно)
 * @returns {Number}
 */
function erondondon(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/////////////////////////exports//////////////////////////////

module.exports = {
    val: val,
    clone: clone,
    erondondon: erondondon
};