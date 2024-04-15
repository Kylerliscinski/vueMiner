import { reactive } from 'vue'
import { Upgrades } from "./models/ClickUpgrades.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /** @type {{name, picture, id}} user info from Auth0*/
  user: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  cheese: 0,

  clickUpgrades: [
    new Upgrades({
      name: 'Pickaxe',
      price: 5,
      quantity: 0,
      multiplier: 1
    }),
    new Upgrades({
      name: 'Shovel',
      price: 10,
      quantity: 0,
      multiplier: 5
    })
  ],

  autoUpgrades: [
    new Upgrades({
      name: 'Drill',
      price: 5,
      quantity: 0,
      multiplier: 10
    }),
    new Upgrades({
      name: 'Rover',
      price: 10,
      quantity: 0,
      multiplier: 20
    })
  ]
})
