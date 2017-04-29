<template>
        <div id="create">
            <div class="settings">
                <button type="button" v-on:click="enot_buy">Buy enot</button>
            </div>
            <div class="settings">
                <div class="age-1">
                    Minimum age :
                    <br> Maximum age :
                </div>
                <div class="age-2">
                    <input type="number" v-model.number="min_age" v-on:click="age_control" v-on:keyup.enter="age_control">
                    <input type="number" v-model.number="max_age" v-on:click="age_control" v-on:keyup.enter="age_control">
                </div>
            </div>
        </div>
</template>

<script src="./eg-create.js"></script>

<style>

#create{
    width: 760px;
    margin: 50px auto;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
}
.settings{
    vertical-align: top;
    display: inline-block;
    width: 375px;
    height: 100px
}
#create button{
    width:250px;
    height: 100px
}
.settings div{
    display: inline-block;
    vertical-align: middle
}
.age-1{
    text-align: left;
    width:150px;
    padding-left: 90px
}
.age-2{
    padding: 25px 0;
    width:120px
}
</style>