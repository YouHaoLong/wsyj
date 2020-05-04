
//全选/反选/所有的子项选中或者不全选中后，全选按钮也选中或者不选中
var check={
		checkType:function(){
			$('.all').click(function(){
		    if(this.checked){ //判断当前全选框是否选中，如果选中则全选，否则全不选  
		        $(this).parent().parent().next().find('input').prop("checked", true);  
		    }else{   
			    $(this).parent().parent().next().find('input').prop("checked", false);
		    }   
		});
		
		//所有的子项选中或者不全选中后，全选按钮也选中或者不选中
		$('.menu li').find('input').on('click',function(){
		   var n=$(this).parent().parent().find('input').length;
		   console.log(n);
		   var selectedLength=null;
		   $(this).parent().parent().find('input').each(function(){
		      selectedLength+=$(this.checked).length;//所有选中的checkbox的长度
		      console.log(selectedLength);
		      if(selectedLength==n){
		         $(this).parent().parent().prev().find('input').prop("checked",true);//全选按钮
		      }else{
		         $(this).parent().parent().prev().find('input').prop("checked",false);
		      }
		   })
		})
	}
}

 //封装切换函数
$(function cut(){
	function choose_alert(obj1,obj2){
		obj1.click(function(){
		$(this).addClass('ac').siblings().removeClass('ac');
		obj2.eq($(this).index()).removeClass('dis').siblings().addClass('dis');
        })
	}
    //全部和相关联系人的切换
	$('.current').click(function(){//点击与二级菜单切换
		var class1=$(this).find('i').attr('class');
		if(class1.indexOf('icon-xiangshang1')==-1){
		  $(this).find('i').removeClass('icon-jiantouxia').addClass('icon-xiangshang1');
		}else {
		  $(this).find('i').removeClass('icon-xiangshang1').addClass('icon-jiantouxia');
		}
	    var index=$('.current').index(this);
	    $('.menu').eq(index).toggle();
	})
	
	choose_alert($('#tab_mes1 .tab_mes'),$('#tab_mes1 .tabs_menu'));
	choose_alert($('#tab_mes2 .tab_mes'),$('#tab_mes2 .tabs_menu'));
	choose_alert($('#tab_mes3 .tab_mes'),$('#tab_mes3 .tabs_menu'));
	choose_alert($('#tab_mes4 .tab_mes'),$('#tab_mes4 .tabs_menu'));
	choose_alert($('#tab_mes5 .tab_mes'),$('#tab_mes5 .tabs_menu'));
	choose_alert($('#tab_mes6 .tab_mes'),$('#tab_mes6 .tabs_menu'));
	choose_alert($('#tab_mes7 .tab_mes'),$('#tab_mes7 .tabs_menu'));
	choose_alert($('#tab_mes8 .tab_mes'),$('#tab_mes8 .tabs_menu'));
	choose_alert($('#tab_mes9 .tab_mes'),$('#tab_mes9 .tabs_menu'));
	choose_alert($('#tab_mes10 .tab_mes'),$('#tab_mes10 .tabs_menu'));
	choose_alert($('#team .team_mes'),$('#team .team_menu'));
	choose_alert($('#eventsHanld .tab_mes'),$('#eventsHanld .tabs_menu02'));//全部、核实、报告、通告
	
	$('#tab_mes1 .tab_mes01').on('click',function(){
		$('.comm_right01').show();
		$('.comm_right02').hide();
	})
	$('#tab_mes1 .tab_mes02').on('click',function(){
		$('.comm_right01').hide();
		$('.comm_right02').show();
	})
})

//操作标签的切换
$('.handle_tags li').on('click',function(){
	$(this).addClass('ac').siblings().removeClass('ac');
})
//核实、报告、通告
$('.handle_tags2 li').on('click',function(){
	$(this).addClass('ac').siblings().removeClass('ac');
})

