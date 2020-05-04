     //显示百度地图弹出层
     window.onload = function() {
     	divtoshow();
     }

     //创建遮罩层
     function getshade() {
     	var div = document.createElement("div");
     	div.style.width = Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth) + "px";
     	div.style.height = Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) + "px";
     	div.style.backgroundColor = "#fff";
     	div.style.position = "absolute";
     	div.style.opacity = 0.5;
     	div.style.left = 0;
     	div.style.top = 0;
     	div.id = "tohotelshade";
     	div.style.zIndex = 100;
//   	document.getElementById("div_body").appendChild(div);
     }

     //创建用于显示百度地图的DIV
     function getpopup() {
     	var div = document.createElement("div");
     	div.style.width = "100%";
     	div.style.height = "100%";
     	div.id = "tohotelmap";
     	document.getElementById("div_hotelmap").appendChild(div);
     }

     //清除弹出层和遮罩层
     function close_show() {
     	var tohotelshade = document.getElementById("tohotelshade");
     	var tohotelmap = top.document.getElementById("tohotelmap");
     	var div_show = document.getElementById("div_show"); 
     	var div_hotelmap = document.getElementById("div_hotelmap");
     	div_show.style.zIndex = "-100";
     	tohotelshade.parentNode.removeChild(tohotelshade);
     	tohotelmap.parentNode.removeChild(tohotelmap);
     	div_show.innerHTML = "";
     }

     //通过经纬度显示百度地图
     function getbaidumap(Longitude, Latitude) {
     	var map = new BMap.Map("tohotelmap");
     	var point = new BMap.Point(Longitude, Latitude);
     	map.centerAndZoom(point, 14);
     	var geoc = new BMap.Geocoder();
     	var marker = new BMap.Marker(point); // 创建标注    
     	map.addOverlay(marker); // 将标注添加到地图中  
     	map.addControl(new BMap.NavigationControl());
     	map.addControl(new BMap.ScaleControl());
     	map.addControl(new BMap.OverviewMapControl());
     	map.addControl(new BMap.MapTypeControl());

//   	var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>已通知两个技术员</p><p style='font-size:14px;'>深圳沙井中心</p>");
//   	marker.addEventListener("click", function(e) {
//   		this.openInfoWindow(infoWindow);
//   	});

//   	map.addEventListener("click", function(e){  点击地名，会将所在地的经纬度转译为文字，并填在输入框中    
//			var pt = e.point;
//			geoc.getLocation(pt, function(rs){
//				var addComp = rs.addressComponents;
//				$('.check_place').val(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
//			});        
//		});
//   }

// 百度地图API功能
//		var map = new BMap.Map("#div_show");
//		var point = new BMap.Point(114.220976,22.725894);
//		map.centerAndZoom(point,14);
		    
	

     function divtoshow() {
     	div_show = document.getElementById("div_show");
     	div_show.innerHTML = "<div id=\"div_hotelmap\" ></div>";
     	getshade();
     	getpopup();
     	getbaidumap(114.221516,22.728893);
     	div_show.style.zIndex = "100";
     	div_show.style.display = "block";
     }