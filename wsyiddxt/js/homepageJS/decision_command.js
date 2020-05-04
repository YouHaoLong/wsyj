$(function () {
    // 点击当前事件按钮
    $("#zoom").click(function () {
        $(".left").hide();//左侧折叠列表隐藏
        $(".left2").fadeIn();//左侧列表展开显示
        $("#middle").removeClass("middle").addClass("middle2");//改变中间部分地图的宽度
        $(".right").hide();//左侧折叠列表隐藏
        $(".right2").fadeIn();//左侧列表展开显示

    });

    // 突发事件选择
    $("#btn_seclect").click(function () {
        $("#event_list").toggle();//.fadeOut(10000);显示事件列表

        $(".event_list li").click(function () {
            $("#event_list").fadeOut();//选择框淡出
            var i=$(this).index();
            $("#intro").children("ul").eq(i).show().siblings().hide();//图表框，当前索引对应的图表显示，其他隐藏
            console.log($(this).text());
            var txt=$(this).text();
            $("#event_title").text(txt)//替换标题的内容
        })
    });

/*
    // 事件处置情况/现场动态 tab切换
    $("#dis_tab li").click(function () {
        $(this).addClass("li_ac").siblings().removeClass("li_ac");
        var index=$(this).index();
        $("#dis_box ul").eq(index).show().siblings().hide();
    });


    // 应急指挥/通讯录 tab切换
    $("#head_tab li").click(function () {
        $(this).addClass("li_ac").siblings().removeClass("li_ac");
        var index=$(this).index();
        $("#head_box .head_con").eq(index).show().siblings().hide();
    });
*/

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
});