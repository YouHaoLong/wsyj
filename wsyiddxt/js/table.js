var ywtable = {
    initTable: function () {
        
    }
}
/**
 * 初始化表格
 * @param option
 *          参数
 * @param data
 *         数据
 */

function initTable(option,data) {

    let result = createStructure(option,data);


    $('#'+option.id).html(result.html);
    if(result.paging){
        //initPage(result,data.iTotalRecords,data.aaData);
        initPage(result);
    }else{
        if(result.url == ""){
            loadDataByData(0,0,result,data.aaData)
        }else{
           // loadDataByAjax()
        }
    }
        return true;
}


/**
 *        生成表格结构 对用户传入参数进行处理
 * @param option
 *          用户设置参数
 * @param data
 *         非异步加载 需传入数据
 * @returns {{tableId: string, pageId: string, html: string, paging: boolean, column: any[] | string, columnKey: any[], url: string, pagingStyle: string, errorMsg: string}}
 *  tableId
 *      表格id
 *  pageId
 *      分页id
 *  html
 *      html结构
 *  paging
 *      是否分页
 *  column
 *      列名
 *  columnKey
 *      列名对应的对象的字段
 *  url
 *      异步加载的url
 *  pagingStyle
 *      分页的样式
 *  errorMsg
 *      异步加载错误信息
 *
 */
function createStructure(option,data) {
    //获取id
    let id = option.id;
    //获取表格的样式
    let css = option.style==undefined?"table table-responsive table-bordered table-hover":option.style;
    //
    let getColumn = new Array();
    //列名对应的对象的字段
    let columnKey = new Array();
    //渲染方法
    let renders = {};
    //数据中获取的key
    let dataColumn = new Array();
    //分页样式
    let pagingStyle = option.pagingStyle==undefined?'css-1':option.pagingStyle;
    //错误信息
    let errorMsg = option.errorMsg==undefined?"":option.errorMsg;
    //获取列名
    let searchList = new Array();
    //获取表格宽度
    let widths = new Array();
    //非异步加载 获取 key值
    if(data != undefined){
        for( let key  in data.aaData[0]){
            dataColumn.push(key);
      }
    }
    //获取 用户传入列信息
    for (let key in option.column){
         if(option.column[key].openSearch){
             searchList.push(option.column[key].name);
         }
         if(typeof option.column[key].render == 'function'){
        	 renders[option.column[key].name] = option.column[key].render;
         }
         widths.push(option.column[key].width?option.column[key].width:null);
        columnKey.push(option.column[key].name)
        getColumn.push(option.column[key].theadTh);
    }
    let column = '';

    //若用户未传入 列信息 充填传入的数据
    if(option.column==undefined){
        column = dataColumn;
        columnKey = dataColumn;
    }else{
        column = getColumn;
    }
    //是否分页
    let paging = option.paging==undefined?true:option.paging;
    //异步加载地址
    let url = option.url==undefined?"":option.url;
    //表id
    let tableId = id+"Table";
    //分页id
    let pageId = "";
    //增加编辑
    let edtior = option.editor==undefined?false:option.editor;
    
    let ajaxData = option.ajaxData;

    let searchId = id+"Search";
    if(paging){ pageId = id + "Page";}
    //充填表格表头
    let html = '';
     html += '<table class=\"'+css+'\" id='+tableId+'>' +
                        '<thead style="border-bottom: 1px solid #ccc;">' +
                        '<tr>' ;
    for (let index in column){
    	if(widths[index] != null){
    		html += '<td style="width : '+widths[index]+'">'+column[index]+'</td>';
   	 	}else{
   	 	html += '<td>'+column[index]+'</td>';
   	 	}
    }
    if(edtior){html+='<td>编辑</td>'}



    html +=    '</tr>' +
            '</thead>' +
            '<tbody>' +
            '</tbody>' +
            '</table>';
    if (paging) {
        html +=   '<div id='+pageId+'></div>';
    }
    let pageSizeOpt = option.pageSizeOpt==undefined?"":option.pageSizeOpt;
    return {'tableId':tableId,
            'pageId':pageId,
            'html':html,
            'ajaxData':ajaxData,
            'paging':paging,
            'column':column,
            'renders':renders,
            'columnKey':columnKey,
            'url':url,
            'pagingStyle':pagingStyle,
            'errorMsg':errorMsg,
            'searchList':searchList,
            'searchId':searchId,
            'edtior':edtior,
            'pageSizeOpt':pageSizeOpt,
            'widths':widths
    }
    
}

/**
 *
 * @param result
 *         处理完成的信息
 * @param totalSize
 *         数据的总条数
 * @param data
 *         数据
 */
