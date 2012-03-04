jQuery - onChanged Plugin  v0.2
=========
*  用于实时检测 `<input>` `<textarea>` 元素内容变化的事件。
*  项目地址: [http://yes2.me/project/onchanged-project](http://yes2.me/project/onchanged-project "JQuery-onChanged")

为什么使用这个插件
---------
*  Javascript `onchange` 方法：只有在`<input>` `<textarea>` 失去焦点才执行回调函数，无法实时检测。
*  Javascript `onpropertychange` 方法能实现实时检测，但只有在IE下才有效。
*  使用 `.keyup()`  `.keydown()` 判断`value`的变化，对鼠标操作无效。
*  使用 `jQuery.onChanged` 可以解决上述问题。 

使用方法
---------

	$("textarea").onChanged(function() {
		//处理事件
	});
	
更新日志
---------
*  v0.2   2011.03.04

	[更新]：去除stopOnChanged函数，使用更加简单。

*  v0.1   2011.03.03 ：
	
	初始版本建立