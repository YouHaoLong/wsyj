
//切换导航按钮并添加当前的渐变背景
$(".navbar-nav").find('li').on('click',function(){
	$(this).addClass('active').siblings().removeClass('active');
})
function addPhoneCompment(){
	$(".comm").toggle().addClass('animated bounceInRight');	
}


//改变电话按钮颜色
 var nk =0;
	function n_click(obj){
		console.log("click " + obj.phoneNumber);
		$(".pushed"+nk).css("color","#666");
		nk = obj.phoneNumber;
		//setTimeout(function(){
		//	$(".pushed"+n).css("color","black");
		//},2000);
		$(".pushed"+obj.phoneNumber).css("color","red");
	}
// //----------------------获取系统日期时间周几------------------------------
// function showTime(){
//     var show_day=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
//     var time=new Date();
//     var year=time.getFullYear();
//     var month=time.getMonth()+1;
//     var date=time.getDate();
//     var day=time.getDay();
//     var hour=time.getHours();
//     var minutes=time.getMinutes();
//     var second=time.getSeconds();
//     month<10?month='0'+month:month;
//     date<10?date='0'+date:date;
//     hour<10?hour='0'+hour:hour;
//     minutes<10?minutes='0'+minutes:minutes;
//     second<10?second='0'+second:second;
//     var now_time=+year+'-'+month+'-'+date+' '+show_day[day]+' '+hour+':'+minutes+':'+second;
//
//
//     document.getElementById('weather-deta').innerHTML=now_time;
//
//     setTimeout("showTime();",1000);
// }
// $(function () {
//     $("#weather-deta").append(showTime())
// });













//-------------点击编辑文本，封装--------------------------
$(function () {
    $.fn.editTxt=function (a,b) {
        //获取class为editTxt的元素
        $(b).on("click",a,function() {
            var P = $(this);
            var pType = P.attr("type");//获取p标签的类型
            var typeId = P.attr("typeId");//获取信息或者记录的Id
            var txt = P.text();
            var textarea = $("<textarea type='text' style='resize: none;width: 100%;border: 1px solid #ddd;outline: none;padding:5px;border-radius:4px'></textarea>");
            textarea.text(txt);
            P.html(textarea);
            textarea.click(function() { return false; });
            //获取焦点
            textarea.trigger("focus");
            //文本框失去焦点后提交内容，重新变为文本
            textarea.blur(function() {
                var newtxt = $(this).val();
                //判断文本有没有修改
                if (newtxt != txt) {
                	if(pType == "info"){
                		addRemark(typeId, newtxt, "/infoAction/updateInfomation");
                	}else{
                		addRemark(typeId, newtxt, "/infoAction/updateMessageHandleRecord")
                	}
                    P.html(newtxt);
                }else{
                    P.html(txt);
                }
            });
        });
    };

    $.fn.editTxt(".callTxt",".event_two");//短信报告编辑
    $.fn.editTxt(".messTxt",".event_scrollbar");//短信报告编辑
    $.fn.editTxt(".messTxt",".tabs_menu");//短信处理备注
});

//添加信息和信息处理备注
function addRemark(Id,remark,url){
	$.ajax({
			url:ctxPath+url,
			type:"post",
			data:{
				remark:remark,
				Id:Id
			},
			dataType:"json",
			success:function(data){
				console.log(data);
			}
		})
}

//--------------值班信息事件列表与信息处理记录切换-----------------------
$(function () {
    var aLi=$(".event_scrollbar").children('article').children('.online');//获取事件列表集合
	var aLi=$(".event_scrollbar").find('.online');//获取事件列表集合
	var aEvents=$(".events").children(".event_two");
    console.log(aLi.length);
    console.log(aEvents.length);
	$(".event_scrollbar").on('click',".scroll-content li",function () {
       /* event.stopPropagation();*/
        var i=$(this).index();
        $(this).addClass("online_ac").siblings().removeClass("online_ac");
        aEvents.eq(i).show().siblings().hide();//显示当前事件对应的信息处理记录
        var index=aEvents.eq(i).show().siblings().hide();
        aEvents.eq(i).show().addClass("event_two_ac").siblings().hide().removeClass("event_two_ac");//显示当前事件对应的信息处理记录
        var index03=aEvents.eq(i).show().addClass("event_two_ac").siblings().hide().removeClass("event_two_ac");//显示当前事件对应的信息处理记录
         $('#verifyBtn').click(function(){
        	$('.verifyContent').show().siblings().hide();
        	
        })
         
        
	})
	

	});
	
