	/***************************\ 	
	*  						    *		
	*    =,    (\_/)    ,=      *
	*     /`-'--(")--'-'\		*	
	*    /     (___)     \	    *	
	*   /.-.-./ " " \.-.-.\	 	*
	*   email:move11@126.com    *
	\***************************/
console.debugs=function(str){
	console.log('==========================='); 
	console.log('%c%s','background:yellow;color:orange;font-size:20x;',str);
	console.log('==========================='); 
}

$(function(){
	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) { 
		console.debugs(request.channelmsg); 
		if (request && request.channelmsg == 0 ) {
			 
			$("img").css({
				"-webkit-filter" : "blur(5px)"
			});
			
			chrome.extension.getBackgroundPage().notification(); 
		};
	}); 
});
