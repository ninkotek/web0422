$(() => {
    const photo1 = $(".s1 .photo");
    const info1 = $(".s1 .info");
    const photo2 = $(".s2 .photo");
    const info2 = $(".s2 .info");
    const photo3 = $(".s3 .photo");
    const info3 = $(".s3 .info");
    const b_photo = $(".bottom_image");
    const b_info = $(".bottom");
    
    
    $(window).scroll(() => {
        let st = $(this).scrollTop();
        console.log(st);
    
        if (st >= 100) {
            photo1.css({ transform: "translateY(0)" });
            info1.css({ transform: "translateY(0)" });
        } else {
            photo1.css({ transform: "translateY(300px)" });
            info1.css({ transform: "translateY(300px)" });
        }
    


        if (st >= 700) {
            photo2.css({ transform: "translateY(0)" });
            info2.css({ transform: "translateY(0)" });
        } else {
            photo2.css({ transform: "translateY(300px)" });
            info2.css({ transform: "translateY(300px)" });
        }


        if (st >= 1600) {
            photo3.css({ transform: "translateY(0)" });
            info3.css({ transform: "translateY(0)" });
        } else {
            photo3.css({ transform: "translateY(300px)" });
            info3.css({ transform: "translateY(300px)" });
        }


        if (st >= 2000) {
            b_photo.css({ transform: "translateY(0)" });
            b_info.css({ transform: "translateY(0)" });
        } else {
            b_photo.css({ transform: "translateY(300px)" });
            b_info.css({ transform: "translateY(300px)" });
        }




    });
    
    });