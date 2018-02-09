// must have jQuery library included

// same code for all buttons
jQuery(document).ready(function($) {
  // when user clicks button, toggle the "open" class
  jQuery('.lines').click(function(){
    // hamburger button
    jQuery(this).toggleClass('open');
    // menu area
    jQuery('.nav-wrap').toggleClass('open');
    // body area
    jQuery('.width-wrap').toggleClass('open');
  });
});