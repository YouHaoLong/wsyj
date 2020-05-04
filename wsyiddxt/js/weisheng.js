  // tab切换 封装
    function tab(a,b) {
        var oLi=$(a).children("li");
        oLi.click(function () {
            $(this).addClass("li_ac").siblings().removeClass("li_ac");
            var index=$(this).index();
            $(b).eq(index).show().siblings().hide();
        })
    }

    $(function () {
        tab("#dis_tab","#dis_box ul");// 事件处置情况/现场动态 tab切换
        tab("#head_tab","#head_box .head_con");// 应急指挥/通讯录 tab切换
    });

   // -------应急指挥部-----点击折叠函数封装--------------
    function listClick(a) {
        var oSpan=$(a).children("span");
        oSpan.click(function () {
            $(this).next(".friend_list").toggle();//折叠展开
            if($(this).find("i").hasClass("icon-angle_r")){//改变小三角指示方向
                $(this).find("i").removeClass("icon-angle_r").addClass("icon-angle_d");
            }else{
                $(this).find("i").removeClass("icon-angle_d").addClass("icon-angle_r");
            }
        })
    }

    $(function () {
        listClick(".group");
    });

	//地图右侧菜单点击收展起来
	$('.right_change .change_img').on('click',function(){
		$('.menu_detail').toggle();
	})
	
	//地图右侧菜单点击分别弹出不同的弹窗
	$('.menu_detail li').on('click',function(){
		$('.menu_tiancuang .menu_content').eq($(this).index()).toggle(500);
	})
	
	//事件进程
	//点击伸缩按键，事件进程会显示更多
	$('.title .icon-xiala1').on('click',function(){
		if($(this).hasClass('icon-xiala1')){
			$(this).removeClass('icon-xiala1').addClass('icon-xiala2-01');
			$('.expand').show();
		}else{
			$(this).removeClass('icon-xiala2-01').addClass('icon-xiala1');
	        $('.expand').hide();
		}
	})
	
	//点击关闭按键，事件进程弹窗会关闭
	$('.title .close_btn').on('click',function(){
		$('.progress_top').parent().toggle(500);
	})
	
	//点击备注图标，显示备注弹窗
	$('.progress_inner .remark').on('click',function(){
		var index=$('.progress_inner .remark').index($(this));
		$('.remark_mood').eq(index).show();
		
		//点击关闭按键关闭备注弹窗
		$('.mood_title').on('click',function(){
			$('.remark_mood').fadeOut(500);
			return false;
		})
		
	})
	
	//智能预案
	$(window).scroll(function(){
		var msg = $(".history-img");
		var item = $(".history_L");
		var items = $(".history_R");
		var windowHeight = $(window).height();
		var Scroll = $(document).scrollTop();
		if((msg.offset().top - Scroll -windowHeight)<=0){
			msg.fadeIn(1500);
		}
		for(var i=0;i<item.length;i++){
			if(($(item[i]).offset().top - Scroll - windowHeight)<= -100){
				$(item[i]).animate({marginRight:'0px'},'50','swing');
			}
		}
		for(var i=0;i<items.length;i++){
			if(($(items[i]).offset().top - Scroll - windowHeight)<= -100){
				$(items[i]).animate({marginLeft:'0px'},'50','swing');
			}
		}
	});
	
	$(function(){
		stepBar.init("stepBar", { //初始化进度流程图
			step : 1,
			change : true,
			animation : true
		});
	});
	
	$('.alert_title .resource_closeBtn').on('click',function(){
		$('.policy_alert').parent().toggle(500);
	})
	//智能预案
	
	//指挥通讯点击收展
	$('.headquarters02 .resource_closeBtn').on('click',function(){
		$('.headquarters02').parent().toggle(500);
	})

//监测预警页面的左侧菜单切换
$('.monitor_nav .nav_top').on('click',function(){
	$('.monitor_nav ul').toggle(500);
	if($(this).find("i").hasClass("icon-angle_d")){//改变小三角指示方向
	  $(this).find("i").removeClass("icon-angle_d").addClass("icon-xiangshang1");
	}else{
	  $(this).find("i").removeClass("icon-xiangshang1").addClass("icon-angle_d");
	}
	
})

$('.monitor_nav li').on('click',function(){
	$(this).addClass('ac').siblings().removeClass('ac');
	
})

//树的初始化
$(function(){
    $(".tree").treemenu({delay:300}).openActive();
});


//决策分析页面的下拉框选择不同的选项会切换到不同的内容
$('#mySelect').change(function(){
	var p1=$(this).children('option:selected').index();
	$('.basis_box .basis_item').eq(p1).removeClass('dis').siblings().addClass('dis');
});

