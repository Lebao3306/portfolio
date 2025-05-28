// JavaScript Document
var typed = new Typed('.element',{
               	strings: ["Web Designer.","Code Developer.","Apps Designer.","2D Artist"],
       	 	typeSpeed:20,
        		backSpeed:20,
        		loop:true,
        		});
$('.timeline-panel').click(function() {
    $('.timeline-body', this).toggle(); // p00f
});
$('.counter').countUp();

AOS.init();