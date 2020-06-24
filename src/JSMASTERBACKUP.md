
const towers = document.querySelectorAll('.tower');
const disc = document.querySelectorAll('.disc');
const disc1 = document.getElementById('disc1');
const disc2 = document.getElementById('disc2');
const disc3 = document.getElementById('disc3');
const disc4 = document.getElementById('disc4');
let currentRole = 'pickup';
let nextRole = 'drop';

//these event listeners target the towers but allow you to click the disks
const tower1 = document.getElementById('tower1');
const tower2 = document.getElementById('tower2');
const tower3 = document.getElementById('tower3');
tower1.addEventListener('click', handleClick)
tower2.addEventListener('click', handleClick)
tower3.addEventListener('click', handleClick)


//Winning condition
function checkWinner() {
    if (tower3.childElementCount === 4) {
        alert('Congratulations! You have won!')
    }
}


function handleClick(event) {
    if (currentRole === 'pickup') {
    
        pickUp(event)
        currentRole = nextRole

    }



    else if (nextRole === currentRole) {
        
        drop(event)

        currentRole = "pickup"

    }

}





const selector = function (event) {
    const tower = event.currentTarget
    const cloneDisk = tower.lastElementChild
    
}

const pickUp = function(event) {

    const tower = event.currentTarget
    cloneDisk = tower.lastElementChild
    console.log(tower)
    console.log(cloneDisk)
    console.log("YOUHAVEpicked")
    return cloneDisk
}

const drop = function(event) {
    let tower = event.currentTarget
    tower.appendChild(cloneDisk)

    
}







// function pickUp(event) {
//     let currentSelection = event.target
//     let currentTarget = event.currentTarget
//     let throwAway = currentTarget.removeChild(currentSelection)
//     var cloneDisk = currentSelection.cloneNode(true)


//         console.log(currentSelection)
//         console.log(currentTarget)



// }




// function drop(event,pickUp) {

//     let currentSelection = event.target

//     console.log(currentSelection)

// }










