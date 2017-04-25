var engine =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * @module huyutility
 */

/**
 * Валидация енота, проверяет определенные параметры енота на предмет превышения значений
 * И выхода их за пределы описаных нами возможностей енота.
 * @param {Enot} enot 
 * @returns {Enot}
 */
function val(enot) {
    if (enot.energy < 0) { enot.energy = 0; }
    if (enot.energy > 100) { enot.energy = 100; }
    if (enot.insult > 6) { enot.insult = 6; }
    if (enot.insult < 0) { enot.insult = 0; }
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
 * Генерация случайного числа в указаном диапазоне
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * @module time
 */

/**
 * Проверяет время на предмет времени суток, с 0 до 12 считается днем.
 * @param {Number} time Число минут
 * @returns {Boolean} 
 */
function is_daytime(time) {
    if (time % 24 <= 12) { return true; }
    else { return false; }
}

/**
 * Проверяет время на предмет времени суток, с 12 до 24 считается ночью.
 * @param {Number} time Число минут
 * @returns {Boolean}
 */
function is_nighttime(time) {
    if (time % 24 > 12) { return true; }
    else { return false; }
}

/////////////////////////exports//////////////////////////////

module.exports = {
    is_daytime: is_daytime,
    is_nighttime: is_nighttime
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module enot
 */

/**
 * @typedef {Object} Enot
 * @property {Number} age          
 * Возраст енота (в годах).
 * @property {Number} energy       
 * Энергия енота (может меняться от 0 до 100 включительно).
 * @property {Number} hungry      
 * Голоден ли енот (0 если голоден, 1 если нет, но это не точно).
 * @property {Number} insult 
 * Степень обиженности енота. Может принимать одно из 
 * значений от 0 до 6.
 * @property {Number} cooldown
 * Время в течении которого енота нельзя кантовать.
 * @property {Number} personality
 * Характер енота. Может принимать одно из значений 0, 1, 2. 
 * 0 означает спокойный характер, 1 - беспокойный характер, 2 - жутко кипешной характер.
 * @example 
 * let enot = {
 *   age: 3,
 *   energy: 76,
 *   hungry: 1,
 *   insult: 2,
 *   cooldown: 0,
 *   personality: 2
 * }
 */

/**
 * @typedef {Object} ComparEnot
 * @property {Number} age          
 * @property {Number} energy       
 * @property {Number} hungry      
 * @property {Number} insult 
 * @property {Number} cooldown
 * @property {Number} personality
 */

let enotevents = __webpack_require__(3);
let timeenv = __webpack_require__(1);
let is_daytime = timeenv.is_daytime;
let is_nighttime = timeenv.is_nighttime;
let utility = __webpack_require__(0);
let val = utility.val;
let clone = utility.clone;
let erondondon = utility.erondondon;

/**
 * Переводит результат сравнения двух енотов в текстовые значения, но это не точно.
 * @param {ComparEnot} obj
 * @returns {String[]} Список изменений енотов в виде текста.
 */
function comres(obj) {
    let res = [];
    if (obj.age !== 0) { res.push(`Ваш енотик празднует день рождения!Не забудьте купить тортик!ведь он стал на ${obj.age} лет старше.`); }
    if (obj.energy !== 0 && obj.energy > 0) { res.push('Это ено энерджайзер!Его энергия растет и увеличивается на ' + obj.energy + ' очков.'); }
    if (obj.energy !== 0 && obj.energy < 0) { res.push('Ваш унылый енот стал еще унылее и потерял ' + obj.energy + ' энергии.'); }
    if (obj.hungry !== 0 && obj.hungry > 0) { res.push('Енот проголодался.'); }
    if (obj.hungry !== 0 && obj.hungry < 0) { res.push('Енот наелся.'); }
    if (obj.personality !== 0 && obj.personality > 0) { res.push('Енот в силу жизненных обсоятельств долго думал над своим поведением и стал еще более неадекватным.'); }
    if (obj.personality !== 0 && obj.personality < 0) { res.push('Енот в силу жизненных обсоятельств долго думал над своим поведением и стал менее неадекватным.'); }
    if (obj.insult !== 0 && obj.insult > 0) { res.push('Твой енот ненавидит тебя еще больше чем раньше. И думает разное о твоей маме! В следующий раз тебе стоит подумать дважды, прежде чем связываться с ним.'); }
    if (obj.insult !== 0 && obj.insult < 0) { res.push('Папочка енот доволен своим белым рабом, продолжай в тоже духе, и, возможно, он станет к тебе благосклонен.'); }
    if (obj.cooldown !== 0 && obj.cooldown > 0) { res.push('Енот устал и будет недоступен для дальнейшего теребоньканья в течение ' + obj.cooldown + ' времени.'); }
    if (obj.cooldown !== 0 && obj.cooldown < 0) { res.push('Енотик копит свои силы чтобы стать самураем!'); }
    return res;
}

/**
 * Вычисляет изменения двух енотов.
 * @param {Enot} enot 
 * @param {Enot} enotnew 
 * @returns {ComparEnot} Объект содержащий изменения енотов в цифровом виде, но это не точно.
 */
function compare(enot, enotnew) {
    let obj1 = enot;
    let obj2 = enotnew;
    let res = {};
    for (let prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            res[prop] = obj2[prop] - obj1[prop];
        }
        else { res[prop] = 0; }
    }
    return res;
}

/**
 * Сравнивает два енота; в случае несоответствия хотя бы одного параметра у двух переданых енотов, возвращает false.
 * @param {Enot} enot Сравниваемый енот номер раз.
 * @param {Enot} enotdva Сравниваемый енот номер дваз.
 * @returns {Boolean} 
 */
function eq(enot, enotdva) {
    if (enot.age !== enotdva.age) { return false; }
    if (enot.energy !== enotdva.energy) { return false; }
    if (enot.hungry !== enotdva.hungry) { return false; }
    if (enot.personality !== enotdva.personality) { return false; }
    if (enot.insult !== enotdva.insult) { return false; }
    if (enot.cooldown !== enotdva.cooldown) { return false; }
    return true;
}

/**
 * Покупка енота. Все, что мы можем указать - это диапазон возрастов енотов, среди которых
 * нам подберут енота. Если диапазон возраста меньше чем один
 * год, магазин не принимает запрос (возвращает ошибку).
 * Все остальные его параметры случайны, за исключением следующего правила:
 * Если нам попался енот со спокойным характером, то его начальный
 * уровень обиды (insult) - 0. В противном случае уровень обиды случайный но не равный нулю, и это неточно.
 * @param {Number} min_age Купленный енот будет не младше чем указанный возраст.
 * @param {Number} max_age Купленный енот будет не старше чем указанный возраст.
 * @returns {Enot|String} 
 * Свеженький, с пылу с жару, енот; либо строка с текстом 
 * ошибки, если енота купить не получилось (здесь могло бы 
 * быть выброшено исключение вместо строки с ошибкой).
 */
function enot_buy(min_age, max_age) {
    let res = {};
    if (min_age < 1 || min_age > max_age) { res = "Еггог: input parameters are not valid"; }
    else {
        res.age = erondondon(min_age, max_age);
        res.energy = erondondon(1, 100);
        res.hungry = erondondon(0, 2);
        res.personality = erondondon(0, 3);
        res.cooldown = 0;
        if (res.personality === 0) { res.insult = 0; }
        else { res.insult = erondondon(1, 7); }
    }
    return res;
}

/**
 * Кормежка енота. Подчиняется следующим правилам:
 * При попытке накормить голодного енота он становится неголодным, а уровень обиды 
 * понижается на 1 (напр. с 2 до 1).
 * При попытке накормить неголодного енота его уровень обиды вырастает на один, а у 
 * енотов с personality 2 - на 2.
 * В случае успешного кормления (т.е. если енот был голоден) его энергия увеличивается на 20.
 * @param {Enot} enot 
 * @returns {Enot} Функция не меняет изначального енота, а создает нового.
 */
function enot_feed(enot) {
    if (is_nighttime()) { return clone(enot); }
    let res = {};
    res.age = enot.age;
    res.personality = enot.personality;
    if (enot.hungry === 1) {
        res.hungry = 0;
        res.energy = enot.energy + 20;
        res.insult = enot.insult - 1;
    }
    else {
        res.hungry = 0;
        res.energy = enot.energy;
        res.insult = enot.insult + 1;
        if (enot.personality === 2) { res.insult++; }
    }
    res.cooldown = 5;
    return val(res);
}

/**
 * Поиграть с енотом. Подчиняется следующим правилам:
 * При попытке поиграть с енотом со спокойным характером его уровень обиды понижается
 * на 1.
 * При попытке поиграть с енотом с беспокойным характером его уровень обиды 
 * либо понизится, либо останется неизменным с 50% вероятностью.
 * При попытке поиграть с жутко кипешным енотом его уровень обиды 
 * либо понизится, либо повысится с 50% вероятностью.
 * Любой енот после игры теряет 10 энергии и с 30% вероятностью становится голоден.
 * @param {Enot} enot 
 * @returns {Enot} Функция не меняет изначального енота, а создает нового.
 */
function enot_play(enot) {
    let res = clone(enot);
    if (res.personality === 0) {
        res.insult--;
    }
    else if (res.personality === 1) {
        if (erondondon(1, 100) <= 50) { res.insult--; }
        else { res.insult = res.insult; }
    }
    else if (res.personality === 2) {
        if (erondondon(1, 100) <= 50) { res.insult--; }
        else { res.insult++; }
    }
    if (erondondon(1, 100) <= 30) { res.hungry = 1; }
    else { res.hungry = res.hungry; }
    res.energy = res.energy - 10;
    if (is_daytime()) { res.cooldown = 10; }
    else { res.cooldown = 5; }
    return val(res);
}

/**
 * Енот в режиме ожидания.
 * В течении выбранного пользователем времени timetowait
 * енот находится в режиме ожидания, и каждую минуту с ним может произойти рандомное событие
 * события описаны в модуле enotevents.js.
 * вероятность происхождения события указана в разделе enotevents.
 * Результатом является массив с объектами, в каждом объекте первое значение-описание
 * @param {Enot} enot 
 * @param {Number} timetowait Количество минут для ожидания.
 * @return {Enot} Функция не меняет изначального енота, а создает нового.
 */
function enot_wait(enot, timetowait) {
    let res = [];
    let tmp = enot;
    for (let i = 0; i < timetowait; i++) {
        if (erondondon(1, 100) < 30) {
            let newevent = enotevents.choosevent();
            tmp = newevent.action(tmp);
            res.push({ event: newevent.description, resultEnot: tmp });
        }
    }
    return res;
}

/////////////////////////exports//////////////////////////////

module.exports = {
    enot_buy: enot_buy,
    enot_play: enot_play,
    enot_feed: enot_feed,
    enot_wait: enot_wait,
    compare: compare,
    comres: comres,
    private: {
        eq: eq
    }
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module enotevents
 */

/**
 * @typedef {Object} EnotEvent
 * @property {String} description
 * @property {function(Enot): Enot} action
 * @property {Number} prob_weight Вес вероятности события.
 */

let utility = __webpack_require__(0);
let val = utility.val;
let clone = utility.clone;
let erondondon = utility.erondondon;

/**
 * Contains events that can possibly happen with enot.
 * @var
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
 * Запускает событие <code>fight</code>.
 * По итогу выполнения функции енот проголодается и потеряет 30 энергии, но зато наваляет тохиной сестре.
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
 * По итогу выолнения функции енот станет голоден, и его настроение улучшится на одно значение.
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

/////////////////////////exports//////////////////////////////

module.exports = {
    choosevent: choosevent
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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

let huynot = __webpack_require__(2);
let enot_buy = huynot.enot_buy;
let enot_play = huynot.enot_play;
let enot_wait = huynot.enot_wait;
let enot_feed = huynot.enot_feed;
let compare = huynot.compare;
let comres = huynot.comres;

let huyutility = __webpack_require__(0);
let clone = huyutility.clone;
let erondondon = huyutility.erondondon;
let val = huyutility.val;

let timeenv = __webpack_require__(1);
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
        enrivonment: clone(world.environment)
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
    init: init
};


/***/ })
/******/ ]);