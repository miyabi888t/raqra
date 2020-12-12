
//drawer
jQuery(document).ready(function() {
    jQuery('.drawer').drawer();
  });



    //Q&A アコーディオン
    jQuery(function() {
      jQuery("#acMenu dt").on("click", function() {
        jQuery(this).next().slideToggle();
        jQuery(this).children('.ac-icon').toggleClass('ac-minus');
            });
        });



        $(function() {
          var height=$("#header").height();
          $("body").css("margin-top", height + 10);//10pxだけ余裕をもたせる
      });



      $(function(){
        var pagetop = $('#page_top');
        // ボタン非表示
        pagetop.hide();
      
        // 100px スクロールしたらボタン表示
        $(window).scroll(function () {
           if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
           } else {
                pagetop.fadeOut();
           }
        });
        pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
           return false;
        });
      });

      $(function(){
        var pagetop = $('.pagetop');
        // ボタン非表示
        pagetop.hide();
      
        // 100px スクロールしたらボタン表示
        $(window).scroll(function () {
           if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
           } else {
                pagetop.fadeOut();
           }
        });
        pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
           return false;
        });
      });




      $(function(){
        $(window).scroll(function (){
          $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 200){
              $(this).addClass('scrollin');
            }
          });
        });
      });



      $(function() {
        $('.Toggle').click(function() {
        $(this).toggleClass('active');
        
        if ($(this).hasClass('active')) {
        $('.NavMenu').addClass('active'); 
        } else {
        $('.NavMenu').removeClass('active'); 
        }
        });
        });


        $(function() {
          $('.Toggle').click(function() {
            $('.overlay').toggleClass('all-over');
          });
        });

        


      




        $(function(){
          $('input:submit[id="btn_submit"]').click(function(){
            if(!input_check()){
              return false;
            }
          });
        });
        
        function input_check(){
          var rjQueresult = true;
        
          $('#name').removeClass("inp_error");
          $('#email').removeClass("inp_error");
          $('#title').removeClass("inp_error");
          $('#pp').removeClass("inp_error");
        
          $("#name_error").empty();
          $("#email_error").empty();
          $("#title_error").empty();
          $("#pp_error").empty();
        
          // 入力内容セット
          var name   = $("#name").val();
          var email  = $("#email").val();
          var title = $("#title").val();
          var pp  = $("#pp").val();
          // お名前
          if(name == ""){
            $("#name_error").html("※お名前を入力してください");
            $("#name").addClass("inp_error");
            result = false;
          }
          // メアド
          if(email == ""){
            $("#email_error").html("※メールアドレスを入力してください");
            $("#email").addClass("inp_error");
            result = false;
          }
          // 件名
          if(title == ""){
            $("#title_error").html("※件名を入力してください");
            $("#title").addClass("inp_error");
            result = false;
          }
          // プライバシー
          const checkbox = document.getElementById("pp");
          if(checkbox.checked == false) {
            $("#pp_error").html("※プライバシーポリシーに同意が必要です。");
            $("#pp").addClass("inp_error");
            result = false;
          }
          return result;
        }



  