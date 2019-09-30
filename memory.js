var tablElement = document.createElement("table");
document.body.appendChild(tablElement);

var tdList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

for (let i = 0; i < 3; i++) {
    var trElement = document.createElement("tr");
    tablElement.appendChild(trElement);
    for (let i = 0; i < 3; i++){
        var casElement = document.createElement("td");
        trElement.appendChild(casElement);
        casElement.innerHTML = tdList[i];
    }
}

