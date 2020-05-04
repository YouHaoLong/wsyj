/*弹框内容切换逻辑  start*/
// $(".showOperationpanel li").click(
//     function() {
//         /*当我点击触发事件的元素时 就将Operationpanel设置为显示*/
//         $(".modds").css("display", "block");
//         $("#Operation"+$(this).val()).attr('style','z-index:30').siblings("li").removeAttr("style");
//         $(".Operationpanel").css("display","block").animate({left:"53.5%"});
//
// var tankuangbiejing_m1 = $(".tankuangbiejing .m1");
// var tankuangbiejing_m2 = $(".tankuangbiejing .m2");
// var tankuangbiejing_m3 = $(".tankuangbiejing .m3");
// var tankuangbiejing_m4 = $(".tankuangbiejing .m4");
//
//
//         if($(this).text()=="电"){
//             tankuangbiejing_m1.removeClass("dis");
//             tankuangbiejing_m2.removeClass("dis");
//             tankuangbiejing_m3.addClass("dis");
//             tankuangbiejing_m4.addClass("dis");
//
//             $(".accordion").css("height","350px").css("max-height","350px");
//             $(".juleiyemian").addClass("dis").siblings().removeClass("dis");
//             $(".tiquyemian").addClass("dis");
//             //不要拨号键盘
//             if($("#jinqilianxiren").hasClass("color_text")){
//                 $(".dialing_alert").addClass("dis");
//             }else if($("#kuaijiezhu").hasClass("color_text")){
//                 $(".dialing_alert").addClass("dis");
//             }else if($("#tongxunlu").hasClass("color_text")){
//                 $(".dialing_alert").removeClass("dis");//要拨号键盘
//             }
//             $("#tongxunlu").click(function () {
//                 $(".dialing_alert").removeClass("dis");//要拨号键盘
//             })
//
//         }else if($(this).text()=="短"){
//             tankuangbiejing_m3.removeClass("dis");
//             tankuangbiejing_m1.removeClass("dis");
//             tankuangbiejing_m2.addClass("dis");
//             tankuangbiejing_m4.addClass("dis");
//
//             $(".dialing_alert").addClass("dis");
//             $(".accordion").css("height","800px").css("max-height","800px");
//             $(".juleiyemian").addClass("dis").siblings().removeClass("dis");
//             $(".tiquyemian").addClass("dis");
//             //不要拨号键盘
//             if($("#jinqilianxiren").hasClass("color_text")){
//                 $(".dialing_alert").addClass("dis");
//             }else if($("#kuaijiezhu").hasClass("color_text")){
//                 $(".dialing_alert").addClass("dis");
//             }else if($("#tongxunlu").hasClass("color_text")){
//                 $(".dialing_alert").addClass("dis");
//             }
//             $("#tongxunlu").click(function () {
//                 $(".dialing_alert").addClass("dis");//不要拨号键盘
//             })
//         }else if($(this).text()=="传"){
//             tankuangbiejing_m1.removeClass("dis");
//             tankuangbiejing_m2.addClass("dis");
//             tankuangbiejing_m3.addClass("dis");
//             tankuangbiejing_m4.removeClass("dis");
//
//             $(".dialing_alert").addClass("dis");
//             $(".accordion").css("height","800px").css("max-height","800px");
//             $(".juleiyemian").addClass("dis").siblings().removeClass("dis");
//             $(".tiquyemian").addClass("dis");
//             //不要拨号键盘
//             if($("#jinqilianxiren").hasClass("color_text")){
//                 $(".dialing_alert").addClass("dis");
//             }else if($("#kuaijiezhu").hasClass("color_text")){
//                 $(".dialing_alert").addClass("dis");
//             }else if($("#tongxunlu").hasClass("color_text")){
//                 $(".dialing_alert").addClass("dis");
//             }
//             $("#tongxunlu").click(function () {
//                 $(".dialing_alert").addClass("dis");//不要拨号键盘
//             })
//         }else if($(this).text()=="聚类"){//聚类是个新的页面，要讲所有的页面内容都隐藏，编写新的内容
//             $(".juleiyemian").removeClass("dis").siblings().addClass("dis");
//             $(".juleiyemian_ul_vessel").mCustomScrollbar("update");//触发点击事件时更新渲染显示滚动条
//             $(".juleiyemian_Event_List_1").mCustomScrollbar("update");//触发点击事件时更新渲染显示滚动条
//             $(".juleiyemian_Event_List_2").mCustomScrollbar("update");//触发点击事件时更新渲染显示滚动条
//         }else if($(this).text()=="提取"){/*提取和聚类的页面一样，隐藏所有的页面*/
//             $(".tiquyemian").removeClass("dis").siblings().addClass('dis');
//             $(".tiquyemian_Event_List").mCustomScrollbar("update");//触发点击事件时更新渲染显示滚动条
//             $(".guanjianzitiqu_rongqi").mCustomScrollbar("update");//触发点击事件时更新渲染显示滚动条
//             $(".tufashijianbaogaobiao_table").mCustomScrollbar("update");//触发点击事件时更新渲染显示滚动条
//         }
//
//     }
// );
/*弹框内容切换逻辑  end*/





