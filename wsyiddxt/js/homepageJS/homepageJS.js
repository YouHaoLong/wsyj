/**************首页js样式*****************/


/************************首页 js start******************************/
// "":""

$('.type_add').on('click',function(){//点击添加按钮，弹出新的信息的手动编辑框
    $('.edit').toggleClass("diss");
    $('.send_massage').focus();
});


//


//信息分类弹窗 start
$('.eventInfo_btn_relative').off("click").on('click',function(){//点击信息按钮，弹窗弹出
    var indexs=$('.eventInfo_btn_relative').index(this);//点击当前信息按钮
    $('.eventItem_right').eq(indexs).toggle(500);//当前信息弹框切换

    if($(this).children("i").hasClass("glyphicon-chevron-right")){/*箭头的切换*/
        $(this).children("i").addClass("glyphicon-chevron-down").removeClass("glyphicon-chevron-right");
    }else if($(this).children("i").hasClass("glyphicon-chevron-down")){
        $(this).children("i").addClass("glyphicon-chevron-right").removeClass("glyphicon-chevron-down");
    }

});



// var initPopup_s;//获取弹窗初始化
// var red_Xu_s;//续标签
// var deposit_icon_area_s;//标签容器
// var xinxi_icon_fangzhi_i_s;//创建新元素


// 点击续图标时要调用的弹窗
// function xubao() {//续报
//     initPopup_s=$.initPopup({allowedMove:true,width:800,height:600,targetSelector:".zuye",centerOrFollow:"follow",followPosition: "left",followOffset:-1888,isShowIcon:false,title:"选择续报信息"});//获取弹窗初始化
//     initPopup_s.addButton("取消").showPopup(
//         '<ul class="tiquyemian_Event_List" style="width: 740px;overflow: hidden;">' +
//         '    <li>' +
//         '        <span style="width:90%;">暴雨事件1坪山暴雨暴暴雨事件1坪山暴雨事件暴雨事件1坪山暴雨事件暴雨事件1坪山暴雨事件暴雨事件1坪山暴雨事件1坪山暴雨事件暴雨事件1坪山暴雨事件暴雨事件1坪山暴雨事件暴雨事件1坪山雨事件1坪山暴雨事件暴雨事件1坪山暴雨事件暴雨事件1坪山暴雨事件暴雨事件1坪山事件暴雨事件1坪山暴雨事件暴雨事件1坪山暴雨事件暴雨事件1坪山暴雨事件暴雨事件1坪山暴雨事件</span>' +
//         '        <i class="checkbox_false">' +
//         '          <input type="checkbox" name="check" class="dis">' +
//         '        </i>' +
//         '    </li>' +
//         '    <li>' +
//         '        <span style="width:90%;">1坪山暴雨事件1坪山暴雨事件1坪山暴雨事件1坪山暴雨事件</span>' +
//         '        <i class="checkbox_false">' +
//         '          <input type="checkbox" name="check" class="dis">' +
//         '        </i>' +
//         '    </li>' +
//         '</ul>'+
//         '<div class="xubao_page"></div>'
//     );
//     $(".popup_lzy_cont").css({"display":"inline-grid"});
//     $(".xubao_page").whjPaging({/*使用分页插件 提取页面*/
//         css: 'css-2',
//         totalSize: 1000,
//         totalPage: 100,
//         showPageNum: 5,//默认显示的页码
//         previousPage: '<',
//         nextPage: '>',
//         isShowRefresh: false,//不要刷新按钮
//         isShowFL: false,//不要首页和尾页
//         isShowTotalPage: false,//显示多少条
//     });
//     $(".tiquyemian_Event_List li").on('click', function () {/*给列表里的li绑定单击事件*/
//         //获取到当前li
//         $(this).addClass("tiquyemian_Event_List_li_bgcolor").siblings().removeClass("tiquyemian_Event_List_li_bgcolor");//当前li背景颜色切换
//
//         if($(this).hasClass("tiquyemian_Event_List_li_bgcolor")){/*判断是否有这个背景颜色*/
//             /*如果有执行以下操作*/
//             $(this).find("input[name='check']").attr("checked","checked");
//             $(this).siblings().find("input[name='check']").removeAttr("checked","checked");
//
//             $(this).find("i").addClass("checkbox_true").removeClass("checkbox_false");
//             $(this).siblings().find("i").removeClass("checkbox_true").addClass("checkbox_false");
//         }
//         red_Xu_s.children().addClass("green_pitchOn");//给续添加图标
//         red_Xu_s.removeClass("pointer_events");//续标签可以点击
//         red_Xu_s.prev().children().removeClass();//当前元素的上一个元素删除其子元素class
//         deposit_icon_area_s.append(xinxi_icon_fangzhi_i_s);//添加续
//         deposit_icon_area_s.find("i").remove(".red_Sou");//删除首
//         /*关闭弹窗*/
//         initPopup_s.closePopup();
//         $(this).unbind();
//     })
//
// }



