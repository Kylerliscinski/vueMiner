<script setup>
import { AppState } from "../AppState.js";
import { Upgrades } from "../models/ClickUpgrades.js";

const clickUpgrades = AppState.clickUpgrades
const autoUpgrades = AppState.autoUpgrades
</script>


<template>
 <!-- <section class="row justify-content-center rounded border border-dark mb-1">
  <div class="col-3 text-end" v-for="clickUpgrades in Upgrades" :key="clickUpgrades.name">
    <button>{{ clickUpgrades.name }} ${{ clickUpgrades.price }}</button>
    <h4>{{ clickUpgrades.quantity }}</h4>
  </div> 
</section> -->
</template>

<style scoped lang="scss">

</style>
