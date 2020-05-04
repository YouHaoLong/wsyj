/**************通讯录js样式*****************/


// 下拉树切换逻辑 start
$(".select_ztree_input_icon").click(function(){
    var select_ztree_input_icon=$(this);
    select_ztree_input_icon.children(".fa").toggleClass("select-menu-i");//切换三角
    if(select_ztree_input_icon.find("i").hasClass("select-menu-i")){/*通过三角的切换判断是否显示*/
        select_ztree_input_icon.next().removeClass("dis");
    }else{
        select_ztree_input_icon.next().addClass("dis");
    }
});
// 下拉树切换逻辑 end





//下拉框切换逻辑 start
$(".select-menu-ul").on("click","li",function(){
    //将选中的text放入input
    var select_menu_input=$(this).parent().prev().find('input.select-menu-input');
    select_menu_input.val($(this).text());/*传入值*/

    $("#xinzeng_fenguangongzuo_1").val($(this).text());//这是分管工作的文本框

    /*选完以后关闭弹出窗 三角切换回关闭状态*/
    $(this).parent().addClass("dis");
    $(this).parent().prev().children(".fa").removeClass("select-menu-i");
});

$(".select-menu-div").click(function(){
    var select_menu_div=$(this);
    select_menu_div.children(".fa").toggleClass("select-menu-i");//切换三角
    if(select_menu_div.find("i").hasClass("select-menu-i")){/*通过三角的切换判断是否显示*/
        select_menu_div.next().removeClass("dis");
    }else{
        select_menu_div.next().addClass("dis");
    }
});
//下拉框切换逻辑 end




/*快捷组表格*/
$(".kuaijiezhu_Table tbody").on('click','tr',function () {
    $(this).addClass("active").siblings().removeClass("active");
    if($(this).hasClass("active")){
        $(this).css("background","#D0DDFD").siblings().css("background","transparent");

        if($(this).siblings().hasClass("pointer_events")){//如果当前的tr的兄弟有禁止点击的class时
            $(this).css("background","#F5F5F5");
        }else{
            $(this).css("background","#D0DDFD");
        }

    }
})



//    <!--修改组 添加组 添加人-->
$(".XiugaiTianjia_Zu").on('click','button',function () {
    var xiugaitianjia=$(this);

    if(xiugaitianjia.text()=="修改组"){



        if($(".kuaijiezhu_Table tbody tr").hasClass("active")){
            xiugaitianjia.css({"background":"#ccc","color":"#000","border":"1px solid #ccc"}).attr('disabled',true);//按钮变灰并不可点击
            //创建新元素
            var kaijiezumingchen_input=$('<td><span><input type="text" class="kaijiezumingchen_input"><input value="确认" type="button" class="button_border_text_padding" style="margin-left:5px;"></span></td>');
            $(".kuaijiezhu_Table tbody tr.active").find(".kuaijiezhu_name").text("修改快捷组名称：");//修改内容
            $(".kuaijiezhu_Table tbody tr.active").append(kaijiezumingchen_input);//追加元素
            $(".kuaijiezhu_Table tbody tr.active td.kaijiezumingchen_text").addClass("dis");//将上一个元素隐藏
            $(".kaijiezumingchen_input").val($(".kuaijiezhu_Table tbody tr.active td.kaijiezumingchen_text").text());//输入框获取文本

            $(".kuaijiezhu_Table tbody tr.active").siblings().addClass("pointer_events");//其他兄弟禁止点击
            $(".kuaijiezhu_Table tbody tr.active").css("background","#F5F5F5");


            $(".kaijiezumingchen_input").next().off('click').on('click',function(){//输入框下一个元素button
                $(".kuaijiezhu_Table tbody tr.active").find(".kuaijiezhu_name").text("快捷组名称：");//修改内容
                $(".kuaijiezhu_Table tbody tr.active td.kaijiezumingchen_text").removeClass("dis");//将上个元素显示
                $(".kuaijiezhu_Table tbody tr.active td.kaijiezumingchen_text").text($(".kaijiezumingchen_input").val());//文本获取输入框的值
                $(".kuaijiezhu_Table tbody tr.active").siblings().removeClass("pointer_events");//其他兄弟允许点击
                $(this).parent().parent().remove();//删除自己
                $(".kuaijiezhu_Table tbody tr.active").css("background","#D0DDFD");//重新给active设置背景色
                xiugaitianjia.css({"background":"#638FFA","color":"#fff","border":"1px solid #638FFA"}).attr('disabled',false);//按钮变蓝恢复点击


            })
        }


    }else if(xiugaitianjia.text()=="添加组"){
        //        <!--添加快捷组-->
        $(".TianJia_KuaiJieZu").removeClass("dis").siblings().addClass("dis");


    }else if(xiugaitianjia.text()=="添加人"){
        //        <!--添加快捷组人员-->
        $(".TianJiaKuaiJie_Zu_RenYuan").removeClass("dis").siblings().addClass("dis");
    }
})

