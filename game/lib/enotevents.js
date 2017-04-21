let utility = require('./huyutility.js');
let val = utility.val;
let clone = utility.clone;
let erondondon = utility.erondondon;

/**
 * @typedef {Object} EnotEvent
 * @property {String} description
 * @property {function(Enot): Enot} action
 * @property {Number} prob_weight
 */

let enotevents = {
    wash: {
        description: 'енот нашел где ты прячешь свой телефон, помыл его и стал немного довольнее',
        action: wash,
        prob_weight: 20
    },
    selffeed: {
        description: 'енот нашел под кроватью пропавшую ранее печеньку и ликвидировал ее',
        action: selffeed,
        prob_weight: 50
    },
    starving: {
        description: 'енот увидел как жрешь и теперь тоже голоден',
        action: starving,
        prob_weight: 15
    },
    fight: {
        description: 'енот напал на тохину сестру и она больше его не заебывает, во время нападения енот устал и проголодался',
        action: fight,
        prob_weight: 100
    }
};

/**
 * Функция запуска события fight из обьекта enotevents.
 * По итогу выполнения функции енот проголодается, и потеряет 30 энергии, но зато наваляет тохиной сестре.
 * Вес вероятности происходения события.
 * @param {Enot} enot 
 * @returns {Enot}
 */
function fight(enot) {
    let res = clone(enot);
    res.hungry = 1;
    res.energy = res.energy - 30;
    return val(res);
}

/**
 * функция запуска события starving из enotevents.
 * По итогу выполнения функции енот станет голодным.
 * Вес вероятности происхождения события.
 * @param {Enot} enot 
 * @returns {Enot}
 */
function starving(enot) {
    let res = clone(enot);
    res.hungry = 1;
    return val(res);
}

/**
 * Функция запуска события selffeed из enotevents.
 * По итогу выполнения функции енот станет НЕголоден, и получит +10 к энергии.
 * Вес вероятности происхождения события.
 * @param {Enot} enot 
 * @returns {Enot}
 */
function selffeed(enot) {
    let res = clone(enot);
    res.hungry = 0;
    res.energy = res.energy + 10;
    return val(res);
}
/**
 * Функция запуска события wash из enotevents.
 * По итогу выолнения функции енот станет голоден, и его настроение улучшится на одно значение.
 * Вес вероятности происхождения события.
 * @param {Enot} enot 
 * @returns {Enot}
 */
function wash(enot) {
    let res = clone(enot);
    res.insult--;
    res.hungry = 1;
    return val(res);
}

/**
 * Функция выбора события.
 * Работает по принципу выбрасывания рандомного числа в диапазоне, где минимальное значение 1,А максимальное это общая сумма всех 
 * параметров prob_weight из обьекта enotevents.
 * @returns {EnotEvent} 
 * @throws {Error} Вообщето эта ошибка не должна никогда выпадать, но ДИМАС мэйд ми ду ит.
 */
function choosevent() {
    let totalprob = 0;
    for (let event in enotevents) {
        totalprob = totalprob + enotevents[event].prob_weight;
    }
    let rnjesus = erondondon(1, totalprob);
    for (let event in enotevents) {
        if (enotevents[event].prob_weight > rnjesus) {
            return enotevents[event];
        }
        else rnjesus = rnjesus - enotevents[event].prob_weight;
    }
    throw new Error('всегда должен быть ивент');
}


//////////////////////////////////////////////////////////////////////////////exports///////////////////////////////////////////////////////////////
module.exports = {
    choosevent: choosevent
};