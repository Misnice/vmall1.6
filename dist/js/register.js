/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

lsm();
function lsm(){
	//获取页面元素
	var oRegister = document.getElementById("register");
	var oGoLogin = document.getElementById("goLogin");
	var oUserName = document.getElementById("username");
	var oPass = document.getElementById("password");
	var oConPass = document.getElementById("conPwd");
	//给注册按钮加事件
	oRegister.onclick = function(){
		//获取用户名和密码
		var usn = oUserName.value;
		var pwd = oPass.value;
		var con = oConPass.value; //确认密码
		
		//用户不能为空
		if(!usn){
			alert("用户名不能为空！");
			return;
		}
		
		//检测密码是否相同
		//密码不能为空，密码规则
		if(pwd !== con){
			alert("两次输入的密码不相同，请重试!");
			return;
		}
		
		//检测一下用户是否已经存在
		//假设："test1,123:test2,abc:test3,888"
		/*转为对象
		 * {
		 * 	test1:123,
		 *  test2:abc,
		 *  test3:888
		 * }
		 */
		
		//获取cookie中的用户信息
		var users = getCookie("registerUsers") ? getCookie("registerUsers") : "";
		
		//将字符串转为对象
		users = convertStrToObj(users);
		if(usn in users){ //判断usn属性是否在users对象中。
			alert("用户名已经被注册");
			return;
		}else{
			//注册成功，设置用户信息的cookie
			//test1 123  test2 abc  test3 888
			//"test1,123:test2,abc:test3,888"设置cookie的value值
			//registerUsers 设置cookie的name(key)值
			//将用户添加到已注册用户列表对象中
			users[usn] = pwd;
			//假设users[李涛] = 123
			
			
			//将用户信息对象转化回字符串，以便于设置cookie
			userStr = convertObjToStr(users);
			//设置用户信息cookie
			setCookie("registerUsers",userStr,7);
			console.log(decodeURIComponent(document.cookie))
			alert("注册成功！");
		}
	};
	
	//给增登录按钮添加点击事件
	oGoLogin.onclick = function(){
		//转到登录页面
		location.href = "login.html";
	};
	
	//将字符串转为对象
	function convertStrToObj(str){
		if(!str){
			return {};
		}
		//假设不为空："test1,123:test2,abc:test3,888:李涛,123"
		var users = str.split(":"); //将字符串转为数组 ["test1,123","test2,abc","test3,888"]
		var obj = {};
		/*
		 * var obj = new Object();
		 * obj["name"] = "zhangsan";
		 * 
		 */
		//遍历数组
		for(var i = 0; i < users.length; i ++){
			//将字符串转为数组
			var userData = users[i].split(",");
			//["test1",123] ["test2","abc"] ["test3",888]
			obj[userData[0]] = userData[1];
			/*转为对象如下：
			 * obj = {
			 * 	test1 : 123,
			 *  test2 : abc,
			 *  test3 : 888
			 * }
			 */
		}
		return obj;
	}
	
	//将对象转为字符串
	function convertObjToStr(obj){
		////假设不为空："test1,123:test2,abc:test3,888:李涛,123"
		var str = "";
		for(var usn in obj){
			var pwd = obj[usn];
			if(str){
				//看是否是第一组用户名和密码，如果不是，先在前面添加一个：
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



/***/ })
/******/ ]);