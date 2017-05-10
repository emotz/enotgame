import engine from 'game/huyengine.js';
import { numToStr } from '../front-enot.js';
import time from 'game/time.js';
export default {
    props: ['initworld'],
    data: function () {
        return {
            comres: ['Вы купили енота'],
            ttw: 1,
            world: this.initworld,
        };
    },
    methods: {
        enot_feed: function () {
            let tmp_world = engine.lunch_feed(this.world);
            this.comres = engine.comres(engine.compare(this.world.enot, tmp_world.enot));
            this.world = tmp_world;
        },
        enot_play: function () {
            let tmp_world = engine.lunch_play(this.world);
            this.comres = engine.comres(engine.compare(this.world.enot, tmp_world.enot));
            this.world = tmp_world;
        },
        enot_wait: function () {
            let tmp_world = engine.lunch_wait(this.world, this.ttw);
            this.ttw = 1;
            this.comres = engine.comres(engine.compare(this.world.enot, tmp_world.enot));
            this.world = tmp_world;
        },
        ttw_control: function () {
            if (this.ttw < 1) this.ttw = 1;
        },
    },
    computed: {
        enot_to_display: function () {
            let res = {};
            for (let i in this.world.enot) {
                if (i === 'cooldown') continue;
                res[i] = this.world.enot[i];
            }
            return numToStr(res);
        },
        nighttime: function () {
            return time.is_nighttime(this.world.environment.time);
        },
    },
};