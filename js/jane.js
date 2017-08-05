	window.onload=function(){
		//手機版banner隨機換圖

		var BAN = document.getElementsByClassName("banner")[0];
		var BAN_N = Math.ceil(Math.random()*8);
		$(window).resize(function(){
			if($(window).innerWidth()>=768){
				BAN.style = "";
				BAN.style.backgroundImage ="url(images/banner.png)";
			}else{
				BAN.style = "";
			}
		});
		if($(window).innerWidth()<=767){
			BAN.style.backgroundImage = "url(images/banner_" + BAN_N + ".jpg)"
		};
	};

		//----菜單與導覽按鈕
		var close = document.getElementsByTagName("nav")[0];
		var XX = document.querySelector("nav > span");
		close.classList.add("EJI");
		XX.classList.add("EJI");
		document.getElementsByClassName("sun")[0].onclick = function(){
			close.classList.remove("EJI");
			XX.classList.remove("EJI");
			close.classList.add("SIT_IN");
			XX.classList.add("SIT_IN");
			XX.onclick = function(){
				close.classList.remove("SIT_IN");
				XX.classList.remove("SIT_IN");
			}
			$(window).resize(function(){
				if($(window).innerWidth()>1024){
					$("nav").removeAttr("class");
					$("nav > span").removeAttr("class");
					close.classList.add("EJI");
					XX.classList.add("EJI");
				};
			});
		}

		//----banner廣告區 滑下鍵
		$(".banner > span").click(function(e){
            e.preventDefault();
            console.log(e);
           $("html,body").animate({
           		scrollTop:($("header").outerHeight(true))+($(".banner").outerHeight(true))
           	});
           //return false;
        });

        //----backspace 回頂部
			// 判斷是向上捲動，而且捲軸超過 200px時顯示
		var headSP = document.querySelector("header > span").classList,
		    lSY = 0;
		window.addEventListener('scroll', function(){
		  var STlSY = this.scrollY;
		  if( STlSY > lSY) {
		    headSP.remove('backspace');
		  }else{
		    headSP.add('backspace');
		  }
		  lSY = STlSY;
		});
			//回頂
		$("header > span").click(function(){
		        $("html,body").animate({
		            scrollTop:0
		        },1000);
		});
			//捲軸超過100做閃入閃出
		$(window).scroll(function() {
		    if ( $(this).scrollTop() > 100){
		        $('.backspace').fadeIn("fast");
		    } else {
		        $('.backspace').stop().fadeOut("fast");
		    }
		});
