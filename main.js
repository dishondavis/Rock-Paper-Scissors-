document.querySelector("button").addEventListener("click", function(){
    let inputValue = document.querySelector("input").value;
    console.log(inputValue)


randomPick()

userWeapon()



})

function randomPick(){
  let randomChoice = Math.random()
  if(randomChoice === "rock"){
    alert("rock")
    document.getElementsById("rock").innerHTML= "Rock"
  } else if(randomChoice === "paper"){
    alert("paper")
    document.getElementsById("paper").innerHTML = "Paper"
  }else if(randomChoice === "scissors"){
    alert("scissors")
    document.getElementsById("scissors").innerHTML = "Scissors"
  }else if(randomChoice === "lizard"){
      alert("lizard")
      document.getElementsById("lizard").innerHTML = "Lizard"
  }else if(randomChoice === "spock")
    alert("spock")
    document.getElementsById("spock").innerHTML = "Spock"

}

function userWeapon(){
  let myWeapon
  if(myWeapon === randomChoice){
    alert("winner")
  }else {
    alert("you lost")
  }
}

function botsWeapon(){
  let botsChoice
  if()


}