function initPage(result,totalSize,data) {
    if(result.searchList.length>0){
            $('#'+result.searchId).on('keydown',function () {
                let value = $(this).val()
               // $('#'+tableId).find()
            });
    }
    //非异步加载
    if(result.url == ""){
        let pageSize = 5;//先定义每页显示10条数据；
        let totalPage = parseInt(totalSize / pageSize);//总条数除以每页显示数据=总页数
        if (totalPage * pageSize < totalSize) {
            totalPage++;
        }
        $("#"+result.pageId).whjPaging({
                //调用whjPanging这个分页方法里面的参数
                css: result.pagingStyle,
                totalSize: totalSize,
                totalPage: totalPage,
                pageSizeOpt:result.pageSizeOpt!=""?result.pageSizeOpt:[
                                                                                    {value: 5, text: '5条/页',selected: true},
                                                                                    {value: 10, text: '10条/页'},
                                                                                    {value: 15, text: '15条/页'},
                                                                                    {value: 20, text: '20条/页'}
                                                                                  ],
                callBack: function (page, size) {
                    loadDataByData(page, size,result,data);
                }
            });
        loadDataByData(1,5,result,data)
    }else{
    	 fenye();
        //异步加载
        $("#"+result.pageId).whjPaging({
            css: result.pagingStyle,
            //设为true时，ajax里的success函数必须调用setPage方法，否则分页插件显示保持不变
            isResetPage: true,
            pageSizeOpt:result.pageSizeOpt!=""?result.pageSizeOpt:[
                                                                   {value: 5, text: '5条/页',selected: true},
                                                                   {value: 10, text: '10条/页'},
                                                                   {value: 15, text: '15条/页'},
                                                                   {value: 20, text: '20条/页'}
                                                                 ],
            callBack: function(page, size) {
                loadDataByAjax(page, size,result);
            }
        });
        if(result.pageSizeOpt != ""){
        	let data = result.pageSizeOpt;
        	for(let i=0; i < data.length; i++){
        		if(data[i].selected != "undefiend" && data[i].selected == true){
        			 loadDataByAjax(1,data[i].value,result);
        			 break;
        		}
        	}
        }else{
        	loadDataByAjax(1,5,result);
        }
        
        
        
        
    }
}

/**
 * 非异步加载数据处理
 * @param page
 *          当前页面
 * @param size
 *          每页显示条数
 * @param result
 *          处理完成的信息
 * @param data
 *          数据
 */
function loadDataByData(page, size,result,data) {
    let html = '';
        let subList = page==0?data:data.slice((page - 1) * size, page * size);
        let cloumn = result.columnKey;
        if(subList.length>0){
        	subList.forEach(function (obj, index, arr) {
                html += '<tr>';
                for (let key in cloumn){
                    if(obj[cloumn[key]] != undefined || obj[cloumn[key]] == null) {
                    	let value = ""; 
                    	if(typeof renders[columnKey[key]] == 'function'){
                    		 //调用render方法渲染
                    		 value = renders[columnKey[key]](obj);
                    	 }else{
                    		 value = obj[columnKey[key]]==null?"":obj[columnKey[key]];
                    	 }
                        value = obj[cloumn[key]]==null?"":obj[cloumn[key]];
                        html += '<td name='+cloumn[key]+'>' + value + '</td>';
                    }
                }
                if(result.edtior){
                    html+='<td></td>'
                }
                html += '</tr>';
            })
        }else{
        	html += '<tr><td colspan = "'+ (columnKey.length - 1)+'" >暂无符合条件的记录<td></tr>';
        }
        
   $('#'+result.tableId).find('tbody').html(html);
}

/**
 * 异步加载数据处理
 * @param currPage
 *          点击当前的页面
 * @param pageSize
 *          当前每页条数
 * @param result
 *          处理完成的信息
 */
function loadDataByAjax(currPage,pageSize,result) {
	var ajaxData = result.ajaxData == undefined ? {} : result.ajaxData;
	ajaxData.currPage = currPage;
	ajaxData.pageSize = pageSize;
    $.ajax({
    	async : false,
        url: result.url,
        type:'post',
        data:ajaxData,
        dataType:'json',
        success:function (res) {
             let data = res.aaData;
             let html = '';
             let columnKey = result.columnKey;
        
             let totalPage = parseInt(res.iTotalRecords / pageSize);//总条数除以每页显示数据=总页数        
             let renders = result.renders;
             let widths = result.widths;
             if (totalPage * pageSize < res.iTotalRecords) {
                totalPage++;
                }
             if(data.length>0){
            	 data.forEach(function (obj,index,arr) {
                		 html += '<tr>';	 
                     for(let key in columnKey){
                         if(obj[columnKey[key]] != undefined){
                        	 let value = "";
                        	 if(typeof renders[columnKey[key]] == 'function'){
                        		 //调用render方法渲染
                        		 value = renders[columnKey[key]](obj);
                        	 }else{
                        		 value = obj[columnKey[key]]==null?"":obj[columnKey[key]];
                        	 }
                             html += '<td name = '+columnKey[key]+'>' + value + '</td>';
                         }else{
                        	 html += '<td name = '+columnKey[key]+'></td>';
                         }
                     }
                     html += '</tr>'
                 })
             }else{
            	 html += '<tr><td colspan = "'+ (columnKey.length - 1) +'" >暂无符合条件的记录<td></tr>';
             }
             
            $('#'+result.tableId).find('tbody').html(html);
             fenye();
            $("#"+result.pageId).whjPaging("setPage", {currPage: currPage, totalPage: totalPage, totalSize: res.iTotalRecords});
          
        },error:function (e) {
            console.log(result.errorMsg+JSON.stringify(e));
        }
    })


};



