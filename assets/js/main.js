$(document).ready(function() {
	
	var currentId;
	var paragraph;

	$.jQTouch({
		icon: 'jqtouch.png',
		statusBar: 'black-translucent',
		
	});
	
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

	
