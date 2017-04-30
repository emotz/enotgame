import Vue from 'vue';
import app from '../components/eg-enot.vue';
import engine from '../../game/lib/huyengine.js';
import front from './front-enot.js';

let lunch_buy = engine.lunch_buy;
let lunch_feed = engine.lunch_feed;
let lunch_play = engine.lunch_play;
let lunch_wait = engine.lunch_wait;
let init = engine.init;
let compare = engine.compare;
let comres = engine.comres;

let numToStr = front.numToStr;
let strToNum = front.strToNum;

export {
    lunch_buy,
    lunch_feed,
    lunch_play,
    lunch_wait,
    init,
    compare,
    comres,
    strToNum,
    numToStr
}

new Vue(app).$mount('#app');
