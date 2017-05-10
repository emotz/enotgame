export default {
    data: function () {
        return { min_age: 1, max_age: 2 };
    },
    methods: {
        enot_buy: function () {
            this.$emit('enot-buy', { max: this.max_age, min: this.min_age });
        },
    },
    watch: {
        min_age: function (val) {
            if (val < 1) this.min_age = 1;
            if (val >= this.max_age) this.max_age = val + 1;
        },
        max_age: function (val) {
            if (val <= this.min_age)
                this.min_age = val - 1;
        },
    },
};