export default {
    data: function () {
        return { min_age: 1, max_age: 2 }
    },
    methods: {
        enot_buy: function () {
            this.$emit('enot-buy', { max: this.max_age, min: this.min_age })
        },
        age_control: function () {
            if (this.min_age < 1) this.min_age = 1;
            if (this.max_age - this.min_age < 1)
                this.max_age = this.min_age * 1 + 1;
        }
    }
}