//添加快捷组人员 选中内容切换
$(".tianjia_and_yichu").on('click','li',function(){
    $(this).addClass("active").siblings().removeClass("active");
})



$("#tianjiakuaijiezhu").click(function(){//跳回电话快捷组页面
    $(".DianHua_KuaiJieZu").removeClass('dis').siblings().addClass('dis');
})


$("#TiaoDao_ZuYuanXiangXi").click(function () {
    //    <!--组员详细信息 蓝色顶部-->
    $(".zuyuan_xiangxixinxi").removeClass("dis").siblings().addClass("dis");
});







//保存成功提示//那里都可以用//调用这方法即可
function baoChunChengGongTiShi(){
    //保存成功后 一秒钟后逐渐隐藏
    $ (".baocunChengGong_TiShiKuang").show().delay(1000).fadeOut();
}



//四个标签样式切换
$('.TongKuaiXinJin').on('click','li',function(){

    $(this).addClass("active").siblings().removeClass("active");

    var pai_ru_chu_shan_hei=$(".pai_ru_chu_shan_hei ul li"),
        kuaijiezu_content=$(".kuaijiezu_content"),
        tongxunlu_content=$(".tongxunlu_content");

    if($(this).text()=="通讯录"){
        pai_ru_chu_shan_hei.removeClass("dis");//显示右边通讯录的切换标签
        tongxunlu_content.removeClass("dis");//将通讯录的内容显示
        kuaijiezu_content.addClass("dis");//将快捷组的内容隐藏
    }else if($(this).text()=="快捷组"){
        kuaijiezu_content.removeClass("dis");//显示快捷组内容
        tongxunlu_content.addClass("dis");//隐藏通讯录的内容

        //切换到快捷组时隐藏导出导入
        pai_ru_chu_shan_hei.children(".daochu_background").parent().addClass("dis");
        pai_ru_chu_shan_hei.children(".daoru_background").parent().addClass("dis");
        $(".DaoChu").addClass("dis");
        $(".DaoRu").addClass("dis");


    }else if($(this).text()=="星标"){
        alert("3");
    }else if($(this).text()=="近期联系人"){
        alert("4");
    }
})

//	右边通讯录标签切换样式
$(".pai_ru_chu_shan_hei ul").on('click','li',function(){
    $(this).css({"background":"#638FFA","color":"#fff"})
        .siblings().css({"background":"transparent","color":"#000"});
    $(this).addClass("active").siblings().removeClass("active");

})


$(".xiangxixinxi .xiangxi_neirong .Tianjia_anNiu_qiehuan").click(
    function(){
        //点击添加按钮，添加输入框，并且可以删除
        var Shanchu_anNiu_qiehuan=$('<span class="tianjiawenbenkuang"><input type="text"><i class="Shanchu_anNiu_qiehuan"></i></span>');
        $(this).parent().append(Shanchu_anNiu_qiehuan);
        $(".Shanchu_anNiu_qiehuan").click(function(){
            $(this).parent().remove();
        })
})

$(".xingbiao_qiehuan").click(function(){
    //      星标样式切换
    if($(this).hasClass("xingbiao_biaoji_huise")){
        $(this).addClass("xingbiao_biaoji_caise").removeClass("xingbiao_biaoji_huise");
    }else{
        $(this).addClass("xingbiao_biaoji_huise").removeClass("xingbiao_biaoji_caise");
    }
})


