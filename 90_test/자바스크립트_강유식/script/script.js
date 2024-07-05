
const tab1 = document.querySelectorAll(".tabs ul li a")[0];
const tab2 = document.querySelectorAll(".tabs ul li a")[1];
const tab3 = document.querySelectorAll(".tabs ul li a")[2];
const tab4 = document.querySelectorAll(".tabs ul li a")[3];


const cont1 = document.querySelectorAll("#tab-container>div")[0];
const cont2 = document.querySelectorAll("#tab-container>div")[1];
const cont3 = document.querySelectorAll("#tab-container>div")[2];
const cont4 = document.querySelectorAll("#tab-container>div")[3];


tab1.onclick = function () {
    reset();
    cont1.classList.add("on");  
};
tab2.onclick = function () {
    reset();
    cont2.classList.add("on");  
};
tab3.onclick = function () {
    reset();  
    cont3.classList.add("on");  
};
tab4.onclick = function () {
    reset();  
    cont4.classList.add("on");  
};

function reset(){
    cont1.classList.remove("on");
    cont2.classList.remove("on");
    cont3.classList.remove("on");
    cont4.classList.remove("on");
}