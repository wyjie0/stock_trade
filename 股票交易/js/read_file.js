function my_readfile(){
	if(window.FileReader){
		var fr = new FileReader();
	}
	else{
		alert("不支持");
	}
	fr.readAsText("files/user_info.txt");
	fr.onload = function(e){
		alert(this.result);
	}
}
	

