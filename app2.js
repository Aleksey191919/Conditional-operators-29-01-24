/** @format */

let distKilom = parseInt(prompt('Введіть відстань в км:')) * 1000;
let distMile = parseInt(prompt('Введіть відстань милях:')) * 0.305;

if (distKilom > distMile) {
  alert(`Відстань в км ${distKilom} більше ніж відстань в милях ${distMile}`);
} else if (distKilom < distMile) {
  alert(`Відстань в милях ${distMile} більше ніж відстань в км ${distKilom}`);
} else {
  alert(`Відстань в км ${distKilom} та відстань в милях ${distMile} однакові`);
}