/***************************提取页面js 开始***********************************/
// $(".tiquyemian_Event_List li").click(
//     function () {
//         var tiquyemian_Event_List_li=$(this);//将当前封装
//         tiquyemian_Event_List_li.toggleClass("tiquyemian_Event_List_li_bgcolor");//背景颜色
//
//         //如果发现有这个背景颜色的class,就显示有颜色的选中和多选框的选中
//         if(tiquyemian_Event_List_li.hasClass("tiquyemian_Event_List_li_bgcolor")){
//             tiquyemian_Event_List_li.find("input[name='check']").attr("checked","checked");
//             tiquyemian_Event_List_li.find(".checkbox_false").addClass("dis");
//             tiquyemian_Event_List_li.find(".checkbox_true").removeClass("dis");
//         }else{//否则就恢复未选中时的样式
//             tiquyemian_Event_List_li.find("input[name='check']").removeAttr("checked","checked");
//             tiquyemian_Event_List_li.find(".checkbox_false").removeClass("dis");
//             tiquyemian_Event_List_li.find(".checkbox_true").addClass("dis");
//         }
//
//
//     })
//
//
// $(".tufashijianbaogaobiao").click(
//     function(){
//         $(this).addClass("active");
//         $(".shijianwenbenxinxi").removeClass("active");
//         $(".tufashijianbaogaobiao_p").removeClass("dis");
//         $(".shijianwenbenxinxi_p").addClass("dis");
//     }
//
// )
//
// $(".shijianwenbenxinxi").click(
//     function(){
//         $(this).addClass("active");
//         $(".tufashijianbaogaobiao").removeClass("active");
//         $(".tufashijianbaogaobiao_p").addClass("dis");
//         $(".shijianwenbenxinxi_p").removeClass("dis");
//     }
//
// )
//
//
//
// /*当我点击关键字时，将关键字的内容添加进事件文本信息*/
// $(".guanjianzitiqu_rongqi ul li").on("click",function(){
//     var guanjianzitiqu_rongqi_ul_li=$(this).text();//获取文本
//     var str = $(".shijianwenbenxinxi_p").val() + guanjianzitiqu_rongqi_ul_li;//值加文本
//     $(".shijianwenbenxinxi_p").val(str);//放回去
// })







/***************************提取页面js 结束***********************************/







