/**
 * @module enotevents
 */

/**
 * @typedef {Object} EnotEvent
 * @property {String} description
 * @property {function(Enot): Enot} action
 * @property {Number} prob_weight Вес вероятности события.
 */

let utility = require('./huyutility.js');
let val = utility.val;
let clone = utility.clone;
let erondondon = utility.erondondon;

/**
 * Содержит события, которые могут произойти с енотом.
 * @var
 */
let enotevents = {
    wash: {
        description: 'енот нашёл где ты прячешь свой телефон, помыл его и стал немного довольнее',
        action: wash,
        prob_weight: 20
    },
    selffeed: {
        description: 'енот нашёл под кроватью пропавшую ранее печеньку и ликвидировал ее',
        action: selffeed,
        prob_weight: 50
    },
    starving: {
        description: 'енот увидел как жрёшь и теперь тоже голоден',
        action: starving,
        prob_weight: 15
    },
    fight: {
        description: 'енот напал на Тохину сестру и она больше его не заёбывает, во время нападения енот устал и проголодался',
        action: fight,
        prob_weight: 100
    }
};

/**
 * Запускает событие <code>fight</code>.
 * По итогу выполнения функции енот проголодается и потеряет 30 энергии, но зато наваляет Тохиной сестре.
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
 * Запускает событие <code>starving</code>.
 * По итогу выполнения функции енот станет голодным.
 * @param {Enot} enot 
 * @returns {Enot}
 */
function starving(enot) {
    let res = clone(enot);
    res.hungry = 1;
    return val(res);
}

/**
 * Запускает событие <code>selffeed</code>.
 * По итогу выполнения функции енот станет НЕ голоден и получит +10 к энергии.
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
 * Запускает событие <code>wash</code>.
 * По итогу выполнения функции енот станет голоден, и его настроение улучшится на одно значение.
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
 * Выбирает одно из событий случайным образом, учитывая их веса.
 * Работает по принципу выбрасывания рандомного числа в диапазоне, где минимальное значение 1, а максимальное это общая сумма всех 
 * свойств prob_weight из объекта {@link module:enotevents~enotevents}.
 * @returns {EnotEvent} 
 * @throws {Error} Вообще-то эта ошибка не должна никогда выпадать, но ДИМАС мэйд ми ду ит.
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
        } else rnjesus = rnjesus - enotevents[event].prob_weight;
    }
    throw new Error('всегда должен быть ивент');
}

/////////////////////////exports//////////////////////////////

module.exports = {
    choosevent: choosevent
};