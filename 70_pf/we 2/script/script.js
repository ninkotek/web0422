



// $(document).ready(function(){

//  // 요소 찾기
//  const firstList = $("#notice a").item(0);
//  const modal = $("#modal");
//  const closeBtn =$("button");
//  console.log(modal);
 
//  // 이벤트 처리
//  // 객체.이벤트(function(){})
//  firstList.click(()=>{modal.css({display:"block"}); 
     
//  });


//  closeBtn.click(()=>{
//     modal.css({display: "none"});
//  });


// });


const popup = document.querySelectorAll('.notice>ul>li>a');
const modal = document.querySelector('#modal');

const closingBtn = document.querySelector('button');

// popup[0].onclick = function(){
//     modal.style.display = "block";
// };

// closingBtn.onclick = function(){
//     modal.style.display = "none";
// };

//event.preventDefault(); => a 태그로 인한 3위로 팅기는 것 방지
// event.preventDefault();
popup[0].addEventListener('click', function(){
    modal.style.display = "block";
});

closingBtn.addEventListener('click', function(){
    modal.style.display = "none";
});

const btns = document.querySelectorAll('#board>ul>li>a');
const conts = document.querySelectorAll('#board>div');

btns[0].addEventListener('click', function(){
    conts[0].classList.add('on');
    conts[1].classList.remove('on');
});
btns[1].addEventListener('click', function(){
    conts[0].classList.remove('on');
    conts[1].classList.add('on');
});



