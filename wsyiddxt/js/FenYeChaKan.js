$(function () {
    tabPage({
        pageMain: '#pageMain',
        pageNav: '#pageNav',
        pagePrev: '#prev',
        pageNext: '#next',
        curNum: 4, /*每页显示的条数*/
        activeClass: 'active', /*高亮显示的class*/
        ini: 0/*初始化显示的页面*/
    });
    function tabPage(tabPage) {
        var pageMain = $(tabPage.pageMain);/*获取内容列表*/

        var pageNav = $(tabPage.pageNav); /*获取分页*/

        var pagePrev = $(tabPage.pagePrev); /*上一页*/

        var pageNext = $(tabPage.pageNext);/*下一页*/



        var curNum = tabPage.curNum;/*每页显示数*/

        var p=pageMain.find('li').length;/*获取到总条数*/
        $('.faxSta span:first-child').text(p);//共p封


        var len = Math.ceil(pageMain.find("li").length / curNum);/*计算总页数*/
        $("#optp span:nth-child(2)").html(len);/*共几页*/


        var pageList = '';/*生成页码*/

        var iNum = 0;/*当前的索引值*/


        for (var i = 0; i < len; i++) {/*遍历总页数生成a标签*/
            pageList += '<a href="javascript:;">' + (i + 1) + '</a>';/*追加到页码*/
        }
        pageNav.html(pageList);/*将页码添加到分页*/
        /*头一页加高亮显示*/
        pageNav.find("a:first").addClass(tabPage.activeClass);

        /*******标签页的点击事件*******/
        pageNav.find("a").each(function(){/*pageNav下找到a 当点击当前a标签时*/
            $(this).click(function () {//this指向的是a
                pageNav.find("a").removeClass(tabPage.activeClass);//移除class
                $(this).addClass(tabPage.activeClass);//当前a添加class
                iNum = $(this).index();//iNum等于当前a的下标
                $(pageMain).find("li").hide();//当前内容的li隐藏
                //i=当前a的html内容-1乘于每页显示4条;i<当前a的html乘于每页显示4条；就累加
                for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
                    $(pageMain).find("li").eq(i).show();//获取到第i页显示
                }
                console.log(iNum);

            });
        })


        $(pageMain).find("li").hide();//隐藏
        /************首页的显示*********/
        for (var i = 0; i < curNum; i++) {
            $(pageMain).find("li").eq(i).show()
        }


        /*下一页*/
        pageNext.click(function () {
            $(pageMain).find("li").hide();
            if (iNum == len - 1) {
                alert('已经是最后一页');
                for (var i = (len - 1) * curNum; i < len * curNum; i++) {
                    $(pageMain).find("li").eq(i).show();
                }
                return false;
            } else {
                pageNav.find("a").removeClass(tabPage.activeClass);
                iNum++;
                pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
//                    ini(iNum);
            }
            for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                $(pageMain).find("li").eq(i).show()
            }
            $("#optp span:first-child").text(iNum+1);

        });
        /*上一页*/
        pagePrev.click(function () {
            $(pageMain).find("li").hide();
            if (iNum == 0) {
                alert('当前是第一页');
                for (var i = 0; i < curNum; i++) {
                    $(pageMain).find("li").eq(i).show()
                }
                return false;
            } else {
                pageNav.find("a").removeClass(tabPage.activeClass);
                iNum--;
                pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
            }
            for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                $(pageMain).find("li").eq(i).show()
            }
            $("#optp span:first-child").text(iNum+1);
        });
    }
})



$(function () {
    tabPages({
        pageMain: '#pageMains',
        pageNav: '#pageNavs',
        pagePrev: '#prevs',
        pageNext: '#nexts',
        curNum: 4, /*每页显示的条数*/
        activeClass: 'active', /*高亮显示的class*/
        ini: 0/*初始化显示的页面*/
    });
    function tabPages(tabPages) {
        var pageMain = $(tabPages.pageMain);/*获取内容列表*/

        var pageNav = $(tabPages.pageNav); /*获取分页*/

        var pagePrev = $(tabPages.pagePrev); /*上一页*/

        var pageNext = $(tabPages.pageNext);/*下一页*/



        var curNum = tabPages.curNum;/*每页显示数*/

        var p=pageMain.find('li').length;/*获取到总条数*/
        $('.faxSta span:first-child').text(p);//共p封


        var len = Math.ceil(pageMain.find("li").length / curNum);/*计算总页数*/
        $("#optp span:nth-child(2)").html(len);/*共几页*/


        var pageList = '';/*生成页码*/

        var iNum = 0;/*当前的索引值*/


        for (var i = 0; i < len; i++) {/*遍历总页数生成a标签*/
            pageList += '<a href="javascript:;">' + (i + 1) + '</a>';/*追加到页码*/
        }
        pageNav.html(pageList);/*将页码添加到分页*/
        /*头一页加高亮显示*/
        pageNav.find("a:first").addClass(tabPages.activeClass);

        /*******标签页的点击事件*******/
        pageNav.find("a").each(function(){/*pageNav下找到a 当点击当前a标签时*/
            $(this).click(function () {//this指向的是a
                pageNav.find("a").removeClass(tabPages.activeClass);//移除class
                $(this).addClass(tabPage.activeClass);//当前a添加class
                iNum = $(this).index();//iNum等于当前a的下标
                $(pageMain).find("li").hide();//当前内容的li隐藏
                //i=当前a的html内容-1乘于每页显示4条;i<当前a的html乘于每页显示4条；就累加
                for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
                    $(pageMain).find("li").eq(i).show();//获取到第i页显示
                }
                console.log(iNum);

            });
        })


        $(pageMain).find("li").hide();//隐藏
        /************首页的显示*********/
        for (var i = 0; i < curNum; i++) {
            $(pageMain).find("li").eq(i).show()
        }


        /*下一页*/
        pageNext.click(function () {
            $(pageMain).find("li").hide();
            if (iNum == len - 1) {
                alert('已经是最后一页');
                for (var i = (len - 1) * curNum; i < len * curNum; i++) {
                    $(pageMain).find("li").eq(i).show()
                }
                return false;
            } else {
                pageNav.find("a").removeClass(tabPages.activeClass);
                iNum++;
                pageNav.find("a").eq(iNum).addClass(tabPages.activeClass);
//                    ini(iNum);
            }
            for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                $(pageMain).find("li").eq(i).show()
            }
            $("#optp span:first-child").text(iNum+1);

        });
        /*上一页*/
        pagePrev.click(function () {
            $(pageMain).find("li").hide();
            if (iNum == 0) {
                alert('当前是第一页');
                for (var i = 0; i < curNum; i++) {
                    $(pageMain).find("li").eq(i).show()
                }
                return false;
            } else {
                pageNav.find("a").removeClass(tabPages.activeClass);
                iNum--;
                pageNav.find("a").eq(iNum).addClass(tabPages.activeClass);
            }
            for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
                $(pageMain).find("li").eq(i).show()
            }
            $("#optp span:first-child").text(iNum+1);
        });
    }
})





















