// JavaScript Document
$(document).ready(function(){
	var yheight=getScrollTop(); //滚动条距顶端的距离  
	var divobj=$(".phpHeadBg");  
	var top=parseInt(yheight);  
	if(top>=40){
		divobj.css('top','0px');  
	}else{
		divobj.attr('style',"");  
	}

    $('.ylwTopBox').hover(function(){
        $(this).find('.ylwTopSub').show();

        },function(){
          $(this).find('.ylwTopSub').hide();  
          
	})
		

        //$("ul.menu1 li:first-child").addClass("current");
        //$(".content1").find(".layout1:not(:first-child)").hide();
        $(".content1 .layout1").attr("id", function(){return idNumber("No")+ $(".content1 .layout1").index(this)});
        $("ul.menu1 li").hover(function(){
            var c = $("ul.menu1 li");
            var index = c.index(this);
            var p = idNumber("No");
            show(c,index,p);
        });
        
        function show(controlMenu,num,prefix){
            var content= prefix + num;
            $('#'+content).siblings().hide();
            $('#'+content).show();
            controlMenu.eq(num).addClass("current").siblings().removeClass("current");
        };
     
        function idNumber(prefix){
            var idNum = prefix;
            return idNum;
        };

        

        $(".phpFirLeft").hover(function(){
        },function(){
            $(".phpQian").find(".phpQianBg").hide();
            $(".phpQian").find("ul.menu1 li").removeClass("current");
        });

        $('.phpZxkcList li dl dd em').click(
            function(){$(this).toggleClass("phpshouchang");}
            );



         $("ul.menu2 li:first-child").addClass("current");
         //$(".content1").find(".layout1:not(:first-child)").hide();
         $(".content2 .layout2").attr("id", function(){return idNumber("menu")+ $(".content2 .layout2").index(this)});
         $("ul.menu2 li").click(function(){
             var c = $("ul.menu2 li");
             var index = c.index(this);
             var p = idNumber("menu");
             show(c,index,p);
         });
        
         function show(controlMenu,num,prefix){
             var content= prefix + num;
             $('#'+content).siblings().hide();
             $('#'+content).show();
             controlMenu.eq(num).addClass("current").siblings().removeClass("current");
         };
     
         function idNumber(prefix){
             var idNum = prefix;
             return idNum;
         };

         	
		  $(".swiper-ct .swiper-ct-menu .swiper-slide a").click(function(){
			$(this).parent().siblings().find("a").removeClass("hover");
			$(this).addClass("hover");
			$(this).parents(".swiper-ct").find(".swiper-ct-items").find(".swiper-ct-item:eq("+$(this).parent().index()+")").show().siblings().hide();
		});

			$(".vipJxkcBox .vipMore a").click(function(){
				$(".vipJxkcList").css("height","auto");
				$(".vipJxkcBox .vipMore").hide();
			});



        $("ul.menu3 li:first-child").addClass("current");
        //$(".content1").find(".layout1:not(:first-child)").hide();
        $(".content3 .layout3").attr("id", function(){return idNumber("fudong")+ $(".content3 .layout3").index(this)});
        $("ul.menu3 li").hover(function(){
            var c = $("ul.menu3 li");
            var index = c.index(this);
            var p = idNumber("fudong");
            show(c,index,p);
        });
       
        function show(controlMenu,num,prefix){
            var content= prefix + num;
            $('#'+content).siblings().hide();
            $('#'+content).show();
            controlMenu.eq(num).addClass("current").siblings().removeClass("current");
        };
    
        function idNumber(prefix){
            var idNum = prefix;
            return idNum;
        };




        $(window).scroll(function() {  
            var wheight = $(window).height();
            var yheight=getScrollTop(); //滚动条距顶端的距离  
            var divobj=$(".phpHeadBg");  
            var top=parseInt(yheight);  
  
			if(top>=40){
				divobj.css('top','0px');  
			}else{
				divobj.attr('style',"");
			}

            var height =document.documentElement.clientHeight//浏览器可视化窗口的大小  
            if(yheight>height){
                $(".xiFanhui").show();
            }else{
                $(".xiFanhui").hide();
            }

            var height =document.documentElement.clientHeight//浏览器可视化窗口的大小  
            if(yheight>height){
                $(".phpFanhui").show();
            }else{
                $(".phpFanhui").hide();
            }

            $('.plateBox').each(function(index){
                var boxtop = $(this).offset().top;
                if(index==0){
                    if( boxtop > yheight){
                        $('.phpCeNavList li a').removeClass('lockup');
                    }
                }
                if( boxtop >yheight && boxtop <yheight+1/3 * wheight){
                    $('.phpCeNavList li a').removeClass('lockup');
                    $('.phpCeNavList li:eq('+index+') a').addClass('lockup');
                    return false;
                }
            })

            
            
        })  
/**
 * 获取滚动条距离顶端的距离
 * @return {}支持IE6
 */  
function getScrollTop() {  
    var scrollPos;  
    if (window.pageYOffset) {  
    scrollPos = window.pageYOffset; }  
    else if (document.compatMode && document.compatMode != 'BackCompat')  
    { scrollPos = document.documentElement.scrollTop; }  
    else if (document.body) { scrollPos = document.body.scrollTop; }   
    return scrollPos;   
} 



    var anifun = setInterval(autoatoutiao,1000);
        
    //悬停时停止滑动，离开时继续执行
    $(".phpWenda .cont2 em").children("li").hover(function(){
        clearInterval(anifun);			//清除自动滑动动画
    },function(){
        anifun = setInterval(autoani,1000);	//继续执行动画
    })
    function autoatoutiao(){
        var a = $("i:first",".phpWenda .cont2 em").clone();
        var aheight = $("i:first",".phpWenda .cont2 em").height();
        var atop = -41;
        if(aheight>46){
            atop = -61;
        }
        $("i:first",".phpWenda .cont2 em").animate({"margin-top":atop+"px"},2000,function(){
            $("i:first",".phpWenda .cont2 em").remove();
            a.appendTo(".phpWenda .cont2 em");
        })
    }

    var screenwidth = window.screen.width;
    if(screenwidth<=1366){
        $(".phpCeNav").hide();
    }

    var screenwidth = window.screen.width;
    if(screenwidth<=1366){
        $(".xiCdhBox").hide();
    }

    $(".phpSerch .text1").on("input",function(){
        if($(this).val()!=''){
            $(this).css("color","#333333");
        }else{
            $(this).css("color","#999999");
        }
    })



})


//懒加载
$(function () {
  
    // 第一次需要先加载一次

    lazyLoad();

    $(window).scroll(lazyLoad);

    function isInSight(el) {

        const bound = el.getBoundingClientRect();

        const clientHeight = $(window).height(); // 可视区高度

        return bound.top <= clientHeight + 100; // 这里有个+100是为了提前加载。

    }

    function lazyLoad() {

        $.each($('img.lazyload'), (index,item)=>{

            if(isInSight(item)) {
                if($(item).attr('src') != $(item).attr('data-src')){
                  setTimeout(function () {
                    $(item).attr('src', $(item).attr('data-src')).removeClass("lazyload");
                  }, 500);
                }  
            }

        });

    }

});