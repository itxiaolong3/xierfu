 // 1 鼠标放到tab栏高亮显示，其它tab栏取消高亮
 var hd = document.getElementById('hd');
 console.log(hd)
 var spans = hd.getElementsByTagName('span');
 for (var i = 0; i < spans.length; i++) {
     var span = spans[i];
     // 通过自定义属性，记录当前span的索引
     span.setAttribute('index', i);
     // 注册事件
     span.onmouseover = fn
 }

 // 鼠标经过的事件处理函数
 function fn() {
     // 让所有的span取消高亮显示
     for (var i = 0; i < spans.length; i++) {
         var span = spans[i];
         span.className = '';
     }
     // 当前的span高亮显示
     this.className = 'current';

     // 2 tab栏对应的div 显示，其它div隐藏
     // 所有的div 隐藏
     var bd = document.getElementById('bd');
     var divs = bd.getElementsByTagName('div');
     for (var i = 0; i < divs.length; i++) {
         var div = divs[i];
         div.className = '';
     }
     // 当前span对应的div显示
     // 获取自定义属性的值
     var index = parseInt(this.getAttribute('index')) ;
     divs[index].className = 'current';
     
 }