$(".xinxifenlei_contert li .xinxi_icon_fangzhi i").on('click',function(){
    var xinxi_icon_fangzhi_i_class=$(this).attr('class');/*获取当前元素的class名*/
    var deposit_icon_area=$(this).parent().parent().parent().parent().parent().parent().siblings(".deposit_icon_area");//放置图标的容器
    deposit_icon_area_s=deposit_icon_area;
    /*点击当前信息分类弹窗的图标时，插入一个绿色的打钩图标*/
    if($(this).children().hasClass("green_pitchOn")){/*如果当前子元素有这个class*/
        $(this).children().removeClass("green_pitchOn");/*就删除*/
        if(deposit_icon_area.find("i").hasClass(xinxi_icon_fangzhi_i_class)){
            deposit_icon_area.find("i").remove("."+xinxi_icon_fangzhi_i_class);//删除有这个class的元素
        }
    }else{
        $(this).children().addClass("green_pitchOn"); /*否则就添加*/
        var xinxi_icon_fangzhi_i=$("<i class="+xinxi_icon_fangzhi_i_class+"></i>");//创建新元素
        xinxi_icon_fangzhi_i_s=xinxi_icon_fangzhi_i;
        deposit_icon_area.append(xinxi_icon_fangzhi_i);//添加元素到容器
        if($(this).attr("class")=="red_Sou"){//选中首的时候
            $(this).next().children().removeClass();//当前元素的下一个元素删除其子元素class
            deposit_icon_area.find("i").remove(".red_Xu");//删除续
            red_Xu_s.removeClass("pointer_events");
            /*关闭弹窗*/
            initPopup_s.closePopup();

        }else if($(this).attr("class")=="red_Xu"){//选中续的时候
            $(this).children().removeClass("green_pitchOn");//删除选中效果
            deposit_icon_area.find("i").remove(".red_Xu");//删除续
            red_Xu_s=$(this);
            red_Xu_s.addClass("pointer_events");
            //调用弹窗
            xubao();
        }
    }
})









//信息分类弹窗 end



/********信息处理记录 start*******/
$(".tagBtn").on('click','li',function () {//全部 核实 报告 通报 信息处理顶头四个标签的切换样式
    $(this).addClass("active").siblings().removeClass("active");
})

$(".chulibiaoqian ul").on('click','li',/*处理标签切换的js*/
    function () {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).text()=="核实"){
            $(this).parent().parent().parent().find(".chulineirong").text("已核实");
        }else if($(this).text()=="报告"){
            $(this).parent().parent().parent().find(".chulineirong").text("已报告");
        }else if($(this).text()=="通报"){
            $(this).parent().parent().parent().find(".chulineirong").text("已通报");
        }
    }
)



$(".LuYinGongNengJian_kaishiluyin").click(function () {//播放录音与正在录音

    var LuYin_this=$(this);

    LuYin_this.siblings(".LuYin_position_JinDuTiao").toggleClass("dis");//弹出层代码

    var LuYinGongNengJian_kaishiluyin_src=$(this).parent().find('img').attr('src');
    if(LuYinGongNengJian_kaishiluyin_src=='images/qieTu/LuYin_play2.png'){
        LuYin_this.parent().find('img').attr('src','images/qieTu/LuYin_play1.gif');
        LuYin_this.css({"background":"linear-gradient(to right,#4E8AEF, #4E8AEF)"});
        LuYin_this.val('正在播放');


    }else{
        LuYin_this.parent().find('img').attr('src','images/qieTu/LuYin_play2.png');
        LuYin_this.css({"background":"linear-gradient(to right,#17C6FF, #4383FF)"});
        LuYin_this.val('播放录音');
    }




})



/********信息处理记录 end*******/

//编辑按钮代替备注按钮功能 start
$(".bianji_beizhu").click(function(){
    $(this).parent().parent().next().find(".remark .remarkC").attr("contenteditable","true").css({"border":"1px solid #ccc"}).focus();//启用编辑并获得焦点 显示边框
    $(this).css({"background":"#ccc","color":"#000"});//按钮变成灰色
    $(this).parent().parent().next().find(".remark .determine").removeClass("dis");//显示确定按钮
    $(this).parent().parent().next().find(".remark").removeClass("dis");//显示所有隐藏的元素并设置高度为100px;

        function setFocus(el) {//光标始终在文本最后
            el = el[0]; // jquery 对象转dom对象
            el.focus();
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        };
        setFocus($(this).parent().parent().next().find(".remark .shiqujiaodian"));//光标始终在文本最后

    });
$(".determine").click(function () {//点击确定按钮时
    $(this).siblings(".remarkC").removeAttr("contenteditable","true")
        .css({"border":"1px solid transparent"});//隐藏边框，失去焦点
    $(this).parent().parent().parent().prev().find(".bianji_beizhu").css({"background":"#fff","color":"#4383FF"});//变为可点击状态
    $(this).addClass("dis");//隐藏自己
    if($(this).siblings(".shiqujiaodian").text()===""){//判断是否有内容
        $(this).parent().addClass("dis");//隐藏所有元素
    }else{
        $(this).parent().removeClass("dis");//显示所有元素
        baoChunChengGongTiShi();//调用保存成功小提示
    }
})
//编辑按钮代替备注按钮功能 end


/*关闭弹框方法 start*/
$(".guanbianniu_Operationpanel").click(
    function () {
        /*关闭大弹框*/
        $(this).parent().prev().css("display", "none");
        $(this).parent().fadeOut(500).animate({left:"101%"});
    }
);
/*关闭弹框方法 end*/