$(".pai_ru_chu_shan_hei ul li").on('click',function(){
    var this_i=$(this).children();//获取到当前点击按钮的class

    if(this_i.hasClass("paixu_background")){//如果当前点击的按钮是排序
        $(".DanweiPaixu_RenyuanPaixu").removeClass("dis").siblings().addClass("dis");//单位人员排序
    }else if(this_i.hasClass("daochu_background")){//如果当前点击的按钮是导出
        $(".DaoChu").removeClass("dis").siblings().addClass("dis");//导出
    }else if(this_i.hasClass("daoru_background")){//如果当前点击的按钮是导入
        $(".DaoRu").removeClass("dis").siblings().addClass("dis");//导入
    }else if(this_i.hasClass("shanchu_background")){//如果当前点击的按钮是删除
        $(".ShanChu").removeClass("dis").siblings().addClass("dis");//删除
    } else if(this_i.hasClass("heimingdan_background")){//如果当前点击的按钮是黑名单
        $(".HeiMingDan").removeClass("dis").siblings().addClass("dis");//黑名单
    }

})


/*点击左边通讯录的区域时，取消排序的选中状态，将页面切换到详细信息页面*/
$(".tongxunlu_left").click(function(){
    var paixu_background=$(".pai_ru_chu_shan_hei ul li i.paixu_background");
    paixu_background.parent().css({"background":"transparent","color":"#000"}).removeClass("active");
    $(".DanweiPaixu_RenyuanPaixu").addClass("dis");//隐藏单位人员排序
    $(".xiangxixixi_hide_show").removeClass("dis");//显示详细信息页面

})




$("#danwei_xiangxi_xiugai_1").click(
    function(){
        //点击修改按钮时，切换修改单位页面
        $(".xiugai_danwei_1").removeClass("dis");//修改单位页面
        $(".danwei_xiangxixinxi").addClass("dis");//单位详细页面

        $("#baochun_1").click(
            function(){
                $(".xiugai_danwei_1").addClass("dis");//修改单位页面
                $(".danwei_xiangxixinxi").removeClass("dis");//单位详细页面

                baoChunChengGongTiShi();//保存成功小提示
            })
    })



$("#xinzengdanwei_1").click(function(){
    //点击新增单位，切换新增单位页面
    $(".danwei_xiangxixinxi").addClass("dis");//单位详细页面
    $(".xinzeng_danwei_1").removeClass("dis");//新增单位页面

    $("#xinzeng_baochun_1").click(function(){
        $(".danwei_xiangxixinxi").removeClass("dis");//单位详细页面
        $(".xinzeng_danwei_1").addClass("dis");//新增单位页面
    })

})

$("#renyuan_xiangxi_xiugai_2").click(
    function(){
        //点击修改按钮时，切换修改人员页面
        $(".xiugai_renyuan_2").removeClass("dis");//修改人员页面
        $(".renyuan_xiangxixinxi").addClass("dis");//人员详细页面

        $("#baochun_2").click(
            function(){
                $(".xiugai_renyuan_2").addClass("dis");//修改单位页面
                $(".renyuan_xiangxixinxi").removeClass("dis");//单位详细页面

                baoChunChengGongTiShi();//保存成功小提示
            })
    })


$("#xinzengrenyuan_2").click(
    function(){
        //点击新增按钮时，切换新增人员页面
        $(".renyuan_xiangxixinxi").addClass("dis");//人员详细页面
        $(".xinzeng_renyuan_2").removeClass("dis");//修改人员页面

        $("#xinzeng_baochun_2").click(function(){
            $(".renyuan_xiangxixinxi").removeClass("dis");//人员详细页面
            $(".xinzeng_renyuan_2").addClass("dis");//修改人员页面

            baoChunChengGongTiShi();//保存成功小提示
        })

    })



//直属领导按钮点击弹出弹框
$("#zhishulingdao").click(function(){
    $(".XuanZeTanKuang").removeClass("dis");
})

$(".XuanZeTanKuang .zhishulingdao_table tbody tr td>button").on('click',function(){
    var zhishulingdao_name=$(this).parent().prev().text();
    $("#xinzeng_zhishulingdao_2").val(zhishulingdao_name);
})


/*关闭弹窗*/
$(".guanbianniu").click(function(){
    $(this).parent().addClass("dis");
})




