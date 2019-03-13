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

//加载css样式
//require("!style-loader!css-loader!../../dist/css/index.css");
//js区域
aaa();
function aaa(){
	console.log('测试函数中的内容');
}

//轮播
slideBox();
//轮播函数
function slideBox(){
	var index = 0; //定义一个下标
	var stop = false; //定义一个触发器
	var $li = $("#banner").find(".warp").children(".item"); //获取所有的轮播图片
	var $page = $("#banner").find(".bth-list").children(".bth"); //获取所有的圆点列表
	$page.hover(function(){
		index = $(this).index(); //把图片下标的值赋给定义下标
		$(this).addClass("active").stop(true,true).siblings().removeClass("active"); //给鼠标选中的圆点列表添加样式
		$li.eq(index).stop(true,true).fadeIn(1000).siblings().fadeOut(1000); //轮播图片淡入淡出效果
	});
	//左边点击按钮
	$(".left").click(function(){
		clearInterval(timer);
		index--;
		if(index < 0){
			index = $li.length-1;
		}
		$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
		$page.eq(index).addClass("active").stop(true, true).siblings().removeClass("active");
	});
	//右边点击按钮
	$(".right").click(function(){
		clearInterval(timer);
		index++;
		if(index > $li.length-1){
			index = 0;
		}
		$li.eq(index).stop(true,true).fadeIn().siblings().fadeOut();
		$page.eq(index).addClass("active").stop(true, true).siblings().removeClass("active");
	});
	//自动轮播图片
	var timer = setInterval(function() {
		if(stop) return;
		index++;
		if(index > $li.length-1) {
			index = 0;
		}
		$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
		$page.eq(index).addClass("active").stop(true, true).siblings().removeClass("active");
	},5000);
	//鼠标移入图片内，自动轮播停止
	$("#banner").mousemove(function() {
		clearInterval(timer);
	}).mouseout(function() {
		timer = setInterval(function() {
			if(stop) return;
			index++;
			if(index > $li.length-1) {
				index = 0;
			}
			$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$page.eq(index).addClass("active").stop(true, true).siblings().removeClass("active");
		},5000);
	});
}	

//轮播slide2
slideBox2();
function slideBox2(){
	var index = 0; //定义一个下标
	var stop = false; //定义一个触发器
	var $li = $("#banner2").find(".warp2").children(".item2"); //获取所有的轮播图片
	var $page = $("#banner2").find(".bth-list2").children(".bth2"); //获取所有的圆点列表
	$page.hover(function() {	
		index = $(this).index(); //把图片下标的值赋给定义下标
		$(this).addClass("active2").stop(true,true).siblings().removeClass("active2"); //给鼠标选中的圆点列表添加样式
		$li.eq(index).stop(true,true).fadeIn(1000).siblings().fadeOut(1000); //轮播图片淡入淡出效果
	});
	//自动轮播图片
	var timer = setInterval(function() {
		if(stop) return;
		index++;
		if(index > $li.length-1) {
			index = 0;
		}
		$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
		$page.eq(index).addClass("active2").stop(true, true).siblings().removeClass("active2");
	},5000);
	//鼠标移入图片内，自动轮播停止
	$("#banner2").mousemove(function() {
		clearInterval(timer);
	}).mouseout(function() {
		var timer = setInterval(function() {
			if(stop) return;
			index++;
			if(index > $li.length-1) {
				index = 0;
			}
			$li.eq(index).stop(true, true).fadeIn().siblings().fadeOut();
			$page.eq(index).addClass("active2").stop(true, true).siblings().removeClass("active2");
		},5000);
	});
}

//跳转shift
sh();
function sh(){
	var oShift = document.getElementById("shift");
	var oLogin = document.getElementById("login1");
	var oRegister = document.getElementById("register1");
	oShift.onclick = function(){
		//跳转到详情页
		//location.href = "list.html";
		window.open("list.html");
	};
	oLogin.onclick = function(){
		window.open("login.html");
	};
	oRegister.onclick = function(){
		window.open("register.html");
	};
}



/***/ })
/******/ ]);