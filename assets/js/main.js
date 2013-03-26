$(document).ready(function() {
	
	var currentId;
	var paragraph;

	$.jQTouch({
		icon: 'jqtouch.png',
		statusBar: 'black-translucent',
		
	});
	
	if (!!('ontouchstart' in window)) {
			$('nav').touchScroll();
			$('nav').touchScroll({elastic: false}); // Turn off the elastic-bounce at the end of a scroll movement
			$('nav').touchScroll({momentum: false}); // Turn off the momentum when a finger is lifted from the screen
	}
	
	$(".tabOver").mouseover(function(){
		
		var currentId = $(this).attr('id');
		//alert(currentId);
		//alert(tab0);
		var tabObj = eval("(" + currentId + ")");
		$(tabObj).css('background-color', '#ff6600');
		$(tabObj).children().css('color', 'white');
	});
	
	$(".tabOver").mouseout(function(){
		
		var currentId = $(this).attr('id');
		//alert(currentId);
		//alert(tab0);
		var tabObj = eval("(" + currentId + ")");
		
		if(tabObj == tab0){
			
			$(tabObj).css('background-color', '#212121');

			
		}
		if(tabObj == tab1){
			
			$(tabObj).css('background-color', '#2c2c2c');
			
		}
		if(tabObj == tab2){
			
			$(tabObj).css('background-color', '#393939');
			
		}
		if(tabObj == tab3){
			
			$(tabObj).css('background-color', '#454444');
			
		}
			$(tabObj).children().css('color', '#999999');
	});

});

//alert($('.middleContent').height());
//alert($('#tab0').width());

//var windowWidth = $('.middleContent').width();

//$('#pageCase0').width(windowWidth);
//$('#pageCase1').width(windowWidth);
//$('#pageCase2').width(windowWidth);
//$('#pageCase3').width(windowWidth);

//$('#pageCase1').css(
//{
  //'left': windowWidth
//});

//var myTabs = new Array[];

//$('#tab0').mouseover(function(){
	
	//alert("hit");
	
//});


	
//for (var i=0; i<4; i++){
	
	//var tabs = $('#tab' + i);
	//var para = $('p');
	
	//tabs.style.opacity=0;
	
	//$(tabs).mouseover(function() {
		
		//$(tabs+para).css('color', 'white');
		//$('#blogOption').css('background-color', '#ff6600');
		//alert("hit"+tabs);
		
	//});
	
	//$(tabs).mouseout(function() {
	
		//$('#blogOption p').css('color', '#999999');
		//$('#blogOption').css('background-color', '#212121');
		//alert("hit");
	//});
//}

	
