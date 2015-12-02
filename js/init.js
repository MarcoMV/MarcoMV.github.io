(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
}


)(jQuery); // end of jQuery name space

 $(document).ready(function(){
      $('.parallax').parallax();
    });


  $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });


  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();
  $('.button-collapse').sideNav('show');