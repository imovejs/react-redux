
fetch('http://music.movecss.com/src/api.php', {
	headers: {
		"Content-Type": "application/x-www-form-urlencoded"
	},
}).then(function(response) {
	return response.text();
}).then(function(responseText) {
	var datas=JSON.parse(responseText).data.imglist;
	//console.log(datas.data.musiclist);
	var str='';
	for (var i = 0; i < datas.length; i++) {
		str+= '<img class="imgs" src="'+datas[i]+'"></img>';
	};
	$("body").append(str);
}).catch(function(error) {
	console.log(error);
});

//https://developer.chrome.com/extensions/contextMenus#type-ContextType
console.log("呵呵呵licam！！！");



/*chrome.notifications.create('1024', options,callback);

function callback(notificationsID){
  	console.log('uppop done!'+notificationsID);
}*/


//chrome.extension.getBackgroundPage().notification(options);
var interFn;
document.querySelector(".createMessage").addEventListener("click",function(e){
	if(interFn){clearInterval(interFn);}
	interFn=setInterval(function(){
		var options={
			type:'list',
			title:'Hello!'+Math.random(),
			iconUrl:'../images/appicon.jpg',
			message:'超过5000万人使用，免费的广告拦截器，可阻止所有烦人的广告及恶意软件和跟踪。',
			buttons:[{title:'Hello!',iconUrl:'../images/appicon.jpg'},
				{title:'Word!',iconUrl:'../images/appicon.jpg'}],
			contextMessage:'contextMessagecontextMessage',
			items:[{title:'Hello!',message:'../images/appicon.jpg'},
				{title:'Word!',message:'../images/appicon.jpg'},
				{title:'Hello!',message:'../images/appicon.jpg'},
				{title:'Word!',message:'../images/appicon.jpg'}],
		}
		chrome.extension.getBackgroundPage().notification("sendMessage",options);
		setTimeout(function(){
			chrome.notifications.clear("sendMessage", function(){ console.log('clear notification')});
		},600)
		console.log('msg done !!');
	},1000);
});

document.querySelector(".clearMessage").addEventListener("click",function(e){
	if(interFn){clearInterval(interFn);}
	console.log('清除定时器!!!');
});

$(function(){

});






 

