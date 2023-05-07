
// // target to give background to
// var $div = document.getElementById("gradient");
// // rgb vals of the gradients
// var gradients = [
//   { start: [128,179,171], stop: [30,41,58] },
//   { start: [255,207,160], stop: [234,92,68] },
//   { start: [212,121,121], stop: [130,105,151] }
// ];
// // how long for each transition
// var transition_time = 4;

// // internal type vars
// var currentIndex = 0; // where we are in the gradients array
// var nextIndex = 1; // what index of the gradients array is next
// var steps_count = 0; // steps counter
// var steps_total = Math.round(transition_time*60); // total amount of steps
// var rgb_steps = {
//   start: [0,0,0],
//   stop: [0,0,0]
// }; // how much to alter each rgb value
// var rgb_values = {
//   start: [0,0,0],
//   stop: [0,0,0]
// }; // the current rgb values, gets altered by rgb steps on each interval
// var prefixes = ["-webkit-","-moz-","-o-","-ms-",""]; // for looping through adding styles
// var div_style = $div.style; // short cut to actually adding styles
// var color1, color2;

// // sets next current and next index of gradients array
// function set_next(num) {
//   return (num + 1 < gradients.length) ? num + 1 : 0;
// }

// // work out how big each rgb step is
// function calc_step_size(a,b) {
//   return (a - b) / steps_total;
// }

// // populate the rgb_values and rgb_steps objects
// function calc_steps() {
//   for (var key in rgb_values) {
//     if (rgb_values.hasOwnProperty(key)) {
//       for(var i = 0; i < 3; i++) {
//         rgb_values[key][i] = gradients[currentIndex][key][i];
//         rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i],rgb_values[key][i]);
//       }
//     }
//   }
// }

// // update current rgb vals, update DOM element with new CSS background
// function updateGradient(){
//   // update the current rgb vals
//   for (var key in rgb_values) {
//     if (rgb_values.hasOwnProperty(key)) {
//       for(var i = 0; i < 3; i++) {
//         rgb_values[key][i] += rgb_steps[key][i];
//       }
//     }
//   }

//   // generate CSS rgb values
//   var t_color1 = "rgb("+(rgb_values.start[0] | 0)+","+(rgb_values.start[1] | 0)+","+(rgb_values.start[2] | 0)+")";
//   var t_color2 = "rgb("+(rgb_values.stop[0] | 0)+","+(rgb_values.stop[1] | 0)+","+(rgb_values.stop[2] | 0)+")";

//   // has anything changed on this interation
//   if (t_color1 != color1 || t_color2 != color2) {

//     // update cols strings
//     color1 = t_color1;
//     color2 = t_color2;

//     // update DOM element style attribute
//     div_style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from("+color1+"), to("+color2+"))";
//     for (var i = 0; i < 4; i++) {
//       div_style.backgroundImage = prefixes[i]+"linear-gradient(45deg, "+color1+", "+color2+")";
//     }
//   }

//   // we did another step
//   steps_count++;
//   // did we do too many steps?
//   if (steps_count > steps_total) {
//     // reset steps count
//     steps_count = 0;
//     // set new indexs
//     currentIndex = set_next(currentIndex);
//     nextIndex = set_next(nextIndex);
//     // calc steps
//     calc_steps();
//   }

//   if (div_style.backgroundImage.indexOf("gradient") != -1) {
//     window.requestAnimationFrame(updateGradient)
//   }
// }

// // initial step calc
// calc_steps();

// // go go go!
// window.requestAnimationFrame(updateGradient);




// Create a variable below
var helloWorld = "Hello World!";

// Console.log() your variable here.
console.log(helloWorld);

// $(document).ready(function(){
//     $("#btnViewCanada").click(function(){
//       $("#hello").slideDown();
//     });});


// $(window).on("load", function(){
//   // $('.largeName').css( "opacity", "1" ).animate();
//    $('.largeName').animate({
//     opacity: 1,
//     easing: "swing",
//     left: 50
//     // transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0),
//     // box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75),
//     // bottom: "+=200",
//     // height: "toggle"

    
//     // height: "toggle"
//   }, 2000, function() {
//     // Animation complete.
//   });

//     });

$('.nav-icon').on("click", function(){
  $('.grid-container-mob-nav').slideDown();
    });

$('.grid-container-mob-nav').on("mouseleave", function () {
  $('.grid-container-mob-nav').hide();
});


$(".nav-icon").mouseover(function (e) {    
  $(this).attr("src", $(this).attr("src").replace("./Images/Icon (1).png", "./Images/Icon (2).png"));
  }).mouseout(function (e) {
      $(this).attr("src", $(this).attr("src").replace("./Images/Icon (2).png", "./Images/Icon (1).png"));
  });

//  $('#canadaHover').on("mouseenter", function(){
//     $('#canadaHiddenPara').slideDown();
//       });

//  $('#canadaHover').on("mouseleave", function(){
//      $('#canadaHiddenPara').slideUp();
//           });


// $('#voyagerHover').on("mouseenter", function(){
//      $('#voyagerHiddenPara').slideDown();
//          });
        
// $('#voyagerHover').on("mouseleave", function(){
//     $('#voyagerHiddenPara').slideUp();
//         });


