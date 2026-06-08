document.addEventListener('DOMContentLoaded',function(){
  var t=document.querySelector('.nav-toggle'),l=document.querySelector('.nav-links');
  if(t&&l){t.addEventListener('click',function(){l.classList.toggle('open');});}
});