//点击添加按钮，弹出新的信息的手动编辑框
// 	$('.type_add').on('click',function(){
// 		$('.edit').toggleClass("diss");
// 		$('.send_massage').focus();
// 	});



	
//信息分类弹窗
// $('.eventInfo_btn').off("click").on('click',function(){//点击信息按钮，弹窗弹出
//     var indexs=$('.eventInfo_btn').index(this);//点击当前信息按钮
//     $('.eventItem').eq(indexs).toggle(500);//当前信息弹框切换
//
//
//     $('.eventItem').eq(indexs).find('li').off("click").on('click',function(){//当前信息弹框切换找到里面的li小图标
//         var index=$('.eventInfo_btn').index(this);
//         var Iconfont=$(this).html();//获取当前li的结构（html)
//         // 当前li添加删除按钮
//         $(".leftIcon").eq(indexs).append('<li>' + Iconfont + '<span class="spanIcon iconfont icon-guanbi1 dis"></span></li>');//点击当前每个li并添加到左侧(leftIcon)中；
//
//         $(".leftIcon").eq(indexs).find('li').on('mouseover',function(){//鼠标进入事件 显示
//             $(this).find('span').show();
//         })
//         $(".leftIcon").eq(indexs).find('li').on('mouseout',function(){//鼠标离开时 隐藏
//             $(this).find('span').hide();
//         })
//         $(".leftIcon").find('.spanIcon').on('click',function(){
//             $(this).parent().hide();
//         });
//     });
// });





//发送短信的删除按钮
//
// $(".fasongduanxing_button .fasongduanxing_button_ul li").on('mouseover',function () {
// 	$(this).find('.position_relative_span').show();
// })
// $(".fasongduanxing_button .fasongduanxing_button_ul li").on('mouseout',function(){
//     $(this).find('.position_relative_span').hide();
// })
// //传真的删除按钮
// $(".fasongchuanzhen_button ul.fasongchuanzhen_button_ul li").on('mouseover',function () {
//     $(this).find('.position_relative_span').show();
// })
// $(".fasongchuanzhen_button ul.fasongchuanzhen_button_ul li").on('mouseout',function(){
//     $(this).find('.position_relative_span').hide();
// })
//
// $(".fasongduanxing_button .fasongduanxing_button_ul .position_relative_span i").on('click',function () {
// 	$(this).parent().parent().parent().remove();
// })
//
// $(".fasongchuanzhen_button ul.fasongchuanzhen_button_ul .position_relative_span i").on('click',function () {
//     $(this).parent().parent().parent().remove();
// })




















//处理记录/处理流程的切换
		$(".record_tab").on('click',function(){
			$(this).addClass('ac').siblings().removeClass('ac');
			var index=$('.record_tab').index(this);
			$('.record_content').eq(index).removeClass('dis').siblings().addClass('dis');
		})
		
//点击信息栏部分会切换到相应的信息处理部分
		$('.event').on('click',function(){
			$('.record_item').eq($(this).index()).removeClass('dis').siblings().addClass('dis');
		})
		
	//添加编发事件报告短信
		function add(){
			$('.add_content').show();
			$('.linkman_content').hide();
		}

		//点击输入框，当前的删除图标显示出来
		$(".del").on('click',function(){
			var index=$('.del').index(this);
			$('.delete i').eq(index).show();
		})
		
		//点击删除图标，清空输入框并获得焦点
		$(".del").each(function(){
		   var $this=$(this);
		   $this.prev('.delete').on('click',function(){
		      $this.val("").focus(); // 清空并获得焦点
		   });
		})
	