//  $('#merchantHover').on("mouseenter", function(){
//     $('#merchantHiddenPara').slideDown("slow");
//          });
               
//  $('#merchantHover').on("mouseleave", function(){
//     $('#merchantHiddenPara').slideUp();
//          });


$(".arrow").mouseover(function (e) {    
      $(this).attr("src", $(this).attr("src").replace("./Images/Navigation (5).png", "./Images/Navigation (7).png"));
      }).mouseout(function (e) {
          $(this).attr("src", $(this).attr("src").replace("./Images/Navigation (7).png", "./Images/Navigation (5).png"));
      });

 $(".arrow2").mouseover(function (e) {    
        $(this).attr("src", $(this).attr("src").replace("./Images/Navigation (9).png", "./Images/Navigation (10).png"));
        }).mouseout(function (e) {
            $(this).attr("src", $(this).attr("src").replace("./Images/Navigation (10).png", "./Images/Navigation (9).png"));
        });


$('.grid-item-csa-arrow').on("click", function(){
  $('.grid-item-csa-arrow').hide();
  $('.grid-container-csa-openArea').hide();
      $('.grid-container-csa-display').slideDown();
     
        });

// $(".arrow").mouseover(function () {
//   $(this).attr('src', $(this).data("hover"));
//         }).mouseout(function () {
//           $(this).attr('src', $(this).data("src"));
//         });


// $('.grid-container-largeName').on("mouseenter", function(){

//     $('.grid-item-skills').fadeIn(3000);
//     // $('#uxDesignSkill').addClass('grid-item-skills-2 h3');
   
    
//          });

//  $('#uxDesignSkill').on("mouseleave", function(){
//     $('#uxDesignSkill').removeClass('grid-item-skills-2');
//     $('#uxDesignSkill').removeClass('grid-item-skills-2 h3');
//         });

// $(".tab2").addClass("active");
// $(".tab1").removeClass("active");


$("#t-1").click((function() {
    $("html").animate(
      {
        scrollTop: $(".grid-item-largeName-CSA").offset().top
      },
      800 //speed
    );
  
}));

// $("#first-1").hover((function() {
//   $(this).text("Hey");
//   // $("html").animate(
//   //   {
//   //     scrollTop: $(".grid-container-csa-openArea-2").offset().top
//   //   },
//   //   800 //speed
//   // );

// }));

$("#t-1").on("mouseenter", function () {
  $(this).text("INTRODUCTION");
});

$("#t-1").on("mouseleave", function () {
  $(this).text("1");
});

$("#t-2").on("mouseenter", function () {
  $(this).text("USER RESEARCH");
});

$("#t-2").on("mouseleave", function () {
  $(this).text("2");
});

$("#t-3").on("mouseenter", function () {
  $(this).text("DEFINITION SYNTHESIS");
});

$("#t-3").on("mouseleave", function () {
  $(this).text("3");
});


$("#t-4").on("mouseenter", function () {
  $(this).text("IDEATION");
});

$("#t-4").on("mouseleave", function () {
  $(this).text("4");
});


$("#t-5").on("mouseenter", function () {
  $(this).text("ITTERATION");
});

$("#t-5").on("mouseleave", function () {
  $(this).text("5");
});
            
          
          
    

//   $(".themeChange").on("click", function(){
//     if ($(this).hasClass("regular")) {
//       $("#theme").attr("href", "css/blank.css")
//     }
//     else if ($(this).hasClass("blue")){
//       $("#theme").attr("href", "css/blue.css")
//     }
//     else if ($(this).hasClass("dark")){
//       $("#theme").attr("href", "css/dark.css")
//     }
//   });





$(document).ready(function () {

  
       
        

    var previousActiveTabIndex = 0;


   
       
    
    // var tab = $(".tab-switcher").data("tab-index"); 
    // console.log(tab);
    // if(tab == 0){
    //     $("#first").addClass("purp");
    //     $("#first-1").addClass("purp");
    // }

    // $("#first").addClass("purp");
    // $("#first-1").addClass("purp");


    $(".tabs .tab-switcher").each(function () {
      if($(this).data("tab-index") == 0){
        $(this).addClass("purp");
      }
     

    });
 
    

    $(".tab-switcher").on('click keypress', function (event) {
        // event.which === 13 means the "Enter" key is pressed

      


        if ((event.type === "keypress" && event.which === 13) || event.type === "click") {

            var tabClicked = $(this).data("tab-index");

            if(tabClicked != previousActiveTabIndex) {
                $("#allTabsContainer .tab-container").each(function () {
                    if($(this).data("tab-index") == tabClicked) {
                       
                        $(".tab-container").hide();
                        $(this).show();
                        previousActiveTabIndex = $(this).data("tab-index");
                       
                        return;
                    }
                   
                });
                $(".tab-switcher").removeClass("purp");
           

               

                

            }
            
  
            
        // var tapd = $(".tab-switcher").data("tab-index");
        var helloWrld = "Hello World!";

      

        $(".tabs .tab-switcher").each(function () {
          if($(this).data("tab-index") == tabClicked){
            $(this).addClass("purp");
          }
         

        });
           
         

        }
        console.log(previousActiveTabIndex);


       
    });

   
});

