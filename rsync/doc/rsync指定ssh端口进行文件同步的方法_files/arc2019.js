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

var aliwenzi = '<li><a href="http://click.aliyun.com/m/15321/" target="_blank"><span style="color:red;">30余款阿里云产品免费6个月</span></a></li>';
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
tgtxt += '<li><a href="https://www.redidc.net/" target="_blank"><span style="color:red;">公网kali镜像VPS 红队云为安全从业者服务</span></a></li>';
tgtxt += '<li><a href="http://www.uuwaf.com" target="_blank"><span style="color:red;">网站全球加速和超级防御[优优加速]</span></a></li>';
tgtxt += '<li><a href="http://go.yitanyun.com/url/51jbwz/" target="_blank"><span style="color:red;">▍易探云 ▍香港云主机=9元</span></a></li>';
tgtxt += '<li><a href="http://www.zoneidc.com/" target="_blank"><span style="color:red;">香港/美国/韩国等十五国云服务器9.9元/月起</span></a></li>';

tgtxt += '<li><a href="http://www.boluoyun.com" target="_blank"><span style="color:blue;">【菠萝云】来了,【正规商家】香港4G内存99元</span></a></li>';
tgtxt += '<li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1006456867&amp;site=qq&amp;menu=yes" target="_blank"><span style="color: red;">██机房大带宽机柜Q:1006456867██</span></a></li>';
//tgtxt += '<li><a href="https://888.678hyw.com/?JIAOBEN" target="_blank"><span style="color:blue;">█▇▆微商一手货源网/人人都能低价拿货▆▇█</span></a></li>';
tgtxt += '<li><a href="tencent://message/?uin=3522365&Site=//www.jb51.net" target="_blank"><span style="color: red;">广告联系QQ3522365</span></a></li>';
tgtxt += '<li><a href="tencent://message/?uin=3522365&Site=//www.jb51.net" target="_blank"><span style="color:blue;">广告联系QQ3522365</span></a></li>';

tgtxt += '<li><a href="tencent://message/?uin=3522365&Site=//www.jb51.net" target="_blank"><span style="color:red;">广告联系QQ3522365</span></a></li>';
tgtxt += '<li><a href="https://s.jb51.net" target="_blank"><span style="color:red;">服务器常用软件</span></a></li>';
tgtxt += '<li><a href="http://www.hostspaceidc.com/front/products/datacenter?from=jb51-pic" target="_blank"><span style="color:red;">海外大带宽 站群 高防服务器</span></a></li>';
tgtxt += '<li><a href="http://www.centcc.com" target="_blank"><span style="color:red;">北京闪迅 机架3900元 BGP带宽</span></a></li>';

tgtxt += '<li><a href="https://www.wsisp.com/cloud.html" target="_blank"><span style="color:blue;">香港CN2云主机★29元/月</span></a></li>';
tgtxt += '<li><a href="http://www.qy.com.cn/" target="_blank"><span style="color:blue;">群英云服务器送10M带宽30G防御,49元起</span></a></li>';
tgtxt += '<li><a href="http://www.tuidc.com/" target="_blank"><span style="color:blue;">服务器租用/托管-域名空间/认准腾佑科技</span></a></li>';
tgtxt += '<li><a href="http://www.vzidc.com/cloud/" target="_blank"><span style="color:blue;">华为云4核8g限时免费送另有代金券免费送</span></a></li>';

tgtxt += '<li><a href="http://www.ushk.net/server.html" target="_blank"><span style="color:red;">██美港数据██高端香港服务器租用</span></a></li>';
tgtxt += '<li><a href="http://vps.zzidc.com/tongji/jb51w.html" target="_blank"><span style="color:red;">★☆云服务器5折，天天抽红包抵扣☆★</span></a></li>';
tgtxt += '<li><a href="https://s.jb51.net" target="_blank"><span style="color:red;">服务器常用软件</span></a></li>';
tgtxt += '<li><a href="https://www.dzisp.cn/" target="_blank"><span style="color:red;">成都|德阳|电信100G高防24核物理机500元</span></a></li>';

tgtxt += '<li><a href="http://www.pppoevps.com/" target="_blank"><span style="color:blue;">█动态拨号IP云主机，电信ADSL独享20M█ </span></a></li>';
tgtxt += '<li><a href="http://www.360jq.com/hkshuang.htm" target="_blank"><span style="color:blue;">[香港双高防]无视CC★DDOS/堪比广东！</span></a></li>';
tgtxt += '<li><a href="http://www.cyidc.cc/" target="_blank"><span style="color:blue;">畅游网络 百独服务器 包跑满 998元</span></a></li>';
tgtxt += '<li><a href="http://www.wdw6.com/" target="_blank"><span style="color:blue;">bgp多线机房、大带宽</span></a></li>';