//
// $(".juleiyemian_Event_List .juleiyemian_Event_List_1 li").click(/*点击li就可以触发背景颜色和确认选择按钮*/
//     function(){
//         var juleiyemian_Event_List_1_Li=$(this);//将当前封装
//         juleiyemian_Event_List_1_Li.css("background","#D0DDFD").siblings().css("background","#fff");//当前背景与兄弟背景
//         juleiyemian_Event_List_1_Li.find(".checkbox_true").removeClass("dis");//当前蓝色按钮
//         juleiyemian_Event_List_1_Li.siblings().find(".checkbox_true").addClass("dis");//隐藏兄弟蓝色按钮
//         juleiyemian_Event_List_1_Li.find(".checkbox_false").addClass("dis");//当前灰色按钮隐藏
//         juleiyemian_Event_List_1_Li.siblings().find(".checkbox_false").removeClass("dis");//显示兄弟灰色按钮
//         juleiyemian_Event_List_1_Li.find("input[name='check']").attr("checked","checked");//添加当前选中属性
//         juleiyemian_Event_List_1_Li.siblings().find("input[name='check']").removeAttr("checked","checked");//删除兄弟选中属性
//
//         //获取当前li下span的值 填入.juleiyemian_ul_vessel p
//         var span_text=$(this).find("span").text();// console.log(span_text);
//         $(".juleiyemian_ul_vessel p").text(span_text);
//
//         /*点击当前将内容放进标题，并显示已选择*/
//         $("#yixuanzhe span:last-child input").val(span_text);
//         $("#yixuanzhe  .checkbox_false").addClass("dis");
//         $("#yixuanzhe  .checkbox_true").removeClass("dis");
//         $("#yixuanzhe span:first-child span:last-child").text("已选择").css("color","#6892FA");
//         $("#yixuanzhe span:first-child").find("input[name='check']").attr("checked","checked");
//
//         $("#yixuanzhe  .checkbox_true").click(/*当我点击已选择时，取消选择*/
//             function () {
//                 $("#yixuanzhe span:last-child input").val("");
//                 $("#yixuanzhe  .checkbox_false").removeClass("dis");
//                 $("#yixuanzhe span:first-child span:last-child").text("未选择").css("color","#ccc");
//                 $(this).addClass("dis");
//                 $("#yixuanzhe span:first-child").find("input[name='check']").removeAttr("checked","checked");
//                 $(".juleiyemian_ul_vessel p").text("");
//             }
//         )
//
//
//
//     }
// )
// $(".juleiyemian_Event_List .juleiyemian_Event_List_2 li").click(/*点击li就可以触发背景颜色和确认选择按钮*/
//     function(){
//         var juleiyemian_Event_List_2_Li=$(this);//将当前封装
//         juleiyemian_Event_List_2_Li.css("background","#D0DDFD").siblings().css("background","#fff");//当前背景与兄弟背景
//         juleiyemian_Event_List_2_Li.find(".checkbox_true").removeClass("dis");//当前蓝色按钮
//         juleiyemian_Event_List_2_Li.siblings().find(".checkbox_true").addClass("dis");//隐藏兄弟蓝色按钮
//         juleiyemian_Event_List_2_Li.find(".checkbox_false").addClass("dis");//当前灰色按钮隐藏
//         juleiyemian_Event_List_2_Li.siblings().find(".checkbox_false").removeClass("dis");//显示兄弟灰色按钮
//         juleiyemian_Event_List_2_Li.find("input[name='check']").attr("checked","checked");//添加当前选中属性
//         juleiyemian_Event_List_2_Li.siblings().find("input[name='check']").removeAttr("checked","checked");//删除兄弟选中属性
//
//         //获取当前li下span的值 填入.juleiyemian_ul_vessel p
//         var span_text=$(this).find("span").text();// console.log(span_text);
//         $(".juleiyemian_ul_vessel p").text(span_text);
//
//
//         $("#yixuanzhe span:last-child input").val(span_text);
//         $("#yixuanzhe  .checkbox_false").addClass("dis");
//         $("#yixuanzhe  .checkbox_true").removeClass("dis");
//         $("#yixuanzhe span:first-child span:last-child").text("已选择").css("color","#6892FA");
//         $("#yixuanzhe span:first-child").find("input[name='check']").attr("checked","checked");
//
//         $("#yixuanzhe  .checkbox_true").click(/*当我点击已选择时，取消选择*/
//             function () {
//                 $("#yixuanzhe span:last-child input").val("");
//                 $("#yixuanzhe  .checkbox_false").removeClass("dis");
//                 $("#yixuanzhe span:first-child span:last-child").text("未选择").css("color","#ccc");
//                 $(this).addClass("dis");
//                 $("#yixuanzhe span:first-child").find("input[name='check']").removeAttr("checked","checked");
//                 $(".juleiyemian_ul_vessel p").text("");
//             }
//         )
//
//
//     }
// )








//点击值守信息的事件，值守信息处理弹出当前相同事件的出来信息
$(".juleiyemian_Event_List_1 li span").on("click",function(){
    $(".juleiyemian_Event_List_2").mCustomScrollbar("update");//触发点击事件时更新渲染显示滚动条
    $(".juleiyemian_Event_List_2").mCustomScrollbar("scrollTo","top");//滚动到顶部
    for(var i=0;i<$(".juleiyemian_Event_List_2 li span").length;i++){
        if($(".juleiyemian_Event_List_2 li span").eq(i).attr("class").indexOf($(this).attr("name"))!=-1){
            $(".juleiyemian_Event_List_2 li span").eq(i).parent().show();
        }else {
            $(".juleiyemian_Event_List_2 li span").eq(i).parent().hide();
        }
    }
})






