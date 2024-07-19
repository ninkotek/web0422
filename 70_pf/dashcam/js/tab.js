const btn1 = document.querySelectorAll('#tabs a').item(0);
        const btn2 = document.querySelectorAll('#tabs a').item(1);
        const cont1 = document.querySelectorAll('#tabs>div')[0];
        const cont2 = document.querySelectorAll('#tabs>div')[1];

//이벤트처리
        btn1.onclick = function(){                     
            cont1.classList.add('on');
            cont2.classList.remove('on');
        }

        btn2.onclick = function(){
            cont2.classList.add('on');
            cont1.classList.remove('on');
        }