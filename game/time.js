function is_daytime(time){
    if (time % 24 <= 12) { return true; }
    else { return false; }
}
function is_nighttime(time){
    if (time % 24 > 12) { return true; }
    else { return false; }
}


//////////////////////////////////////////////////////exports//////////////////////////////

module.exports = {
        is_daytime: is_daytime,
        is_nighttime: is_nighttime
};

