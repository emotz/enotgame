<template>
    <div v-bind:class="{'night':(world.environment.time%24 >=12)}">
        <div class="enot">
            <li v-for="(item, index) in enot">{{index}} : {{item}}</li>
        </div>
        <div class="enot but">
            <button v-on:click="enot_feed">Feed</button>
            <button v-on:click="enot_play">Play</button>
            <h2>Time : {{ world.environment.time }}</h2>
        </div>
        <div class="enot">
            <p>Important messages:</p>
            <br>
            <p>
                <span v-if="world.enot.energy<30">Energy is low!<br></span>
                <span v-if="world.enot.hungry=='голоден'">Enot is hungry!<br></span>
            </p>
        </div>
        <ul class="comres">
            <li v-for="str in comres"> {{ str }} </li>
        </ul>
    </div>
</template>

<script src="./eg-ready.js"></script>