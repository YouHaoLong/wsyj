/***********************从这个版本开始，将整合所有的js,以便进行修改维护，以前分开写的js,将会逐步迁进 2018-08-21************************/






/************************顶部 js start******************************/
/*放大还原按钮js*/
$(".fdhy").click(function () {
    var fangda=$(".btnsss .fdhy a").hasClass("fangda");
    if(fangda==true){
        $(".btnsss .fdhy a").removeClass("fangda").addClass("huanyuan");
    }else {
        $(".btnsss .fdhy a").removeClass("huanyuan").addClass("fangda");
    }
})


function showTime(){//----------------------获取系统日期时间周几------------------------------
    var show_day=new Array('星期日','星期一','星期二','星期三','星期四','星期五','星期六');
    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth()+1;
    var date=time.getDate();
    var day=time.getDay();
    var hour=time.getHours();
    var minutes=time.getMinutes();
    var second=time.getSeconds();
    month<10?month='0'+month:month;
    date<10?date='0'+date:date;
    hour<10?hour='0'+hour:hour;
    minutes<10?minutes='0'+minutes:minutes;
    second<10?second='0'+second:second;
    var now_time=+year+'-'+month+'-'+date+' '+show_day[day]+' '+hour+':'+minutes+':'+second;


    document.getElementById('weather-deta').innerHTML=now_time;

    setTimeout("showTime();",1000);
}
$(function () {//调用时间方法
    $("#weather-deta").append(showTime());
});

/************************顶部 js end********************************/






/************************侧边栏 js start******************************/

//侧边栏 导航切换 start
$('.navigation').find('li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.step_home .step').eq($(this).index()).removeClass('dis').siblings().addClass('dis');
	testaaa();
})
$(".yingji_GIS").click(function () {
    $('.navigation').find('li:nth-child(3)').addClass('active').siblings().removeClass('active');
    $('.navigation').find('li:nth-child(3)>a>img').attr('src','images/nav/ch2.png');
    $('.navigation').find('li:nth-child(2)>a>img').attr('src','images/nav/left1.png');
    $(this).parents("#zhuye").addClass("dis").siblings("#GIS").removeClass("dis");
    testaaa();
})

// 修改侧边栏切换逻辑



//侧边栏 导航切换 end






/************************侧边栏 js end********************************/


$('.emergency_detail').find('li').click(function(){
	$(this).addClass('ac').siblings().removeClass('ac');
	$('.basis_content .basis_list').eq($(this).index()).removeClass('dis').siblings().addClass('dis');
	if($(this).text()=="聚集分析"){
        testaaa_s();
    }
})

//地图菜单切换

$('.gis_menu').find('li').click(function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.gis_list').eq($(this).index()).show().siblings().hide();
})

//点击关闭按钮，关闭登革热疾病分布图例弹窗
$('.resource_title .legend_closeBtn').on('click',function(){
	$('.legend').parent().toggle();
})

//选择不同地区切换到相应的分布情况
$('.legend_place').find('li').click(function(){
	$(this).addClass('ac').siblings().removeClass('ac');
	$('.legend_list .legend_table').eq($(this).index()).removeClass('dis').siblings().addClass('dis');
})

//点击查看按钮，个人病例情况弹窗显示
$('.legend_table > tbody > tr > td a').on('click',function(){
	$('.survey').fadeIn(1000);
})

//点击关闭按钮，关闭个人病例情况页面/弹窗
$('.survey_title i').on('click',function(){
	$('.survey').fadeOut(1000);
})

//点击关闭按钮，关闭登革热分布情况页面
$('.resource_title .distribution_closeBtn').on('click',function(){
	$('.distribution').parent().toggle();
})


//全选与反选
$(function(){
	var all = $('.all');
    var tdInput = $('.tdInput');
        
    //全选
    all.click(function(){
        if(this.checked){
            all.prop('checked',true);
            tdInput.prop('checked',true);
        }else{
            all.prop('checked',false);
            tdInput.prop('checked',false);
        }
    })
    $.each(tdInput,function(index,value){
        $(this).click(function(){
            if($('.tdInput:checked').length == tdInput.length){
                all.prop('checked',true);
            }else{
                all.prop('checked',false);
            }
        })
    })
});

//点击关闭按钮，关闭医疗资源分布图例页面
$('.resource_title .resource_closeBtn').on('click',function(){
	$('.resource').parent().toggle();
})


$(".zhuxingtuANEbingzhuangtu button").click(function(){
    if($(this).text()=="柱形图"){
        $(this).css({'color':'#498BFC','border':'1px solid #498BFC','background':'#fff','padding':'0 10px','border-radius':'2px'})
            .siblings().css({'color':'#959595','border':'1px solid #ccc','background':'#fff','padding':'0 10px','border-radius':'2px'});

        $(this).parent().next().attr('src','tuxing(1).png');
    }else if($(this).text()=="饼状图"){

        $(this).css({'color':'#498BFC','border':'1px solid #498BFC','background':'#fff','padding':'0 10px','border-radius':'2px'})
            .siblings().css({'color':'#959595','border':'1px solid #ccc','background':'#fff','padding':'0 10px','border-radius':'2px'});

        $(this).parent().next().attr('src','tuxing(2).png');
    }
})