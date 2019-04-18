//create_stock页面中的创建按钮触发，跳转到create_stock_detail
function create(){
	self.location = "create_stock_detail.html"
}

//creator_function页面中"创建新股"按钮触发，跳转到create_stock
function create_stock(){
	self.location = "create_stock.html";
}

function my_news(){
	self.location = "my_news.html";
}

//creator_function页面中"查看"按钮触发
function check_my_stock(){
	self.location = "mystock_check.html";
}

//mystock_check页面中"管理股票"按钮触发
function manage_stock(){
	self.location = "manage_stock.html"
}

//mystock_check页面中"股权详情"按钮触发
function stock_right_details(){
	self.location = "stock_right_details.html"
}

//反馈并清除单元格数据
function feedback_transfer(){
	var i;
	var t_input;//manage_stock页面中转让管理表格中的输入

	t_input = document.getElementsByName("transfer_input");

	for(i = 0; i < t_input.length;i++){
		t_input[i].value = ''
	}
	alert('操作成功！')
}

function feedback_auth(){
	var au_input;//manage_stock页面中授权表格中的输入
	
	au_input = document.getElementsByName("auth_input");
	for(var i = 0; i < au_input.length;i++){
		au_input[i].value = ''
	}
	alert('操作成功！')
}

function feedback_allocate(){
	var al_input;//create_stock_detail页面中新股分配表格中的输入
	
	al_input = document.getElementsByName("allocate_input");
	
	for(i = 0; i < al_input.length;i++){
		al_input[i].value = ''
	}
	alert('操作成功！')
}


function add_row_transfer(){
	var tbl;
	tbl = document.getElementById("transfer_manage");
	R = tbl.insertRow();
	C = R.insertCell();
	C.innerHTML = "";
	C = R.insertCell();
	C.innerHTML = "<input style=\"border: hidden;width: 100%; color: #999;\" value=\"请输入转让数量\" "+
	"id=\"transfer_num\" name=\"transfer_input\" onfocus=\"if(value==defaultValue){value='';this.style.color='#000'}\" "+
	"onblur=\"if(!value){value=defaultValue;this.style.color='#999'}\"/>";
	C = R.insertCell();
	C.innerHTML = "<input style=\"border: hidden;width: 100%; color: #999;\" value=\"请输入转让对象\" "+
	"id=\"transfer_object\" name=\"transfer_input\" onfocus=\"if(value==defaultValue){value='';this.style.color='#000'}\" "+
	"onblur=\"if(!value){value=defaultValue;this.style.color='#999'}\"/>";
}

function add_row_auth(){
	var tbl;
	tbl = document.getElementById("author_manage");
	R = tbl.insertRow();
	C = R.insertCell();
	C.innerHTML = "";
	C = R.insertCell();
	C.innerHTML = "<input style=\"border: hidden;width: 100%; color: #999;\" value=\"请输入授权数量\" "+
	"id=\"auth_num\" name=\"auth_input\" onfocus=\"if(value==defaultValue){value='';this.style.color='#000'}\" "+
	"onblur=\"if(!value){value=defaultValue;this.style.color='#999'}\"/>";
	C = R.insertCell();
	C.innerHTML = "<input style=\"border: hidden;width: 100%; color: #999;\" value=\"请输入授权对象\" "+
	"id=\"auth_object\" name=\"auth_input\" onfocus=\"if(value==defaultValue){value='';this.style.color='#000'}\" "+
	"onblur=\"if(!value){value=defaultValue;this.style.color='#999'}\"/>";
}

function add_row_allcate(){
	var tbl;
	tbl = document.getElementById("newstock_allocate");
	R = tbl.insertRow();
	C = R.insertCell();
	C.innerHTML = "<input style=\"border: hidden;width: 100%; color: #999;\" "+
	"id=\"allocate_quantity\" name=\"allocate_input\" value=\"请输入分配数量\""+
	" onfocus=\"if(value==defaultValue){value='';this.style.color='#000'}\"  "+
	"onblur=\"if(!value){value=defaultValue;this.style.color='#999'}\"/>"
	C = R.insertCell();
	C.innerHTML = "<input style=\"border: hidden;width: 100%; color: #999;\""+
	" id=\"allocate_object\" name=\"allocate_input\" value=\"请输入分配对象\" "+
	"onfocus=\"if(value==defaultValue){value='';this.style.color='#000'}\"  "+
	"onblur=\"if(!value){value=defaultValue;this.style.color='#999'}\"/>"
}
