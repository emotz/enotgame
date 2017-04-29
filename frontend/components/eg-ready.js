export default {
    props: ['enot'],
    data: function () {
        return {
            comres: ['Вы купили енота'],
            world: this.enot,
            new_world: {}
        }
    },
    methods: {
        enot_feed: function () {
            this.world.enot = strToNum(this.world.enot);
            this.new_world = engine.lunch_feed(this.world);
            this.comres = engine.comres(engine.compare(this.world.enot, this.new_world.enot));
            this.world.enot = numToStr(this.new_world.enot);
            this.world.environment = this.new_world.environment;
        },
        enot_play: function () {
            this.world.enot = strToNum(this.world.enot);
            this.new_world = engine.lunch_play(this.world);
            this.comres = engine.comres(engine.compare(this.world.enot, this.new_world.enot));
            this.world.enot = numToStr(this.new_world.enot);
            this.world.environment = this.new_world.environment;
        },
        create: function () {
            this.$emit('create');
        },
    }

}