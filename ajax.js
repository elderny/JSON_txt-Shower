let getItems = document.getElementById('getItems');
getItems.addEventListener('click', ChkFirst);

function ChkFirst(e) {
    e.preventDefault();
    let FruitsLst = document.getElementById('FruitsLst');
    let VegetablesLst = document.getElementById('VegetablesLst');
    let fruit = document.getElementById('Fruits');
    let vegetable = document.getElementById('Vegetables');
    let select;
    let EmtyFrt = `<h5 style="font-family:Arial">Empty, You haven't selected Fruit checkbox!</h5>`;
    let EmtyVeg = `<h5 style="font-family:Arial">Empty, You haven't selected Vegetable checkbox!</h5>`;
    if (fruit.checked && vegetable.checked) {
        select = 2;
    } else if (fruit.checked) {
        select = 0;
    } else if (vegetable.checked) {
        select = 1;
    }
    if (fruit.checked == false && vegetable.checked == false) {
        select = -1;
    }
    if (select == 0) {
        VegetablesLst.innerHTML = EmtyVeg;
        getFruitItem();
    } else if (select == 1) {
        FruitsLst.innerHTML = EmtyFrt;
        getVegetableItem();
    } else if (select == 2) {
        getFruitItem();
        getVegetableItem();
    } else if (select == -1) {
        console.log("None of them are checked");
        VegetablesLst.innerHTML = EmtyVeg;
        FruitsLst.innerHTML = EmtyFrt;
    }
}

function getFruitItem() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'fruits.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            str = "";
            for (key in obj) {
                str += `<li>${obj[key].name}</li>`;
            }
            FruitsLst.innerHTML = str;
        } else {
            console.log("Request unsucessfull");
        }
    }
    xhr.send();
    console.log("Fruits request success");
}
function getVegetableItem() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'vegetables.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            str = "";
            for (key in obj) {
                str += `<li>${obj[key].name}</li>`;
            }
            VegetablesLst.innerHTML = str;
        } else {
            console.log("Request unsucessfull");
        }
    }
    xhr.send();
    console.log("Vegetable request success");
}