//首页流程
		$(function(){
		    
		   $('.calling .call_content').find('a').on('click',function(){ //点击结束通话按钮会弹出是否需要后续处理的弹框
		    	$('.calling').fadeOut(300);
		    	$('.modd').fadeOut(300);
		        $('.information-process').fadeIn(300);
		    })
		   
		   $('.btn-no').on('click',function(){//点击否定处理会将新的事件删掉
		   	    $(this).parent().parent().hide();//点击是的按钮，当前这行会隐藏起来
		   	    $('.btn-no:last').on('click',function(){ //如果点击否的按钮是最后一个元素
		   	    	$('.information-process').hide();    //弹框隐藏
		   	    })
		   	    var index=$('.btn-no').index(this);//点击当前这行的索引值
		   	    $('.new').eq(index).hide();        //点击否的按钮，新的事件就会隐藏
//			   	$('.top').show(); //第一排显示出来
		   })
	    	
		   $('.btn-sure').on('click',function(){ //点击是的按钮。新的事件保留
		   	    $(this).parent().parent().hide();//点击是的按钮，当前这行会隐藏起来
		   	    $('.btn-sure:last').on('click',function(){ //如果点击按钮是最后一个元素
		   	    	$('.information-process').hide();      //弹框隐藏
		   	    })
			   	var index=$('.btn-sure').index(this); //点击当前这行的索引值
			   	$('.new').eq(index).show(); //点击是的按钮，新的事件就会继续显示
		   })
		   
		   $('.all_sure').on('click',function(){ //点击全部处理按钮
			   	$('.new').show();                //全部新的事件都会保留
			   	$('.information-process').hide();//弹框隐藏
		   })

           //提取要素弹框
	    	$('#extract').click(function(){
	    		$(".extract").toggle().addClass('animated bounceInRight');
	    		$('.modd').fadeIn(500);
	    	})
	    	
            //点击确定按钮，提取要素弹框消失	    	
		    $('#extract_btn').on('click',function(){
		    	$(".extract").fadeOut(500);
		    	$('.modd').fadeOut(500);
		    })
		    
		    //点击模态层，提取要素弹框消失
		    $('.modd').on('click',function(){
		    	$(".extract").fadeOut(500);
		    	$('.modd').fadeOut(500);
		    })
		    
		     //传真弹框
		    $('#fax').click(function(){
		    	$(".fax_alert").toggle().addClass('animated bounceInRight');
		    	$('.modd').fadeIn(500);
		    })
		    
		    //点击发送传真按钮，发送状态弹框出来
		    $('.receipt .send_btn').on('click',function(){
				$('.fax_state').show(1000);
			})
		    
		     //点击模态层，传真弹框消失
		    $('.modd').on('click',function(){
		    	$(".fax_alert").fadeOut(500);
		    	$('.modd').fadeOut(500);
		    })
		    
		    //改变电话按钮颜色
		   var nk =0;
	    	function n_click(n){
	    		$(".pushed"+nk).css("color","#666");
	    		nk = n;
	        	$(".pushed"+n).css("color","orangered");
	        	setInterval(n_click(n),2000);
	        }
	    	
	    //搜索框弹出内容	
	    $(".comm_search").on('click',function(){
        	var index01=$(".comm_search").index(this);
        	$(this).bind("input propertychange change",function(event){
	 			$(".search_alert").eq(index01).show().addClass('animated bounceInDown');
	 			$(".search_alert").eq(index01).find('li').on('click',function(){
	                $(".search_alert").eq(index01).hide(500);
	            })
	        });
           
        })

		  
	})






// $(document).ready(function () {//页面加载时执行程序
//
//
//
//     /*当我点击值班信息的处理记录的按钮时，信息处理记录只显示要处理的板块的内容*/
//     $(".chuanzhen_click").click(function () {//这是传真的
//         var chuanzhen_skip= $(".chuanzhen_skip");
//         chuanzhen_skip.show().siblings().hide();
//     })
//
//     $(".dianhualuyin_click").click(function () {//这是电话的
//         var dianhualuyin_skip= $(".dianhualuyin_skip");
//         dianhualuyin_skip.show().siblings().hide();
//     })
//
//     $(".duanxing_click").click(function () {//这是短信的
//         var duanxing_skip= $(".duanxing_skip");
//         duanxing_skip.show().siblings().hide();
//     })
//
//     $(".yujingxinxizhuangtai_click").click(function () {//这是预警的
//         var duanxing_skip= $(".yujingxinxizhuangtai_skip");
//         duanxing_skip.show().siblings().hide();
//     })
//
//     $(".shoujixinxi_click").click(function () {//这是手机的
//         var duanxing_skip= $(".shoujixinxi_skip");
//         duanxing_skip.show().siblings().hide();
//     })
//
//     $(".weixin_click").click(function () {//这是微信的
//         var duanxing_skip= $(".weixin_skip");
//         duanxing_skip.show().siblings().hide();
//     })
//
//     $(".qqyemian_click").click(function () {//这是qq的
//         var duanxing_skip= $(".qqyemian_skip");
//         duanxing_skip.show().siblings().hide();
//     })
//
//     $(".diannao_click").click(function () {//这是电脑的
//         var duanxing_skip= $(".diannao_skip");
//         duanxing_skip.show().siblings().hide();
//     })
// })
//
//
//
//















