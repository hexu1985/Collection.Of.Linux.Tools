jbMap = window.jbMap || {};
$(function(){
    var newElement = document.createElement('script');
    document.body.appendChild(newElement);
    newElement.id = 'bs-cm';
    newElement.src = '//cpro.baidustatic.com/cpro/ui/cm.js';
    $('#bs-cm').attr({'async':'async','defer':'defer'});
    var truefalse = false;
    if (isIE()){
        if(isIE11 || isEdge){
        }else{
            truefalse = true;
        }
    }
    var baidu_da1='{"rbbd":"u4519613", "side_up":"u6561626", "art_down":"u4846790", "idctu":"u6390620", "tonglanbd":"u336546", "art_down2":"u5010600", "list_r_r300":"u460561", "art_xg":"u4806172", "r1gg":"u4519613", "r_2":"u1397867", "fudong":"u1397867", "qq_index":"u1424765", "index_top":"u5424272", "art_up":"u4967009"}';
    var baidu_da2=$.parseJSON(baidu_da1);
    $(".jbTestPos").each(function(i,e){
        advertId= $(this).attr("id");       
        if (baidu_da1.indexOf('"'+advertId+'":')!= -1) { 
            var s = "_" + Math.random().toString(36).slice(2);
            $("#"+advertId).eq(0).append('<div class="' + s + '"></div>');
            (window.slotbydup=window.slotbydup || []).push({
                id: baidu_da2[advertId],
                container: s,
                async: true
            });
            if(advertId=="idctu"){
                $("#"+advertId).append(jbMap[advertId]);
            }
            if(advertId=="art_up"&&!truefalse){
                $("#"+advertId).parent().html(jbMap[advertId]);
            }
        }else{
            $("#"+advertId).parent().html(jbMap[advertId]);
        }
    });
});

function isChrome(){
      var ua = navigator.userAgent.toLowerCase();
            return ua.indexOf("chrome") > 1;
}
var pathName = window.document.location.pathname;
var projectName = pathName.substring(1, pathName.substr(1).indexOf('/') + 1);

//var logo_m = '<a href="https://wx.kaikeba.com/xiaoke/market/landing-page/v2/Cxppd7vccIxMffLiJO7?kol_ad_code=RCaJa56HcItp2EKRHdX" target="_blank"><img src="//files.jb51.net/image/kaikeba430.png" width="430" height="60" /></a>';
var logo_m = '<a href="tencent://message/?uin=3522365&Site=//www.jb51.net" target="_blank"><img src="//files.jb51.net/image/zhaozu430.jpg" width="430" height="60" /></a>';
var logo_r = '<a href="https://ziyuan.jb51.net/" target="_blank"><img src="//files.jb51.net/image/ziyuan430.png" width="430" height="60" /></a>';

var aliyun1000 = '';
aliyun1000 += '<div class="mainlr"><a href="https://www.yundun.com/ddos?jihua=%E8%84%9A%E6%9C%AC%E4%B9%8B%E5%AE%B6&zu=%E9%95%BF%E5%9B%BE&guanjianci=%E4%BA%A7%E5%93%81%E7%BD%97%E5%88%97&e_creative={creative}&e_pagenum={pagenum}&e_keywordid={keywordid}" target="_blank"><img src="//files.jb51.net/image/yundun1200.png" alt="" width="1200" height="50"><span><img src="//files.jb51.net/image/tu.jpg" width="29" height="16" alt=""></span></a></div><div class="blank5"></div>';
//aliyun1000 += '<div class="mainlr"><a href="http://click.aliyun.com/m/1000326258/" target="_blank"><img src="//files.jb51.net/image/aliyun1200_2022.png" alt="" width="1200" height="50"><span><img src="//files.jb51.net/image/tu.jpg" width="29" height="16" alt=""></span></a></div><div class="blank5"></div>';

var aliyun10002 = '<div class="blank5"></div>';

var idctu = "";
//idctu+='<scr'+'ipt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scr'+'ipt><!--thea+300*250--><ins class="adsbygoogle"style="display:inline-block;width:300px;height:250px"data-ad-client="ca-pub-6389290466807248"data-ad-slot="6788945816"></ins><scr'+'ipt>(adsbygoogle=window.adsbygoogle||[]).push({});</scr'+'ipt>';
//idctu+='<scrip'+'t async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- content_r2 --><ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6500564943"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</scr'+'ipt>';
//idctu += '<scri' + 'pt async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6384567588307613" crossorigin="anonymous"></scri' + 'pt>';
//idctu += '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="4845332105"></ins><scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';
idctu += '<A href="https://www.henghost.com/act/2021newyear.html?jbzj" target="_blank"><IMG alt="" src="//files.jb51.net/image/henghost300.png?1229" width="300" height="100"></A>';
idctu += '<div class="blank10"></div><A href="https://www.50vm.com/server.html?pg=34" target="_blank"><IMG alt="" src="//files.jb51.net/image/99idc300.jpg" width="300" height="100"></A>';

