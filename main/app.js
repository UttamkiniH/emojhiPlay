const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const astonishFace = document.querySelector('.astonish');
const flushFace = document.querySelector('.flush');
const pleadFace = document.querySelector('.plead');
const anguishFace = document.querySelector('.anguish');
const fearFace = document.querySelector('.fear');
const sadFace = document.querySelector('.sad');
const cryFace = document.querySelector('.cry');
const loudFace = document.querySelector('.loudCry');
const screamFace = document.querySelector('.scream');
const winkFace = document.querySelector('.wink');
const heartFace = document.querySelector('.heart');
const lickFace = document.querySelector('.lick');
const zannyFace = document.querySelector('.zanny');
const hugFace = document.querySelector('.hug');
const coldFace = document.querySelector('.cold');
const hotFace = document.querySelector('.hot');




//event listener
closedFace.addEventListener('click', () => {
    openFace.classList.add('active');
    closedFace.classList.remove('active');
})

openFace.addEventListener('click', () => {
    astonishFace.classList.add('active');
    openFace.classList.remove('active');


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
    anguishFace.classList.add('active');
    pleadFace.classList.remove('active');
})

anguishFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    fearFace.classList.add('active');
    anguishFace.classList.remove('active');
})

fearFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    sadFace.classList.add('active');
    fearFace.classList.remove('active');
})
sadFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    cryFace.classList.add('active');
    sadFace.classList.remove('active');
})
cryFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    loudFace.classList.add('active');
    cryFace.classList.remove('active');
})
loudFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    screamFace.classList.add('active');
    loudFace.classList.remove('active');
})
screamFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    winkFace.classList.add('active');
    screamFace.classList.remove('active');
})
winkFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    heartFace.classList.add('active');
    winkFace.classList.remove('active');
})
heartFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    lickFace.classList.add('active');
    heartFace.classList.remove('active');
})
lickFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    zannyFace.classList.add('active');
    lickFace.classList.remove('active');
})

zannyFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    hugFace.classList.add('active');
    zannyFace.classList.remove('active');
})

hugFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    coldFace.classList.add('active');
    hugFace.classList.remove('active');
})

coldFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    hotFace.classList.add('active');
    coldFace.classList.remove('active');
})

hotFace.addEventListener('click', () => {
    // console.log("you are in plead!");
    closedFace.classList.add('active');
    hotFace.classList.remove('active');
})