tgtxt += '<li><a href="http://www.ssf.cc/" target="_blank"><span style="color:red;">免备vps20/百独799/双线350/45互联</span></a></li>';
tgtxt += '<li><a href="http://www.zitian.cn/" target="_blank"><span style="color:red;">中原地区核心数据中心，月付299元起</span></a></li>';
tgtxt += '<li><a href="http://www.qy.cn/gfhd.html" target="_blank"><span style="color:red;">██群英网络██◆◆◆300G高防仅需599元◆◆◆</span></a></li>';
tgtxt += '<li><a href="https://www.zj-idc.com/" target="_blank"><span style="color:red;">上云就选华晨云，每天最低仅需1.2元</span></a></li>';

tgtxt += '<li><a href="http://www.gwidc.com/rent/home/index.html" target="_blank"><span style="color:blue;">港湾网络徐州百独800/月,100G高防云150</span></a></li>';
tgtxt += '<li><a href="http://www.hkcn2.com/51.htm" target="_blank"><span style="color:blue;">**香港高防10m大带宽独服，低至999元**</span></a></li>';
tgtxt += '<li><a href="http://www.xiaozhiyun.com/2016/" target="_blank"><span style="color:blue;">韩国香港美国站群服务器 巨牛网络</span></a></li>';
tgtxt += '<li><a href="http://tianyi.jb51.net/" target="_blank"><span style="color:blue;">天翼云，云主机，云存储，云安全</span></a></li>';

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
var tonglan2_1 = '<a href="https://www.jb51.net/s/idc/" alt="高防服务器" target="_blank"><img src="//files.jb51.net/image/bgp_jb51.gif" width="1080" height="50" border="0" /></a>';
var tonglan2_2 = '<a href="http://www.tuidc.com" alt="腾佑" target="_blank"><img src="//files.jb51.net/image/tuidc1080.gif?0516" width="1080" height="50" border="0" /></a>';


var tonglan3_1 = '<div class="mainlr"><a href="https://www.qy.cn/free/?f=jb51" target="_blank"><img src="//files.jb51.net/image/qy1080.gif?0313" width="1200" height="50"></a></div><div class="blank5"></div>';

var tonglan3_2 = '<div class="topimg"><ul>';
tonglan3_2 += '<li><A href="https://jieidc.taobao.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/jieidc_237.gif?0327" width="235" height="50"></A></li>';
tonglan3_2 += '<li><A href="https://www.yiyangidc.com/" target="_blank"><IMG alt="" src="//files.jb51.net/image/yy235.gif" width="235" height="50"></A></li>';
//tonglan3_2+='<li><A href="http://www.enkj.com/gfcloud/" target="_blank"><IMG alt="" src="//files.jb51.net/image/enkj0810.gif" alt="云服务器" width="235" height="50"></A></li>';
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

var idctu1 = '<div class="idc3"><a href="http://tools.jb51.net" target="_blank"><h1>在线工具</h1><span>代码格式化等</span> </a><a href="https://www.jb51.net/s/idc/" target="_blank"><h1>高防主机</h1><span>600G 防护</span> </a><a href="http://www.33ip.com" target="_blank"><h1>枫信科技</h1><span>IDC服务商</span> </a></div>';
var idctu2 = '<a href="http://www.tuidc.com/indexhd.html" target="_blank"><img src="//files.jb51.net/image/tengyou300.gif?1209" width="300" height="100"></a>';
idctu2 += '<div class="blank10"></div><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yyqz300.gif" alt="服务器" width="300" height="100"></a>';
idctu2 += '<div class="blank10"></div><a href="http://www.boluoyun.com/" target="_blank"><img src="//files.jb51.net/image/bly300.jpg" alt="云服务器" width="300" height="100"></a>';

//if (projectName=='article'){idctu2=bd200+'<div class="blank5"></div>'+idctu2;}

