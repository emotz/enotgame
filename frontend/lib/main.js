import Vue from 'vue';
import app from '../components/eg-enot.vue';
import {numToStr} from './front-enot.js';
import engine from 'game/huyengine.js';

let lunch_buy = engine.lunch_buy;
let lunch_feed = engine.lunch_feed;
let lunch_play = engine.lunch_play;
let lunch_wait = engine.lunch_wait;
let init = engine.init;
let compare = engine.compare;
let comres = engine.comres;

export {
    lunch_buy,
    lunch_feed,
    lunch_play,
    lunch_wait,
    init,
    compare,
    comres,
    numToStr
}

new Vue(app).$mount('#app');
