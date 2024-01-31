let distKilom = parseInt(prompt("Введіть відстань #1 в км:")) / 1000;
let distMile = parseInt(prompt("Введіть відстань #2 в милях:")) * 0.305;

if (distKilom > distMile) {
    alert(`Відстань #1 в км ${distKilom} більше ніж відстань #2 в милях ${distMile}`);
}

else if (distKilom < distMile) {
    alert(`Відстань #2 в милях ${distMile} більше ніж відстань #1 в км ${distKilom}`);
}

else {
    alert(`Відстань #1 в км ${distKilom} та відстань #2 в милях ${distMile} однакові`);
}


