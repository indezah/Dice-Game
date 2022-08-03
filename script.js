let score1 = 0;
let score2 = 0;
let status = "a"
let val1 = 0
let val2 = 0
let current = "player1"
function round() {
    if (status == "b") {
        console.log("Wait")
        return
    }
    status = "b"

    var delayInMilliseconds = 1000; //1 second

    for (let i = 0; i < 10; i += 1) {
        setTimeout(function () {
            if (current == "player1") {
                document.getElementById("name1").style.color = "red"
                document.getElementById("name2").style.color = "black"
            } else {
                document.getElementById("name1").style.color = "black"
                document.getElementById("name2").style.color = "red"
            }
            val1 = Math.floor(Math.random() * 6) + 1
            val2 = Math.floor(Math.random() * 6) + 1
            console.log(val1 + " " + val2)
            document.getElementById("result1").classList.add("result1ani")
            document.getElementById("result2").classList.add("result2ani")

            if (val1 == 1) {
                document.getElementById("result1").src = "./Dice_Images/dice_1.png"
            }
            else if (val1 == 2) {
                document.getElementById("result1").src = "./Dice_Images/dice_2.png"
            }
            else if (val1 == 3) {
                document.getElementById("result1").src = "./Dice_Images/dice_3.png"
            }
            else if (val1 == 4) {
                document.getElementById("result1").src = "./Dice_Images/dice_4.png"
            }
            else if (val1 == 5) {
                document.getElementById("result1").src = "./Dice_Images/dice_5.png"
            }
            else if (val1 == 6) {
                document.getElementById("result1").src = "./Dice_Images/dice_6.png"
            }
            if (val2 == 1) {
                document.getElementById("result2").src = "./Dice_Images/dice_1.png"
            }
            else if (val2 == 2) {
                document.getElementById("result2").src = "./Dice_Images/dice_2.png"
            }
            else if (val2 == 3) {
                document.getElementById("result2").src = "./Dice_Images/dice_3.png"
            }
            else if (val2 == 4) {
                document.getElementById("result2").src = "./Dice_Images/dice_4.png"
            }
            else if (val2 == 5) {
                document.getElementById("result2").src = "./Dice_Images/dice_5.png"
            }
            else if (val2 == 6) {
                document.getElementById("result2").src = "./Dice_Images/dice_6.png"
            }
            //console.log(i)
            if (i == 9) {
                if (current == "player1") {
                    if ((val1 == val2) && (val1 != 1)) {
                        score1 = score1 + val1 + val2
                        document.getElementById("score1").innerHTML = score1;
                        current = "player1"
                    } else if ((val1 == val2) && (val1 == 1)) {
                        score1 = 0;
                        document.getElementById("score1").innerHTML = score1;
                        current = "player2"
                    }
                    else {
                        score1 = score1 + val1 + val2
                        document.getElementById("score1").innerHTML = score1;
                        current = "player2"
                    }

                } else {
                    if ((val1 == val2) && (val1 != 1)) {
                        score2 = score2 + val1 + val2
                        document.getElementById("score2").innerHTML = score2;
                        current = "player2"
                    } else if ((val1 == val2) && (val1 == 1)) {
                        score2 = 0;
                        document.getElementById("score2").innerHTML = score2;
                        current = "player1"
                    }
                    else {
                        score2 = score2 + val1 + val2
                        document.getElementById("score2").innerHTML = score2;
                        current = "player1"
                    }

                } setTimeout(function () {
                    if (score1 >= 100) {
                        alert("Player 1 Won")
                        document.getElementById("button").disabled = true
                        document.getElementById("button").innerHTML = "Player 1 Won. Refresh to Restart"

                    }
                    else if (score2 >= 100) {
                        alert("Player 2 Won")
                        document.getElementById("button").disabled = true
                        document.getElementById("button").innerHTML = "Player 2 Won. Refresh to Restart"


                    }

                }, 1000)

            }
            setTimeout(function () {
                document.getElementById("result1").classList.remove("result1ani")
                document.getElementById("result2").classList.remove("result2ani")
                status = "a"
            }, 2000)
        }, delayInMilliseconds);

        delayInMilliseconds += 200;
    }
    //console.log(score1)
    console.log(current)

}