//登录
console.log('登录');
//cookie
lsm();
function lsm(){
	//获取页面元素
	var oLogin = document.getElementById("login");
	var oGoRegister = document.getElementById("goRegister");
	var oUserName = document.getElementById("username");
	var oPass = document.getElementById("password");
	//给登录按钮加点击事件
	oLogin.onclick = function(){
		//获取用户输入的用户名和密码
		var usn = oUserName.value;
		var pwd = oPass.value;
		
		//校验用户名和密码是否正确
		//获取到cookie中的用户信息
		var users = getCookie("registerUsers") ? getCookie("registerUsers") : "";
		//将字符串转为对象
		users = convertStrToObj(users);
		
		if(users[usn] == pwd){
			//登录成功
			setCookie("loginedUsers",usn,7);
			console.log("登录成功!");
			location.href = "index.html";
		}else{
			//登录失败
			alert("用户名和密码不匹配，请确认后重试！");
		}
	};
	oGoRegister.onclick = function(){
		//跳转到注册页
		location.href = "register.html";
	};
	//将字符串转为对象
	function convertStrToObj(str){
		if(!str){ //如果是空字符串
			return {}; //返回空对象
		}
		var users = str.split(":");
		var obj = {};
		for(var i = 0; i < users.length; i ++){
			var userData = users[i].split(",");
			obj[userData[0]] = userData[1];
		}
		return obj;
	}
	
	//将对象转为字符串
	function convertObjToStr(obj){
		var str = "";
		//遍历对象
		for(var usn in obj){
			var pwd = obj[usn];
			if(str){
				str += ":";
			}
			str += usn + ',' + pwd;
		}
		return str;
	}
	
	//1.创建cookie
	function setCookie(key,value,expires){
		var cookieText = encodeURIComponent(key) + "=" + encodeURIComponent(value) + ";path=/";
		//设置过期时间
		if(typeof expires == "number"){
			var date = new Date();
			date.setDate(date.getDate() + expires);
			cookieText += ";expires=" + date;
		}	
		document.cookie = cookieText;
	}
	//2.获取cookie
	function getCookie(key){
		var arr = document.cookie.split("; ");
		for(var i = 0; i < arr.length; i ++){
			var list = arr[i].split("=");
			if(list[0] == encodeURIComponent(key)){
				return decodeURIComponent(list[1]);
			}
			
		}
	}
	//3.删除cookie
	function removeCookie(key){
		document.cookie = encodeURIComponent(key) + "=;expires=" + new Date(0) + ";path=/";
	}

}
