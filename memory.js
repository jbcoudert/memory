var tablElement = document.createElement("table");
document.body.appendChild(tablElement);

var headElement = document.getElementsByTagName("header")[0];
var compteurElement = document.createElement("p")
headElement.appendChild(compteurElement)
compteurElement.innerHTML = 0
compteurPoint = 0

var cpt = 1
nb = 0
click1 = null;
click2 = null;

var btnGenerate = document.getElementsByTagName("button")[0];
btnGenerate.addEventListener("click", function () {

    tablElement.innerHTML = ""

    var numbers = [];
    var inputElement = document.getElementsByTagName("input")[0];
    nb = inputElement.value

    if (inputElement.value % 2 == 1) {
        if (confirm("Merci de choisir un nombre pair !")) {
            document.location.reload(true);
        } else if (confirm("Si Si j'insiste !")) {
            document.location.reload(true);
        } else if (confirm("Allez soit sympa !!")) {
            document.location.reload(true);
        } else {
            document.location.reload(true);
        }
    }

    for (var i = 1; i <= (nb * nb) / 2; i++) {
        numbers.push(i)
        numbers.push(i)

    }
    for (let i = 0; i < numbers.length; i++) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var temp = numbers[i];
        numbers[i] = numbers[randomIndex];
        numbers[randomIndex] = temp;
    }


    cpt = 0;

    for (let i = 0; i < nb; i++) {
        var trElement = document.createElement("tr");
        tablElement.appendChild(trElement);
        for (let j = 0; j < nb; j++) {
            var casElement = document.createElement("td");
            casElement.className = "cell hidden"
            trElement.appendChild(casElement);
            casElement.innerHTML = numbers[cpt++];

            casElement.addEventListener("click", function () {
                this.classList.remove("hidden");
                if (click1 == null) {
                    click1 = this
                } else {
                    click2 = this
                    if (click1.innerHTML == click2.innerHTML && click1 != click2) {
                        compteurPoint ++
                        compteurElement.innerHTML = compteurPoint
                        click1 = null
                        click2 = null
                    } else {
                        setTimeout(function () {
                            click1.classList.add("hidden")
                            click2.classList.add("hidden")
                            
                            click1 = null
                            click2 = null
                        }, 1000);
                    }
                }
            })
        }
    }
})



