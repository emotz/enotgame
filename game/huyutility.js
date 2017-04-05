function val(enot) {
    if (enot.energy < 0) { enot.energy = 0; }
    if (enot.energy > 100) { enot.energy = 100; }
    if (enot.insult > 6) { enot.insult = 6; }
    if (enot.insult < 0) { enot.insult = 0; }
    return enot;
}

function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
}


function erondondon(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
/////////////////////exports////////////////////////////
module.exports = {
    val: val,
    clone: clone,
    erondondon: erondondon
};