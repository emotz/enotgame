function testo(bool, enot) {
    if (bool === true) { console.log('пасет'); }
    else {
        if (enot !== undefined) { console.log(enot); }
        else { console.log('сАсет'); }
        throw new Error("сасет");
    }
}

///////////////////////////////////////////////exports////////////////////////////////////

module.exports = {
    testo : testo
};