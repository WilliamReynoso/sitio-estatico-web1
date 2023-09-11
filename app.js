import {apiData} from "./data.js";
import Card from "./card.js";

const dataList = apiData.map((e)=> e);
console.log(dataList);
//crear grupo de tarjetas (grid)
const cardGroup = document.createElement("div");
cardGroup.className = "card-group";

dataList.forEach(element => {
    cardGroup.appendChild(Card(element));
});
document.body.appendChild(cardGroup);