var a = $(document);
a.ready(function () {
    var b = $('body'),
        c = 'cnblogs_post_body',
        d = 'sideToolbar',
        e = 'sideCatalog',
        f = 'sideCatalog-catalog',
        g = 'sideCatalogBtn',
        h = 'sideToolbar-up',//回到最上
        i = '<div id="toTop"style="zoom:0;">\</div>\<div id="sideToolbar"style="display:none;">\<div class="sideCatalogBg"id="sideCatalog">\<div id="sideCatalog-sidebar">\<div class="sideCatalog-sidebar-top"></div>\<div class="sideCatalog-sidebar-bottom"></div>\</div>\<div id="sideCatalog-catalog">\<ul class="nav"style="width:300px;zoom:1">\</ul>\</div>\</div>\<a href="javascript:void(0);"id="sideCatalogBtn"class="sideCatalogBtnDisable"></a>\</div>',
        j = '',
        k = 200,//当滚动到200以下时，目录出现
        l = 0,//h2个数
        m = 0,//h3个数
        n = 0,//h4个数
        o, p = 10000,//p是h2+h3+h4的个数限制，经测试，13比较合适；调整样式后，改为10000显示所有的标题
        q = true,//控制h3是否显示
        r = true,//控制h4是否显示
        s = $('#' + c);
    if (s.length === 0) {
        return
    };
    b.append(i);
    //o = s.find(':header');
    o = s.find('h2').add(s.find('h3')).add(s.find('h4'));

    //如果没有h2、h3、h4，不显示目录
    if(o.length==0){
        return;
    }

    if (o.length > p) {
        r = false;
        var t = s.find('h2');
        var u = s.find('h3');
        if (t.length + u.length > p) {
            q = false;//如果目录数目超过制定的值，只显示更高一级的目录
        }
    };

    o.each(function (t) {
        var u = $(this),
            v = u[0];

        var title=u.text();
        var text=u.text();

        var hId='autoid-' + v.localName + '-' + l + '-' + m + '-' + n;

        //u.attr('id', 'autoid-' + l + '-' + m + '-' + n)
        u.attr('id', hId);
        
        var lenLimit = 100000;//限制目录字符的个数16，中文字符标准；不再限制字数
        if (v.localName === 'h2') {
            l++;
            m = 0;
            if(lenStat(text)>lenLimit) text=cut_str(text,lenLimit)+"...";
            j += '<li><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
        } else if (v.localName === 'h3') {
            m++;
            n = 0;
            if(q){
                if(lenStat(text)>lenLimit) text=cut_str(text,lenLimit)+"...";
                j += '<li class="h2Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
            }
        } else if (v.localName === 'h4') {
            n++;
            if(r){
                if(lenStat(text)>lenLimit) text=cut_str(text,lenLimit)+"...";
                j += '<li class="h3Offset"><a href="#' + u.attr('id') + '" title="' + title + '">' + text + '</a></li>';
            }
        }
    });
    $('#' + f + '>ul').html(j);

    //使用了bootstrap插件的滚动定位功能：
    b.data('spy', 'scroll');
    b.data('target', '.sideCatalogBg');
    $('body').scrollspy({
        target: '.sideCatalogBg'
    });


    $sideCatelog = $('#' + e);
    

    $('#' + g).on('click', function () {
        if ($(this).hasClass('sideCatalogBtnDisable')) {
            $sideCatelog.css('visibility', 'hidden');
            // $sideCatelog.css('display', 'none');
        } else {
            $sideCatelog.css('visibility', 'visible');
            // $sideCatelog.css('display', 'block');
        };
        $(this).toggleClass('sideCatalogBtnDisable');
    });


    // 回到最上
    $('#' + h).on('click', function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });

    $sideToolbar = $('#' + d);
    //修改为开始就让目录显示出来
    $sideToolbar.css('display', 'block');
    /*a.on('scroll', function () {
        var t = a.scrollTop();
        if (t > k) {
            $sideToolbar.css('display', 'block');
        } else {
            $sideToolbar.css('display', 'none');
        }
    })*/

    $("<div id='toTop'style='zoom:0;'></div>").appendTo($("body")).bind("click", function(){
        $("body,html").animate({ scrollTop: 0 }, 150);
    });


    // 正文的所有超链接以新开一页的方式打开
    $('#cnblogs_post_body a').prop('target', '_blank');

});


/**
 *  获得字符串长度，区分中英文
 */
function lenStat(target){  
    var strlen=0; //初始定义长度为0  
    var txtval = $.trim(target);  
    for(var i=0;i<txtval.length;i++){  
     if(isChinese(txtval.charAt(i))==true){  
      strlen=strlen+2;//中文为2个字符  
     }else{  
      strlen=strlen+1;//英文一个字符  
     }  
    }  
    strlen=Math.ceil(strlen/2);//中英文相加除2取整数  
    return strlen;  
}

function isChinese(str){  //判断是不是中文  
    var reCh=/[u00-uff]/;  
    return !reCh.test(str);  
}

/**
 *  截取字符串，区分中英文
 */
function cut_str(str, len){
    var char_length = 0;
    for (var i = 0; i < str.length; i++){
        var son_str = str.charAt(i);
        isChinese(son_str) ? char_length += 1 : char_length += 0.5;
        if (char_length >= len){
            var sub_len = char_length == len ? i+1 : i;
            return str.substr(0, sub_len);
            break;
        }
    }
}