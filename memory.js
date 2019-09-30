var tablElement = document.createElement("table");
document.body.appendChild(tablElement);
var cpt = 1
nb = 4
var numbers = [];
for (var i = 1; i <= nb*nb;i++){
    numbers.push(i)
}

// var generate = document.getElementsByTagName("input")[0];

for (let i = 0; i < numbers.length; i++) {
    var randomIndex = Math.floor(Math.random()*(i+1));
    var temp = numbers[i];
    numbers[i] = numbers[randomIndex];
    numbers[randomIndex] = temp;
}

cpt = 0;

for (let i = 0; i < nb; i++) {
    var trElement = document.createElement("tr");
    tablElement.appendChild(trElement);
    for (let j = 0; j < nb; j++){
        var casElement = document.createElement("td");
        casElement.className = "cell hidden"
        trElement.appendChild(casElement);
        casElement.innerHTML = numbers[cpt++];
        // casElement.addEventListener("click", function(){
        //     this.classList.remove("hidden"); 
        //     if (numbers[i] == numbers[i]) {
        //         casElement.style.backgroundColor = "blue"
        //     }
        // })
    }
}