var aliwenzi = '<li><a href="http://click.aliyun.com/m/15321/" target="_blank"><span style="color:red;">30???????????????????????????6??????</span></a></li>';
var ali237 = '<li><A href="http://click.aliyun.com/m/28331/" target="_blank"><IMG alt="" src="//files.jb51.net/image/ali2650323.gif" width="211" height="50"></A></li>';
var ali2371 = '<li><A href="http://click.aliyun.com/m/17168/" target="_blank"><IMG alt="" src="//files.jb51.net/image/ali2371.jpg" width="211" height="50"></A></li>';

var top235="";
top235 += '<div class="topimg"><ul>';
top235 += '<li><A href="http://www.uuh5.com/?jb51" target="_blank"><IMG alt="" src="//files.jb51.net/image/uuh5235.gif" width="235" height="50"></A></li>';
top235 += '<li><A href="http://www.cnzlapp.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/cnzlapp210.gif" width="235" height="50"></A></li>';
//top235 += '<li><A href="tencent://message/?uin=3522365&Site=//www.jb51.net" target="_blank"><IMG alt="" src="//files.jb51.net/image/daqz235.jpg" width="235" height="50"></A></li>';
top235 += '<li><A href="http://github.crmeb.net/u/jiaobenzhijia" target="_blank"><IMG alt="" src="//files.jb51.net/image/crmeb235.gif" width="235" height="50"></A></li>';
top235 += '<li><A href="http://www.ku86.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/jieidc_237.gif" width="235" height="50"></A></li>';
top235 += '<li><A href="https://www.8a.hk/server/" target="_blank"><IMG alt="" src="//files.jb51.net/image/8a210.gif" width="235" height="50"></A></li>';
top235 += '</ul></div><div class="blank5"></div>';

var tgtxt = "";
tgtxt += '<div id="txtlink"><ul>';
tgtxt += '<li><a href="https://www.redidc.net/" target="_blank"><span style="color:red;">??????kali??????VPS ?????????????????????????????????</span></a></li>';
tgtxt += '<li><a href="http://www.uuwaf.com" target="_blank"><span style="color:red;">?????????????????????????????????[????????????]</span></a></li>';
tgtxt += '<li><a href="http://go.yitanyun.com/url/51jbwz/" target="_blank"><span style="color:red;">???????????? ??????????????????=9???</span></a></li>';
tgtxt += '<li><a href="http://www.zoneidc.com/" target="_blank"><span style="color:red;">??????/??????/??????????????????????????????9.9???/??????</span></a></li>';

tgtxt += '<li><a href="http://www.boluoyun.com" target="_blank"><span style="color:blue;">?????????????????????,????????????????????????4G??????99???</span></a></li>';
tgtxt += '<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1006456867&amp;site=qq&amp;menu=yes" target="_blank"><span style="color: red;">???????????????????????????Q:1006456867??????</span></a></li>';
//tgtxt += '<li><a href="https://888.678hyw.com/?JIAOBEN" target="_blank"><span style="color:blue;">??????????????????????????????/?????????????????????????????????</span></a></li>';
tgtxt += '<li><a href="tencent://message/?uin=3522365&Site=//www.jb51.net" target="_blank"><span style="color: red;">????????????QQ3522365</span></a></li>';
tgtxt += '<li><a href="tencent://message/?uin=3522365&Site=//www.jb51.net" target="_blank"><span style="color:blue;">????????????QQ3522365</span></a></li>';

tgtxt += '<li><a href="tencent://message/?uin=3522365&Site=//www.jb51.net" target="_blank"><span style="color:red;">????????????QQ3522365</span></a></li>';
tgtxt += '<li><a href="https://s.jb51.net" target="_blank"><span style="color:red;">?????????????????????</span></a></li>';
tgtxt += '<li><a href="http://www.hostspaceidc.com/front/products/datacenter?from=jb51-pic" target="_blank"><span style="color:red;">??????????????? ?????? ???????????????</span></a></li>';
tgtxt += '<li><a href="http://www.centcc.com" target="_blank"><span style="color:red;">???????????? ??????3900??? BGP??????</span></a></li>';

tgtxt += '<li><a href="https://www.wsisp.com/cloud.html" target="_blank"><span style="color:blue;">??????CN2????????????29???/???</span></a></li>';
tgtxt += '<li><a href="http://www.qy.com.cn/" target="_blank"><span style="color:blue;">?????????????????????10M??????30G??????,49??????</span></a></li>';
tgtxt += '<li><a href="http://www.tuidc.com/" target="_blank"><span style="color:blue;">???????????????/??????-????????????/??????????????????</span></a></li>';
tgtxt += '<li><a href="http://www.vzidc.com/cloud/" target="_blank"><span style="color:blue;">?????????4???8g???????????????????????????????????????</span></a></li>';