//单位人员排序 li选中效果
$(".Neirong_paixu .Paixudeneirong ul").off('click').on('click','li',function(){

    //当前li添加Class=active,将除自己以外的兄弟删除active,
    $(this).addClass('active').siblings().removeClass('active')
    //并将当前元素父元素的兄弟的孩子删除active
        .parent().siblings().children().removeClass("active");

    //点击li时 获取当前点击li的下标
    var Paixudeneirong_ulli_index = $(this).index();

    if(Paixudeneirong_ulli_index==0){//如果当前li的下标等于0，就是第一个
        $(".paixu_shangjiantou_click").attr('disabled','disabled');//禁用升序按钮
    }else{
        $(".paixu_shangjiantou_click").removeAttr('disabled','disabled');//否则就解除禁用
    }

    //得到单位排序所有li数量
    var ul_DanWei_PaiXu_li_length=$(".Neirong_paixu .Paixudeneirong ul.DanWei_PaiXu li").length-1;

    if(Paixudeneirong_ulli_index==ul_DanWei_PaiXu_li_length){//当前li的下标等于所有li的数量，就是最后一个
        $(".paixu_xiajiantou_click").attr('disabled','disabled');//禁用降序按钮
    }else{
        $(".paixu_xiajiantou_click").removeAttr('disabled','disabled');//否则就解除禁用
    }


    //上下箭头点击排序事件*******************************************************************************************
    $(".paixu_shangjiantou_click").off('click').on('click',function(){//升序*****************************

        var DanWei_PaiXu_active=$(".DanWei_PaiXu li.active");//单位排序
        var RenYuan_PaiXu_active=$(".RenYuan_PaiXu li.active");//人员排序

        if(DanWei_PaiXu_active.hasClass('active')){//如果当前的li有active这个class
            //这是单位排序范围的
            DanWei_PaiXu_active.prev().before(DanWei_PaiXu_active);//当前li插入到上个兄弟元素上面

            var pai_id_DanWei= DanWei_PaiXu_active.attr('id');//获取到当前选中的元素的id
            var pai_next_id_DanWei=DanWei_PaiXu_active.next().attr('id'); //获得下一个兄弟的id
            DanWei_PaiXu_active.attr('id',pai_next_id_DanWei).next().attr('id',pai_id_DanWei);//互换两个元素的id

            var DanWei_PaiXu_index=DanWei_PaiXu_active.index();//获取当前li的下标
            if(DanWei_PaiXu_index==0){//在点击升序按钮时判断其元素位置 如果等于0
                $(this).attr('disabled','disabled');//禁用升序按钮
            }else{
                $(this).removeAttr('disabled','disabled');//否则升序解除禁用
            }

            if(DanWei_PaiXu_index!==ul_DanWei_PaiXu_li_length){//如果当前元素下标不等于总数，降序按钮解除禁用
                $(".paixu_xiajiantou_click").removeAttr('disabled','disabled');
            }

        }else if(RenYuan_PaiXu_active.hasClass('active')){//如果当前的li有active这个class
            //这是人员排序范围的

            RenYuan_PaiXu_active.prev().before(RenYuan_PaiXu_active);//当前li插入到下个兄弟元素下面

            var pai_id_RenYuan=RenYuan_PaiXu_active.attr('id');//获取到当前选中的元素的id
            var pai_next_id_RenYuan=RenYuan_PaiXu_active.next().attr('id');//获得下一个兄弟的id
            RenYuan_PaiXu_active.attr('id',pai_next_id_RenYuan).next().attr('id',pai_id_RenYuan);//互换两个元素的id

            var RenYuan_PaiXu_index=RenYuan_PaiXu_active.index();//获取当前li的下标
            if(RenYuan_PaiXu_index==0){//在点击升序按钮时判断其元素位置
                $(this).attr('disabled','disabled');//禁用升序按钮
            }else{
                $(this).removeAttr('disabled','disabled');//否则升序解除禁用
            }

            if(RenYuan_PaiXu_index!==ul_DanWei_PaiXu_li_length){//如果当前元素下标不等于总数，降序按钮解除禁用
                $(".paixu_xiajiantou_click").removeAttr('disabled','disabled');
            }

        }

    });//升序******************************************************************************************************

    $(".paixu_xiajiantou_click").off('click').on('click',function(){//降序*****************************************

        var DanWei_PaiXu_active=$(".DanWei_PaiXu li.active");//单位排序
        var RenYuan_PaiXu_active=$(".RenYuan_PaiXu li.active");//人员排序


        if(DanWei_PaiXu_active.hasClass('active')){//如果当前的li有active这个class 这是单位排序范围的
            DanWei_PaiXu_active.next().after(DanWei_PaiXu_active);//当前li插入到下个兄弟元素下面

            var pai_id_DanWei= DanWei_PaiXu_active.attr('id');//获取到当前选中的元素的id
            var pai_next_id_DanWei=DanWei_PaiXu_active.prev().attr('id'); //获得上一个兄弟的id
            DanWei_PaiXu_active.attr('id',pai_next_id_DanWei).prev().attr('id',pai_id_DanWei);//互换两个元素的id

            var DanWei_PaiXu_index=DanWei_PaiXu_active.index();//获取当前li的下标
            if(DanWei_PaiXu_index==ul_DanWei_PaiXu_li_length){//如果当前元素下标等于总数 就是最后一个
                $(this).attr('disabled','disabled');//降序按钮禁用
            }else{
                $(this).removeAttr('disabled','disabled');//降序按钮解除禁用
            }

            if(DanWei_PaiXu_index!==0){//在点击升序按钮时判断其元素位置 如果不等于0
                $(".paixu_shangjiantou_click").removeAttr('disabled','disabled');//升序按钮解除禁用
            }

        }else if(RenYuan_PaiXu_active.hasClass('active')){//如果当前的li有active这个class 这是人员排序范围的
            RenYuan_PaiXu_active.next().after(RenYuan_PaiXu_active);//当前li插入到下个兄弟元素下面
            var pai_id_RenYuan=RenYuan_PaiXu_active.attr('id');//获取到当前选中的元素的id
            var pai_next_id_RenYuan=RenYuan_PaiXu_active.prev().attr('id');//获得上一个兄弟的id
            RenYuan_PaiXu_active.attr('id',pai_next_id_RenYuan).prev().attr('id',pai_id_RenYuan);//互换两个元素的id

            var RenYuan_PaiXu_index=RenYuan_PaiXu_active.index();//获取当前li的下标
            if(RenYuan_PaiXu_index==ul_DanWei_PaiXu_li_length){//如果当前元素下标等于总数 就是最后一个
                $(this).attr('disabled','disabled');//降序按钮禁用
            }else{
                $(this).removeAttr('disabled','disabled');//降序按钮解除禁用
            }

            if(RenYuan_PaiXu_index!==0){//在点击升序按钮时判断其元素位置 如果不等于0
                $(".paixu_shangjiantou_click").removeAttr('disabled','disabled');//升序按钮解除禁用
            }

        }
    });//降序******************************************************************************************************




});//上下箭头点击排序事件*******************************************************************************************









































