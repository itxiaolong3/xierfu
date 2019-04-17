$('.remen span').on('click',function(){
    
    $('.remen span').css({'borderBottom':'0'});
    $('.remen .show').css({'display':'none'});
    $(this).css({'borderBottom':'2px solid red','paddingBottom':'16px'});
    //$(this).css({'backgroundColor':'cyan'}).silbings().css({'':''});
    // eq索引
            $('.remen .show').eq($(this).index()).css({'display':'block'});
    });

    function check(form) {
        if(form.userId.value=='') {
              alert("请输入用户帐号!");
              form.userId.focus();
              return false;
         }
         if(form.password.value==''){
              alert("请输入登录密码!");
              form.password.focus();
              return false;
           }
           return true;
   }