/*聚类时间插件弹框*/
$("#calendar").click(function () {
    $(".calendar_tankuang").removeClass("dis");
    $(".calendar_tankuang_background").removeClass("dis");
})
/*时间插件中间有个持续中，只有点击持续中时，才选择结束时间，否则只选择开始时间*/
$("#chixuzhong i .checkbox_false").click(
    function () {
     $(this).prev().attr("checked","checked");//上一个兄弟
     $(this).next().removeClass("dis");//下一个兄弟
     $(this).addClass("dis");

     /*当持续中处于选中状态时,解除结束时间的禁用*/
    $("#calendarEnd").removeAttr("disabled","disabled");

    // .removeAttr("readonly","readonly")
        $("#chixuzhong i .checkbox_true").click(
            function(){
                $(this).prev().removeClass("dis");//上一个兄弟
                $(this).parent().find("input[name='check']").removeAttr("checked","checked");
                $(this).addClass("dis");
                //如果当前持续中没选中时，禁用结束时间
                $("#calendarEnd").attr("disabled","disabled");
            })

    })




// $(".guanbianniu_Operationpanel").click(
//     function () {
//        /*关闭大弹框*/
//         $(".modds").css("display", "none");
//         $(".Operationpanel").fadeOut(500).animate({left:"101%"});
//     }
// );

/*点击聚类保存时关闭大弹框*/
$("#JuLeibaochun").click(function () {
    alert("保存成功，返回主页面");
    $(".modds").css("display", "none");
    $(".Operationpanel").fadeOut(500).animate({left:"101%"});
})


$(".guanbianniu_calendar").click(
    function () {
        /*关闭时间插件弹框*/
        $(".calendar_tankuang").addClass("dis");
        $(".calendar_tankuang_background").addClass("dis");
    }
);
$("#JuLeibaochun_1").click(function () {
    alert("保存成功");
    /*关闭时间插件弹框*/
    $(".calendar_tankuang").addClass("dis");
    $(".calendar_tankuang_background").addClass("dis");
})









// <!--**************************************右侧功能弹窗********************************-->
$(".tankuangbiejing .m1 li").on('click',function () {
    $(this).addClass('color_text').siblings().removeClass('color_text');
})

$(".tankuangbiejing .m2 li").on('click',function () {
    $(this).addClass("color_text").siblings().removeClass("color_text");
})



$(".querengou span:nth-child(2)").click(function () {
    if($(this).hasClass("querengou1")){
        $(this).removeClass("querengou1").addClass("querengou2");
        $(this).prev().removeAttr("checkbox","checkbox");
        $(this).parent().parent().siblings().find(".querengou span:nth-child(2)").removeClass("querengou1").addClass("querengou2");
    }else if($(this).hasClass("querengou2")){
        $(this).removeClass("querengou2").addClass("querengou1");
        $(this).prev().attr("checkbox","checkbox");
        $(this).parent().parent().siblings().find(".querengou span:nth-child(2)").removeClass("querengou1").addClass("querengou2");
    }
})



//首页通讯录的下拉树点击人员样式
$(".accordion .friend_list02").click(function () {
        $(this).css('background','#CFDDFD').siblings().css('background','#fff');
        $(this).find('i').addClass('shouyebohaopantouxiang-2').removeClass('shouyebohaopantouxiang-1');
        $(this).siblings().find('i').removeClass('shouyebohaopantouxiang-2').addClass('shouyebohaopantouxiang-1');
        $('.accordion .menu i').removeClass('shouyebohaopantouxiang-1');
    })
$(".kuaijiezhu .friend_list02").click(function () {
    $(this).css('background','#CFDDFD').siblings().css('background','#fff');
    $(this).find('i').addClass('shouyebohaopantouxiang-2').removeClass('shouyebohaopantouxiang-1');
    $(this).siblings().find('i').removeClass('shouyebohaopantouxiang-2').addClass('shouyebohaopantouxiang-1');
    $('.kuaijiezhu .menu i').removeClass('shouyebohaopantouxiang-1');
})
$(".jinqilianxiren_list").click(function () {
    $(this).css('background','#CFDDFD').siblings().css('background','#fff');
})



