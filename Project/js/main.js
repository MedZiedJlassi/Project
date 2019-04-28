$(document).animateScroll();

//animation bordure
$('.elem-titre h4').on('mouseenter',(e) =>{
    $(e.currentTarget.nextElementSibling).toggleClass('bordershow');
});
$('.elem-titre h4').on('mouseleave',(e) =>{
    $(e.currentTarget.nextElementSibling).toggleClass('bordershow');
});
// animation : ratation des Elements 
function rotate(id,back){
    document.getElementById(back).style.display="block";
    var degrees = 180;
    document.getElementById(id).style.transform = "rotateY("+degrees+"deg)";
}
function rotateLeave(id,back){
    var degrees = 0;
    document.getElementById(id).style.transform ="rotateY("+degrees+"deg)";
    document.getElementById(back).style.display="none";
}
// GENERAL SETTING
window.sr = ScrollReveal({ reset: true });

// Custom Settings
sr.reveal('.foo-1', { duration: 2000 });

sr.reveal('.right', { origin: 'right', distance: '50%', duration: 2000 });

sr.reveal('.foo-3', { 
  rotate: { x: 100, y: 100, z: 0 },
  duration: 1000
});

sr.reveal('.foo-4', { 
  viewFactor: 1
});

sr.reveal('.foo-5', { 
  duration: 2500 
});