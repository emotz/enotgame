var insult = ['енот в коме', 'необижен', 'обижен', 'очень обижен', 'ОБИДАЕБАНАЯ', '"ой, всё!"', 'БОМБИТ!!11!!!'];
var personality = ['спокойный характер', 'беспокойный характер', 'жутко кипешной характер'];

function numToStr(enot) {
    var res = {};
    res.age = enot.age;
    res.energy = enot.energy;

    if (enot.hungry == 1)
        res.hungry = 'голоден';
    else
        res.hungry = 'не голоден';

    res.personality = personality[enot.personality];
    res.insult = insult[enot.insult];
    return res;
}

function strToNum(enot) {
    var res = {};
    res.age = enot.age;
    res.energy = enot.energy;

    if (enot.hungry == 'голоден')
        res.hungry = 1;
    else
        res.hungry = 0;

    res.personality = personality.indexOf(enot.personality);
    res.insult = insult.indexOf(enot.insult);

    return res;
}
export {
    numToStr, strToNum
}