/*弹框内容切换逻辑  start*/
$(".showOperationpanel li").click(
    function() {
        /*当我点击触发事件的元素时 就将Operationpanel设置为显示*/
        // $(".modds").css("display", "block");

        $("#Operation"+$(this).val()).attr('style','z-index:30').siblings("li").removeAttr("style");

        var tankuangbiejing_m1 = $(".tankuangbiejing .m1");
        var tankuangbiejing_m2 = $(".tankuangbiejing .m2");
        var tankuangbiejing_m3 = $(".tankuangbiejing .m3");
        var tankuangbiejing_m4 = $(".tankuangbiejing .m4");


        if($(this).text()=="电话"){/*如果按钮内容等于电时*/

            $(".Operationpanel").css("display","block").animate({left:"53%"});
            $(".Operationpanel").prev().css("display", "block");//透明黑色背景
            tankuangbiejing_m1.removeClass("dis");
            tankuangbiejing_m2.removeClass("dis");
            tankuangbiejing_m3.addClass("dis");
            tankuangbiejing_m4.addClass("dis");


            $(".juleiyemian").addClass("dis").siblings().removeClass("dis");//将聚类页面隐藏
            //$(".tiquyemian").addClass("dis");//将提取页面隐藏

            if($("#jinqilianxiren").hasClass("color_text")){//要拨号键盘
                $(".dialing_alert").removeClass("dis");
            }else if($("#kuaijiezhu").hasClass("color_text")){//要拨号键盘
                $(".dialing_alert").removeClass("dis");
            }else if($("#tongxunlu").hasClass("color_text")){//要拨号键盘
                $(".dialing_alert").removeClass("dis");
            }
            $("#tongxunlu").click(function () {
                $(".dialing_alert").removeClass("dis");//要拨号键盘
            })

        }else if($(this).text()=="短信"){/*如果按钮内容等于短时*/

            $(".Operationpanel").css("display","block").animate({left:"53%"});
            $(".Operationpanel").prev().css("display", "block");//透明黑色背景
            tankuangbiejing_m3.removeClass("dis");
            tankuangbiejing_m1.removeClass("dis");
            tankuangbiejing_m2.addClass("dis");
            tankuangbiejing_m4.addClass("dis");

            $(".dialing_alert").addClass("dis");
            $(".accordion").css("height","800px").css("max-height","800px");
            $(".juleiyemian").addClass("dis").siblings().removeClass("dis");
            //$(".tiquyemian").addClass("dis");

            if($("#jinqilianxiren").hasClass("color_text")){//不要拨号键盘
                $(".dialing_alert").addClass("dis");
            }else if($("#kuaijiezhu").hasClass("color_text")){
                $(".dialing_alert").addClass("dis");
            }else if($("#tongxunlu").hasClass("color_text")){
                $(".dialing_alert").addClass("dis");
            }
            $("#tongxunlu").click(function () {
                $(".dialing_alert").addClass("dis");//不要拨号键盘
            })
        }else if($(this).text()=="传真"){/*如果按钮内容等于传时*/

            $(".Operationpanel").css("display","block").animate({left:"53%"});
            $(".Operationpanel").prev().css("display", "block");//透明黑色背景
            tankuangbiejing_m1.removeClass("dis");
            tankuangbiejing_m2.addClass("dis");
            tankuangbiejing_m3.addClass("dis");
            tankuangbiejing_m4.removeClass("dis");

            $(".dialing_alert").addClass("dis");
            $(".accordion").css("height","800px").css("max-height","800px");
            $(".juleiyemian").addClass("dis").siblings().removeClass("dis");
            //$(".tiquyemian").addClass("dis");

            if($("#jinqilianxiren").hasClass("color_text")){ //不要拨号键盘
                $(".dialing_alert").addClass("dis");
            }else if($("#kuaijiezhu").hasClass("color_text")){
                $(".dialing_alert").addClass("dis");
            }else if($("#tongxunlu").hasClass("color_text")){
                $(".dialing_alert").addClass("dis");
            }
            $("#tongxunlu").click(function () {
                $(".dialing_alert").addClass("dis");//不要拨号键盘
            })
        }else if($(this).text()=="聚类"){//聚类是个新的页面，要讲所有的页面内容都隐藏，编写新的内容
            $(".Operationpanel").css("display","block").animate({left:"53%"});
            $(".juleiyemian").removeClass("dis").siblings().addClass("dis");

        }else if($(this).text()=="提取"){/*提取和聚类的页面一样，隐藏所有的页面*/
            //$(".tiquyemian").removeClass("dis");
            $(".Operationpanel_tiquyemian").css("display","block").animate({left:"0.5%"});

        }else if($(this).text()=="网络直报"){/*提取和聚类的页面一样，隐藏所有的页面*/
           // $(".tiquyemian").removeClass("dis");
            $(".Operationpanel_tiquyemian").css("display","block").animate({left:"49%"});
            $(".Operationpanel_tiquyemian").prev().css("display", "block");//透明黑色背景

        }else if($(this).text()=="批"){/*提取和聚类的页面一样，隐藏所有的页面*/
           alert("功能正在开发中");


        }else if($(this).text()=="阅"){/*提取和聚类的页面一样，隐藏所有的页面*/
            alert("功能正在开发中");


        }else if($(this).text()=="启动"){/*提取和聚类的页面一样，隐藏所有的页面*/
            //$(".tiquyemian").removeClass("dis");
            $(".Operationpanel_tiquyemian").css("display","block").animate({left:"0.5%"});

        }

    }
);

// /*点击通讯录时*/
$("#tongxunlu").click(function () {
    $(".accordion").removeClass("dis");
    $(".jinqilianxiren").addClass("dis");
    $(".kuaijiezhu").addClass("dis");
    $("#xinzenglianxiren").removeClass("dis");
    $("#xingzhenzhu").addClass("dis");
    $(".xingzhenzhu").addClass("dis");
    $(".xinzenglianxiren").addClass("dis");
})
/*点击近期联系人时弹出当前页面*/
$("#jinqilianxiren").click(function () {
    $(".accordion").addClass("dis");
    $(".kuaijiezhu").addClass("dis");
    $(".jinqilianxiren").removeClass("dis");
    $("#xinzenglianxiren").removeClass("dis");
    $(".xingzhenzhu").addClass("dis");
    $(".xinzenglianxiren").addClass("dis");

})
//点击快捷组时
$("#kuaijiezhu").click(function () {
    $(".accordion").addClass("dis");
    $(".kuaijiezhu").removeClass("dis");
    $(".jinqilianxiren").addClass("dis");
    $("#xingzhenzhu").removeClass("dis");
    $("#xinzenglianxiren").addClass("dis");
    $(".xingzhenzhu").addClass("dis");
    $(".xinzenglianxiren").addClass("dis");
})



/*弹框内容切换逻辑  end*/




