


// Create a variable below
var helloWorld = "Hello World!";

// Console.log() your variable here.
console.log(helloWorld);

// $(document).ready(function(){
//     $("#btnViewCanada").click(function(){
//       $("#hello").slideDown();
//     });});






 $('#canadaHover').on("mouseenter", function(){
    $('#canadaHiddenPara').slideDown();
      });

 $('#canadaHover').on("mouseleave", function(){
     $('#canadaHiddenPara').slideUp();
          });


$('#voyagerHover').on("mouseenter", function(){
     $('#voyagerHiddenPara').slideDown();
         });
        
$('#voyagerHover').on("mouseleave", function(){
    $('#voyagerHiddenPara').slideUp();
        });


 $('#merchantHover').on("mouseenter", function(){
    $('#merchantHiddenPara').slideDown("slow");
         });
               
 $('#merchantHover').on("mouseleave", function(){
    $('#merchantHiddenPara').slideUp();
         });


$(".arrow").mouseover(function (e) {    
      $(this).attr("src", $(this).attr("src").replace("./Images/Navigation (5).png", "./Images/Navigation (7).png"));
      }).mouseout(function (e) {
          $(this).attr("src", $(this).attr("src").replace("./Images/Navigation (7).png", "./Images/Navigation (5).png"));
      });


$('.grid-item-csa-arrow').on("click", function(){
  $('.grid-item-csa-arrow').hide();
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


$("#projectbtn").click((function() {
    $("html").animate(
      {
        scrollTop: $(".grid-container-myWork").offset().top
      },
      800 //speed
    );
  
}));

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

