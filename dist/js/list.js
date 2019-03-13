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

//二级菜单
$(function(){
   $('.top .t-c ul li').hover(function(){
     $(this).find('.t-c-er').css('display', 'block');
   }, function(){
     $(this).find('.t-c-er').css('display', 'none');
   });
 });
 
//跳转到详情页
aaa();
function aaa(){
	var oNova = document.getElementById("nova");
	var oNova_ = document.getElementById("nova1");
	var oIndex= document.getElementById("ind");
	oNova.onclick = function(){
		//location.href = "nova.html";
		window.open("nova.html");     
	};
	oNova_.onclick = function(){
		//location.href = "nova.html";
		window.open("nova.html");
	};
	oIndex.onclick = function(){
		location.href = "index.html";
	};
}

//购物车
shopping();
function shopping(){
	//加载已有的购物车信息
	loadCart();
	
	//给购物车按钮加一个点击事件
	$("#buy").click(function(){
		location.href = "buy.html";
	})
	//给加入购物车按钮添加点击事件
	$(".main-b .addToCart").click(function(e){
		//获取商品的id（用来区分不同的商品）
		var goodId = $(this).parent().prev().attr("data-good-id");
		//获取商品的名称
		var goodName = $(this).parent().prev().children().eq(1).html();
		//console.log(goodName);
		//获取商品的价格
		var goodPrice_ = $(this).parent().prev().children().eq(2).children().eq(0).html();
		var goodPrice = goodPrice_.replace("￥","");
		//console.log(goodPrice);
		//console.log(goodPrice_);
		//获取商品的图片src
		var goodSrc = $(this).parent().prev().children().eq(0).attr("src");
		//document.cookie = "key=value"
		//存到购物车中去，商品信息统一可以放在cookie当中
		//购物车中是否有商品？
		//购物车中是否加过同一个商品？
		//"sp1":{"name":"香蕉","price":30,"num":1,"src":"src1"},"sp2":{"name":"苹果","price":40,"num":2,"src":"src2"},"sp3":{"name":"梨","price":50,"num":3,"src":"src3"}
		/*设计以下结构的对象来处理商品信息
		 * 以商品的id为健，商品的其他信息为值，这个值也设计为一个对象
		 * {
		 * 	sp1 : {
		 * 		name : "香蕉",
		 *      price : 30,
		 *      num : 1,
		 *      src : "img/1.jpg"
		 *  },
		 * sp2 :{
		 * 	    name :"苹果",
		 *      price : 40,
		 *      num:2,
		 *      src : "img/2.jpg"
		 *  },
		 * sp3{
		 * 	    name : "梨"，
		 *      price : 50,
		 *      num : 3,
		 *      src : "img/3.jpg"
		 *  }
		 * }
		 */
		//获取cookie中的信息
		//如果cookie中没有信息会返回一个undefined ,我所须是一个字符串类型的数据，所以将它转成一个“”空字符串。保持数据类型一致。
		var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
		//将字符串转成对象
		var cartObj = convertCartStrToObj(cartStr);
		//console.log(cartObj);
		//判断该商品是否已经在购物车中存在
		if(goodId in cartObj){
			//如果已存在，那么该商品的数量加1
			cartObj[goodId].num += 1;
		}else{
			//如果不存在，那么将新商品的信息存入
			cartObj[goodId] = {
				"name" : goodName,
				"price" : goodPrice,
				"num" : 1,
				"src" : goodSrc
			};
		}
		
		//将新的购物车信息存回cookie
		//将对象转为字符串
		cartStr = JSON.stringify(cartObj);
		console.log(cartStr);
		//存入cookie
		//document.cookie = "key=value"
		$.cookie("cart",cartStr,{expires : 7,path:"/"});

		//做一个飞入购物车的效果
		var cloneImg = $(this).siblings("img").clone().css({width:50,height:50});
		cloneImg.fly({
			start : {
				top : e.clientY,
				left : e.clientX
			},
			end :{
				top : $("#buy").offset().top,
				left : $("#buy").offset().left,
				width:0,
				height:0
			},
			autoPlay : true,
			onEnd : function(){
				$("#buy").val(function(index,v){
						//"购物车（0）"
						var pattern = /(\d+)/;
						var num = parseInt(v.match(pattern)[1]);
						return "购物车(" + (num + 1) + ")";
				});
				cloneImg.remove();
			}
		})
		//点击事件里的函数
		function convertCartStrToObj(cartStr){
			//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
			if(!cartStr){
				return {};
			}
			console.log(cartStr);
			return JSON.parse(cartStr);
		}

		
	})
	//点击事件结束
	//加载购物车中的信息（使商品页与购物车页中的购物车数量同步）
	function loadCart(){
		var cartStr = $.cookie("cart") ? $.cookie("cart") : "";
			var cartObj = convertCartStrToObj(cartStr);
			//获取到购物车中所有商品的数量
			var total = 0;
			for(var id in cartObj){
				total += cartObj[id].num;
			}
			$("#buy").html("购物车(" + total + ")");
	}
	//
	function convertCartStrToObj(cartStr){
		//如果是空字符串，即没有购物车信息，那么购物车为空，直接返回一个空对象
		if(!cartStr){
			return {};
		}
		console.log(cartStr);
		return JSON.parse(cartStr);
	}
}
	
			

/***/ })
/******/ ]);