//点击图片图标，打开图片预览的脚本
jQuery(function(){
	$('.textIcon').on('click',function(){
	   	$('.send_massage').show().focus();
	   	$('.imgConten').hide();
    })
	$('.tip-label').on('click',function(){
		   	$('.imgConten').show().focus();
		   	$('.send_massage').hide();
	    })

//	$('.btn_fa').on('click',function(){
////		var img=$(this).siblings().find('.preview').attr('src');//获取图片并记录下
//		var Img=$(this).parent().find('.preview').attr('src');//获取src
//    	if(Img !=undefined && Img !=''){//当图片为没定义是时也不能发出消息
//				if(Img){
//					$(".send_content input").val(''); //清除上传图片的值
//					
//					//添加聊天内容带图片
//						$(this).parent().parent().find('.imgConten')
//						   .append(' <img class="preview" src="'+Img+'">');
//				}
//
//			$(this).parent().find('.preview').attr("src",'').css("opacity","0");//把上一次的src清除,""是清除src的
////				$('.send_massage').val("");//发送完信息后，内容清空
//	    }
//    })
			
	jQuery(".send_box input").change(function(){
		imgPreview(jQuery(this)[0],jQuery(this));
		$('.preview').css("opacity","1");
//				$('.send_content .preview').removeClass("dis");
	})
	   function imgPreview(fileDom,that){
        //判断是否支持FileReader
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        }

        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function(e) {
            //获取图片dom
            that.parents(".send_box").find(".preview").prop("src",e.target.result)//图片路径设置为读取的图片
        };
        reader.readAsDataURL(file);
    }
})
		
//联系人弹窗 拨打电话按键js
$(document).ready(function() {
	
	$('.delete-btn').click(function() {
		var index=$('.delete-btn').index(this);
		var numbers = $('.number-area .numbers').eq(index).val();
		var numbers2 = $('.number-area .numbers').eq(index).val().length;
		$('.number-area .numbers').eq(index).val(numbers.substr(0, numbers2 - 1)).focus();
	});
	/*	Pusher	*/
	var pusher = {
		number: function(num) {
			$('.numbers-container .pushed' + num + '').click(function() {
				var index01=$('.numbers-container .pushed' + num + '').index(this);
				var h=$(this).html();
				$('.number-area .numbers').eq(index01).append('' + num + '').val($(".number-area .numbers").eq(index01).val() + h ); // val;
			});
		}
	}
	pusher.number(1);
	pusher.number(2);
	pusher.number(3);
	pusher.number(4);
	pusher.number(5);
	pusher.number(6);
	pusher.number(7);
	pusher.number(8);
	pusher.number(9);
	pusher.number(0);
	pusher.number(10);
	pusher.number(11);
});		

//模拟左一和右一电话分别打进来
    $(function(){
//		run();
//		var interval;
//		function run(){
//		    interval01 = setInterval(chat01,"2000");//模拟2秒后有左一电话打进来
//		    interval02 = setInterval(chat02,"4000");//模拟2秒后有左一电话打进来
//		} 
//	    function chat01(){
//		    $(".dialing_alert01").show(500).addClass('animated bounceInDown');
//	    }
//	    
//	    function chat02(){
//		    $(".dialing_alert02").show(500).addClass('animated bounceInDown');
//	    }
//	    
//	    $('.call_close').on('click',function(){
//	    	var index02=$('.call_close').index(this);
//	    	$(".dialing_alert").find('.numbers').eq(index02).val("");//拨打号码后，输入框内容清空
//	    	$(".dialing_alert").eq(index02).fadeOut(500);
//	    	clearTimeout(interval01);
//	    	clearTimeout(interval02);
//	    })
	    
      //联系人弹框
	    $('#comm').click(function(){
	    	$(".contacts_alert").toggle().addClass('animated bounceInRight');
	    	$('.modd').fadeIn(500);
	    })
	    
	    //点击确定按钮，联系人弹框消失    
	    $('.call-btn .call_number').on('click',function(){
	    	$(".contacts_alert").find('.numbers').val("").fadeOut(500);//拨打号码后，输入框内容清空
	    	$(".contacts_alert").fadeOut(500);
	    	$('.modd').fadeOut(300);
	    })
	    
	    //点击模态层，提取要素弹框消失
	    $('.modd').on('click',function(){
	    	$(".contacts_alert").fadeOut(500);
	    	$('.modd').fadeOut(500);
	    })
	    
    })

function onLoginSucc(szUserAgent){
	c_HttpWorker.m_POST("/message/phoneNumber",null,false,'loadUserAgent');
} 

function onFrameLoadEnd(szUserAgent){
	c_HttpWorker.m_POST("/message/phoneNumber",null,false,'loadUserAgent');
} 

function loadUserAgent(obj){
	$("#leftBtn").attr("agent",obj[0].agent);
	$("#rightBtn").attr("agent",obj[1].agent);
}