import { ref } from "vue";
import { AppState } from "../AppState.js";

let perClick = 1
class FunctionsService {
  mineCheese() {
    AppState.cheese++
  }

  buyUpgrade(upgradeName) {
    const foundUpgrade = AppState.clickUpgrades.find(upgrade => upgrade.name == upgradeName)
    console.log(foundUpgrade);
    if (AppState.cheese >= foundUpgrade.price) {
      foundUpgrade.quantity += 1
      AppState.cheese -= foundUpgrade.price
    } else {
      window.alert("Not enough cheese silly")
    }

  }
}
export const functionsService = new FunctionsService()