// 电话拨号键盘切换逻辑start
$(".phone_icon .phone_dialKeyPad_hide").click(function () {
    if($(this).hasClass("phone_dialKeyPad_hide")){/*如果当前电话拨号盘显示*/
        $(this).addClass("phone_dialKeyPad_show").removeClass("phone_dialKeyPad_hide");/*隐藏*/
        $(this).parent().parent().siblings(".phone_numbers_content").children(".numbers-container").addClass("dis");/*切换状态图标*/

    }else{
        $(this).addClass("phone_dialKeyPad_hide").removeClass("phone_dialKeyPad_show");/*显示*/
        $(this).parent().parent().siblings(".phone_numbers_content").children(".numbers-container").removeClass("dis");/*切换状态图标*/

        //关闭电话置忙
        $(this).prev().addClass("phone_hangUp_cai").removeClass("phone_hangUp_hui");
        $(this).parent().parent().siblings(".phone_numbers_content").children(".dianhuazhimang_content").addClass("dis");
        //关闭电话会议
        $(this).parent().find(".phone_Redial_hui").removeClass("phone_Redial_hui").addClass("phone_Redial_cai");
        $(this).parent().parent().siblings(".phone_numbers_content").children(".dianhuahuiyi_content").addClass("dis");

    }
})
// 电话拨号键盘切换逻辑end



//值班室和办公室电话按钮触发后样式start
$(".making_a_call a:first-child").click(function () {/*第一个a 值班室*/
    if($(this).children("i").hasClass("telephone1")){
        $(this).children("i").addClass("bohaozhong").removeClass("telephone1");//切换到拨号中
        $(this).css("opacity","0.5");

    }else if($(this).children("i").hasClass("bohaozhong")){
        $(this).children("i").addClass("tonghuazhong").removeClass("bohaozhong");//切换到通话中
        $(this).css({"opacity":"1","background":"#638FFA"});
        $(this).children("span").text("通话中");

        //pointer-events: none; 禁止按钮点击

        $(this).parent().siblings(".phone_numbers_content").children(".tonghuazhong_content").removeClass("dis");

        // 切换到通话中时，弹出通话详细信息的页面,隐藏拨号键盘
        $(this).parent().siblings(".phone_numbers_content").children(".numbers-container").addClass("dis");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_dialKeyPad_hide").addClass("phone_dialKeyPad_show").removeClass("phone_dialKeyPad_hide").addClass("pointer_events");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_dialKeyPad_show").addClass("phone_dialKeyPad_show").removeClass("phone_dialKeyPad_hide").addClass("pointer_events");

        // 切换到通话中时，弹出通话详细信息的页面,隐藏置忙页面
        $(this).parent().siblings(".phone_numbers_content").children(".dianhuazhimang_content").addClass("dis");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_hangUp_hui").addClass("phone_hangUp_cai").removeClass("phone_hangUp_hui").addClass("pointer_events");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_hangUp_cai").addClass("phone_hangUp_cai").removeClass("phone_hangUp_hui").addClass("pointer_events");

        // 切换到通话中时，弹出通话详细信息的页面,隐藏电话会议页面
        $(this).parent().siblings(".phone_numbers_content").children(".dianhuahuiyi_content").addClass("dis");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_Redial_hui").addClass("phone_Redial_cai").removeClass("phone_Redial_hui").addClass("pointer_events");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_Redial_cai").addClass("phone_hangUp_cai").removeClass("phone_Redial_hui").addClass("pointer_events");



    }else if($(this).children("i").hasClass("tonghuazhong")){
        $(this).children("i").addClass("telephone1").removeClass("tonghuazhong");//切换到默认状态
        $(this).css({"background":"#04b425"});
        $(this).children("span").text("值班室");
        // 切换到默认状态时，隐藏通话详细信息的页面
        $(this).parent().siblings(".phone_numbers_content").children(".tonghuazhong_content").addClass("dis");
        //解除按钮禁用
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_dialKeyPad_show").removeClass("pointer_events");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_hangUp_cai").removeClass("pointer_events");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_Redial_cai").removeClass("pointer_events");
    }
})


$(".making_a_call a:last-child").click(function () {/*第二个a 办公室*/
    if($(this).children("i").hasClass("telephone2")){
        $(this).children("i").addClass("bohaozhong").removeClass("telephone2");//切换到拨号中
        $(this).css("opacity","0.5");

    }else if($(this).children("i").hasClass("bohaozhong")){
        $(this).children("i").addClass("tonghuazhong").removeClass("bohaozhong");//切换到通话中
        $(this).css({"opacity":"1","background":"#638FFA"});
        $(this).children("span").text("通话中");

        $(this).parent().siblings(".phone_numbers_content").children(".tonghuazhong_content").removeClass("dis");

        // 切换到通话中时，弹出通话详细信息的页面,隐藏拨号键盘
        $(this).parent().siblings(".phone_numbers_content").children(".numbers-container").addClass("dis");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_dialKeyPad_hide").addClass("phone_dialKeyPad_show").removeClass("phone_dialKeyPad_hide").addClass("pointer_events");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_dialKeyPad_show").addClass("phone_dialKeyPad_show").removeClass("phone_dialKeyPad_hide").addClass("pointer_events");

        // 切换到通话中时，弹出通话详细信息的页面,隐藏置忙页面
        $(this).parent().siblings(".phone_numbers_content").children(".dianhuazhimang_content").addClass("dis");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_hangUp_hui").addClass("phone_hangUp_cai").removeClass("phone_hangUp_hui").addClass("pointer_events");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_hangUp_cai").addClass("phone_hangUp_cai").removeClass("phone_hangUp_hui").addClass("pointer_events");

        // 切换到通话中时，弹出通话详细信息的页面,隐藏电话会议页面
        $(this).parent().siblings(".phone_numbers_content").children(".dianhuahuiyi_content").addClass("dis");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_Redial_hui").addClass("phone_Redial_cai").removeClass("phone_Redial_hui").addClass("pointer_events");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_Redial_cai").addClass("phone_hangUp_cai").removeClass("phone_Redial_hui").addClass("pointer_events");



    }else if($(this).children("i").hasClass("tonghuazhong")){
        $(this).children("i").addClass("telephone2").removeClass("tonghuazhong");//切换到默认状态
        $(this).css({"background":"#04b425"});
        $(this).children("span").text("值班室");

        // 切换到默认状态时，隐藏通话详细信息的页面
        $(this).parent().siblings(".phone_numbers_content").children(".tonghuazhong_content").addClass("dis");

        //解除按钮禁用
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_dialKeyPad_show").removeClass("pointer_events");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_hangUp_cai").removeClass("pointer_events");
        $(this).parent().siblings(".number-area").find(".phone_icon .phone_Redial_cai").removeClass("pointer_events");

    }
})
//值班室和办公室电话按钮触发后样式end