tgtxt += '<li><a href="http://www.ushk.net/server.html" target="_blank"><span style="color:red;">???????????????????????????????????????????????????</span></a></li>';
tgtxt += '<li><a href="http://vps.zzidc.com/tongji/jb51w.html" target="_blank"><span style="color:red;">??????????????????5?????????????????????????????????</span></a></li>';
tgtxt += '<li><a href="https://s.jb51.net" target="_blank"><span style="color:red;">?????????????????????</span></a></li>';
tgtxt += '<li><a href="https://www.dzisp.cn/" target="_blank"><span style="color:red;">??????|??????|??????100G??????24????????????500???</span></a></li>';

tgtxt += '<li><a href="http://www.pppoevps.com/" target="_blank"><span style="color:blue;">???????????????IP??????????????????ADSL??????20M??? </span></a></li>';
tgtxt += '<li><a href="http://www.360jq.com/hkshuang.htm" target="_blank"><span style="color:blue;">[???????????????]??????CC???DDOS/???????????????</span></a></li>';
tgtxt += '<li><a href="http://www.cyidc.cc/" target="_blank"><span style="color:blue;">???????????? ??????????????? ????????? 998???</span></a></li>';
tgtxt += '<li><a href="http://www.wdw6.com/" target="_blank"><span style="color:blue;">bgp????????????????????????</span></a></li>';

tgtxt += '<li><a href="http://www.ssf.cc/" target="_blank"><span style="color:red;">??????vps20/??????799/??????350/45??????</span></a></li>';
tgtxt += '<li><a href="http://www.zitian.cn/" target="_blank"><span style="color:red;">???????????????????????????????????????299??????</span></a></li>';
tgtxt += '<li><a href="http://www.qy.cn/gfhd.html" target="_blank"><span style="color:red;">?????????????????????????????????300G????????????599????????????</span></a></li>';
tgtxt += '<li><a href="https://www.zj-idc.com/" target="_blank"><span style="color:red;">??????????????????????????????????????????1.2???</span></a></li>';

tgtxt += '<li><a href="http://www.gwidc.com/rent/home/index.html" target="_blank"><span style="color:blue;">????????????????????????800/???,100G?????????150</span></a></li>';
tgtxt += '<li><a href="http://www.hkcn2.com/51.htm" target="_blank"><span style="color:blue;">**????????????10m????????????????????????999???**</span></a></li>';
tgtxt += '<li><a href="http://www.xiaozhiyun.com/2016/" target="_blank"><span style="color:blue;">????????????????????????????????? ????????????</span></a></li>';
tgtxt += '<li><a href="http://tianyi.jb51.net/" target="_blank"><span style="color:blue;">?????????????????????????????????????????????</span></a></li>';

tgtxt += '</ul><DIV class=clearfix></DIV></div><div class="blank5"></div>';

var tonglan1 = "";
tonglan1 += aliyun1000;
tonglan1 += top235;
tonglan1 += tgtxt;
tonglan1 += '<div class="topimg"><ul>';
tonglan1 += '<li><A href="https://www.hncloud.com/activity_register.html?p=jb51&register" target="_blank"><IMG alt="" src="//files.jb51.net/image/huana235_331.gif" width="235" height="50"></A></li>';
tonglan1 += '<li><A href="http://51.jhfcec.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/gkcnvnj235.gif" width="235" height="50"></A></li>';
tonglan1 += '<li><A href="https://ke.qq.com/course/3548735?tuin=a8309c08" target="_blank"><IMG alt="" src="//files.jb51.net/image/zimeiti.gif" width="235" height="50"></A></li>';
tonglan1 += '<li><A href="https://www.henghost.com/coupons.shtml?s=zz&jb51" target="_blank"><IMG alt="" src="//files.jb51.net/image/hc2352.gif" width="235" height="50"></A></li>';
tonglan1 += '<li><A href="https://www.zndata.com/dedicatedserver/" target="_blank"><IMG alt="" src="//files.jb51.net/image/zoneidc235.gif" width="235" height="50"></A></li>';
//tonglan1 += '<li><A href="https://ke.qq.com/course/3548735?tuin=a8309c08" target="_blank"><IMG alt="" src="//files.jb51.net/image/zimeiti.gif" width="235" height="50"></A></li>';

tonglan1 += '</ul></div>';
tonglan1 += aliyun10002;

