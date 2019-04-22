/**
	* 完成课时
	* @example finishLesson(1);
	* @param {Number} lesson 课程
*/

//function readFile(){
//	if(window.FileReader) {
//		var file = this.files[0];
//		filename = file.name.split('.')[0];
//		var reader = new FileReader();
//		reader.onload = function() {
//			var ret = this.result;
//		}
//		reader.readAsText(file);
//	}
//	return ret;
//}

function log_in(){
	var usr, pwd;
	var sel_id_radio, account = 0;;
	
	sel_id_radio = document.getElementsByName("sel_id");
	usr = document.getElementById("username").innerHTML;//获取用户账号
	pwd = document.getElementById("password").innerHTML;//获取密码
	
	var value = 0
	for (var i = 0; i < sel_id_radio.length; i++){
		if(sel_id_radio[i].checked == true){
			value = sel_id_radio[i].value;
		}
	}
	
//	while(account < 3){
//		
//	}
	
	if(value == 'creator'){
		self.location = "creator_function.html";
	}	
	if(value == 'normal'){
		self.location = "normal_function.html";
	}
		
}