$(".phone_icon .phone_hangUp_cai").click(function () {//点击置忙时要进行的操作
    if($(this).hasClass("phone_hangUp_cai")){
        $(this).addClass("phone_hangUp_hui").removeClass("phone_hangUp_cai");
        $(this).parent().parent().siblings(".phone_numbers_content").children(".dianhuazhimang_content").removeClass("dis").siblings().addClass("dis");
        $(this).next().addClass("phone_dialKeyPad_show").removeClass("phone_dialKeyPad_hide");
        $(this).prev().addClass("phone_Redial_cai").removeClass("phone_Redial_hui");
    }else{
        $(this).addClass("phone_hangUp_cai").removeClass("phone_hangUp_hui");
        $(this).parent().parent().siblings(".phone_numbers_content").children(".dianhuazhimang_content").addClass("dis");
    }
})



/*置忙逻辑切换start*/


$(".zhibanshidianhua_1 .zhimang_on").click(function () {/*点击置忙时*/
    if($(this).hasClass("zhimang_on")){
        $(this).addClass("zhimang_off").removeClass("zhimang_on").text("取消置忙");

        $(this).parent().parent().parent().parent().parent().parent().siblings(".making_a_call").children("a:first-child").css("background","#666").addClass("pointer_events");
        $(this).parent().parent().children(".zhimang_zhuangtai_text").text("暂不支持通讯");

    }else{
        $(this).addClass("zhimang_on").removeClass("zhimang_off").text("置忙");

        $(this).parent().parent().parent().parent().parent().parent().siblings(".making_a_call").children("a:first-child").css("background","#04b425").removeClass("pointer_events");
        $(this).parent().parent().children(".zhimang_zhuangtai_text").text("正常");

    }
})
$(".zhibanshidianhua_1 .zhimang_off").click(function () {/*点击取消置忙时*/
    if($(this).hasClass("zhimang_off")){
        $(this).addClass("zhimang_on").removeClass("zhimang_off").text("置忙");

        $(this).parent().parent().parent().parent().parent().parent().siblings(".making_a_call").children("a:first-child").css("background","#04b425").removeClass("pointer_events");
        $(this).parent().parent().children(".zhimang_zhuangtai_text").text("正常");

    }else{
        $(this).addClass("zhimang_off").removeClass("zhimang_on").text("取消置忙");

        $(this).parent().parent().parent().parent().parent().parent().siblings(".making_a_call").children("a:first-child").css("background","#666").addClass("pointer_events");
        $(this).parent().parent().children(".zhimang_zhuangtai_text").text("暂不支持通讯");
    }
})

$(".bangongshidianhua_2 .zhimang_on").click(function () {/*点击置忙时*/
    if($(this).hasClass("zhimang_on")){
        $(this).addClass("zhimang_off").removeClass("zhimang_on").text("取消置忙");

        $(this).parent().parent().parent().parent().parent().parent().siblings(".making_a_call").children("a:last-child").css("background","#666").addClass("pointer_events");
        $(this).parent().parent().children(".zhimang_zhuangtai_text").text("暂不支持通讯");


    }else{
        $(this).addClass("zhimang_on").removeClass("zhimang_off").text("置忙");

        $(this).parent().parent().parent().parent().parent().parent().siblings(".making_a_call").children("a:last-child").css("background","#04b425").removeClass("pointer_events");
        $(this).parent().parent().children(".zhimang_zhuangtai_text").text("正常");
    }
})
$(".bangongshidianhua_2 .zhimang_off").click(function () {/*点击取消置忙时*/
    if($(this).hasClass("zhimang_off")){
        $(this).addClass("zhimang_on").removeClass("zhimang_off").text("置忙");

        $(this).parent().parent().parent().parent().parent().parent().siblings(".making_a_call").children("a:last-child").css("background","#04b425").removeClass("pointer_events");
        $(this).parent().parent().children(".zhimang_zhuangtai_text").text("正常");

    }else{
        $(this).addClass("zhimang_off").removeClass("zhimang_on").text("取消置忙");

        $(this).parent().parent().parent().parent().parent().parent().siblings(".making_a_call").children("a:last-child").css("background","#666").addClass("pointer_events");
        $(this).parent().parent().children(".zhimang_zhuangtai_text").text("暂不支持通讯");
    }
})

/*置忙逻辑切换end*/



/*电话会议切换逻辑 start*/
$(".phone_icon i.phone_Redial_cai").click(function () {
    if($(this).hasClass("phone_Redial_cai")){
        $(this).addClass("phone_Redial_hui").removeClass("phone_Redial_cai");
        $(this).parent().find(".phone_dialKeyPad_hide").removeClass("phone_dialKeyPad_hide").addClass("phone_dialKeyPad_show");
        $(this).parent().find(".phone_hangUp_hui").removeClass("phone_hangUp_hui").addClass("phone_hangUp_cai");
        $(this).parent().parent().siblings(".phone_numbers_content").children(".dianhuahuiyi_content").removeClass("dis").siblings().addClass("dis");
    }else{
        $(this).addClass("phone_Redial_cai").removeClass("phone_Redial_hui");
        $(this).parent().parent().siblings(".phone_numbers_content").children(".dianhuahuiyi_content").addClass("dis");
    }
})