var tonglan1_2 = "";
tonglan1_2 += aliyun1000;
tonglan1_2 += tgtxt;
tonglan1_2 += '<div class="blank5"></div>';
tonglan1_2 += '<div class="topimg"><ul>';
tonglan1_2 += '<li><A href="http://t.cn/E9OUxEx" target="_blank"><IMG alt="" src="//files.jb51.net/image/tb_210_50.gif?1008" width="235" height="50"></A></li>';
tonglan1_2 += '<li><A href="https://jieidc.taobao.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/jieidc_237.gif?0327" width="235" height="50"></A></li>';
//tonglan1_2+=ali237;
tonglan1_2 += '<li><A href="http://www.ku86.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/ku86_237.gif?1010" width="235" height="50"></A></li>';
tonglan1_2 += '<li><A href="http://www.wsisp.com" target="_blank"><IMG alt="" src="//files.jb51.net/image/wsisp23701051.gif?0611" width="235" height="50"></A></li>';
tonglan1_2 += '</ul></div><div class="blank5"></div>';

var tonglan2 = '';
var tonglan2_1 = '<a href="https://www.jb51.net/s/idc/" alt="???????????????" target="_blank"><img src="//files.jb51.net/image/bgp_jb51.gif" width="1080" height="50" border="0" /></a>';
var tonglan2_2 = '<a href="http://www.tuidc.com" alt="??????" target="_blank"><img src="//files.jb51.net/image/tuidc1080.gif?0516" width="1080" height="50" border="0" /></a>';


var tonglan3_1 = '<div class="mainlr"><a href="https://www.qy.cn/free/?f=jb51" target="_blank"><img src="//files.jb51.net/image/qy1080.gif?0313" width="1200" height="50"></a></div><div class="blank5"></div>';

var tonglan3_2 = '<div class="topimg"><ul>';
tonglan3_2 += '<li><A href="https://jieidc.taobao.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/jieidc_237.gif?0327" width="235" height="50"></A></li>';
tonglan3_2 += '<li><A href="https://www.yiyangidc.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/yy235.gif" width="235" height="50"></A></li>';
//tonglan3_2+='<li><A href="http://www.enkj.com/gfcloud/" target="_blank"><IMG alt="" src="//files.jb51.net/image/enkj0810.gif" alt="????????????" width="235" height="50"></A></li>';
tonglan3_2 += '<li><A href="https://www.henghost.com/coupons.shtml?s=zz&jb51" target="_blank"><IMG alt="" src="//files.jb51.net/image/hc2352.gif" width="235" height="50"></A></li>';
tonglan3_2 += '<li><A href="http://www.cyidc.cc/" target="_blank"><IMG alt="" src="//files.jb51.net/image/cyidc237.gif" width="235" height="50"></A></li>';
tonglan3_2 += '<li><A href="https://www.wsisp.net/clientcenter/shownews_852.html?indexjb" target="_blank"><IMG alt="" src="//files.jb51.net/image/wsisp210.gif?1226" width="235" height="50"></a></li>';
tonglan3_2 += '</ul></div>';

var tonglan3_3 = '<div class="mainlr"><a href="http://www.qy.com.cn" target="_blank"><img src="//files.jb51.net/image/qy_1000.gif" width="1200" height="50"></a></div><div class="blank5"></div>';

var bd200 = '';
//var bd200 = '<scri' + 'pt type="text/javascript" src="//mm.jbzj.com/hod9xqa8sj.js"></sc' + 'ript>';

var zbafer = '';
//zbafer += '<A href="https://www.ucloud.cn/site/active/new/kuaijie.html?utm_source=jbfeeds&utm_medium=display&utm_campaign=DD02jb&utm_term=02&ytag=02_DD02jb_jbfeeds_display#xianggang" target="_blank"><IMG alt="" src="//files.jb51.net/image/ucloud_300.gif" width="300" height="100"></A>';
//zbafer += '<div class="blank10"></div><A href="https://www.zego.im/product/chattingroom?source=jb51" target="_blank"><IMG alt="" src="//files.jb51.net/image/zego300.gif?1119" width="300" height="100"></A>';
zbafer += '<div class="blank10"></div><a href="https://www.hncloud.com/activity_2022_618.html?p=jb51&2022_618" target="_blank"><img src="https://files.jb51.net/image/hn300X100.png?1217" alt="" width="300" height="100" /></a>';

var idctu1 = '<div class="idc3"><a href="http://tools.jb51.net" target="_blank"><h1>????????????</h1><span>??????????????????</span> </a><a href="https://www.jb51.net/s/idc/" target="_blank"><h1>????????????</h1><span>600G ??????</span> </a><a href="http://www.33ip.com" target="_blank"><h1>????????????</h1><span>IDC?????????</span> </a></div>';
var idctu2 = '<a href="http://www.tuidc.com/indexhd.html" target="_blank"><img src="//files.jb51.net/image/tengyou300.gif?1209" width="300" height="100"></a>';
idctu2 += '<div class="blank10"></div><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yyqz300.gif" alt="?????????" width="300" height="100"></a>';
idctu2 += '<div class="blank10"></div><a href="http://www.boluoyun.com/" target="_blank"><img src="//files.jb51.net/image/bly300.jpg" alt="????????????" width="300" height="100"></a>';

