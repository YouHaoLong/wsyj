	
	// 百度地图API功能
//  var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
//  var markerClusterer;
//  var markers = [];
    var map;
    var listx = [113.9,114.466233,114.166333,114.086433,114.366163,113.95];
    var listy = [22.6,22.65,22.62,22.75,22.77,22.78];
    function testaaa(){
		map = new BMap.Map("allmap");                        // 创建Map实例
	    map.centerAndZoom(new BMap.Point(114.034369,22.713662),11);     // 初始化地图,设置中心点坐标和地图级别
		map.enableScrollWheelZoom(true);
	   // map.disableDragging();     //禁止拖拽
	    map.disableDoubleClickZoom();	//禁止双击
			map.setCurrentCity("深圳");  
			$.getJSON("js/demo.json",function(data){
			addStreetAreaColor(map,data);
	})

//	var point = new BMap.Point(113.666133,23);
//	map.centerAndZoom(point,12);

}


    function testaaa_s(){
        map = new BMap.Map("HHH");                        // 创建Map实例
        map.centerAndZoom(new BMap.Point(114.034369,22.713662),10);     // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true);
        // map.disableDragging();     //禁止拖拽
        map.disableDoubleClickZoom();	//禁止双击
        map.setCurrentCity("深圳");
        $.getJSON("js/demo.json",function(data){
            addStreetAreaColor(map,data);
        })

//	var point = new BMap.Point(113.666133,23);
//	map.centerAndZoom(point,12);

    }

    function testaaa_ss(){
        map = new BMap.Map("HHH_1");                        // 创建Map实例
        map.centerAndZoom(new BMap.Point(114.034369,22.713662),10);     // 初始化地图,设置中心点坐标和地图级别
        map.enableScrollWheelZoom(true);
        // map.disableDragging();     //禁止拖拽
        map.disableDoubleClickZoom();	//禁止双击
        map.setCurrentCity("深圳");
        $.getJSON("js/demo.json",function(data){
            addStreetAreaColor(map,data);
        })

//	var point = new BMap.Point(113.666133,23);
//	map.centerAndZoom(point,12);

    }



	$(function () {
		
	
        $('#resource_checkbox li').click(function () {
            var index = $(this).index();
            var imgUrl = urlFactroy(index);
            addMaker(imgUrl,"c",listx[index],listy[index],content[index]);
            //addMaker(imgUrl,index,listx[index],listy[index],content[index]);
        });
        
        $('#jihe').click(function(){
        	var index=0;
        	var imgUrl = urlFactroy(index);
        	addMaker(imgUrl,index,listx[index],listy[index],content[index]);
        })



        var content = ['<div class="material">'+
            '<div class="survey_title">'+
            '<span>医院</span>'+
            '</div>'+
            '<div class="emergency_detail">'+
            '<ul>'+
            '<li class="detail_list row">暂无数据</li>'+
            '</ul>'+
            '</div>'+
            '</div>',
            '<div class="material">'+
            '<div class="survey_title">'+
            '<span>社康</span>'+
            '</div>'+
            '<div class="emergency_detail">'+
            '<ul>'+
            '<li class="detail_list row">暂无数据</li>'+
            '</ul>'+
            '</div>'+
            '</div>',
            '<div class="material">'+
            '<div class="survey_title">'+
            '<span>救助站</span>'+
            '</div>'+
            '<div class="emergency_detail">'+
            '<ul>'+
            '<li class="detail_list row">暂无数据</li>'+
            '</ul>'+
            '</div>'+
            '</div>',
            '<div class="material">'+
            '<div class="survey_title">'+
            '<span>应急物资</span>'+
            '</div>'+
            '<div class="emergency_detail">'+
            '<ul>'+
            '<li class="detail_list row"><span class="step_list_left col-md-3">物资名称：</span><span class="step_list_right col-md-9">传染病控制类<a class="see m_l20" href="javascript:;">查看详情</a></span></li>'+
            '<li class="detail_list row"><span class="step_list_left col-md-3">存储量：</span><span class="step_list_right col-md-9">200</span></li>'+
            '<li class="detail_list row"><span class="step_list_left col-md-3">负责人：</span><span class="step_list_right col-md-9">李某（13562356988）</span></li>'+
            '<li class="detail_list row"><span class="step_list_left col-md-3">电话：</span><span class="step_list_right col-md-9"><a href="javascript:;">0755-85211201</a></span></li>'+
            '<li class="detail_list row"><span class="step_list_left col-md-3">地点：</span><span class="step_list_right col-md-9">坪山区坑梓街道办<a href="javascript:;"><i class="iconfont icon-dingwei m_l20"></i></a></span></li>'+
            '</ul>'+
            '</div>'+
            '</div>',
            '<div class="ranks">'+
            '<div class="survey_title">'+
            '<span>应急队伍</span>'+
            '</div>'+
            '<div class="emergency_detail">'+
            '<ul>'+
            '<li class="detail_list row"><span class="step_list_left col-md-3">名称：</span><span class="step_list_right col-md-9">传染病防控应急队<a class="see m_l20" href="javascript:;">查看详情</a></span></li>'+
			'<li class="detail_list row"><span class="step_list_left col-md-3">人数：</span><span class="step_list_right col-md-9">10</span></li>'+
			'<li class="detail_list row"><span class="step_list_left col-md-3">负责人：</span><span class="step_list_right col-md-9">李某（13562356988）</span></li>'+
			'<li class="detail_list row"><span class="step_list_left col-md-3">电话：</span><span class="step_list_right col-md-9"><a href="javascript:;">0755-85211201</a></span></li>'+
			'<li class="detail_list row"><span class="step_list_left col-md-3">地点：</span><span class="step_list_right col-md-9">坪山区坑梓街道办<a href="javascript:;"><i class="iconfont icon-dingwei m_l20"></i></a></span></li>'+
            '</ul>'+
            '</div>'+
            '</div>',
            '<div class="expert">'+
            '<div class="survey_title">'+
            '<span>专家库</span>'+
            '</div>'+
            '<div class="emergency_detail">'+
            '<ul>'+
            '<li class="detail_list row"><span class="step_list_left col-md-3">名称：</span><span class="step_list_right col-md-9">应急医疗救援专家组<a class="see m_l20" href="javascript:;">查看详情</a></span></li>'+
            '<li class="detail_list row"><span class="step_list_left col-md-3">人数：</span><span class="step_list_right col-md-9">10</span></li>'+
			'<li class="detail_list row"><span class="step_list_left col-md-3">负责人：</span><span class="step_list_right col-md-9">李某（13562356988）</span></li>'+
			'<li class="detail_list row"><span class="step_list_left col-md-3">电话：</span><span class="step_list_right col-md-9"><a href="javascript:;">0755-85211201</a></span></li>'+
			'<li class="detail_list row"><span class="step_list_left col-md-3">地点：</span><span class="step_list_right col-md-9">坪山区坑梓街道办<a href="javascript:;"><i class="iconfont icon-dingwei m_l20"></i></a></span></li>'+
            '</ul>'+
            '</div>'+
            '</div>'
        ];
        function urlFactroy(index) {
            if(index == 0){
                return "images/weisheng/hospital2.png";
            }else if(index == 1){
                return "images/weisheng/club2.png";
            }else if(index == 2){
                return "images/weisheng/love2.png";
            }else if(index == 3){
                return "images/weisheng/materials2.png";
            }else if(index == 4){
                return "images/weisheng/troops2.png";
            }else if(index == 5){
                return "images/weisheng/specialist2.png";
            }
        }


        function addMaker(imgUrl,str,x,y,content){
        	var markers = [];
            var label = new BMap.Label(str,{offset:new BMap.Size(20,-10)});
            label.setStyle({color:"#000",width:"auto",border:"0px",display:"none"});
            var myIcon = new BMap.Icon(imgUrl, new BMap.Size(30,44));
           if(str == 0){
           		for(var i = 0; i < listx.length; i++){
					var m =  new BMap.Marker(new BMap.Point(listx[i],listy[i]),{icon:myIcon})
           			markers.push(m);
           			m.setLabel(label);
           	 		m.setTitle(str);
           			map.addOverlay(m);
                    addMouseOnHandler(m,content);
           		}
           }else{
           		var marker = new BMap.Marker(new BMap.Point(x,y),{icon:myIcon});
           	    marker.setLabel(label);
           	    marker.setTitle(str);
	            map.addOverlay(marker);
	            addMouseOnHandler(marker,content);
           }
           
            if(markers.length != 0){
                var markerClusterer = new BMapLib.MarkerClusterer(map, {markers:markers});
            }
            
        }

        function addMouseOnHandler(marker, content){
            marker.addEventListener("click",function(e){
                openInfo(content,e);
            });
        }

        function openInfo(content,e){
            var p = e.target;
            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
            var infoWindow ="";
            var option = {
                width : 360,     // 信息窗口宽度
                height: 320,     // 信息窗口高度
                enableMessage:true//设置允许信息窗发送短息
            }
            infoWindow = new BMap.InfoWindow(content,option);  // 创建信息窗口对象
            infoWindow = new BMap.InfoWindow(content,setWindowBoxMethod());  // 创建信息窗口对象
            map.openInfoWindow(infoWindow,point);                //开启信息窗口
        }
        function setWindowBoxMethod(){
            return opts = {
                width : 340,     // 信息窗口宽度
                height: 300,     // 信息窗口高度
                enableMessage:true//设置允许信息窗发送短息
            }
        }
    })



