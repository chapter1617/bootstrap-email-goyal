// $(document).ready(function () {
//     $('.toggleClick').click(function () {
//         $('.toggleBox').toggleClass('toggle');
//     })
// });


$(document).ready(function () {
    $(".toggleClick").click(function () {
        $(".toggleBox").toggleClass("toggle");
    });


    // $(".togglelist").click(function () {
    //     $(".togglelistModal").toggleClass("toggle");
    // });

    // $(".togglelist").click(function () {
    //     $(".email-list").css("display","none");
    // });

    var myResize = function(){
        var width = $(window).width();
        if (width < 720) {
            // $(".email-section").parent().css({
            //     "display": "none",
            // });
            $(".togglelist").click(function () {
                $(".senter-list-box").parent().css({
                    "display": "none",
                });
                $(".email-section").parent().css({
                    "display": "block",
                });
            });
            $(".close-icon-2").click(function () {
                $(".senter-list-box").parent().css({
                    "display": "block",
                });
                $(".email-section").parent().css({
                    "display": "none",
                });
            });
            
        }else{
            $(".email-section").parent().css({
                "display": "block",
            });
            $(".togglelist").click(function () {
                $(".senter-list-box").parent().css({
                    "display": "block",
                });
                
            });
            $(".senter-list-box").parent().css({
                "display": "block",
            });
            
        }
    };
    // Execute it every resize
    $(window).resize(myResize);
    $(myResize); // Execute it on ready as well
    // Keep the click event handlers outside so they get defined once
    

});