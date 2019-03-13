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

//跳转到详情页
aaa();
function aaa(){	
	var oIndex= document.getElementById("ind");
	oIndex.onclick = function(){
		location.href = "index.html";
	};
}
//放大镜
big();
function big(){
	//=====================全局函数========================
	//Tab控制函数
	function tabs(tabId, tabNum){
		//设置点击后的切换样式
		$(tabId + " .tab li").removeClass("curr");
		$(tabId + " .tab li").eq(tabNum).addClass("curr");
		//根据参数决定显示内容
		$(tabId + " .tabcon").hide();
		$(tabId + " .tabcon").eq(tabNum).show();
	}
	//=====================全局函数========================
	
	//==================图片详细页函数=====================
	//鼠标经过预览图片函数
	window.preview = function(img){
		$("#preview .jqzoom img").attr("src",$(img).attr("src"));
		$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
	}
	
	//图片放大镜效果
	$(function(){
		$(".jqzoom").jqueryzoom({xzoom:380,yzoom:410});
	});
	
	//图片预览小图移动效果,页面加载时触发
	$(function(){
		var tempLength = 0; //临时变量,当前移动的长度
		var viewNum = 7; //设置每次显示图片的个数量
		var moveNum = 2; //每次移动的数量
		var moveTime = 300; //移动速度,毫秒
		var scrollDiv = $(".spec-scroll .items ul"); //进行移动动画的容器
		var scrollItems = $(".spec-scroll .items ul li"); //移动容器里的集合
		var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
		var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度
		  
		//下一张
		$(".spec-scroll .next").bind("click",function(){
			if(tempLength < countLength){
				if((countLength - tempLength) > moveLength){
					scrollDiv.animate({left:"-=" + moveLength + "px"}, moveTime);
					tempLength += moveLength;
				}else{
					scrollDiv.animate({left:"-=" + (countLength - tempLength) + "px"}, moveTime);
					tempLength += (countLength - tempLength);
				}
			}
		});
		//上一张
		$(".spec-scroll .prev").bind("click",function(){
			if(tempLength > 0){
				if(tempLength > moveLength){
					scrollDiv.animate({left: "+=" + moveLength + "px"}, moveTime);
					tempLength -= moveLength;
				}else{
					scrollDiv.animate({left: "+=" + tempLength + "px"}, moveTime);
					tempLength = 0;
				}
			}
		});
	});
	//==================图片详细页函数=====================
}

//二级菜单
$(function(){
   $('.top .t-c ul li').hover(function(){
     $(this).find('.t-c-er').css('display', 'block');
   }, function(){
     $(this).find('.t-c-er').css('display', 'none');
   });
 });

/***/ })
/******/ ]);