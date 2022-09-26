function atmMachine(money) {
    let hundredEur = 0;
    let fiftyEur = 0;
    let twentyEur = 0;
    let tenEur = 0;
    money = document.getElementById('money').value;

    if (money >= 100) {
        hundredEur = atmAlgorithm(money, 100)[0];
        money = atmAlgorithm(money, 100)[1];
    }
    if (money >= 50) {
        fiftyEur = atmAlgorithm(money, 50)[0];
        money = atmAlgorithm(money, 50)[1];
    }
    if (money >= 20) {
        twentyEur = atmAlgorithm(money, 20)[0];
        money = atmAlgorithm(money, 20)[1];
    }
    if (money >= 10) {
        tenEur = atmAlgorithm(money, 10)[0];
        money = atmAlgorithm(money, 10)[1];
    }

    document.getElementById("hundredEuro").innerHTML = hundredEur;
    document.getElementById("fiftyEuro").innerHTML = fiftyEur;
    document.getElementById("twentyEuro").innerHTML = twentyEur;
    document.getElementById("tenEuro").innerHTML = tenEur;
}


function atmAlgorithm(money, worth) {
    let billNum = 0;

    // get how many bills will be output
    billNum = Math.floor(money / worth);

    // get how much money is left after bills are output
    money = money - billNum * worth;

    // return array for the 2 different values
    var moneyArray = [billNum, money];
    return moneyArray;
}


const calcButton = document.getElementById('calcButton');
//start function with button
calcButton.addEventListener('click', atmMachine);