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

//1. Throttling
const btn = document.querySelector('.increment_btn');
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
})
