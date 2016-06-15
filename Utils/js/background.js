	/***************************\ 	
	*  						    *		
	*    =,    (\_/)    ,=      *
	*     /`-'--(")--'-'\		*	
	*    /     (___)     \	    *	
	*   /.-.-./ " " \.-.-.\	 	*
	*   email:move11@126.com    *
	\***************************/
(function(global){
	var current=localStorage["__current__"] || 0;
	//创建右键菜单
	var contextMenuId = chrome.contextMenus.create({
		//"type"://["normal", "checkbox", "radio", "separator"] 
		"title": "图像模糊处理",
		"contexts": ["all"]  // ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"]
	});

	//监听右键菜单，一旦被点击，则通知前台
	chrome.contextMenus.onClicked.addListener(function (tab) {
		 
		var arr=["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"];
		// Send a message to the active tab
		chrome.tabs.query({
			active : true,
			currentWindow : true
		}, function (tabs) {
			var activeTab = tabs[0];
			//chrome.tabs.sendMessage(activeTab.id, {"message": transstorage});
			for (var i = 0; i < 1; i++) {
				 
				chrome.tabs.sendMessage(activeTab.id, {
					"channelmsg" : current
				});
			}
		});
	});

	// 创建一个简单的文字通知：
	global.notification=function(){ 
		var notification = chrome.notifications.create(
		  '48.png',  // icon url - can be relative
		  'Hello!',  // notification title
		  'Lorem ipsum...'  // notification body text
		);
		notification.show();
	} 
		
})(window)
