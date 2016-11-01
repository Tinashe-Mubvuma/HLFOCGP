$("#sign_up").click(function(){
	$("#login_box").hide();
	$("#create_box").fadeIn(1000);
	$(this).hide();
	$("#login").fadeIn(1000);
});

$("#login").click(function(){
	$("#create_box").hide();
	$("#login_box").fadeIn(1000);
	$(this).hide();
	$("#sign_up").fadeIn(1000);
});
$("#post").click(function(){
	$("#share_box").fadeIn(500);
});

$("#cal").click(function(){
	$(this).css("background", "rgba(0,0,0,0.5)");
	$(this).css("border-left", "5px solid #d5a759").css("color","#d5a759");
	$("#goto_pro").css("border", "none").css("background", "rgba(0,0,0,0)").css("color","#133b87");
	$("#cont").css("border", "none").css("background", "none").css("color","#133b87");
	$("#postt").hide();
	$("#profile").hide();
	$("#contacts").hide();
	$("#calendar").fadeIn(1000);
});

$("#home").click(function(){
	location.reload();
});

$("#goto_pro").click(function(){
	$(this).css("background", "rgba(0,0,0,0.5)");
	$(this).css("border-left", "5px solid #d5a759").css("color","#d5a759");
	$("#cal").css("border", "none").css("background", "none").css("color","#133b87");
	$("#cont").css("border", "none").css("background", "none").css("color","#133b87");
	$("#postt").hide();
	$("#calendar").hide();
	$("#contacts").hide();
	$("#profile").fadeIn(1000);
});

$("#cont").click(function(){
	outputContacts();
	$(this).css("background", "rgba(0,0,0,0.5)");
	$(this).css("border-left", "5px solid #d5a759").css("color","#d5a759");
	$("#cal").css("border", "none").css("background", "none").css("color","#133b87");
	$("#goto_pro").css("border", "none").css("background", "rgba(0,0,0,0)").css("color","#133b87");
	$("#postt").hide();
	$("#calendar").hide();
	$("#profile").hide();
	$("#contacts").fadeIn(1000);
});