// // /*点击通讯录时*/
// $("#tongxunlu").click(function () {
//     $(".accordion").removeClass("dis");
//     // $(".dialing_alert").removeClass("dis");
//     $(".jinqilianxiren").addClass("dis");
//     $(".kuaijiezhu").addClass("dis");
//
//     $("#xinzenglianxiren").removeClass("dis");
//     $("#xingzhenzhu").addClass("dis");
//
//
//     $(".xingzhenzhu").addClass("dis");
//     $(".xinzenglianxiren").addClass("dis");
// })
//
// /*点击近期联系人时弹出当前页面*/
// $("#jinqilianxiren").click(function () {
//     $(".accordion").addClass("dis");
//     // $(".dialing_alert").addClass("dis");
//     $(".kuaijiezhu").addClass("dis");
//     $(".jinqilianxiren").removeClass("dis");
//
//     $("#xinzenglianxiren").removeClass("dis");
//
//
//     $(".xingzhenzhu").addClass("dis");
//     $(".xinzenglianxiren").addClass("dis");
//
// })
// //点击快捷组时
// $("#kuaijiezhu").click(function () {
//     $(".accordion").addClass("dis");
//     // $(".dialing_alert").addClass("dis");
//     $(".kuaijiezhu").removeClass("dis");
//     $(".jinqilianxiren").addClass("dis");
//
//     $("#xingzhenzhu").removeClass("dis");
//     $("#xinzenglianxiren").addClass("dis");
//
//
//
//     $(".xingzhenzhu").addClass("dis");
//     $(".xinzenglianxiren").addClass("dis");
// })





// $(".guanbi_tonghuaxiangqingTankuang").click(function () {
//     $(".tonghuaxiangqingTankuang").addClass("dis");
// })
//
//
// $(".dianhua—bohao .dianhua ul li").click(function () {
//     $(".tonghuaxiangqingTankuang").removeClass("dis");
// })
//
//
// $(".guanbi_xinzenglianxiren").click(function () {
//     $(".xinzenglianxiren").addClass("dis");
//     $(".xingzhenzhu").addClass("dis");
// })



// // 新增联系人
// $("#xinzenglianxiren").click(function () {
//     $(".xinzenglianxiren").removeClass("dis");
// })
// // 新增组
// $("#xingzhenzhu").click(
//     function () {
//         $(".xingzhenzhu").removeClass("dis");
//     }
// )







/*************************提取页面保存按钮功能*********************/
//点击保存时，给页面添加代码片段

