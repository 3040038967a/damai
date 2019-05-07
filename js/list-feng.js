// alert(1);
 var nume999=0; //通过此变量控制两个按钮hover状态变动 
 function clickbox1(){
 $(".rightf-3").click(function(){
	$(this).css({"background":"url(img/min.png) no-repeat -33px 12px","background-color":" #ed0a75"});
	$(".rightf-2").css({"background":"url(img/min.png) no-repeat -80px 12px","background-color":"#f5f5f5"});
	$(".display1").css("display","none");
	$(".display").css("display","block");
	nume999=0;
})
}
$(".rightf-3").hover(function(){

	$(this).css({"background":"url(img/min.png) no-repeat -33px 12px","background-color":" #ed0a75"});
	clickbox1();
},function(){
	if (nume999==0) {
		$(this).css({"background":"url(img/min.png) no-repeat -33px 12px","background-color":" #ed0a75"});
	}
	else{
		$(this).css({"background":"url(img/min.png) no-repeat 12px 12px","background-color":"#f5f5f5"});
	}	
})






function clickbox(){
	$(".rightf-2").click(function(){
	// alert(1);
	$(this).css({"background":"url(img/min.png) no-repeat -123px 12px","background-color":" #ed0a75"});
	$(".rightf-3").css({"background":"url(img/min.png) no-repeat 12px 12px","background-color":"#f5f5f5"});
	$(".display").css("display","none");
	$(".display1").css("display","block");
	nume999=1;
})
}
$(".rightf-2").hover(function(){
	$(this).css({"background":"url(img/min.png) no-repeat -123px 12px","background-color":" #ed0a75"});
	clickbox();
	
},function(){
	// clickbox();
	if (nume999==1) {
		$(this).css({"background":"url(img/min.png) no-repeat -123px 12px","background-color":" #ed0a75"});
	}
	else{
		$(this).css({"background":"url(img/min.png) no-repeat -80px 12px","background-color":"#f5f5f5"});
	}	
})
// console.log(nume999);

