<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'
import { functionsService } from "./services/FunctionsService.js";
import "./assets/scss/main.scss";
import { Upgrades } from "./models/ClickUpgrades.js";


const appState = computed(()=>AppState)
let cheese = computed(()=>AppState.cheese)
const clickUpgrades = computed(()=>AppState.clickUpgrades)
const autoUpgrades = computed(()=>AppState.autoUpgrades)


function mineCheese(){
  console.log('⛏️🧀');
  functionsService.mineCheese()
}

function buyUpgrade(upgradeName){
  console.log('buying upgrade');
  console.log(upgradeName);
  if(cheese.value >= 5){
    functionsService.buyUpgrade(upgradeName)
  }else{
    window.alert("Not enough cheese silly")
  }
}
</script>

<template>
<section class="container">
  <div>
    <h3 class="text-center">Current Cheese: {{ cheese }}</h3>
  </div>
<div class="row justify-content-center">
  <div class="col-6">
    <img @click="mineCheese()" src="cheese_like_moon_by_coolarts223_dg1ah6l-fullview-removebg-preview.png" alt="">
  </div>
</div>
</section>

<section class="container">
  <div class="row justify-content-center">
    <div class="col-3 text-end" v-for="upgrade in clickUpgrades" :key="upgrade.name">
      <button @click="buyUpgrade(upgrade.name)">{{ upgrade.name }} ${{ upgrade.price }}</button>
      <h4>{{ upgrade.quantity }}</h4>
    </div> 
  </div>
</section>
<section class="container">
  <div class="row justify-content-center">
    <div class="col-3 text-end" v-for="upgrade in autoUpgrades" :key="upgrade.name">
      <button>{{ upgrade.name }} ${{ upgrade.price }}</button>
      <h4>{{ upgrade.quantity }}</h4>
    </div> 
  </div>
</section>

</template>


<!-- // styles -->
<style lang="scss">
</style>
