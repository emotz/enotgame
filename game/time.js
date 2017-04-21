/**
 * Функция проверки времени на предмет времени суток с 0 до 12 считается днем.
 * @param {Integer} time
 * @returns {Boolean} 
 */
function is_daytime(time) {
    if (time % 24 <= 12) { return true; }
    else { return false; }
}

/**
 * Функция проверки времени на предмет времени суток с 12 до 24 считается ночью.
 * @param {Integer} time 
 * @returns {Boolean}
 */
function is_nighttime(time) {
    if (time % 24 > 12) { return true; }
    else { return false; }
}


//////////////////////////////////////////////////////exports//////////////////////////////

module.exports = {
    is_daytime: is_daytime,
    is_nighttime: is_nighttime
};

