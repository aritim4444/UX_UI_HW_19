


// Create a variable below
var helloWorld = "Hello World!";

// Console.log() your variable here.
console.log(helloWorld);

// $(document).ready(function(){
//     $("#btnViewCanada").click(function(){
//       $("#hello").slideDown();
//     });});



$('.nav-icon').on("mouseenter", function(){
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