/***************************************假树js用来做例子，不用管，别用 start****************************************************/
//根节点做点击事件
$(".gen_jiedianmingqiehuan").click(function(){$(this).next().toggleClass("ZhanKai");})
//子节点做点击事件
$(".zi_jiedianmingqiehuan").click(function(){
        $(this).next().toggleClass("ZhanKai");
        $(this).next().next().toggle();//办事处和局展现与隐藏
    }
)

$(".tubiao_renming_xingbiao").click(function(){
    $(this).addClass("active").siblings(".mingpianxinxi").addClass("mingpianxinxi_cai");//添加背景色/*边框变色*/
    /*人头变色*/
    $(this).find(".tubiao_touxiang_huise").removeClass().addClass("tubiao_touxiang_caise");
    $(this).parent().siblings().children(".tubiao_renming_xingbiao").removeClass("active").find('.tubiao_touxiang_caise').removeClass().addClass("tubiao_touxiang_huise");
    $(this).parent().siblings().children(".mingpianxinxi").removeClass("mingpianxinxi_cai");
})

$('.jiedianmingqiehuan').on('click',function(){
    var icon=$(this).children(".iconfont");
    if(icon.hasClass('icon-jiantouxia')){
        //icon.removeClass('icon-jiantouxia').addClass('icon-angle_r');//关闭
        icon.removeClass('icon-jiantouxia');//关闭
    }else{
        icon.addClass('icon-jiantouxia');//展开
    }
})

/***************************************假树js用来做例子，不用管，别用 end****************************************************/