//if (projectName=='article'){idctu2=bd200+'<div class="blank5"></div>'+idctu2;}

/*******---------????????????start----------********/
var bctools = '<li><a href="http://tools.jb51.net/code/css" target="_blank"><font color="red">CSS????????????</font></a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/js" target="_blank"><font color="red">JavaScript?????????????????????</font></a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/xmlformat" target="_blank">??????XML?????????/????????????</a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/phpformat" target="_blank"><font color="red">php?????????????????????????????????</font></a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/sqlcodeformat" target="_blank">sql?????????????????????????????????</a></li>';
bctools += '<li><a href="http://tools.jb51.net/transcoding/html_transcode" target="_blank">??????HTML??????/???????????????</a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/json" target="_blank">??????JSON????????????/??????/??????/?????????</a></li>';
bctools += '<li><a href="http://tools.jb51.net/regex/javascript" target="_blank">JavaScript????????????????????????</a></li>';
bctools += '<li><a href="http://tools.jb51.net/transcoding/jb51qrcode" target="_blank">???????????????????????????(?????????)</a></li>';
bctools += '<li><a href="http://tools.jb51.net/" target="_blank">??????????????????</a></li>';
/*******---------????????????end----------********/

var tonglangg = '<scri' + 'pt async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6384567588307613" crossorigin="anonymous"></scri' + 'pt>';
tonglangg += '<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="9750602991"></ins><scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';

var tonglan_1024 = '';
var tit_down = ''
var art_up_isbd = 0;
var botad = '';
botad += '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>';
botad += '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6445926239" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';

var art_upp = new Array()
art_upp[0] = '<scri'+'pt async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></scri'+'pt><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6384567588307613" data-ad-slot="3921475131" data-ad-format="auto"></ins><scri'+'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s'+'cript>';
//art_upp[0] = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/production/n/i/production/eqhjo/openjs/oq.js"></s'+'cript>';
//art_upp[1] = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/production/n/i/production/eqhjo/openjs/oq.js"></s'+'cript>';
art_upp[1] = '';
//820*250
art_upp[2] = '<scri'+'pt type="text/javascript" src="//jscode.jbzj.com/production/ql/common/h/source/n/h/production/kmtr.js"></s'+'cript>';

var nn =Math.round(Math.random());
if (nn==1){art_up_isbd=1}
var art_up = art_upp[0];
var art_down = art_upp[2];
var art_bot = botad;
/*
if (projectName != 'article') {
    art_bot = art_upp[1];
}
*/

var side_up = '';

// //side_up += '<scri'+'pt async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6384567588307613" crossorigin="anonymous"></sc'+'ript>';
// //side_up += '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6384567588307613" data-ad-slot="4845332105" data-ad-format="auto"></ins><scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';

var gg_l = '';
gg_l += '<scri' + 'pt async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6384567588307613" crossorigin="anonymous"></scri' + 'pt>';
//gg_l += '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6438537127"></ins>';
gg_l +='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6438537127" data-ad-format="auto" data-full-width-responsive="true"></ins>';
gg_l += '<scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';

//var gg_l= '<scr'+'ipt type="text/javascript" src="//mm.jbzj.com/lgycphfyo.js"></scr'+'ipt>';

//var gg_r = '<scri' + 'pt type="text/javascript" src="//mm.jbzj.com/bwyffvsfzdec.js"></sc' + 'ript>';
var gg_r = '';

/*if (projectName == 'web') {
    gg_l = '<a href="https://mp.weixin.qq.com/s/llbt7TXFXnB3t9b7Gtkq7Q" target="_blank"><img src="//files.jb51.net/image/msb300_1_.jpg"/></a>';
    gg_r = '<a href="https://mp.weixin.qq.com/s/llbt7TXFXnB3t9b7Gtkq7Q" target="_blank"><img src="//files.jb51.net/image/msb300_2_.jpg"/></a>';
}*/

var r1gg=side_up;
/*
var r1gg = '<scri' + 'pt async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6384567588307613" crossorigin="anonymous"></scri' + 'pt>';
r1gg += '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6384567588307613" data-ad-slot="2817964327" data-ad-format="auto"></ins>';
r1gg += '<scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';
*/

