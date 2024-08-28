
const images = document.querySelectorAll('#sec2>ul>li>div>a>img');

images.addEventListner('mouseover', switchImage);

function switchImage(){
     images.innerHTML = "SO DELICIOUS~~";


}
