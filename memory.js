var tablElement = document.createElement("table");
document.body.appendChild(tablElement);
var cpt = 1
nb = 0

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
            casElement.addEventListener("click", function(){
                this.classList.remove("hidden"); 
                casElement.addEventListener("click", function () {
                    if (2 == 2){
                        casElement.style.backgroundColor = "blue"
                    } else {
                        casElement.classList.add("hidden")
                    }
                })
            })

            //     if (numbers[i] == numbers[i]) {
            //         casElement.style.backgroundColor = "blue"
            //     }
            // })
        }
    }
})