/*******---------在线工具start----------********/
var bctools = '<li><a href="http://tools.jb51.net/code/css" target="_blank"><font color="red">CSS代码工具</font></a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/js" target="_blank"><font color="red">JavaScript代码格式化工具</font></a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/xmlformat" target="_blank">在线XML格式化/压缩工具</a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/phpformat" target="_blank"><font color="red">php代码在线格式化美化工具</font></a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/sqlcodeformat" target="_blank">sql代码在线格式化美化工具</a></li>';
bctools += '<li><a href="http://tools.jb51.net/transcoding/html_transcode" target="_blank">在线HTML转义/反转义工具</a></li>';
bctools += '<li><a href="http://tools.jb51.net/code/json" target="_blank">在线JSON代码检验/检验/美化/格式化</a></li>';
bctools += '<li><a href="http://tools.jb51.net/regex/javascript" target="_blank">JavaScript正则在线测试工具</a></li>';
bctools += '<li><a href="http://tools.jb51.net/transcoding/jb51qrcode" target="_blank">在线生成二维码工具(加强版)</a></li>';
bctools += '<li><a href="http://tools.jb51.net/" target="_blank">更多在线工具</a></li>';
/*******---------在线工具end----------********/

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
        $jb51_top.html('<div class="userbar"><a href="http://tougao.jb51.net" target="_blank">投稿中心</a><img style="width:32px; height:22px" src="http://img.jb51.net/skin/2016/images/newn.gif" alt="hot"></div>');
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
                xbtj = '<div class="sidebox-recomm1"><a class="style03" href="https://www.jb51.net/news/699009.html" target="_blank"><div class="title"><strong>站长推荐</strong></div><div class="tj_ico3"></div><h5>Office专业增强版2019正版办公软件</h5><p>一次购买终身使用，绑定您的微软账户！安全可靠看得见！脚本之家粉丝专属价[<i>￥148元</i>]</p></a></div>';
            } else if (projectName == "os") {
                xbtj = '<div class="sidebox-recomm1"><a class="style02" href="https://www.jb51.net/os/win10/698746.html" target="_blank"><div class="title"><strong>站长推荐</strong></div><div class="tj_ico2"></div><h5>正版Windows 10家庭版/专业版永久激活密钥</h5><p>正版支持无限次重装系统，绑定微软官方个人帐户，支持更换设备，购买一次可永久使用。限时抢购[￥<span>1088</span>&rarr;<i>￥248</i>]起</p></a></div>';
            }
        }

        if (projectName == "article") {
            //$('#content').append(xbtj + '<p class="tip">也许是最全java资料！（文档+项目+资料）<a href="https://mp.weixin.qq.com/s/HFvRM6gpaACettv5ffM0tg" target="_blank">【点击下载】</a> 和努力的人一起学习Java！</p>');
            //} else {
            $addnr.before(xbtj + '<p class="tip">如您对本文有所疑义或者有任何需求，请<a href="//shequ.jb51.net" target="_blank">点击访问脚本社区</a>，百万网友为您解惑!</p>');
        }
        //$addnr.before(xbtj+'');
    }

    $yuanshichang = $('.topbarleft');
    if ($yuanshichang.length) {
        $yuanshichang.find('a').eq(0).attr('href', 'https://shequ.jb51.net');
        $yuanshichang.find('a').eq(0).text('脚本之家社区');
        $yuanshichang.append('<a href="https://www.yuanshichang.com/" target="_blank" style="color:red">源码商城</a>');
    }
    if ("undefined" != typeof ourl) {
        if (ourl) {
            $content = $('#content');
            if ($content.length) {
                if (ourl.indexOf(":") > 0) {
                    if (projectName == "article") {
                        $('.lbd_bot').after('<p>原文链接：' + ourl + '</p>');
                    } else {
                        $content.append('<p>原文链接：' + ourl + '</p>');
                    }
                } else {
                    if (projectName == "article") {
                        $('.lbd_bot').after('<p>原文链接：' + window.atob(ourl) + '</p>');
                    } else {
                        $content.append('<p>原文链接：' + window.atob(ourl) + '</p>');
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

        var shequlink = '<div id="ewm"><div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/skin/2018/images/jb51ewm.png" /></div><div class="fr"><p>微信公众号搜索 “ <span>脚本之家</span> ” ，选择关注</p><p>程序猿的那些事、送书等活动等着你</p></div></div></div>';
        //var shequlink = '<div id="ewm"><div class="jb51ewm"><img src="'+ shequimg[nn] +'" /></div></div>';
        var newslink = '<div id="ewm"><div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/skin/2018/images/itewm.png"></div><div class="fr"><p>微信公众号搜索 “ <span>IT服务圈儿</span> ” ，选择关注</p><p>每日十点播报，把握行业热点，紧跟行业脚步</p></div></div></div>';
        var gamelink = '<div id="ewm"><div class="jb51ewm"><div class="fl"><img src="//files.jb51.net/image/yxewm.png"></div><div class="fr"><p>微信公众号搜索 “ <span>游戏圈儿的那些事</span> ” </p><p>参加抽现金红包活动。</p></div></div></div>';
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
            //topli.find("li:eq(0)").html('<li><a href="###" title="java" target="_blank" class="tag">福利</a><a rel="nofollow" href="https://www.jb51.net/os/win10/698746.html" title="正版Windows 10 家庭/专业版 新年特价 248元" target="_blank" class="tt" style=" color:red;">正版Windows 10 家庭/专业版 新年特价 248元</a><span>'+jbToday+'</span></li>');
            topli.find("li:eq(0)").html('<li><a href="/news/" title="业界资讯" target="_blank" class="tag">业界资讯</a><a rel="nofollow" href="/news/798746.html" title="大学生理性爱国要懂政治" target="_blank" class="tt" style=" color:red;">大学生理性爱国要懂政治</a><span>'+jbToday+'</span></li>');
        }

        if ("undefined" == typeof tougao) {

            var yyweb = $('.bor-red');
            if (yyweb.length) {
                if (projectName == 'web' || projectName == 'htm5' || projectName == 'css' || projectName == 'xml' || projectName == 'Dreamweaver' || projectName == 'frontpage') {
                    yyweb.after('<div class="r300 clearfix mt10"><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yywysj300.png" width="300" height="100"></a></div>');
                }
            }
            if ("undefined" != typeof lmname) {
                var lmarr = ',,脚本专栏,vbs,DOS/BAT,hta,htc,python,perl,游戏相关,VBA,远程脚本,ColdFusion,ruby专题,autoit,seraphzone,PowerShell,linux shell,Lua,Golang,Erlang,其他,服务器,,';
                if (lmarr.indexOf(',' + lmname + ',') > 0) {
                    $(document.getElementById('sidebar-right').children[3]).before('<div class="r300 clearfix mt10"><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yyjbzl300.png" width="300" height="100" class="nohref"></a></div>');
                }
                var lmsjk = ',,数据库,MsSql,Mysql,mariadb,oracle,DB2,mssql2008,mssql2005,SQLite,PostgreSQL,MongoDB,Redis,Access,数据库文摘,数据库其它,,';
                if (lmsjk.indexOf(',' + lmname + ',') > 0) {
                    $(document.getElementById('sidebar-right').children[3]).before('<div class="r300 clearfix mt10"><a href="https://www.yiyangidc.com/" target="_blank"><img src="//files.jb51.net/image/yysjk300.png" width="300" height="100" class="nohref"></a></div>');
                }
            }

        }
        if ("undefined" != typeof tougao) {
            var sid = $('#SOHUCS').attr('sid').replace('art_', '');
            var zzzl = '<div class="regulartg"><div class="qr"><div class="pic"><img src="//files.jb51.net/images/erweima/qdewm.jpg"></div><div class="slogan"><p>微信扫码，回复 “<em class="red"> 666 </em>” 领取正则相关资料！</p></div></div></div>';
            var jszl = '<p>一个包解决你所有的JS问题,<a href="https://shimo.im/docs/YKWPTdkPdKpwWG9H/read" target="_blank">点击获取</a></p>';
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
                tztext.text("立即下载");
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
        img:''//图片地址,
        alt:'python'//图片ALT,
        style:''//图片父元素样式,
        align:2//位置；0:上, 1:中, 2:下
    } */
    switch(ctype.toLocaleString()){
        case 'python':
            if(content.innerHTML.indexOf('20200917173919.png')>0)break;//防冲突
            qimg={img:'https://img.jbzj.com/file_images/article/202104/2021416141955635.png',alt:'Python客栈送红包、纸质书',style:'background-color:#e7eaf1;text-align:center;padding:0;margin:20px 0;',align:1};
            break;
        case '办公软件':
            if(content.innerHTML.indexOf('2020121111446661.jpg')>0||content.innerHTML.indexOf('202103091400001.jpg')>0)break;//防冲突
            qimg={img:'https://img.jbzj.com/file_images/article/202105/20210518164938.jpg',alt:'Office达人送红包、纸质书',style:'background-color:#e7eaf1;text-align:center;padding:0;margin:20px 0;',align:1};
            break;
        case 'java':
            if(content.innerHTML.indexOf('202099155929273.jpg')>0)break;//防冲突
            qimg={img:'https://img.jbzj.com/erweima/javajsmb.png',alt:'Java技术迷',style:'background-color:#ebebeb;text-align:center;padding:0;margin:20px 0;',align:1};
            break;
        case '运营技巧教程':
            qimg={img:'https://img.jbzj.com/erweima/zmtkc.jpg',alt:'自媒体培训',style:'background-color:#01032c;text-align:center;padding:0;margin:20px 0;',align:1};
            break;
        case '热点资讯':
            qimg={img:'https://img.jbzj.com/erweima/zmtkc.jpg',alt:'自媒体培训',style:'background-color:#01032c;text-align:center;padding:0;margin:20px 0;',align:2};
            break;
    }
    if(typeof qimg.img!='undefined'){
        var qdiv =document.createElement('p'),alobj,chobj=content.children;
        qdiv.style=qimg.style;
        qdiv.innerHTML='<img style="border:none;padding:0" src="'+qimg.img+'" alt="'+qimg.alt+'">';
        switch(qimg.align){
            case 0://上
                alobj=chobj[0];
                break;
            case 1://中
                alobj=chobj[Math.ceil(chobj.length/2)];
                break;
            case 2://下
                alobj=chobj[Math.ceil(chobj.length-1)];
                break;
        }
        content.insertBefore(qdiv,alobj)
    }
}