jQuery - onChanged
=========
  * 用于检测 input textarea 元素内容变化的事件。
  * 项目地址: http://yes2.me/onchanged-project

使用方法
---------
绑定内容检测事件:

	$("textarea").focus(function() {
		$(this).onChanged(function(){
			//处理事件
		}); 	
	});

解除内容检测事件:

	$("textarea").blur(function() {
		$(this).stopOnChanged();
	});
> 更多问题联系
>
>