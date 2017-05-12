import eg_create from './eg-create.vue';
import eg_ready from './eg-ready.vue';
import engine from 'game/huyengine.js';
export default {
    data: function() {
        return {
            current: 'create',
            world: {},
        };
    },
    components: {
        'eg-create': eg_create,
        'eg-ready': eg_ready,
    },
    methods: {
        enot_buy: function(age) {
            this.world = engine.init();
            this.world = engine.lunch_buy(this.world, age.min, age.max);
            this.current = 'ready';
        },
    },
};
