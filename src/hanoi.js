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

//'Reset Game' button moves all disks back to tower1
const resetButton = document.getElementById('resetButton')
const resetGame = function() {
    tower1.appendChild(disc4)
    tower1.appendChild(disc3)
    tower1.appendChild(disc2)
    tower1.appendChild(disc1)
}
resetButton.addEventListener('click', resetGame)


//Winning condition
function checkWinner() {
    if (tower3.childElementCount === 4) {
        alert('Congratulations! You have won!')
    }
}

//This is where the magic happens decides the turn, and throws the event per turn.
function handleClick(event) {
    //added && to fix an error we received when selecting empty towers
    if ((currentRole === 'pickup') && (event.currentTarget.childElementCount !== 0)) {
        pickUp(event)
        currentRole = nextRole
    } else if (currentRole === 'drop') {
        drop(event)
        currentRole = "pickup"
    } else {
        alert('You cannot select and empty tower');
        currentRole = 'pickup'
    }
}

//Pick up function
const pickUp = function(event) {
    const tower = event.currentTarget
    cloneDisk = tower.lastElementChild;
    console.log(tower);
    console.log(cloneDisk);
    console.log("YOUHAVEpicked");
    cloneDisk.style.border = '2px greenyellow dashed'
        //adds different border to show selection
    return cloneDisk
}


//drop function, where the remainder of the magic happens, engages the rules, and default for empty div.
const drop = function(event) {

    let tower = event.currentTarget
    cloneDisk.style.border = ''
        //returns disk border to defaults
    if (tower.childElementCount === 0) {
        tower.appendChild(cloneDisk)
    }
    if (tower.lastElementChild.dataset.width < cloneDisk.dataset.width) {
        alert('You cant do that! Come on, what are you doing, re read the rules.')
    } else {
        tower.appendChild(cloneDisk)

    }
    setTimeout(checkWinner, 1)
        //setTimeout delays this function by 1ms
        //I noticed that the winning alert was coming up before 
        //the final disc appeared in the tower, so I just delayed 
        //the check winner function to give it time to finish
        //-Drew 6/25/2020
}