$(".XiuGaiDianHua").click(function () {
    var i=$('<i class="iconfont icon-guanbi1"></i>');
    if($(this).text()=="修改电话"){
        $(this).text("确认修改");
        $(this).parent().parent().find("li").css({"border":"1px solid #ccc"});
        $(this).parent().parent().find(".position_relative_span").append(i);
        $("i.icon-guanbi1").click(function () {
            $(this).parent().parent().parent().remove();
        })
    }else if($(this).text()=="确认修改"){
        $(this).text("修改电话");
        $(this).parent().parent().find("li").css({"border":"none"});
        $(this).parent().parent().find(".position_relative_span").children().remove();
    }
})


/*电话会议切换逻辑 end*/









/***************************提取页面 start***********************************/

    // $(".tiquyemian_Event_List li").on('click', function () {/*给列表里的里绑定单击事件*/
    //     var tiquyemian_Event_List_li=$(this);//获取到当前li
    //     tiquyemian_Event_List_li.toggleClass("tiquyemian_Event_List_li_bgcolor");//当前li背景颜色切换
    //
    //     if(tiquyemian_Event_List_li.hasClass("tiquyemian_Event_List_li_bgcolor")){/*判断是否有这个背景颜色*/
    //         /*如果有执行以下操作*/
    //         tiquyemian_Event_List_li.find("input[name='check']").attr("checked","checked");
    //         tiquyemian_Event_List_li.find("i").addClass("checkbox_true").removeClass("checkbox_false");
    //
    //     }else{
    //         /*否则就执行以下操作*/
    //         tiquyemian_Event_List_li.find("input[name='check']").removeAttr("checked","checked");
    //         tiquyemian_Event_List_li.find("i").removeClass("checkbox_true").addClass("checkbox_false");
    //
    //     }
    //
    // });

