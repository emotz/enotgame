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
            this.world = engine.lunch_feed(this.world);
        },
        enot_play: function () {
            this.world = engine.lunch_play(this.world);
        },
        enot_wait: function () {
            this.world = engine.lunch_wait(this.world, this.ttw);
            this.ttw = 1;
        },
        ttw_control: function () {
            if (this.ttw < 1) this.ttw = 1;
        },
    },
    watch: {
        world(new_val, old_val) {
            this.comres = engine.comres(engine.compare(old_val.enot, new_val.enot));
        },
    },
    computed: {
        enot_to_display: function () {
            const res = {};
            for (const i in this.world.enot) {
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
