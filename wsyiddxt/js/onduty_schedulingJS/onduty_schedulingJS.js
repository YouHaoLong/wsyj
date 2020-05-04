/*****************************值班与排班js样式***************************************/


//点击排班四个选项，会切到相应的表格
$('.schedual_item li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('.schedual_content .table_item').eq($(this).index()).removeClass('dis').siblings().addClass('dis');
});




$('.schedual_handle li').on('click',function(){
    //li样式切换
    $(this).addClass("active").css({"background":"#638FFA","color":"#fff"}).siblings().removeClass("active").css({"background":"transparent","color":"#000"});
    if($(this).hasClass("schedual_handle_item")){//如果当前li是导入
        $('.putIn').removeClass("dis");//弹出导入弹窗
    }else if($(this).hasClass("schedual_handle_delete")){//如果当前是删除
       $(".checkbox_Unselected").parent().removeAttr("style");
       $(".ShanChuXuanZhong").removeClass("dis");
    }else if($(this).hasClass("schedual_SamplingAudit_item")){//如果当前是抽查审核
       $(".ChouChaShenHe").removeClass("dis").siblings().addClass("dis");
    }else if($(this).hasClass("schedual_AuditLogging_item")){//如果当前是审核记录
        $(".ShenHeJiLu").removeClass("dis").siblings().addClass("dis");
    }else if($(this).hasClass("schedual_holidayLoging_item")){//如果当前是节假日录入
        $(".JieJiaRiLuRu").removeClass("dis").siblings().addClass("dis");
    }else if($(this).hasClass("schedual_Uploaded_Unit_item")){//已上传单位
        $(".YiShangChuanDanWei").removeClass("dis").siblings().addClass("dis");
    }else if($(this).hasClass("schedual_NotUploaded_Unit_item")){//未上传单位
        $(".WeiShangChuanDanWei").removeClass("dis").siblings().addClass("dis");
    }
});
$(".putIn_guanbi").click(function () {//导入弹窗关闭按钮
    $('.putIn').addClass("dis").removeClass("active");
});





//时间插件
var start = {}, end = {};
jeDate('#inpstart',{
    format: 'YYYY-MM-DD',
    minDate: '2014-06-16', //设定最小日期为当前日期
    maxDate: function (that) {
        //that 指向实例对象
        return jeDate.valText(that.valCell) == "" ? jeDate.nowDate({DD:0}) : start.maxDate;
    }, //设定最大日期为当前日期
    donefun: function(obj){
        end.minDate = obj.val; //开始日选好后，重置结束日的最小日期
        jeDate("#inpend",LinkageEndDate(false));
    }
});
jeDate('#inpend',LinkageEndDate);
function LinkageEndDate(istg) {
    return {
        trigger : istg || "click",
        format: 'YYYY-MM-DD',
        minDate: function (that) {
            //that 指向实例对象
            var nowMinDate = jeDate.valText('#inpstart') == "" && jeDate.valText(that.valCell) == "";
            return nowMinDate ? jeDate.nowDate({DD:0}) : end.minDate ;
        }, //设定最小日期为当前日期
        maxDate: '2099-06-16', //设定最大日期为当前日期
        donefun: function(obj){
            start.maxDate = obj.val; //将结束日的初始值设定为开始日的最大日期
        }
    };
}

$(".inpstart").each(function(){
    var mat = $(this).attr("placeholder");
    jeDate(this,{
        format: mat
    });
});





//分页插件
$(".pagination_12").whjPaging({
    css: 'css-2',
    totalSize: 90,
    totalPage: 18,
});

/*调用输入下拉框插件*/
$('.DivCss_Entering_Dropdown').comboSelect();




$(".DivCss_table .DivCss_tr").click(function () {
    // div+css模拟表格
    if($(this).hasClass("DivCss_background_transparent")){
        $(this).css({"background":"transparent"});
    }else{
        $(this).css({"background":"#D0DDFD"}).siblings(".DivCss_tr").css({"background":"transparent"});
    }
})

$("#activity_arrange input").click(function(){
    if($(this).val()=="新增活动安排"){
        $(".activity_arrange_1").addClass("dis");
        $(".activity_arrange_2").removeClass("dis");
    }else if($(this).val()=="活动排班汇总"){
        $(".activity_arrange_2").addClass("dis");
        $(".activity_arrange_1").removeClass("dis");
    }
})



/*通知单位上传的删除功能*/
$(".DivCss_DivCss_tr_close").click(function(){
   $(this).parent().parent().remove();
})



/*值班单位添加*/
$(".activity_arrange_2 .Tianjia_anNiu_qiehuan").click(function () {
  var Tianjia_anNiu_qiehuan=$('<p style="width:200px;text-align: left;position:relative;margin-bottom:10px;"><input style="width: 90%;" type="text" placeholder="请输入值班单位名"><i class="Shanchu_anNiu_qiehuan Shanchu_anNiu_qiehuan_click" style="position:absolute;top:0;right:-15px;"></i></p>');
  $(this).parent().after(Tianjia_anNiu_qiehuan);
  $(".Shanchu_anNiu_qiehuan_click").click(function () {
      $(this).parent().remove();
  })
})