$("#tufashijian_yulan_page").whjPaging({/*使用分页插件 突发事件预览页面*/
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



// $("#tiquyemian_page").whjPaging({/*使用分页插件 提取页面*/
//     css: 'css-2',
//     totalSize: 1000,
//     totalPage: 100,
//     showPageNum: 5,//默认显示的页码
//     previousPage: '<',
//     nextPage: '>',
//     isShowRefresh: false,//不要刷新按钮
//     isShowFL: false,//不要首页和尾页
//     isShowTotalPage: false,//显示多少条
// });


$("#zhibanxinxi_page").whjPaging({/*使用分页插件 值班信息*/
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
$("#xinxichulijilu_page").whjPaging({/*使用分页插件 值班信息*/
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


//新建突发事件 生成 重置 保存 start
$(".Yulan_Chongzhi_Baocun").find("#shengcheng").click(function(){

    if($("#XinJianTuFaShiJian").valid()) {
        $(".xinjiantufashijan_title").text("突发事件预览");//修改标题
        $(".xinjiantufashijan_content").addClass("dis");//隐藏新建突发事件
        $(".tufashijian_yulan").removeClass("dis");//显示突发事件生成
        $(".Yulan_Chongzhi_Baocun").addClass("dis");//隐藏 生成 重置 保存
        $(".lishiyulan_yulan_fasong_xiazai").removeClass("dis");//显示 历史生成 生成 发送 下载

        $("#tufashijian").css({"border":"none","background":"#ccc","color":"#000","padding":"0px 15px"});
        $("#tufashijian_yulan").css({"display":"inline-block"});
    }


})
$("#tufashijian").click(function () {
    $(this).css({"background":"#488CFF","color":"#fff"});
    $("#tufashijian_yulan").css({"background":"#ccc","color":"#000"});
    $(".xinjiantufashijan_title").text("新建突发事件");//修改标题
    $(".xinjiantufashijan_content").removeClass("dis");//显示新建突发事件
    $(".tufashijian_yulan").addClass("dis");//隐藏突发事件生成
    $(".Yulan_Chongzhi_Baocun").removeClass("dis");//显示 生成 重置 保存
    $(".lishiyulan_yulan_fasong_xiazai").addClass("dis");//隐藏 历史生成 生成 发送 下载
})

$("#tufashijian_yulan").click(function () {
    $(this).css({"background":"#488CFF","color":"#fff"});
    $("#tufashijian").css({"background":"#ccc","color":"#000"});
    $(".xinjiantufashijan_title").text("突发事件预览");//修改标题
    $(".xinjiantufashijan_content").addClass("dis");//隐藏新建突发事件
    $(".tufashijian_yulan").removeClass("dis");//显示突发事件生成
    $(".Yulan_Chongzhi_Baocun").addClass("dis");// 隐藏 生成 重置 保存
    $(".lishiyulan_yulan_fasong_xiazai").removeClass("dis");//显示 历史生成 生成 发送 下载
})

$(".lishiyulan_yulan_fasong_xiazai").on('click','input',function(){//突发事件预览的发送按钮
    $(this).css({"background":"#ccc","color":"#000","border-color":"#ccc"}).siblings().css({"background":"#638FFA","color":"#fff","border-color":"#638FFA"});
    if($(this).val()==="发送"){//如果当前按钮的value是发送

        $(".Operationpanel").css("display","block").animate({left:"53%"});//弹出弹窗


        //弹出发送传真的内容
        $(".tankuangbiejing .m1").removeClass("dis");
        $(".tankuangbiejing .m2").addClass("dis");
        $(".tankuangbiejing .m3").addClass("dis");
        $(".tankuangbiejing .m4").removeClass("dis");

        $(".dialing_alert").addClass("dis");
        $(".accordion").css("height","800px").css("max-height","800px");
        $(".juleiyemian").addClass("dis").siblings().removeClass("dis");
        //$(".tiquyemian").addClass("dis");

        //$(".tiquyemian ").removeClass("dis");
        $("#Operation3").attr('style','z-index:30').siblings("li").removeAttr("style");
        $("#Operationpanel").find(".modds").css({"z-index":"40","display":"block"});

    }
})


//新建突发事件 生成 重置 保存 end









/***************************提取页面 end***********************************/



/************************首页 js end********************************/






//来电面版js start

$(".lansexiaodianhua").click(function () {//切换点击小电话图标时弹出小弹窗
    $(this).children().toggleClass("dis display_inline_block");
});

//来电面版js end




/*点击查看群发按钮，弹出查看群发弹窗*/
$(".chakanqunfa").on('click',function () {
    $.initPopup({allowedMove:true,width:830,height:300,isShowIcon:false,title:"查看群发"}).addButton("取消").showPopup(
        '<div class="qunfajindu" style="display: block;">' +
        '<p>正在群发传真</p>' +
        '<ul style="height: 100%;overflow:hidden">' +
        '<li>' +
        '<div class="danwei_name"><span>应急办</span></div>' +
            '<div class="progress">' +
                '<div class="progress-bar progress-bar-info" id="jin1" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width :0% ">' +
                    '<span class="sr-only">20% Complete</span>' +
                '</div>' +
            '</div>' +
            '<div style="width: 50px;margin-left: 10px;">' +
                '<span><a id="baifenbijingdu1">0</a><a>%</a></span>' +
            '</div>' +
            '<div class="fasong_chengGong_shiBai">' +
                '<span class="red">发送失败</span>' +
                '<span class="fasongzhuangtai_shibai"></span>' +
                '<span><a>重新发送</a></span>' +
            '</div>' +
            '<div class="time_chuanzhen">' +
                '<span><span>2018 10 20</span>&nbsp;<span>12:00</span></span>' +
            '</div>' +
        '</li>' +
        '<li>' +
        '<div class="danwei_name"><span>应急办</span></div>' +
            '<div class="progress">' +
                '<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 60%">' +
                    '<span class="sr-only">20% Complete</span>' +
                '</div>' +
            '</div>' +
            '<div style="width: 50px;margin-left: 10px;">' +
                '<span><a>60</a><a>%</a></span>' +
            '</div>' +
            '<div class="fasong_chengGong_shiBai">' +
                '<span>正在发送</span>' +
                '<span><img src="images/qieTu/jiazai.gif" alt=""></span>' +
                '<span><a>取消</a></span>' +
            '</div>' +
            '<div class="time_chuanzhen">' +
                '<span><span>2018 10 20</span>&nbsp;<span>12:00</span></span>' +
            '</div>' +
        '</li>' +
        '<li>' +
            '<div class="danwei_name"><span>应急办</span></div>' +
            '<div class="progress">' +
                '<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width:100%">' +
                    '<span class="sr-only">20% Complete</span>' +
                '</div>' +
            '</div>' +
            '<div style="width: 50px;margin-left: 10px;">' +
                '<span><a>100</a> <a>%</a></span>' +
            '</div>' +
            '<div class="fasong_chengGong_shiBai">' +
                    '<span class="green">发送成功</span>' +
                    '<span class="fasongzhuangtai_chenggong"></span>' +
                    '<span><a></a></span>' +
            '</div>' +
            '<div class="time_chuanzhen">' +
                '<span><span>2018 10 20</span>&nbsp;<span>12:00</span></span>' +
            '</div>' +
        '</li>' +
        '</ul>' +
        '</div>'
    );


})








/*点击电话上面的li时弹出的通话详情 start*/
$(".guanbi_tonghuaxiangqingTankuang").click(function () {
    $(".tonghuaxiangqingTankuang").addClass("dis");
})


$(".dianhua—bohao .dianhua ul li").click(function () {
    $(".tonghuaxiangqingTankuang").removeClass("dis");
})


$(".guanbi_xinzenglianxiren").click(function () {
    $(".xinzenglianxiren").addClass("dis");
    $(".xingzhenzhu").addClass("dis");
})

/*点击电话上面的li时弹出的通话详情 end*/





$(".fir .event_scrollbar").on('click','li',function(){
    $(this).addClass("active").siblings().removeClass("active");
})





//发送短信鼠标悬停显示删除按钮
$(".fasongduanxing_button .fasongduanxing_button_ul li").on('mouseover',function () {
    $(this).find('.position_relative_span').show();
})
$(".fasongduanxing_button .fasongduanxing_button_ul li").on('mouseout',function(){
    $(this).find('.position_relative_span').hide();
})
//传真鼠标悬停显示删除按钮
$(".fasongchuanzhen_button ul.fasongchuanzhen_button_ul li").on('mouseover',function () {
    $(this).find('.position_relative_span').show();
})
$(".fasongchuanzhen_button ul.fasongchuanzhen_button_ul li").on('mouseout',function(){
    $(this).find('.position_relative_span').hide();
})

//发送短信的删除按钮功能
$(".fasongduanxing_button .fasongduanxing_button_ul .position_relative_span i").on('click',function () {
    $(this).parent().parent().parent().remove();
})
//发送短信的删除按钮功能
$(".fasongchuanzhen_button .fasongchuanzhen_button_ul .position_relative_span i").on('click',function () {
    $(this).parent().parent().parent().remove();
})








/****************新建突发事件 表单验证 start***************/
$().ready(function() {
// 在键盘按下并释放及提交后验证提交表单
    $("#XinJianTuFaShiJian").validate({
        rules: {
            TuFaShiJian_designation: "required",//突发事件名称
            TuFaShiJian_type: "required",//突发事件类型
            TuFaShiJian_level: "required",//突发事件级别
            TuFaShiJian_reportType: "required",//突发事件报告类型
            TuFaShiJian_SendingUnits: "required",//突发事件报送单位
            TuFaShiJian_reportPeople: "required",//突发事件报告人
            TuFaShiJian_receivedPhone: "required",//突发事件接报电话
            TuFaShiJian_registrant: "required",//突发事件登记人
            TuFaShiJian_reportTime: "required",//突发事件接报时间
            TuFaShiJian_occurrenceTime: "required",//突发事件发生时间


            TuFaShiJian_deathToll:{//突发事件死亡人数
                required: true,
                number:true,//必须输入数字
            },
            TuFaShiJian_injuredToll:{//突发事件受伤人数
                required: true,
                number:true,//必须输入数字
            },
            TuFaShiJian_involveToll: {//突发事件涉及人数
                required: true,
                number:true,//必须输入数字
            },
            TuFaShiJian_propertyDamage:{//突发事件财产损失
                required: true,
                number:true,//必须输入数字
            },

            TuFaShiJian_detailedAddresses: "required",//突发事件详细地址
            TuFaShiJian_measureEffect: "required",//突发事件已采取措施及效果
            TuFaShiJian_trendCountermeasure: "required",//突发事件发展趋势及对策意见
            TuFaShiJian_causeThroughEffect: "required",//突发事件起因经过影响


            TuFaShiJian_telephoneReport: "required",//突发事件接收信息报告情况电话初次报告
            TuFaShiJian_writtenReport: "required",//突发事件接收信息报告情况书面初次报告

            TuFaShiJian_telephoneReportTime: "required",//突发事件接收信息报告情况电话初次报告时间
            TuFaShiJian_writtenReportTime: "required",//突发事件接收信息报告情况书面初次报告时间
            TuFaShiJian_SiteResponse: "required",//突发事件现场响应情况
            TuFaShiJian_SiteHandleEnd: "required",//突发事件现场处置结束

            TuFaShiJian_city:"required",//市
            TuFaShiJian_area:"required",//区
            TuFaShiJian_street:"required",//街道


            //现场联络员
            TuFaShiJian_SiteLiaison_1:"required",
            TuFaShiJian_SiteLiaison_2:"required",
            TuFaShiJian_SiteLiaison_3:"required",
            //现场联络员电话
            TuFaShiJian_SiteLiaison_Phone_1:"required",
            TuFaShiJian_SiteLiaison_Phone_2:"required",
            TuFaShiJian_SiteLiaison_Phone_3:"required",


        },
        messages: {
            TuFaShiJian_designation: "请输入名称",
            TuFaShiJian_type: "请输入类型",
            TuFaShiJian_level: "请输入级别",
            TuFaShiJian_reportType: "请输入报告类型",
            TuFaShiJian_SendingUnits: "请输入报送单位",
            TuFaShiJian_reportPeople: "请输入报告人",
            TuFaShiJian_receivedPhone: "请输入接报电话",
            TuFaShiJian_registrant: "请选择登记人",
            TuFaShiJian_reportTime: "请输入接报时间",
            TuFaShiJian_occurrenceTime: "请输入发生时间",

            TuFaShiJian_deathToll:{//死亡人数
                required: "请输入死亡人数",
                number: "请输入合法的数字"
            },
            TuFaShiJian_injuredToll:{//受伤人数
                required: "请输入受伤人数",
                number: "请输入合法的数字"
            },
            TuFaShiJian_involveToll:{//涉及人数
                required: "请输入涉及人数",
                number: "请输入合法的数字"
            },
            TuFaShiJian_propertyDamage:{//财产损失
                required: "请输入财产损失",
                number: "请输入合法的数字"
            },
            TuFaShiJian_city:"请选择市",
            TuFaShiJian_area:"请选择区",
            TuFaShiJian_street:"请选择街道",
            TuFaShiJian_detailedAddresses:"请输入详细地址",
            TuFaShiJian_causeThroughEffect:"请输入起因经过影响",
            TuFaShiJian_measureEffect:"请输入已采取措施及效果",
            TuFaShiJian_trendCountermeasure:"请输入发展趋势及对策意见",

            TuFaShiJian_telephoneReport:"请输入接收信息报告情况电话初次报告",
            TuFaShiJian_writtenReport:"请输入接收信息报告情况书面初次报告",
            TuFaShiJian_telephoneReportTime: "请输入接收信息报告情况电话初次报告时间",
            TuFaShiJian_writtenReportTime: "请输入接收信息报告情况书面初次报告时间",
            TuFaShiJian_SiteResponse: "请输入现场响应情况",
            TuFaShiJian_SiteHandleEnd: "请输入现场处置结束",
            //现场联络员
            TuFaShiJian_SiteLiaison_1:"请输入现场联络员1",
            TuFaShiJian_SiteLiaison_2:"请输入现场联络员2",
            TuFaShiJian_SiteLiaison_3:"请输入现场联络员3",
            //现场联络员电话
            TuFaShiJian_SiteLiaison_Phone_1:"请输入现场联络员电话1",
            TuFaShiJian_SiteLiaison_Phone_2:"请输入现场联络员电话2",
            TuFaShiJian_SiteLiaison_Phone_3:"请输入现场联络员电话3",

        }
    });
});


/****************新建突发事件 表单验证 end***************/













$(".shuBiaoXuanFuTanChu_click").click(function () {
    $(".shuBiaoXuanFuTanChu").toggleClass("dis");
})



$(".guanbiyujing").click(function () {
    $(this).parent().addClass("dis");
})


$("#yujingguihuashezhi").click(function () {
    $(".yujingguihuashezhi").removeClass("dis").siblings(".monitor_content").addClass("dis");

})
$("#shikongjujixingyujingshezhi").click(function () {
    $(".shikongjujixingyujingshezhi").removeClass("dis").siblings(".monitor_content").addClass("dis");
    testaaa_ss();

})















































