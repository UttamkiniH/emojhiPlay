const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const astonishFace = document.querySelector('.astonish');
const flushFace = document.querySelector('.flush');
const pleadFace = document.querySelector('.plead');


//event listener
closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
})

openFace.addEventListener('click', () => {
    if (closedFace.classList.contains('closed')) {
        astonishFace.classList.add('active');
        openFace.classList.remove('active');

    }
})

astonishFace.addEventListener('click', () => {
    // console.log("you are in astonish!");
    flushFace.classList.add('active');
    astonishFace.classList.remove('active');

})

flushFace.addEventListener('click', () => {
    // console.log("you are in flush!");
    pleadFace.classList.add('active');
    flushFace.classList.remove('active');

})

pleadFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    closedFace.classList.add('active');
    pleadFace.classList.remove('active');
})