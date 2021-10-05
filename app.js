





//variables
const btn = document.querySelectorAll(".color-changer");
const btn2 = document.querySelector(".border-changer");

let time = 1000;



//function change color
function changeColor(target){
    //create color code with num
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);

    //add letters to the numbers
    let newColor = "#" + randomColor;

    //chanege color
    target.style.background =  newColor;
    setTimeout(() => {
        changeColor(target);
    },time)
}

//change border color
function changeBorder(target){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let newColor = "#" + randomColor;
    target.style.borderBottom =  "2px solid" + newColor;
    target.style.color = newColor;
    setTimeout(() => {
        changeBorder(target);
    },time)
}

//select all buttons and set the change color function on them
btn.forEach(change => {
    change.addEventListener("click", () => {
        changeColor(change);
    })
});


btn2.addEventListener("click", () => {
    changeBorder(btn2);
})

// console.log(btn2)