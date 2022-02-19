const popUpDesk = document.getElementById('popUpDesk');
const shareDesk = document.getElementById('shareDesk');
let clickedDesk = false

const popUpMob = document.getElementById('popUp');
const shareMob =  document.getElementById('share');
let clickedMob = false;
const Info = document.getElementById('info');

const body = document.getElementById('card');

let bodyClicked = true

shareDesk.addEventListener('click', function(){
    if(clickedDesk === false) {
        popUpDesk.style.display = 'flex';
        clickedDesk = true;
        bodyClicked = false;
    }
})

shareMob.addEventListener('click', function(){
    if(clickedMob === false) {
        popUpMob.style.display = 'flex';
        Info.style.display = 'none'
        clickedMob = true;
        bodyClicked = false;
    } 
})

body.addEventListener('click', function() {
    if(clickedMob === true && bodyClicked === false) {
        popUpMob.style.display = 'none';
        Info.style.display = 'flex'
        clickedMob = false;
        bodyClicked = true;
    }
    if(clickedDesk === true && bodyClicked === false) {
        popUpDesk.style.display = 'none';
        clickedDesk = false;
        bodyClicked = true;
    }
})


