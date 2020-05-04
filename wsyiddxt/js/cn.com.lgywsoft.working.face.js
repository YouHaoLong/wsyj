
/** 窗口最大化 **/
function max_win(){
	c_WinMaxMinHandle.max_win();
}

/** 窗口最小化 **/
function min_win(){
	c_WinMaxMinHandle.min_win();
}

/** 窗口还原 **/
function normal_win(){
	c_WinMaxMinHandle.normal_win();
}

function close_win(){
	c_WinMaxMinHandle.close_win();
}

function reload_win(){
	c_WinMaxMinHandle.reload_win();
}

function close_win_001(){
	c_WinMaxMinHandle.close_win_001();
}
function close_win_002(){
	c_WinMaxMinHandle.close_win_002();
}

function new_test_win(x,y,w,h){
	c_WinMaxMinHandle.new_test_win(x,y,w,h);
}
function new_exe_win(w,h){
	c_WinMaxMinHandle.new_exe_win(w,h,"");
}

function new_form_win(x,y,w,h,url){
	c_WinMaxMinHandle.new_form_win(x,y,w,h,url);
}
function onFaceSettings(width,height,menuHeight){
	console.log("width:"+width+" height:"+height+" menuHeight:"+menuHeight);
	var height=height-266;//顶部到值班信息滚动栏 距离是266
	$("#infomation").css("max-height", height+"px");
	$("#eventsHanlds").css("max-height", height-4+"px");//不知道是不是信息处理这一栏有点误差
	$("#navigationLeft").css("height", height+166+"px");//最左边导航栏到顶部的距离
	
	$(".chen").mCustomScrollbar("update");
	$(".chens").mCustomScrollbar("update");
	
	//var w = document.getElementById("wrapper");
	//console.log(w);
	//w.style.width=width;
	//w.style.height=height;
}

function auto_win(){
	c_WinMaxMinHandle.auto_win();
}

function onWinNormal(){
	console.log("onWinNormal..");
}

function onWinMaximized(){
	console.log("onWinMaximized..");
}

function onWinMinimized(){
	console.log("onWinMinimized..");
}

function onWinClose(){
	console.log("onWinClose..");
}

function onWinRefresh(){
	console.log("onWinRefresh..");
}