<template>
    <div v-bind:class="{'night':(world.environment.time%24 >=12)}">
        <div class="enot">
            <li v-for="(item, index) in enot">{{index}} : {{item}}</li>
        </div>
        <div class="enot">
            <div class="control">
                <button v-on:click="enot_feed">Feed</button>
                <button v-on:click="enot_play">Play</button>
            </div>
            <div class="control">
                <button v-on:click="enot_wait">Wait</button>
                <input type="number" v-model.number="ttw" v-on:click="ttw_control">
            </div>
            <div class="control">
                <h2>Time : {{ world.environment.time }}</h2>
            </div>
        </div>
        <div class="enot">
            <p>Important messages:</p>
            <br>
            <p>
                <span v-if="enot.energy<30">Energy is low!<br></span>
                <span v-if="enot.hungry=='голоден'">Enot is hungry!<br></span>
            </p>
        </div>
        <ul class="comres">
            <li v-for="str in comres"> {{ str }} </li>
        </ul>
    </div>
</template>

<script src="./eg-ready.js"></script>

<style>
.enot{
    display: inline-block;
    width:31%;
    height: 300px;
    vertical-align: middle;
    padding: 20px;
}
#ready{
    position: relative;
    margin: 0 auto;
    text-align: center;
}
.control {
    display: block;
    text-align: center;
    margin-top: 20px;
}
.control input {
    vertical-align: bottom;
    display: inline-block;
    width: 96px;
    height: 46px;
    font-size: 24px;
    text-align: right;
}
.comres li {
    text-align: center;
}
.night {
    background-color: #666
}
</style>