var r2gg = '<scri' + 'pt async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6384567588307613" crossorigin="anonymous"></scri' + 'pt>';
//r2gg+='<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6384567588307613" data-ad-slot="3056293936" data-ad-format="auto" data-full-width-responsive="true"></ins>';
r2gg += '<ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-6384567588307613" data-ad-slot="6500564943"></ins>';
r2gg += '<scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';

var dxy728 = '<a href="http://www.33ip.com" target="_blank"><img src="//files.jb51.net/image/33ip_728.gif"></a>';
var dxy320 = '<a href="http://edu.jb51.net/" target="_blank"><img src="//files.jb51.net/image/edu320.png" width=320 height=90></a>';


var list_r_mid = '<scri' + 'pt async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6384567588307613" crossorigin="anonymous"></scri' + 'pt>';
list_r_mid += '<ins class="adsbygoogle" style="display:block;" data-ad-client="ca-pub-6384567588307613" data-ad-slot="3321016300" data-ad-format="auto" data-full-width-responsive="true"></ins>';
list_r_mid += '<scri' + 'pt>(adsbygoogle = window.adsbygoogle || []).push({});</s' + 'cript>';

jbMap={
    logo_m:logo_m, 
    logo_r:logo_r, 
    idctu:idctu,
    // tonglanbd:tonglanbd,   
    tonglangg:tonglangg, 
    tonglan1:tonglan1,   
    tonglan1_2:tonglan1_2,   
    tonglan2:tonglan2,   
    tonglan2_1:tonglan2_1,   
    tonglan2_2:tonglan2_2,   
    tonglan3_1:tonglan3_1,   
    tonglan3_2:tonglan3_2,   
    tonglan3_3:tonglan3_3,   
    tonglan_1024:tonglan_1024,   
    botad:botad,   
    idctu1:idctu1,   
    idctu2:idctu2,   
    tit_down:tit_down,   
    art_up:art_up,   
    art_bot:art_bot,
    // art_down:art_down,   
    // art_down2:art_down2,   
    // list_r_r300:list_r_r300,   
    // art_xg:art_xg,   
    // side_up:side_up,   
    // r_2:r_2,   
    // fudong:fudong,   
    gg_l:gg_l,   
    gg_r:gg_r,   
    // r1gg:r1gg,   
    r2gg:r2gg,   
    // rbbd:rbbd,   
    // bd200:bd200, 
    bctools:bctools,
    dxy728:dxy728,  
    dxy320:dxy320,  
    // qq_index:qq_index,  
    // index_top:index_top,  
    list_r_mid:list_r_mid,
    zbafer:zbafer 
};


