$(document).ready(function(){
	
   flipbutton = 1;

   $(".flip-button").click(function(){
	  if(flipbutton == 1) {
	     flipbutton = 0;
	     $(".card-message").removeClass("hidden-backside");
         $(".card-background").addClass("blurred");
         $(".card-background").css("filter", "blur(8px)");
         $(".card-background").css("-webkit-filter", "blur(8px)");
	  }
	  else if(flipbutton == 0) {
	     flipbutton = 1;
	     $(".card-message").addClass("hidden-backside");
         $(".card-background").css("filter", "blur(0)");
         $(".card-background").css("-webkit-filter", "blur(0)");
	  }
	  else{
	     flipbutton = 1;
	  }
   });

});