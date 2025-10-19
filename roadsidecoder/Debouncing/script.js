//1. Debouncing --> https://lodash.com/docs/4.17.15#debounce
/* const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_count');
const btnTrigger = document.querySelector('.debouncing_count');

var pressedCount = 0;
var triggeredCount = 0;

const btnTriggerFun = _.debounce(() => {
    //console.log('hell0')
    btnTrigger.innerHTML = ++triggeredCount;
}, 800)

btn.addEventListener("click", () => {
    //console.log('hi')
    btnPress.innerHTML = ++pressedCount;
    btnTriggerFun()
}) */

//2. Throttling
/* const btn = document.querySelector('.increment_btn');
const btnPress = document.querySelector('.increment_count');
const btnTrigger = document.querySelector('.debouncing_count');

var pressedCount = 0;
var triggeredCount = 0;

const btnTriggerFun = _.throttle(() => {
    //console.log('hell0')
    btnTrigger.innerHTML = ++triggeredCount;
}, 800)

btn.addEventListener("click", () => {
    //console.log('hi')
    btnPress.innerHTML = ++pressedCount;
    btnTriggerFun()
}) */

//Without lodash debouncing
const btn = document.querySelector('.increment_btn');
const btnIncrement = document.querySelector('.increment_count');
const btnDebouncing = document.querySelector('.debouncing_count');

var incrementCount = 0;
var debounceCount = 0;

myDebounce = (cb, d) => {
    let timer;

    return function (...args) { // Capture arguments
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
            cb(...args); // Pass the arguments to the callback
        }, d);
    }
}


const btnTriggerFun = myDebounce((arg)=>{
    console.log(arg); // 'jo' will be printed here
    btnDebouncing.innerHTML = ++debounceCount;
},800)

btn.addEventListener('click', () => {
    btnIncrement.innerHTML = ++incrementCount;
    btnTriggerFun('jo');
})
