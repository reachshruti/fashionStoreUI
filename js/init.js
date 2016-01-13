(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider({full_width: true});
    $('.materialboxed').materialbox(); 
    $('.carousel').carousel();
    //$("#sbutton").hide();
    $("#email").blur(function(){
    $( "#sbutton" ).removeClass( "disabled" );
});
    $("#sbutton").click(function(){
    window.location.href = "shruti.html";
});
    $("#icon_telephone").blur(function(){
    $("#modal1").openModal();
});
  }); // end of document ready
})(jQuery); // end of jQuery name space