if (jQuery) {
    /*$jb51_top = $('#jb51_topbar');
    if($jb51_top){
        $jb51_top.html('<div class="userbar"><a href="http://tougao.jb51.net" target="_blank">????????????</a><img style="width:32px; height:22px" src="http://img.jb51.net/skin/2016/images/newn.gif" alt="hot"></div>');
    }*/

    $addnr = $('div#content .clearfix');
    var xbqq = '';
    var xbtj = '';
    if ($addnr.length) {
        if (projectName == "article") {
            xbqq = '2998481778';
        } else {
            xbqq = '1079426599';
            if (projectName == "office") {
                xbtj = '<div class="sidebox-recomm1"><a class="style03" href="https://www.jb51.net/news/699009.html" target="_blank"><div class="title"><strong>????????????</strong></div><div class="tj_ico3"></div><h5>Office???????????????2019??????????????????</h5><p>?????????????????????????????????????????????????????????????????????????????????????????????????????????[<i>???148???</i>]</p></a></div>';
            } else if (projectName == "os") {
                xbtj = '<div class="sidebox-recomm1"><a class="style02" href="https://www.jb51.net/os/win10/698746.html" target="_blank"><div class="title"><strong>????????????</strong></div><div class="tj_ico2"></div><h5>??????Windows 10?????????/???????????????????????????</h5><p>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????[???<span>1088</span>&rarr;<i>???248</i>]???</p></a></div>';
            }
        }

        if (projectName == "article") {
            //$('#content').append(xbtj + '<p class="tip">???????????????java??????????????????+??????+?????????<a href="https://mp.weixin.qq.com/s/HFvRM6gpaACettv5ffM0tg" target="_blank">??????????????????</a> ???????????????????????????Java???</p>');
            //} else {
            $addnr.before(xbtj + '<p class="tip">??????????????????????????????????????????????????????<a href="//shequ.jb51.net" target="_blank">????????????????????????</a>???????????????????????????!</p>');
        }
        //$addnr.before(xbtj+'');
    }

    $yuanshichang = $('.topbarleft');
    if ($yuanshichang.length) {
        $yuanshichang.find('a').eq(0).attr('href', 'https://shequ.jb51.net');
        $yuanshichang.find('a').eq(0).text('??????????????????');
        $yuanshichang.append('<a href="https://www.yuanshichang.com/" target="_blank" style="color:red">????????????</a>');
    }
    if ("undefined" != typeof ourl) {
        if (ourl) {
            $content = $('#content');
            if ($content.length) {
                if (ourl.indexOf(":") > 0) {
                    if (projectName == "article") {
                        $('.lbd_bot').after('<p>???????????????' + ourl + '</p>');
                    } else {
                        $content.append('<p>???????????????' + ourl + '</p>');
                    }
                } else {
                    if (projectName == "article") {
                        $('.lbd_bot').after('<p>???????????????' + window.atob(ourl) + '</p>');
                    } else {
                        $content.append('<p>???????????????' + window.atob(ourl) + '</p>');
                    }
                }
            }
        }
    }
    $(function () {
		try{
        var vzl = document.getElementById('txtlink').getElementsByTagName('span'),
            j = 0;
        for (var i = 0; i < vzl.length; i++) {
            j = i % 4 ? j : ++j;
            vzl[i].style = j % 2 ? 'color:red' : 'color:blue';
        }
		}catch(e){}
    });
    $(document).ready(function () {
        /*var shequimg = new Array()
    shequimg[0] = '//files.jb51.net/image/pythonsq1.png';
    shequimg[1] = '//files.jb51.net/image/pythonsq2.png';
    var nn =Math.round(Math.random());*/

        var shequlink = '<div id="ewm"><div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/skin/2018/images/jb51ewm.png" /></div><div class="fr"><p>????????????????????? ??? <span>????????????</span> ??? ???????????????</p><p>????????????????????????????????????????????????</p></div></div></div>';
        //var shequlink = '<div id="ewm"><div class="jb51ewm"><img src="'+ shequimg[nn] +'" /></div></div>';
        var newslink = '<div id="ewm"><div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/skin/2018/images/itewm.png"></div><div class="fr"><p>????????????????????? ??? <span>IT????????????</span> ??? ???????????????</p><p>????????????????????????????????????????????????????????????</p></div></div></div>';
        var gamelink = '<div id="ewm"><div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/image/yxewm.png"></div><div class="fr"><p>????????????????????? ??? <span>????????????????????????</span> ??? </p><p>??????????????????????????????</p></div></div></div>';
        $content = $('#content');
        //shequlink=art_wxz+shequlink;

        if ("undefined" != typeof downlm && downlm == "art-news") {
            if ($content.length) {
                $content.after(newslink);
            }
        } else if ("undefined" != typeof downlm && downlm == "art" && projectName == "gonglue") {
            if ($content.length) {
                $content.after(gamelink);
            }
        } else {
            if ($content.length) {
                $('.lbd_bot').after(shequlink);
            }
        }

        var topli = $('#ic .list:first');
        if (topli.length) {
            var myDate = new Date();
            var jbMon=myDate.getMonth()+1;
            var jbDay=myDate.getDate();
            if (jbMon < 10)
                jbMon = "0"+jbMon;
            if (jbDay < 10)
                jbDay = "0"+jbDay;
            var jbToday=jbMon+'-'+jbDay;
            //topli.find("li:eq(0)").html('<li><a href="###" title="java" target="_blank" class="tag">??????</a><a rel="nofollow" href="https://www.jb51.net/os/win10/698746.html" title="??????Windows 10 ??????/????????? ???????????? 248???" target="_blank" class="tt" style=" color:red;">??????Windows 10 ??????/????????? ???????????? 248???</a><span>'+jbToday+'</span></li>');
            topli.find("li:eq(0)").html('<li><a href="/news/" title="????????????" target="_blank" class="tag">????????????</a><a rel="nofollow" href="/news/798746.html" title="?????????????????????????????????" target="_blank" class="tt" style=" color:red;">?????????????????????????????????</a><span>'+jbToday+'</span></li>');
        }

        if ("undefined" == typeof tougao) {

            var yyweb = $('.bor-red');
            if (yyweb.length) {
                if (projectName == 'web' || projectName == 'htm5' || projectName == 'css' || projectName == 'xml' || projectName == 'Dreamweaver' || projectName == 'frontpage') {
                    yyweb.after('<div class="r300 clearfix mt10"><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yywysj300.png" width="300" height="100"></a></div>');
                }
            }
            if ("undefined" != typeof lmname) {
                var lmarr = ',,????????????,vbs,DOS/BAT,hta,htc,python,perl,????????????,VBA,????????????,ColdFusion,ruby??????,autoit,seraphzone,PowerShell,linux shell,Lua,Golang,Erlang,??????,?????????,,';
                if (lmarr.indexOf(',' + lmname + ',') > 0) {
                    $(document.getElementById('sidebar-right').children[3]).before('<div class="r300 clearfix mt10"><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yyjbzl300.png" width="300" height="100" class="nohref"></a></div>');
                }
                var lmsjk = ',,?????????,MsSql,Mysql,mariadb,oracle,DB2,mssql2008,mssql2005,SQLite,PostgreSQL,MongoDB,Redis,Access,???????????????,???????????????,,';
                if (lmsjk.indexOf(',' + lmname + ',') > 0) {
                    $(document.getElementById('sidebar-right').children[3]).before('<div class="r300 clearfix mt10"><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yysjk300.png" width="300" height="100" class="nohref"></a></div>');
                }
            }

        }
        if ("undefined" != typeof tougao) {
            var sid = $('#SOHUCS').attr('sid').replace('art_', '');
            var zzzl = '<div class="regulartg"><div class="qr"><div class="pic"><img src="//files.jb51.net/images/erweima/qdewm.jpg"></div><div class="slogan"><p>????????????????????? ???<em class="red"> 666 </em>??? ???????????????????????????</p></div></div></div>';
            var jszl = '<p>???????????????????????????JS??????,<a href="https://shimo.im/docs/YKWPTdkPdKpwWG9H/read" target="_blank">????????????</a></p>';
            if (sid == "73342") {
                $content.children('p').eq(17).after(zzzl);
            } else if (sid == "167287") {
                $content.children('p').eq(2).after(zzzl);
            } else if (sid == "134312") {
                $content.children('p').eq(2).before(jszl);
            } else if (sid == "172722") {
                $content.children('p').eq(0).after(jszl);
            } else if (sid == "143286") {
                $content.children('h2').eq(1).before(jszl);
            } else if (sid == "139346") {
                $content.children('p').eq(0).before(jszl);
            }
            /*var tztext = $(".downsoft a");
            if (tztext.text() == "\xa0") {
                tztext.attr('href', 'https://pan.lanzous.com/u/shaizishenshou');
                tztext.text("????????????");
            }
            var fotorarr = ',,756142,756138,756143,756137,756124,,';
            if (fotorarr.indexOf(',' + sid + ',') > 0) {
                $('.tip').html('<a href="https://www.fotor.com.cn/huodong/coupon#4900" target="_blank"><img src="//files.jb51.net/image/fotor820.jpg"></a>');
            }*/
        }

    });
}

