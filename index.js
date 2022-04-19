let arr = ["a", "b", "c", "d", "e", "f", "g", "h",
            "i", "j", "k", "l", "m", "n", "o", "p",
            "q", "r", "s", "t", "u", "v", "w", "x",
            "y", "z", "A", "B", "C", "D", "E", "F",
            "G", "H", "I", "J", "K", "L", "M", "N",
            "O", "P", "Q", "R", "S", "T", "U", "W",
            "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 
            8, 9, "@", "#", "%", "^", "&", "*", "(",
            ")", "?"]
            
let paswd1 = document.getElementById("button1")
let paswd2 = document.getElementById("button2")
let paswd3 = document.getElementById("button3")
let paswd4 = document.getElementById("button4")
            
function generatePswd(){
    let index = 0
    let password = 0
    
    for(let j=0; j<4; j++){
        for(let i=0; i<8; i++){
            index = random()
            password += "" + arr[index]
        }
        if(j === 0){
            paswd1.textContent = password
        }else if(j === 1){
            paswd2.textContent = password
        }else if(j === 2){
            paswd3.textContent = password
        }else{
            paswd4.textContent = password
        }
        password = 0
    }

  
}

function random(){
    return Math.floor(Math.random() * arr.length)
}