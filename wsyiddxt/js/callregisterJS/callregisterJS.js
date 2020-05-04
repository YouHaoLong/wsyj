/**************通讯记录js样式*****************/



/*顶部大标签页切换 start*/
$(".pfn>li").click(function(){
    $("#content"+$(this).val()).attr('style','z-index:10').siblings("div").removeAttr("style");
    $(this).addClass("active").siblings().removeClass("active");
});
/*顶部大标签页切换 end*/



// 通讯记录页面的标签 通讯录 快捷组 近期联系人start
$(".TongXunJiLu_label").on('click','li',function () {
    $(this).addClass("active").siblings().removeClass("active");
})
$(".all_huru_huchu_call").on('click','li',function () {
    $(this).addClass("active").siblings().removeClass("active");
})
// 通讯记录页面的标签 通讯录 快捷组 近期联系人end






//给每个tr绑定点击事件，点击后可以加上背景颜色 start
$("#container_y tbody tr").click(function(){
    $(this).css("background","#D0DDFC").css("cursor","pointer").siblings().css("background","#fff");
})
//给每个tr绑定点击事件，点击后可以加上背景颜色 end


$(".number_bodahaoma").click(function () {
    /*点击号码时弹出拨打号码的小框 和备注完整的内容*/
    $(this).next().toggleClass("dis");
    $(this).parent().siblings().children(".dianhuabenrenyuan_bodadianhua").addClass("dis");
    $(this).parent().parent().siblings().find(".dianhuabenrenyuan_bodadianhua").addClass("dis");
})
$(".table_tbody_content tr").click(function () {//点击其他tr时关闭弹出层
    $(this).siblings().find(".dianhuabenrenyuan_bodadianhua").addClass("dis");
})
$(".table_tbody_content tr td").click(function () {
    $(this).siblings().find(".dianhuabenrenyuan_bodadianhua").addClass("dis");
})


/*弹出录音按钮弹出层*/
$(".TongXunJiLu_icon").click(function () {
    $(this).parent().find("div.dianhuabenrenyuan_bodadianhua").toggleClass("dis");
    $(this).parent().siblings().find("div.dianhuabenrenyuan_bodadianhua").addClass('dis');//通讯录的电话录音的小弹窗
})

$(".bodadianhua1").click(function () {
    alert("拨打成功1");
    $("div.dianhuabenrenyuan_bodadianhua").addClass("dis");
})

$(".bodadianhua2").click(function () {
    alert("拨打成功2");
    $("div.dianhuabenrenyuan_bodadianhua").addClass("dis");
})


//电话记录的分页
$("#TongXunJiLu_phone_page").whjPaging({/*使用分页插件 电话记录的分页*/
    css: 'css-2',
    totalSize: 1000,
    totalPage: 100,
    showPageNum: 5,//默认显示的页码
    previousPage: '<',
    nextPage: '>',
    isShowRefresh: false,//不要刷新按钮
    isShowFL: false,//不要首页和尾页
    isShowTotalPage: false,//显示多少条
});




//传真记录的分页
$("#TongXunJiLu_fax_page").whjPaging({/*使用分页插件 电话记录的分页*/
    css: 'css-2',
    totalSize: 1000,
    totalPage: 100,
    showPageNum: 5,//默认显示的页码
    previousPage: '<',
    nextPage: '>',
    isShowRefresh: false,//不要刷新按钮
    isShowFL: false,//不要首页和尾页
    isShowTotalPage: false,//显示多少条
});



//短信记录的分页
$("#TongXunJiLu_message_page").whjPaging({/*使用分页插件 电话记录的分页*/
    css: 'css-2',
    totalSize: 1000,
    totalPage: 100,
    showPageNum: 5,//默认显示的页码
    previousPage: '<',
    nextPage: '>',
    isShowRefresh: false,//不要刷新按钮
    isShowFL: false,//不要首页和尾页
    isShowTotalPage: false,//显示多少条
});



/*拨打电话 发送传真 发送短信 三个按钮的弹窗*/
$(".TongXunJiLu_DianhuaChuanzhenDuanxin").on('click','li',function () {

    $(".CPM_content").css("display","block").animate({left:"75%"});//弹出弹窗
    $(".CPM_content").prev().css("display", "block");//透明黑色背景

    if($(this).attr("class")=="TongXunJiLu_bodadianhua"){//如果点击的是拨打电话
        $(".CPM_title").text("拨打电话");
        $(".TongXunJiLu_bodadianhua_CPM_content").removeClass("dis").siblings().addClass("dis");//除自己以外的其他兄弟隐藏

    }else if($(this).attr("class")=="TongXunJiLu_fasongchuanzhen"){//如果点击的是发送传真
        $(".CPM_title").text("发送传真");
        $(".TongXunJiLu_fasongchuanzhen_CPM_content").removeClass("dis").siblings().addClass("dis");//除自己以外的其他兄弟隐藏

    }else if($(this).attr("class")=="TongXunJiLu_fasongduanxin"){//如果点击的是发送短信
        $(".CPM_title").text("发送短信");
        $(".TongXunJiLu_fasongduanxin_CPM_content").removeClass("dis").siblings().addClass("dis");//除自己以外的其他兄弟隐藏
    }
})







