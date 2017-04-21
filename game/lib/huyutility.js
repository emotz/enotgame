/**
 * Валидация енота, проверяет определенные параметры енота на предмет превышения значений
 * И выхода их за пределы описаных нами возможностей енота.
 * @param {Enot} enot 
 */
function val(enot) {
    if (enot.energy < 0) { enot.energy = 0; }
    if (enot.energy > 100) { enot.energy = 100; }
    if (enot.insult > 6) { enot.insult = 6; }
    if (enot.insult < 0) { enot.insult = 0; }
    return enot;
}
/**
 * Функция клонирования обьекта
 * @param {Object} obj 
 */
function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Генерация случайного числа в указаном диапазоне
 * @param {Integer} min Минимальное значение
 * @param {Integer} max Максимальное значение
 * @returns {Integer}
 */
function erondondon(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/////////////////////exports////////////////////////////
module.exports = {
    val: val,
    clone: clone,
    erondondon: erondondon
};