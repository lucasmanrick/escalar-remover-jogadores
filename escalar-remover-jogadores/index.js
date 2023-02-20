function addPlayerAba() {
  const addSection = document.getElementById (`add-players`).style = "display: block;"
  document.getElementById(`remove-players`).style = "display: none;"
}

function removePlayerAba() {
  const removeSection = document.getElementById(`remove-players`)
  removeSection.style = "display: block;"
  document.getElementById (`add-players`).style ="display: none;"
}


function climbPlayer() {
  
  const playerName = document.querySelector (`#player-name`)
  const playerPosition = document.querySelector (`#player-position`)
  const playerShirt = document.querySelector (`#player-shirtadd`)
  const showText = document.getElementById (`insertText`)


  if (playerName.value !== ""  && playerPosition.value !== "" && playerShirt.value !== "") {

  const receiveUl = document.createElement (`ul`)
  receiveUl.id = `${playerShirt.value}`

  const receiveH4 = document.createElement (`h4`)
  receiveH4.innerText = `Jogador`

  const receiveLiName = document.createElement (`li`)
  receiveLiName.innerText = `Nome: ${playerName.value}`

  const receiveLiPosition = document.createElement (`li`)
  receiveLiPosition.innerText = `Posição: ${playerPosition.value}`
  
  const receiveLiShirt = document.createElement (`li`)
  receiveLiShirt.innerText = `Camisa: ${playerShirt.value}`

  receiveUl.append (receiveH4, receiveLiName, receiveLiPosition, receiveLiShirt)
  showText.appendChild (receiveUl)

  playerName.value = ""
  playerPosition.value = ""
  playerShirt.value = ""

  } else {
    alert (`insira todos os valores corretamente`)
  }

}



function removePlayer() {
  const allPlayerList= document.getElementById (`insertText`) 
  const shirtRemove = document.querySelector (`#player-shirt`)
  const ulClass = document.getElementById (`${shirtRemove.value}`)

  allPlayerList.removeChild (ulClass)
  shirtRemove.value = ""
}