// $("#tianjiatiqu").click(function () {
// 	var wendangxinxi='<li class="online faxInfo w_100">\n' +
//         '    <div class="row inner m_l0_r0">\n' +
//         '        <div class="p_l30_r30 clearfix"><!--通用部分 信息分类-->\n' +
//         '\n' +
//         '            <div class="pull-left">\n' +
//         '                <ul class="leftIcon">\n' +
//         '                    <li><img src="images/qieTu/tiqu_icon.png"></li>\n' +
//         '                    <li><img src="images/new.png"></li>\n' +
//         '                </ul>\n' +
//         '            </div>\n' +
//         '\n' +
//         '            <div class="pull-right"><!--信息分类弹窗 start-->\n' +
//         '                <div class="event_list eventMes">\n' +
//         '                    <span class="eventInfo_btn eventInfo_btn_8">信息分类</span>\n' +
//         '                    <div class="eventItem eventItem_8 dis">\n' +
//         '                        <div class="arrow arrowInfo"></div>\n' +
//         '                        <ul class="dis_flex">\n' +
//         '                            <li class="jinzhidianji"><img src="images/dian.png"></li>\n' +
//         '                            <li class="infoItem infoItem1">\n' +
//         '                                先\n' +
//         '                            </li>\n' +
//         '                            <li class="infoItem infoItem1">\n' +
//         '                                启\n' +
//         '                            </li>\n' +
//         '                            <li class="infoItem infoItem1">\n' +
//         '                                响\n' +
//         '                            </li>\n' +
//         '                            <li class="infoItem infoItem1">\n' +
//         '                                恢\n' +
//         '                            </li>\n' +
//         '                        </ul>\n' +
//         '                    </div>\n' +
//         '                </div>\n' +
//         '            </div><!--信息分类弹窗 end-->\n' +
//         '        </div><!--通用部分 信息分类-->\n' +
//         '\n' +
//         '        <div class="info_content">\n' +
//         '            <ul class="news_info fl w_100">\n' +
//         '                <li>\n' +
//         '                    <div contenteditable="true">\n' +
//         '                        2018年3月5日\n' +
//         '                    </div>\n' +
//         '\n' +
//         '                </li>\n' +
//         '                <li>\n' +
//         '                    <div contenteditable="true">\n' +
//         '                        20:30\n' +
//         '                    </div>\n' +
//         '                </li>\n' +
//         '                <li>\n' +
//         '                    <div contenteditable="true">\n' +
//         '                        许某\n' +
//         '                    </div>\n' +
//         '\n' +
//         '                </li>\n' +
//         '                <li>\n' +
//         '                    <div contenteditable="true">\n' +
//         '                        办公室主任\n' +
//         '                    </div>\n' +
//         '                </li>\n' +
//         '                <li>\n' +
//         '                    <div contenteditable="true">\n' +
//         '                        0755-12345678\n' +
//         '                    </div>\n' +
//         '                </li>\n' +
//         '                <li>\n' +
//         '                    <div>\n' +
//         '                        <a href="###" class="beizhu_tanchubeizhu"\n' +
//         '                           style="border:1px solid #638FFA;\n' +
//         '\t\t\t\t\t\t\t\t   padding:1px 5px;color:#638FFA;\n' +
//         '\t\t\t\t\t\t\t\t   border-radius: 5px;">\n' +
//         '                            备注\n' +
//         '                        </a>\n' +
//         '                        <a href="###" class="baocun_baocunbeizhu dis"\n' +
//         '                           style="border:1px solid #638FFA;\n' +
//         '\t\t\t\t\t\t\t\t   padding:1px 5px;color:#638FFA;\n' +
//         '\t\t\t\t\t\t\t\t   border-radius: 5px;">\n' +
//         '                            保存\n' +
//         '                        </a>\n' +
//         '                    </div>\n' +
//         '                </li>\n' +
//         '                <li>\n' +
//         '                    <div>\n' +
//         '                        <a href="###"  class="diannao_click"\n' +
//         '                           style="border:1px solid #638FFA;\n' +
//         '\t\t\t\t\t\t\t\t   padding:1px 5px;color:#638FFA;\n' +
//         '\t\t\t\t\t\t\t\t   border-radius: 5px;">\n' +
//         '                            处理记录\n' +
//         '                        </a>\n' +
//         '                    </div>\n' +
//         '                </li>\n' +
//         '            </ul>\n' +
//         '\n' +
//         '\n' +
//         '\n' +
//         '            <div class="verify fl w_100 m_b10">\n' +
//         '                <div id="wendang_xinxi">\n' +
//         '                    <div class="verify fl w_100 tonghuabeizhu">\n' +
//         '                        <!--要设置市区焦点时的样式 shiqujiaodian 这个类写在js-->\n' +
//         '                        <div class="remark fl w_100">\n' +
//         '                            <textarea class="remarkC shiqujiaodian" placeholder="备注："></textarea>\n' +
//         '                        </div>\n' +
//         '                    </div>\n' +
//         '                </div>\n' +
//         '            </div>\n' +
//         '            <!--操作标签-->\n' +
//         '            <div class="handle_tags fl clearfix">\n' +
//         '                <span>操作标签：</span>\n' +
//         '                <ul class="fr showOperationpanel">\n' +
//         '                    <li class="tags_item ac" value="1">电</li>\n' +
//         '                    <li class="tags_item" value="2">短</li>\n' +
//         '                    <li class="tags_item" value="3">传</li>\n' +
//         '                    <li class="tags_item" value="4">突</li>\n' +
//         '                    <li class="tags_item" value="5">批</li>\n' +
//         '                    <li class="tags_item" value="6">阅</li>\n' +
//         '                    <li class="tags_item" value="7">提取</li>\n' +
//         '                    <li class="tags_item" value="8">启动</li>\n' +
//         '                    <li class="tags_item" value="9">聚类</li>\n' +
//         '                </ul>\n' +
//         '            </div>\n' +
//         '            <ul class="news_info m_t10 fl">\n' +
//         '                <li>\n' +
//         '                    <div contenteditable="true">\n' +
//         '                        2018年3月5日\n' +
//         '                    </div>\n' +
//         '                </li>\n' +
//         '                <li>\n' +
//         '                    <div contenteditable="true">\n' +
//         '                        20:18\n' +
//         '                    </div>\n' +
//         '                </li>\n' +
//         '                <li>\n' +
//         '                    <div contenteditable="true">\n' +
//         '                        立方\n' +
//         '                    </div>\n' +
//         '                </li>\n' +
//         '            </ul>\n' +
//         '        </div>\n' +
//         '    </div>\n' +
//         '</li>';
//
//
//     alert("保存成功");
// 	//将页面追加到值班信息列表
// 	$('.event_scrollbar .mCSB_container').append(wendangxinxi);//追加代码片段
//     $('.event_scrollbar .mCSB_container').mCustomScrollbar("update");//触发点击事件时更新渲染显示滚动条
//
// });


// //信息分类弹窗
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






