//图片上传预览功能
     var userAgent = navigator.userAgent;//用于判断浏览器类型
     $(".file").change(function () {
             //获取选择图片的对象
             var docObj =$(this)[0];
             var picDiv=$(this).parents(".text-img3");
             //得到所有的图片文件
             var fileList = docObj.files;
             //循环遍历
             for (var i = 0; i < fileList.length; i++) {
                     //动态添加html元素
                     var picHtml="<div class='imageDiv_parents'><div class='imageDiv' > <img id='img" + fileList[i].name + "'  /> <div class='cover'><i class='delbtn'>✖</i></div></div></div>";
                     picDiv.prepend(picHtml);

                    $(".imageDiv_parents .imageDiv .cover .delbtn").click(
                     function () {
                         $(this).parent().parent().parent().remove();
                     });

                     //获取图片imgi的对象
                     var imgObjPreview = document.getElementById("img"+fileList[i].name);
                     if (fileList && fileList[i]) {
                             //图片属性
                             imgObjPreview.style.display = 'block';
                             imgObjPreview.style.width = '100%';
                             imgObjPreview.style.height = '100%';
                             //imgObjPreview.src = docObj.files[0].getAsDataURL();
                             //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要以下方式
                             if(userAgent.indexOf('MSIE') == -1){//IE以外浏览器
                                     imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);   //获取上传图片文件的物理路径
                                 }else{//IE浏览器
                                     if(docObj.value.indexOf(",")!=-1){
                                             var srcArr=docObj.value.split(",");
                                             imgObjPreview.src = srcArr[i];
                                         }else{
                                             imgObjPreview.src = docObj.value;
                                         }
                                 }
                         }
                 }
         });



//图片上传预览功能 操作标签：传
$(".fileInput_2").change(function () {
    //获取选择图片的对象
    var docObj =$(this)[0];
    var picDiv=$(".fileInput_2_img");
    var lujidizhi=$("#fileInput_2").val();
    $("#lujidizhi").val(lujidizhi);
    //得到所有的图片文件
    var fileList = docObj.files;
    //循环遍历
    for (var i = 0; i < fileList.length; i++) {
        //动态添加html元素
        var picHtml="<div class='imageDiv' style='width: 100%;height: 100%'><img id='img" + fileList[i].name + "'  /> <div class='cover' style='left:265px'><i class='delbtn'>✖</i></div></div>";
        picDiv.prepend(picHtml);

        $(".imageDiv .cover .delbtn").click(
            function () {
                $(this).parent().parent().remove();
            });

        //获取图片imgi的对象
        var imgObjPreview = document.getElementById("img"+fileList[i].name);
        if (fileList && fileList[i]) {
            //图片属性
            imgObjPreview.style.display = 'block';
            imgObjPreview.style.width = '100%';
            imgObjPreview.style.height = '100%';
            //imgObjPreview.src = docObj.files[0].getAsDataURL();
            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要以下方式
            if(userAgent.indexOf('MSIE') == -1){//IE以外浏览器
                imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);   //获取上传图片文件的物理路径
            }else{//IE浏览器
                if(docObj.value.indexOf(",")!=-1){
                    var srcArr=docObj.value.split(",");
                    imgObjPreview.src = srcArr[i];
                }else{
                    imgObjPreview.src = docObj.value;
                }
            }
        }
    }
});

//图片上传预览功能 通讯记录 传真记录
$(".fileInput_3").change(function () {
    //获取选择图片的对象
    var docObj =$(this)[0];
    var picDiv=$(".fasongchuanzhentupianyulanqu");
    //得到所有的图片文件
    var fileList = docObj.files;
    //循环遍历
    for (var i = 0; i < fileList.length; i++) {
        //动态添加html元素
        var picHtml="<div class='imageDiv' style='width: 100%;height: 100%'><img id='img" + fileList[i].name + "'  /> <div class='cover' style='left:505px'><i class='delbtn'>✖</i></div></div>";
        picDiv.prepend(picHtml);

        $(".imageDiv .cover .delbtn").click(
            function () {
                $(this).parent().parent().remove();
            });

        //获取图片imgi的对象
        var imgObjPreview = document.getElementById("img"+fileList[i].name);
        if (fileList && fileList[i]) {
            //图片属性
            imgObjPreview.style.display = 'block';
            imgObjPreview.style.width = '100%';
            imgObjPreview.style.height = '100%';
            //imgObjPreview.src = docObj.files[0].getAsDataURL();
            //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要以下方式
            if(userAgent.indexOf('MSIE') == -1){//IE以外浏览器
                imgObjPreview.src = window.URL.createObjectURL(docObj.files[i]);   //获取上传图片文件的物理路径
            }else{//IE浏览器
                if(docObj.value.indexOf(",")!=-1){
                    var srcArr=docObj.value.split(",");
                    imgObjPreview.src = srcArr[i];
                }else{
                    imgObjPreview.src = docObj.value;
                }
            }
        }
    }
});