if(content=document.getElementById('content')){
    var ctype=$('div.breadcrumb')[0].children[3].innerText;
    var qimg={};
    /* {
        img:''//????????????,
        alt:'python'//??????ALT,
        style:''//?????????????????????,
        align:2//?????????0:???, 1:???, 2:???
    } */
    switch(ctype.toLocaleString()){
        case 'python':
            if(content.innerHTML.indexOf('20200917173919.png')>0)break;//?????????
            qimg={img:'https://img.jbzj.com/file_images/article/202104/2021416141955635.png',alt:'Python???????????????????????????',style:'background-color:#e7eaf1;text-align:center;padding:0;margin:20px 0;',align:1};
            break;
        case '????????????':
            if(content.innerHTML.indexOf('2020121111446661.jpg')>0||content.innerHTML.indexOf('202103091400001.jpg')>0)break;//?????????
            qimg={img:'https://img.jbzj.com/file_images/article/202105/20210518164938.jpg',alt:'Office???????????????????????????',style:'background-color:#e7eaf1;text-align:center;padding:0;margin:20px 0;',align:1};
            break;
        case 'java':
            if(content.innerHTML.indexOf('202099155929273.jpg')>0)break;//?????????
            qimg={img:'https://img.jbzj.com/erweima/javajsmb.png',alt:'Java?????????',style:'background-color:#ebebeb;text-align:center;padding:0;margin:20px 0;',align:1};
            break;
        case '??????????????????':
            qimg={img:'https://img.jbzj.com/erweima/zmtkc.jpg',alt:'???????????????',style:'background-color:#01032c;text-align:center;padding:0;margin:20px 0;',align:1};
            break;
        case '????????????':
            qimg={img:'https://img.jbzj.com/erweima/zmtkc.jpg',alt:'???????????????',style:'background-color:#01032c;text-align:center;padding:0;margin:20px 0;',align:2};
            break;
    }
    if(typeof qimg.img!='undefined'){
        var qdiv =document.createElement('p'),alobj,chobj=content.children;
        qdiv.style=qimg.style;
        qdiv.innerHTML='<img style="border:none;padding:0" src="'+qimg.img+'" alt="'+qimg.alt+'">';
        switch(qimg.align){
            case 0://???
                alobj=chobj[0];
                break;
            case 1://???
                alobj=chobj[Math.ceil(chobj.length/2)];
                break;
            case 2://???
                alobj=chobj[Math.ceil(chobj.length-1)];
                break;
        }
        content.insertBefore(qdiv,alobj)
    }
}