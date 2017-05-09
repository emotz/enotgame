<template>
    <eg-create v-if="current==='create'" v-on:enot-buy="enot_buy"></eg-create>
    <eg-ready v-else-if="current==='ready'" v-bind:initworld="world"></eg-ready>
</template>

<script src="./eg-enot.js"></script>