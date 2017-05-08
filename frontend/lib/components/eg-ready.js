export default {
    props: ['initworld'],
    data: function () {
        return {
            comres: ['Вы купили енота'],
            ttw: 1,
            world: this.initworld,
            new_world: {},
        }
    },
    methods: {
        enot_feed: function () {
            this.new_world = engine.lunch_feed(this.world);
            this.comres = engine.comres(engine.compare(this.world.enot, this.new_world.enot));
            this.world.enot = this.new_world.enot
            this.world.environment = this.new_world.environment;
        },
        enot_play: function () {
            this.new_world = engine.lunch_play(this.world);
            this.comres = engine.comres(engine.compare(this.world.enot, this.new_world.enot));
            this.world.enot = this.new_world.enot
            this.world.environment = this.new_world.environment;
        },
        enot_wait: function () {
            this.new_world = engine.lunch_wait(this.world, this.ttw);
            this.ttw = 1;
            this.comres = engine.comres(engine.compare(this.world.enot, this.new_world.enot));
            this.world.enot = this.new_world.enot
            this.world.environment = this.new_world.environment;
        },
        create: function () {
            this.$emit('create');
        },
        ttw_control: function () {
            if (this.ttw < 1) this.ttw = 1;
        }
    },
    computed: {
        enot: function () {
            let res = {};
            for (let i in this.world.enot) {
                if (i === 'cooldown') continue;
                res[i] = this.world.enot[i];
            }
            return engine.numToStr(res);
        }
    }

}