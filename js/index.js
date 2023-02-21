


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