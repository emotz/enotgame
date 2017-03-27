/**
 * @file Библиотека для работы с енотами
 * @author НАДМОЗГ
 * @version 0.9.9.9.9d
 */

/**
 * @name Enot
 * @property {Number} age          
 * Возраст енота (в годах)
 * @property {Number} energy       
 * Энергия енота (может меняться от 0 до 100 включительно)
 * @property {number} hungry      
 * Голоден ли енот (0 если голоден, 1 если нет, но это не точно)
 * @property {number} insult 
 * Степень обиженности енота. Может принимать одно из 
 * значений от 0 до 6.
 * @property {Number} personality
 * Характер енота. Может принимать одно из значений 0, 1, 2. 
 * 0 означает спокойный характер, 1 - беспокойный характер, 2 - жутко кипешной характер.
 * @example 
 * let enot = {
 *   age: 3,
 *   energy: 76,
 *   hungry: 1,
 *   personality: 2,
 *   insult_level: 2
 * }
 */

const enotprops = ['age', 'energy', 'personality', 'insult', 'hungry'];

/**
 * Валидация изменяемых параметров енота, чтобы они не могли увеличиваться\уменьшаться бесконечно и всегда
 * были в рамках заданых значений.
 * @param {object} enot 
 * функция меняет текущего енота.
 */
function val(enot){
    if (enot.energy < 0){enot.energy = 0;}
    if (enot.energy >100){enot.energy = 100;}
    if (enot.insult > 5){enot.insult = 5;}
    if (enot.insult < 0){enot.insult = 0;}
}

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
/**
 * Переводит результат сравнения двух енотов в текстовые значения, но это не точно.
 * @param {ComparEnot} obj
 * @returns {string[]} список изменений енотов в виде текста.
 */
function comres(obj) {
    let res = [];
    if (obj.age !== 0) { res.push(`Ваш енотик празднует день рождения!Не забудьте купить тортик!ведь он стал на ${obj.age} лет старше`); }
    if (obj.energy !== 0 || obj.energy > 0) { res.push('Это ено энерджайзер!Его энергия растет и увеличивается на ' + obj.energy + ' очков'); }
    if (obj.energy !== 0 || obj.energy < 0) { res.push('Ваш унылый енот стал еще унылее и потерял ' + obj.energy + ' энергии'); }
    if (obj.hungry !== 0 || obj.hungry > 0) { res.push('енот проголодался'); }
    if (obj.hungry !== 0 || obj.hungry < 0) { res.push('енот наелся'); }
    if (obj.personality !== 0 || obj.personality > 0) { res.push('Енот в силу жизненных обсоятельств долго думал над своим поведением и стал еще более неадекватным'); }
    if (obj.personality !== 0 || obj.personality < 0) { res.push('Енот в силу жизненных обсоятельств долго думал над своим поведением и стал менее неадекватным'); }
    if (obj.insult !== 0 || obj.insult > 0) { res.push('твой енот ненавидит тебя еще больше чем раньше.и думае разное о твоей маме!в следующий раз тебе стоит подумать дважды прежде чем связываться с ним'); }
    if (obj.insult !== 0 || obj.insult < 0) { res.push('Папочка енот доволен своим белым рабом, продолжай в тоже духе и возможно он станет к тебе благосклонен'); }
    return res;
}

function erondondon(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Вычисляет изменения двух енотов.
 * @param {Enot} enot 
 * @param {Enot} enotnew 
 * @returns {ComparEnot} обьект содержащий изменения енотов в цифровом виде , но это не точно.
 */
function compare(enot, enotnew) {
    let obj1 = nart(enot);
    let obj2 = nart(enotnew);
    let res = {};
    for (let prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            res[prop] = obj2[prop] - obj1[prop];
        }
        else { res[prop] = 0; }
    }
    return res;
}

function eq(enot, enotdva) {
    if (enot.age !== enotdva.age) { return false; }
    if (enot.energy !== enotdva.energy) { return false; }
    if (enot.hungry !== enotdva.hungry) { return false; }
    if (enot.personality !== enotdva.personality) { return false; }
    if (enot.insult !== enotdva.insult) { return false; }
    return true;
}

/**
 * Покупка енота. Все, что мы можем указать - это диапазон возрастов енотов, среди которых
 * нам подберут енота. Если диапазон возраста меньше чем один
 * год, магазин не принимает запрос (возвращает ошибку).
 * Все остальные его параметры случайны, за исключением следующего правила:
 * Если нам попался енот со спокойным характером, то его начальный
 * уровень обиды (insult) - 0. В противном случае уровень обиды случайный.
 * @param {Number} min_age Купленный енот будет не младше чем указанный возраст
 * @param {Number} max_age Купленный енот будет не старше чем указанный возраст
 * @returns {Enot|String} 
 * Свеженький, с пылу с жару, енот; либо строка с текстом 
 * ошибки, если енота купить не получилось (здесь могло бы 
 * быть выброшено исключение вместо строки с ошибкой).
 */
function enot_buy(min_age, max_age) {
    let res = {};
    if (min_age < 1 || min_age > max_age) { res = "huy"; }
    else {
        res.age = erondondon(min_age, max_age);
        res.energy = erondondon(1, 100);
        res.hungry = erondondon(0, 2);
        res.personality = erondondon(1, 4);
        if (res.personality === 1) { res.insult = 1; }
        else { res.insult = erondondon(2, 4); }
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
 * функция не меняет изначального енота а создает нового.
 */
function enot_feed(enot) {
    let res = {};
    let age = enot.age;
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
        if (enot.personality === 3) { res.insult++; }
    }
    return res;
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
 * функция не меняет изначального енота, а создает нового.
 * @param {Enot} enot 
 */
function enot_play(enot) {
    if (enot.personality === 1) {
        enot.insult--;
    }
    else if (enot.personality === 2) {
        if (erondondon(1, 100) <= 50) { enot.insult--; }
        else { enot.insult = enot.insult; }
    }
    else if (enot.personality === 3) {
        if (erondondon(1, 100) <= 50) { enot.insult--; }
        else { enot.insult++; }
    }
    if (erondondon(1, 100) <= 30) { enot.hungry = 1; }
    else { enot.hungry = enot.hungry; }
    enot.energy = enot.energy - 10;
    return enot;
}
////////////////////////////////////////////////////////////////////////////exports///////////////////////////////////////////////////////////////////////////////////
module.exports = {
    enot_buy: enot_buy,
    enot_play: enot_play,
    enot_feed: enot_feed,
    compare: compare,
    comres: comres,
    private: {
        clone: clone,
        erondondon: erondondon,
        eq: eq,
        tran: tran,
        nart: nart
    }
};