$(function () {
    var checkbox_All;
    //实现全选反选
    $(".DivCss_thead .checkbox_All").on('click',function() {
        var checkbox_All_this=$(this);
        checkbox_All=$(this);

        var ccbx=$(this).parent().parent().parent().parent().siblings().find("input:checkbox");
        ccbx.prop("checked", $(this).prop('checked'));


        if(ccbx.is(":checked")){
            ccbx.parent().addClass("checkbox_Selected");
            checkbox_All_this.parent().addClass("checkbox_Selected");
        }else{
            ccbx.parent().removeClass("checkbox_Selected");
            checkbox_All_this.parent().removeClass("checkbox_Selected");
        }
    });
    var input_checkbox;
    $(".DivCss_tr input:checkbox").on('click', function() {
        input_checkbox=$(this);
        if($(this).is(":checked")){
            $(this).parent().addClass("checkbox_Selected");
        }else{
            $(this).parent().removeClass("checkbox_Selected");
        }
        //当选中的长度等于checkbox的长度的时候,就让控制全选反选的checkbox设置为选中,否则就为未选中
        if($(this).parent().parent().parent().parent().parent().find(".DivCss_tr input:checkbox").length === $(this).parent().parent().parent().parent().parent().find(".DivCss_tr input:checked").length) {
            $(this).parent().parent().parent().parent().parent().find(".DivCss_thead .checkbox_All").prop("checked", true);
            $(this).parent().parent().parent().parent().parent().find(".DivCss_thead .checkbox_All").parent().addClass("checkbox_Selected");
        } else {
            $(this).parent().parent().parent().parent().parent().find(".DivCss_thead .checkbox_All").prop("checked", false);
            $(this).parent().parent().parent().parent().parent().find(".DivCss_thead .checkbox_All").parent().removeClass("checkbox_Selected");
        }



    })

    $(".ShanChuXuanZhong").on("click","input",function () {
        if($(this).val()=="删除选中"){

             var checkbox_Selected = $(this).parent().siblings().find(".DivCss_tr .checkbox_Selected");
            var SanChuXuanZhong=$.initPopup({allowedMove:false,width:600,height:230,isShowIcon:false,title:"删除"});
            SanChuXuanZhong.addButton("取消").addButton("确定",function () {
                checkbox_Selected.parent().parent().remove();
                SanChuXuanZhong.closePopup();
                $(".checkbox_Unselected").removeClass("checkbox_Selected");
                $(".checkbox_Unselected").parent().css("display","none");
                $(".ShanChuXuanZhong").addClass("dis");
                $(".DivCss_thead .checkbox_All").prop("checked",false);
                $(".DivCss_tr input:checkbox").prop("checked",false);
                $(".schedual_handle_delete").removeClass("active").css({"background":"transparent","color":"#000"});
            }).showPopup(
                '<div><br><br><br><p style="font-size:26px;">确定删除选中的内容吗？</p></div>'
            );

        } else if($(this).val()=="取消"){/*清空选中的复选框*/
            $(".checkbox_Unselected").removeClass("checkbox_Selected");
            $(".checkbox_Unselected").parent().css("display","none");
            $(".ShanChuXuanZhong").addClass("dis");
            $(".DivCss_thead .checkbox_All").prop("checked",false);
            $(".DivCss_tr input:checkbox").prop("checked",false);
            $(".schedual_handle_delete").removeClass("active").css({"background":"transparent","color":"#000"});
        }
    })
})

$(".ChaKanTongXunLu_FanHuiShangYiJi button").click(function () {
    if($(this).text()=="查看通讯录"){
        $(this).addClass("dis").siblings().removeClass("dis");
    }else if($(this).text()=="返回上一级"){
        $(this).addClass("dis").siblings().removeClass("dis");
    }
})

// 抽查审核的核实按钮
$(".ChouChaShenHe .verify").click(function () {
    $(this).next().toggleClass("dis");
    $(this).parent().parent().siblings().find(".verify").next().addClass("dis");
})
$(".ChouChaShenHe .dianhuabenrenyuan_bodadianhua").on('click','p',function () {
    $(this).parent().parent().addClass("dis");
    $(this).parent().parent().parent().parent().siblings().find("dianhuabenrenyuan_bodadianhua").addClass("dis");
    if($(this).hasClass("DivCss_DivCss_td_color_green")){
        $(this).parent().parent().prev().text($(this).text()).css("color","#2ED16C");
    }else if($(this).hasClass("DivCss_DivCss_td_color_red")){
        $(this).parent().parent().prev().text($(this).text()).css("color","#E62626");
    }
})








// 选择抽查单位  随机抽查单位
$(".SelectRandomChouCha").on('click','li',function () {
    $(this).addClass("anniu_color_border").removeClass("button_border_text_padding").siblings().addClass("button_border_text_padding").removeClass("anniu_color_border");

    if($(this).text()=="选择抽查单位"){
       $(".schedual_tab_xuanzechoucha").removeClass("dis").siblings(".schedual_tab_suijichoucha").addClass("dis");

        $(".XuanZeYuSuiJi .XuanZeYuSuiJi_XuanZe").removeAttr("style").css({"width":"100%"}).siblings().css({"display":"none"});

    }else if($(this).text()=="随机抽查单位"){
        $(".schedual_tab_suijichoucha").removeClass("dis").siblings(".schedual_tab_xuanzechoucha").addClass("dis");
        $(".XuanZeYuSuiJi .XuanZeYuSuiJi_SuiJi").removeAttr("style").css({"width":"100%"}).siblings().css({"display":"none"});


    }
})





$(".JieJiaRiLuRu_queding").click(function () {
    if($(this).text()=="确定"){
        $(this).text("修改");
        $(this).parent().next().find("i").addClass("JieJiaRiLuRu_queding_icon");
    }else if($(this).text()=="修改"){
        $(this).text("确定");
        $(this).parent().next().find("i").removeClass("JieJiaRiLuRu_queding_icon");
    }

})












