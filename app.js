const dark_btn = document.querySelector(".checkbox");
const expand = document.getElementById('expand');
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");
const item5 = document.getElementById("item5");
const item6 = document.getElementById("item6");



expand.addEventListener("click",() => {
    item1.classList.add("expand")
})



function switchTheme(){
    document.body.classList.toggle("dark-mode")
}

dark_btn.addEventListener('click', switchTheme)