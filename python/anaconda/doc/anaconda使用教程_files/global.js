var is_login, is_commented, ue, article_status, timestamp_version, learn, videolearn, videoHtml, isPostLevelUser,WorkArticleId, BlogArticleId, BlogArticleSetIt,isSpaceExe;
$(function() {
    layui.use(["layer", "form", "element", "util"],
    function() {
        form = layui.form;
        layer = layui.layer;
        element = layui.element;
        util = layui.util;
        util.fixbar({
            top: true
        });
        timestamp_version = new Date().getTime();
        ticket_login = "";
        function getQrcode() {
            $.ajaxSetup({
                async: false
            });
            $.get("/account/login_weixin.html?" + timestamp_version,
            function(res) {
                if (res.code > 0) {
                    layer.msg(res.msg, {
                        icon: 2
                    })
                } else {
                    if (res.msg) {
                        var url = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=" + res.msg;
                        ticket_login = res.msg;
                        $("#login_container img").attr("src", url);
                        checklogin()
                    }
                }
            },
            "json")
        }
        var time = null;
        function checklogin() {
            try {
                clearInterval(time)
            } catch(e) {}
            time = setInterval(function() {
                $.ajaxSetup({
                    async: false
                });
                $.get("/account/checkLogin.html?" + new Date().getTime(), {
                    "ticket": ticket_login
                },
                function(res) {
                    if (res.code == 2) {
                        getQrcode()
                    }
                    if (res.code == 3) {
                        clearInterval(time);
                        layer.msg(res.msg, {
                            icon: 2
                        },
                        function() {
                            $(".closealert").trigger("click")
                        })
                    }
                    if (res.code == 0) {
                        clearInterval(time);
                        layer.msg("????????????");
                        setTimeout(function() {
                            window.location.reload()
                        },
                        1000)
                    }
                },
                "json")
            },
            3000)
        }
        $(document).on("api.loginpopbox",
        function(e, callback) {
            $("body").append(signinTpl_string);
            getQrcode();
            if (ticket_login) {
                checklogin()
            }
            $(".js-verify-refresh").click(function() {
                $(".verify-img-wrap").parents("form").find(".verify-img").attr("src", $("#verifycode").val() + "?t=" + (new Date().getTime()))
            });
            $("#login_form .verify-img").trigger("click");
            $("body").append('<div class="modal-backdrop in"></div>');
            $(".modal-backdrop,.closealert").one("click",
            function() {
                if (!$("#signin").hasClass("noClose")) {
                    $("#app").remove();
                    $(".login-wrap").remove();
                    $(".modal-backdrop").remove();
                    clearInterval(time)
                }
            });
            $("#login_form .xa-login").click(function() {
                var $this = $(this);
                if ($this.is(".running")) {
                    return false
                }
                var emailVal = $.trim($("#app .loginusername").val());
                if (emailVal == "" || !/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(emailVal) && !/^1[3456789]\d{9}$/.test(emailVal)) {
                    $("#app .error-tips").css("display", "block").html("?????????????????????????????????");
                    $("#app .loginusername").focus();
                    return false
                } else {
                    $("#app .error-tips").css("display", "none").empty()
                }
                var pwdVal = $("#login_form .loginuserpasswordt").val();
                if (pwdVal == "" || pwdVal.length < 6 || pwdVal.length > 16 || !/^\s*(\S+)\s*$/.test(pwdVal)) {
                    $("#app .error-tips").css("display", "block").html("?????????6-16?????????,??????????????????");
                    $("#login_form .loginuserpasswordt").focus();
                    return false
                } else {
                    $("#app .error-tips").css("display", "none").empty()
                }
                var verifyVal = $("#login_form .ipt-verify").val();
                if (verifyVal == "" || verifyVal.length < 4) {
                    $("#app .error-tips").css("display", "block").html("?????????4???????????????");
                    $("#login_form .ipt-verify").focus();
                    return false
                } else {
                    $("#app .error-tips").css("display", "none").empty()
                }
                $this.addClass("running");
                $("#login_form .xa-login").val("?????????...");
                $.post("/account/login_email.html", {
                    account: emailVal,
                    pwd: pwdVal,
                    code: verifyVal
                },
                function(result) {
                    $this.removeClass("running");
                    if (result.code == 0) {
                        window.location.reload()
                    } else {
                        $("#login_form .xa-login").val("??????");
                        $("#app .error-tips").css("display", "block").html(result.msg);
                        $("#login_form .verify-img").attr("src", $("#verifycode").val() + "?t=" + (new Date().getTime()))
                    }
                },
                "json")
            });
            $(document).on("click", ".other-ways .qq",
            function() {
                var open_width = $(window).width() * 0.35;
                var open_height = $(window).height() * 0.6;
                var open_left = ($(window).width() - open_width) / 2;
                var open_top = ($(window).height() - open_height) / 2;
                window.open("/qqlogin.html", "", "width=" + open_width + ",height=" + open_height + ",top=" + open_top + ",left=" + open_left + ",toolbar=no,resizable=no,location=no")
            });
            $(document).on("click", ".rlf-forget",
            function() {
                forget_pop = layer.open({
                    type: 2,
                    title: "????????????",
                    shadeClose: true,
                    shade: 0.5,
                    area: ["500px", "400px"],
                    content: "/account/forgot.html"
                });
                return false
            });
            $(".ipt-verify").keydown(function(e) {
                if (e.keyCode == 13) {
                    $(".xa-login").click()
                }
            })
        });
        signinTpl_string = "";
        signinTpl_string += "<div id='app' class='login-wrap'>";
        signinTpl_string += "            <form onsubmit='return false' class=\"login-showSignup\">";
        signinTpl_string += "            <div class='header-wrap'>";
        signinTpl_string += "                <div class='title wechat'>";
        signinTpl_string += "                  <span style='line-height:30px;'>?????????????????????</span>";
        signinTpl_string += "                </div>";
        signinTpl_string += "                <div class='rightpng'><a href='javascript:;' class='toaccount' title='????????????????????????'></a></div>";
        signinTpl_string += "            </div>";
        signinTpl_string += "            <div class='content-wrap'>";
        signinTpl_string += "                <div class='box'>";
        signinTpl_string += "                    <div id='login_container'><img src='/static/images/wechat_img_login.jpg' class='wechat_img_login'></div>";
        signinTpl_string += '                 <div class="info">';
        signinTpl_string += '                 <div class="status status_browser js_status" id="wx_default_tip">';
        signinTpl_string += "                     <p>????????????????????????????????????</p>";
        signinTpl_string += "                     <p>???php????????????</p>";
        signinTpl_string += "                     </div>";
        signinTpl_string += "<a href='javascript:;' class='wechat_refresh'><i class='layui-icon layui-icon-loading layui-icon layui-anim layui-anim-rotate layui-anim-loop'></i>&nbsp;&nbsp;????????????????????????????????????</a>";
        signinTpl_string += '                     <div class="status status_succ js_status" style="display:none" id="wx_after_scan">';
        signinTpl_string += '                         <i class="status_icon icon38_msg succ"></i>';
        signinTpl_string += '                         <div class="status_txt">';
        signinTpl_string += "                         <h4>????????????</h4>";
        signinTpl_string += "                         <p>???????????????????????????????????????</p>";
        signinTpl_string += "                         </div>";
        signinTpl_string += "                         </div>";
        signinTpl_string += '                         <div class="status status_fail js_status" style="display:none" id="wx_after_cancel">';
        signinTpl_string += '                         <i class="status_icon icon38_msg warn"></i>';
        signinTpl_string += '                         <div class="status_txt">';
        signinTpl_string += "                         <h4>????????????????????????</h4>";
        signinTpl_string += "                         <p>??????????????????????????????????????????</p>";
        signinTpl_string += "                     </div> </div> </div>                       ";
        signinTpl_string += "                    <div class='scanbg'>";
        signinTpl_string += "                        <i></i>";
        signinTpl_string += "                        <div class='scantext'>";
        signinTpl_string += "                            <div>?????? <span class='scana'>??????</span></div>";
        signinTpl_string += "                            <div>????????????????????????</div>";
        signinTpl_string += "                        </div>";
        signinTpl_string += "                    </div>";
        signinTpl_string += "                </div>";
        signinTpl_string += "            </div>";
        signinTpl_string += "        </form>";
        signinTpl_string += "         <form onsubmit=\"return false\" id='login_form' class=\"reg-showSignup\" style='display:none'>";
        signinTpl_string += '                <div class="header-wrap">';
        signinTpl_string += '                    <div class="title">';
        signinTpl_string += "                        <span>????????????</span>";
        signinTpl_string += '                        <label style="float:left;margin-top:5px;margin-left:5px;font-size:12px;font-weight:normal;color:#999;">(???????????????????????????)</label>';
        signinTpl_string += "                    </div>";
        signinTpl_string += '                    <div class="rightpng"><a href="javascript:;" class="toqrcode" title="??????????????????"></a></div>';
        signinTpl_string += "                </div>";
        signinTpl_string += '                <div class="content-wrap">';
        signinTpl_string += '                    <div class="box login-box">';
        signinTpl_string += '              <div class="error-tips"></div> ';
        signinTpl_string += '                        <input class=\'loginusername\' type="text" placeholder="??????????????????????????????" autofocus="" autocomplete="off">';
        signinTpl_string += '                        <input class=\'loginuserpasswordt\' type="password" placeholder="???????????????">';
        signinTpl_string += '                     <input type="text" name="verify" class="ipt-verify" style="width:40%;float:left;margin-right:10px;" placeholder="??????????????????">   ';
        signinTpl_string += "                   <a href='javascript:;' hidefocus='true' class='verify-img-wrap js-verify-refresh'><img style='height:40px;width:160px;' class='verify-img' src=''/></a>     ";
        signinTpl_string += "                 <a href='javascript:;' hidefocus='true' class='icon-refresh js-verify-refresh'></a> ";
        signinTpl_string += '                        <div class="keep" style="display:block">';
        signinTpl_string += '                            <div class="checkbox">';
        signinTpl_string += "                                <a href=\"javascript:;\" class='rlf-forget'>???????????????</a>";
        signinTpl_string += "                            </div>";
        signinTpl_string += "                        </div>";
        signinTpl_string += "                        ";
        signinTpl_string += "                        <button class='xa-login' type=\"button\" onclick='return false;'>??????</button>";
        signinTpl_string += "                        ";
        signinTpl_string += '                        <div class="other-ways">';
        signinTpl_string += "                            ";
        signinTpl_string += '                            <div class="btn-wrap">';
        signinTpl_string += "                                <div>";
        signinTpl_string += '                                    <a class="qq" href="javascript:;" title="QQ????????????" style="width:auto">QQ????????????(???????????????????????????????????????)</a>';
        signinTpl_string += "                                </div>";
        signinTpl_string += "                            </div>";
        signinTpl_string += "                            ";
        signinTpl_string += "                        </div>";
        signinTpl_string += '                        <a href="javascript:;" class="freeregister">???????????????????????????</a>';
        signinTpl_string += "                    </div>";
        signinTpl_string += "                </div>";
        signinTpl_string += "            </form>";
        signinTpl_string += "        </div>";
        $("#login,#reg").click(function() {
            $(document).trigger("api.loginpopbox")
        });
        $(document).on("click", "#app .toaccount",
        function() {
            $("#app .reg-showSignup").show();
            $("#app .login-showSignup").hide();
            clearInterval(time)
        });
        $(document).on("click", "#app .toqrcode,.freeregister",
        function() {
            $("#app .reg-showSignup").hide();
            $("#app .login-showSignup").show();
            checklogin()
        });
        $(".layui-tab-content .chapter-list").click(function() {
            var that = $(this)
        });
        $(document).on("click", ".wechat_refresh",
        function() {
            clearInterval(time);
            getQrcode()
        });
        $("#category_gd").on("click",function() {
            var catStr = "";
            catStr += '<li data-fid="2" class="category_li"><a href="/course/list/13.html">HTML5</a></li><li data-fid="1" class="category_li"><a href="/course/list/14.html">CSS3</a></li><li data-fid="3" class="category_li"><a href="/course/list/19.html">jQuery</a></li><li data-fid="3" class="category_li"><a href="/course/list/21.html">React</a></li><li data-fid="3" class="category_li"><a href="/course/list/20.html">AngularJS</a></li><li data-fid="3" class="category_li"><a href="/course/list/25.html">AJAX</a></li><li data-fid="3" class="category_li"><a href="/course/list/15.html">Bootstrap</a></li><li data-fid="5" class="category_li"><a href="/course/list/16.html">Foundation</a></li><li data-fid="1" class="category_li"><a href="/course/list/30.html">Python</a></li><li data-fid="2" class="category_li"><a href="/course/list/44.html">GO</a></li><li data-fid="2" class="category_li"><a href="/course/list/36.html">Java</a></li><li data-fid="3" class="category_li"><a href="/course/list/37.html">C</a></li><li data-fid="3" class="category_li"><a href="/course/list/38.html">C++</a></li><li data-fid="3" class="category_li"><a href="/course/list/72.html">C#</a></li><li data-fid="3" class="category_li"><a href="/course/list/41.html">JSP</a></li><li data-fid="3" class="category_li"><a href="/course/list/32.html">Django</a></li><li data-fid="3" class="category_li"><a href="/course/list/71.html">ASP.NET</a></li><li data-fid="3" class="category_li"><a href="/course/list/47.html">ASP</a></li><li data-fid="3" class="category_li"><a href="/course/list/60.html">XML</a></li><li data-fid="3" class="category_li"><a href="/course/list/35.html">Ruby</a></li><li data-fid="3" class="category_li"><a href="/course/list/39.html">Perl</a></li><li data-fid="3" class="category_li"><a href="/course/list/40.html">Servlet</a></li><li data-fid="4" class="category_li"><a href="/course/list/42.html">Lua</a></li><li data-fid="4" class="category_li"><a href="/course/list/43.html">Scala</a></li><li data-fid="4" class="category_li"><a href="/course/list/49.html">VBScript</a></li><li data-fid="5" class="category_li"><a href="/course/list/51.html">MySQL</a></li><li data-fid="5" class="category_li"><a href="/course/list/54.html">Redis</a></li><li data-fid="5" class="category_li"><a href="/course/list/52.html">Oracle</a></li><li data-fid="6" class="category_li"><a href="/course/list/53.html">MongoDB</a></li><li data-fid="7" class="category_li"><a href="/course/list/55.html">Memcached</a></li><li data-fid="7" class="category_li"><a href="/course/list/50.html">SQL Server</a></li><li data-fid="9" class="category_li"><a href="/course/list/74.html">Flutter</a></li><li data-fid="9" class="category_li"><a href="/course/list/56.html">Android</a></li><li data-fid="10" class="category_li"><a href="/course/list/93.html">IOS</a></li><li data-fid="10" class="category_li"><a href="/course/list/57.html">Swift</a></li><li data-fid="10" class="category_li"><a href="/course/list/59.html">??????</a></li><li data-fid="10" class="category_li"><a href="/course/list/33.html">Linux</a></li><li data-fid="3" class="category_li"><a href="/course/list/34.html">Docker</a></li><li data-fid="9" class="category_li"><a href="/course/list/82.html">phpstudy</a></li><li data-fid="9" class="category_li"><a href="/course/list/83.html">Git</a></li><li data-fid="9" class="category_li"><a href="/course/list/84.html">????????????</a></li><li data-fid="7" class="category_li"><a href="/course/list/73.html">Axure</a></li><li data-fid="7" class="category_li"><a href="/course/list/92.html">PS</a></li><li data-fid="10" class="category_li"><a href="/course/list/85.html">HTTP</a></li><li data-fid="10" class="category_li"><a href="/course/list/89.html">TCP/IP</a></li><li data-fid="10" class="category_li"><a href="/course/list/91.html">????????????</a></li>';
            if ($("#course_all").is(".catStr")) {
                $(".category_li").remove();
                $(".category_gd_a").html('?????? <i class="layui-icon layui-icon-down ft-12 ft-b7"></i>');
                $("#course_all").removeClass("catStr")
            } else {
                $("#category_gd").before(catStr);
                $(".category_gd_a").html('?????? <i class="layui-icon layui-icon-up ft-12 ft-b7"></i>');
                $("#course_all").addClass("catStr")
            }
        });
        $('.category-list-second').hover(function(){
            var catStr = "";
            catStr += '<li data-fid="2" class="category_li"><a href="/course/list/13.html">HTML5</a></li><li data-fid="1" class="category_li"><a href="/course/list/14.html">CSS3</a></li><li data-fid="3" class="category_li"><a href="/course/list/19.html">jQuery</a></li><li data-fid="3" class="category_li"><a href="/course/list/21.html">React</a></li><li data-fid="3" class="category_li"><a href="/course/list/20.html">AngularJS</a></li><li data-fid="3" class="category_li"><a href="/course/list/25.html">AJAX</a></li><li data-fid="3" class="category_li"><a href="/course/list/15.html">Bootstrap</a></li><li data-fid="5" class="category_li"><a href="/course/list/16.html">Foundation</a></li><li data-fid="1" class="category_li"><a href="/course/list/30.html">Python</a></li><li data-fid="2" class="category_li"><a href="/course/list/44.html">GO</a></li><li data-fid="2" class="category_li"><a href="/course/list/36.html">Java</a></li><li data-fid="3" class="category_li"><a href="/course/list/37.html">C</a></li><li data-fid="3" class="category_li"><a href="/course/list/38.html">C++</a></li><li data-fid="3" class="category_li"><a href="/course/list/72.html">C#</a></li><li data-fid="3" class="category_li"><a href="/course/list/41.html">JSP</a></li><li data-fid="3" class="category_li"><a href="/course/list/32.html">Django</a></li><li data-fid="3" class="category_li"><a href="/course/list/71.html">ASP.NET</a></li><li data-fid="3" class="category_li"><a href="/course/list/47.html">ASP</a></li><li data-fid="3" class="category_li"><a href="/course/list/60.html">XML</a></li><li data-fid="3" class="category_li"><a href="/course/list/35.html">Ruby</a></li><li data-fid="3" class="category_li"><a href="/course/list/39.html">Perl</a></li><li data-fid="3" class="category_li"><a href="/course/list/40.html">Servlet</a></li><li data-fid="4" class="category_li"><a href="/course/list/42.html">Lua</a></li><li data-fid="4" class="category_li"><a href="/course/list/43.html">Scala</a></li><li data-fid="4" class="category_li"><a href="/course/list/49.html">VBScript</a></li><li data-fid="5" class="category_li"><a href="/course/list/51.html">MySQL</a></li><li data-fid="5" class="category_li"><a href="/course/list/54.html">Redis</a></li><li data-fid="5" class="category_li"><a href="/course/list/52.html">Oracle</a></li><li data-fid="6" class="category_li"><a href="/course/list/53.html">MongoDB</a></li><li data-fid="7" class="category_li"><a href="/course/list/55.html">Memcached</a></li><li data-fid="7" class="category_li"><a href="/course/list/50.html">SQL Server</a></li><li data-fid="9" class="category_li"><a href="/course/list/74.html">Flutter</a></li><li data-fid="9" class="category_li"><a href="/course/list/56.html">Android</a></li><li data-fid="10" class="category_li"><a href="/course/list/93.html">IOS</a></li><li data-fid="10" class="category_li"><a href="/course/list/57.html">Swift</a></li><li data-fid="10" class="category_li"><a href="/course/list/59.html">??????</a></li><li data-fid="10" class="category_li"><a href="/course/list/33.html">Linux</a></li><li data-fid="3" class="category_li"><a href="/course/list/34.html">Docker</a></li><li data-fid="9" class="category_li"><a href="/course/list/82.html">phpstudy</a></li><li data-fid="9" class="category_li"><a href="/course/list/83.html">Git</a></li><li data-fid="9" class="category_li"><a href="/course/list/84.html">????????????</a></li><li data-fid="7" class="category_li"><a href="/course/list/73.html">Axure</a></li><li data-fid="7" class="category_li"><a href="/course/list/92.html">PS</a></li><li data-fid="10" class="category_li"><a href="/course/list/85.html">HTTP</a></li><li data-fid="10" class="category_li"><a href="/course/list/89.html">TCP/IP</a></li><li data-fid="10" class="category_li"><a href="/course/list/91.html">????????????</a></li>';
            $("#category_gd").before(catStr);
            $(".category_gd_a").html('?????? <i class="layui-icon layui-icon-up ft-12 ft-b7"></i>');
            $("#course_all").addClass("catStr")
        },function(){
            $(".category_li").remove();
            $(".category_gd_a").html('?????? <i class="layui-icon layui-icon-down ft-12 ft-b7"></i>');
            $("#course_all").removeClass("catStr")
        });
        var currentfid = $(".category-list-first li.diy-scurse-li-bg").data("id");
        var sub_on = $(".category-list-second li.diy-scurse-li-bg");
        if (sub_on.size() > 0) {
            currentfid = sub_on.data("fid");
            $(".category-list-first li[data-id='" + currentfid + "']").addClass("diy-scurse-li-bg")
        } else {
            $(".category-list-second li:first").addClass("diy-scurse-li-bg")
        }
        $(".sub_all").click(function() {
            $(".category-list-first li").each(function(i) {
                if (i > 0 && $(this).is(".diy-scurse-li-bg")) {
                    location.href = $(".category-list-first .diy-scurse-li-bg").find("a").attr("href")
                } else {
                    if (i < 2 && $(this).is(".diy-scurse-li-bg")) {
                        location.href = "/course.html"
                    }
                }
            })
        });
        $(".ask-comment-answer").click(function() {
            if ($(".php-user #login").size() > 0) {
                $("#login").trigger("click")
            } else {
                var that = $("#commentinput");
                if (that.is(".layui-hide-sm")) {
                    that.removeClass("layui-hide-sm");
                    ue = getue_config("js-reply-editor-box")
                } else {
                    that.addClass("layui-hide-sm")
                }
            }
        });
        $(document).on("click", "#js-wenda-ci-submit:not(.running)",
        function() {
            var that = $(this),
            uecontent = ue.getContent();
            var reg = new RegExp("[\\u4e00-\\u9fa5]+", "g");
            if (uecontent == "" || !reg.test(uecontent)) {
                layer.msg("?????????????????????");
                return false
            }
            that.addClass("running").html("?????????...");
            $.post("/wenda/reply.html", {
                ask_id: that.data("qid"),
                reply_content: uecontent
            },
            function(result) {
                if (result.status == 1) {
                    if (result.pd == 1) {
                        layer.alert('????????????,??????0.5???P???&nbsp;<a class="viewmore-pdou" href="javascript:;" style="color:#ff0000;margin-left:10px;">??????P???????????????</a>', {
                            title: "????????????",
                            icon: 1,
                            closeBtn: 0,
                            skin: "layui-layer-molv",
                            anim: 4
                        })
                    } else {
                        layer.msg(result.msg, {
                            time: 2000,
                            skin: "layui-layer-molv",
                            icon: 1
                        })
                    }
                    that.removeClass("running").html("??????");
                    reply_data(result.uid, result.avatar, result.nickname, result.floor, result.content, result.ask_id, result.answer_id, result.add_time, result.answer_count)
                } else {
                    layer.msg(result.msg, {
                        icon: 2
                    },
                    function() {
                        if (result.msg == "???????????????????????????") {
                            layer.open({
                                type: 2,
                                title: "?????????????????????????????????????????????????????????",
                                shade: 0.3,
                                area: ["400px", "350px"],
                                content: "/user/bind_phone.html"
                            })
                        }
                    });
                    that.removeClass("running").html("??????")
                }
            })
        });
        function reply_data(u, i, n, l, c, ai, an, tm, ac) {
            if ($(".no-data-tips").size() > 0) {
                $(".no-data-tips").hide()
            }
            var reply_str = '<ul class="layui-clear"><li class="isAct-img"><a class="isAct_a" href="/member/' + u + '.html" target="_blank"><img class="isAct-img" src="' + i + '" alt="' + n + '"></a></li><li class="isAct-attr"><p><a class="vam fsize14 c-master f-fM name" href="/member/' + u + '.html" title="' + n + '" target="_blank">' + n + '</a><span class="time">&nbsp;&nbsp;' + tm + '</span><span class="view">' + l + "???</span></p><p></p><p>" + c + '</p><p></p><p><span class="view2"><i class="layui-icon">???</i>???<span>+0</span></span><span class="reply" style="color:#009a61">????????????</span></p></li></ul>';
            $(".ask-reply-all-list").prepend(reply_str);
            ue.setContent("");
            $(".wrap.layui-clear .master span").html("&nbsp???" + ac + "???")
        }
        $(document).on("click", ".ask-reply-all-list.comments-content .reply",
        function() {
            if ($(this).is(".is_open")) {
                $(this).removeClass("is_open");
                $(this).parents(".ask_top_ul").find(".release-reply-con").hide()
            } else {
                $(this).addClass("is_open");
                $(this).parents(".ask_top_ul").find(".release-reply-con").show()
            }
        });
        $(document).on("click", ".php-comment-list.comments-content .course_reply",
        function() {
            if ($(this).is(".is_open")) {
                $(this).removeClass("is_open");
                $(this).parents(".php-comment-list").find(".release-reply-con").hide()
            } else {
                $(this).addClass("is_open");
                $(this).parents(".php-comment-list").find(".release-reply-con").show()
            }
        });
        $(document).on("click", ".reply-list .reply-item .reply-btn",
        function() {
            $(this).parents(".layui-clear.ask_top_ul").find(".reply").trigger("click")
        });
        $(document).on("click", ".do-reply-btn:not('.running')",
        function() {
            if ($("#login").size() > 0) {
                $(document).trigger("api.loginpopbox");
                return false
            }
            var that = $(this);
            var id = that.data("id");
            var content = that.prev(".textarea-con").find("#release-reply").val();
            var reg = new RegExp("[\\u4e00-\\u9fa5]+", "g");
            if (content == "" || !reg.test(content)) {
                layer.msg("????????????????????????", {
                    icon: 2
                });
                return false
            }
            that.addClass("running");
            $.post("/wenda/reply_answer.html", {
                id: id,
                content: content
            },
            function(result) {
                if (result.code == 1) {
                    layer.msg(result.msg, {
                        icon: 1
                    },
                    function() {
                        that.prev(".textarea-con").find("#release-reply").val("");
                        var answer_str = '<div class="reply-list"><div class="reply-item"><span class="pull-left comment-ops" style="position:absolute;"><span class="mr20"><span class="reply-btn">??????</span></span></span><div class="reply-content-block"><div class="reply-content"><p>' + result.c + '</p></div><div><span class="comment-meta inline-block"><span>??? </span><a target="_blank" style="color:#009a61;" href="/member/' + result.u + '/asks.html"><strong style="font-weight:bold;">' + result.n + '</strong></a><span class="text-muted-plus">?? ??????</span></span></div></div></div></div>';
                        that.parents(".release-reply-con").before(answer_str);
                        $(".wrap.layui-clear .master span").html("&nbsp???" + result.a + "???");
                        that.removeClass("running")
                    })
                } else {
                    layer.msg(result.msg, {
                        icon: 2
                    });
                    that.removeClass("running")
                }
            })
        });
        $(document).on("click", '.second-reply-btn:not(".running")',
        function() {
            if ($("#login").size() > 0) {
                $(document).trigger("api.loginpopbox");
                return false
            }
            var that = $(this);
            var id = that.data("id");
            var content = that.prev(".textarea-con").find("#release-reply").val();
            var reg = new RegExp("[\\u4e00-\\u9fa5]+", "g");
            if (content == "" || !reg.test(content)) {
                layer.msg("????????????????????????", {
                    icon: 2
                });
                return false
            }
            that.addClass("running");
            $.post("/course/add_comment.html", {
                id: id,
                content: content,
                learn: learn
            },
            function(result) {
                if (result.status == 1) {
                    layer.msg(result.msg, {
                        icon: 1
                    },
                    function() {
                        that.prev(".textarea-con").find("#release-reply").val("");
                        that.parents(".php-comment-list").find(".course_reply").trigger("click");
                        var course_reply_str = '<div class="reply-list"><div class="reply-item"><span class="pull-left comment-ops" style="position:absolute;"><span class="mr20"><a href="/member/' + result.comment_ajax.uid + '.html" target="_blank"><img src="' + result.comment_ajax.avatar + '" width="30" alt="' + result.comment_ajax.nickname + '"></a></span></span><div class="reply-content-block"><div class="reply-content"><p>' + result.comment_ajax.content + '</p></div><div><span class="comment-meta inline-block"><span>??? </span><a target="_blank" style="color:#009a61;" href="/member/' + result.comment_ajax.uid + '.html"><strong style="font-weight:bold;">' + result.comment_ajax.nickname + '</strong></a><span class="text-muted-plus">?? ??????</span></span></div></div></div></div>';
                        that.parents(".release-reply-con").before(course_reply_str);
                        that.removeClass("running")
                    });
                    is_commented = 1
                } else {
                    layer.msg(result.msg, {
                        icon: 2
                    });
                    that.removeClass("running")
                }
            })
        });
        $(".vodeo-lists-list .chapter-list").click(function() {
            var that = $(this).next(".video");
            if (that.is(".layui-hide-sm")) {
                $(".vodeo-lists-list .video").addClass("layui-hide-sm");
                that.removeClass("layui-hide-sm")
            } else {
                that.addClass("layui-hide-sm")
            }
        });
        try {
            if (top.location.hostname != window.location.hostname) {
                layer.msg("?????????????????????????????????...", {
                    icon: 2
                },
                function() {
                    try {
                        window.top.location.href = window.location
                    } catch(e) {
                        window.location.href = "https://www.php.cn"
                    }
                })
            }
        } catch(e) {
            layer.msg("?????????????????????????????????...", {
                icon: 2
            },
            function() {
                try {
                    window.top.location.href = window.location
                } catch(e) {
                    window.location.href = "https://www.php.cn"
                }
            })
        }
        $(".op.chapter").click(function() {
            if ($(this).hasClass("light")) {
                $(this).removeClass("light");
                $(".section-list").css("right", "-400px")
            } else {
                $(this).addClass("light");
                $(".section-list").css("right", "0px")
            }
        });
        $(".op.question").click(function() {
            if ($("#login").size() > 0) {
                $("#login").trigger("click");
                return false
            }
            $(".phpcn-modal-layer .phpcn-modal-title span").html("??????");
            $(".phpcn-modal-dialog").html($("#askTpl").html());
            $(".phpcn-modal-layer").css({
                left: ($(window).width() - 654) / 2 + "px",
                "top": ($(window).height() - 264) / 2 + "px"
            }).show();
            if (ue) {
                ue.destroy();
                ue = null
            }
            ue = UE.getEditor("container", {
                toolbars: [["insertcode", "Bold", "italic", "underline", "snapscreen", "simpleupload", "spechars", "blockquote", "link", "unlink"]],
                wordCount: false,
                elementPathEnabled: false,
                pasteplain: true,
                enableContextMenu: false,
                allowDivTransToP: false,
                initialFrameWidth: 588,
                initialFrameHeight: 150,
                iframeCssUrl: "/static/ueditor/plugin/js/user_code.css"
            })
            isSpaceExe = false;
        });
        $(".op.code_down").click(function() {
            if ($("#login").size() > 0) {
                $("#login").trigger("click");
                return false
            }
            $("#code_down_li").trigger("click")
        });
        var isPostAsk = false;
        $(document).on("click", "#js-discuss-submit",
        function() {
            var title = $("#js-qa-title").val();
            var content = ue.getContent();
            var verify = $(".verify-code-ipt").val();
            var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
            if (!reg.test(content)) {
                layer.msg("????????????????????????", {
                    icon: 2
                });
                return false
            }
            if (!new RegExp("[\\u4E00-\\u9FFF]+", "g").test(title)) {
                layer.msg("????????????????????????", {
                    icon: 2
                });
                return false
            }
            if (verify == "") {
                layer.msg("?????????????????????", {
                    icon: 2
                });
                return false
            }
            if (isPostAsk == true) {
                return false
            }
            isPostAsk = true;
            $.post("/course/add_wenda.html", {
                learn: learn,
                title: title,
                content: content,
                verify: verify
            },
            function(result) {
                if (result.status == 1) {
                    layer.msg(result.msg, {
                        icon: 1
                    });
                    $(".js-modal-close").trigger("click");
                    var data = result.ask_ajax;
                    var ask_ajax = '<div class="php-questions-list"><div class="portrait"><a href="/member/' + data.uid + '.html" target="_blank"><img width="40" height="40" src="' + data.avatar + '" alt="' + data.nickname + '"></a><p><a href="/member/' + data.uid + '.html" title="' + data.nickname + '" target="_blank">' + data.nickname + '</a></p></div><div class="questions-info"><p class="php-questions-title"><i class="layui-icon" style="color:#298bcc">???</i><a href="/wenda/' + data.ask_id + '.html" target="_blank">' + data.title + '</a></p><p class="course-media-code-ask-answer">????????????<a href="/wenda/' + data.ask_id + '.html" target="_blank">&nbsp;&nbsp;&nbsp;&nbsp;????????????</a></p><p class="questions-time">???????????????</p></div><div class="questions-right"><a href="/wenda/' + data.ask_id + '.html" target="_blank" style="color:#00b33b"><div class="questions-nums"><p class="php-questions-title">??????</p><p class="php-questions-title">0</p></div></a><a href="/wenda/' + data.ask_id + '.html" target="_blank"><div class="questions-click"><p class="php-questions-title">??????</p><p class="php-questions-title">0</p></div></a></div></div>';
                    $(".layui-tab-content .course-code-wenda-inner").prepend(ask_ajax)
                } else {
                    layer.msg(result.msg, {
                        icon: 2
                    });
                    isPostAsk = false
                }
            })
        });
        if ($(".php-ask").size() > 0) {
            $.getScript("/static/js/jQuery.autoIMG.min.js",
            function() {
                $(".php-ask").autoIMG()
            });
            $(".php-ask .ask_accept").click(function() {
                var id = $(this).data("id");
                var id1 = $(this).data("id1");
                $.post("/wenda/accept.html", {
                    id: id,
                    id1: id1
                },
                function(result) {
                    if (result.code == 1) {
                        layer.msg(result.msg, {
                            icon: 1
                        },
                        function() {
                            window.location.reload()
                        })
                    } else {
                        layer.msg(result.msg, {
                            icon: 2
                        })
                    }
                })
            })
        }
        $(".course_manual_lists").click(function() {
            $(".course_manual_lists_second").hide();
            $(this).parents(".site-tree-noicon").siblings().removeClass("is_show");
            $(".site-tree-noicon").find("em.course_manual_lists").html("??????");
            $(".site-tree-noicon").find("i.course_manual_lists").addClass("layui-icon-triangle-r").removeClass("layui-icon-triangle-d");
            if ($(this).parents(".site-tree-noicon").is(".is_show")) {
                $(this).parents(".site-tree-noicon").removeClass("is_show")
            } else {
                $(this).parents(".site-tree-noicon").find(".course_manual_lists_second").show();
                $(this).parents(".site-tree-noicon").find("em.course_manual_lists").html("??????");
                $(this).parents(".site-tree-noicon").find("i.course_manual_lists").addClass("layui-icon-triangle-d").removeClass("layui-icon-triangle-r");
                $(this).parents(".site-tree-noicon").addClass("is_show")
            }
        });
        $(".course_manual_index").css("min-height", $(window).height() - $(".header-index").height() - $(".footer_top_margin").height() - 50);
        $(".op.notes").click(function() {
            if ($("#login").size() > 0) {
                $("#login").trigger("click");
                return false;
            }
            $(".phpcn-modal-layer .phpcn-modal-title span").html("??????");
            $(".phpcn-modal-dialog").html($("#noteTpl").html());
            $(".phpcn-modal-layer").css({
                left: ($(window).width() - 654) / 2 + "px",
                "top": ($(window).height() - 264) / 2 + "px"
            }).show();
            isSpaceExe = false;
        });
        $(".js-modal-close").on("click", function() {
            $(".phpcn-modal-layer").hide();isSpaceExe=true;
        });
        $("#js-note-textarea").on("keyup", function() {
            $("#js-note-limit").html($("#js-note-textarea").val().length);
            if ($("#js-note-textarea").val().length > 1000) {
                $("#js-note-limit").addClass("limit-overflow");
                $("#js-note-input-fake").addClass("ipt-fake-error")
            } else {
                $("#js-note-limit").removeClass("limit-overflow");
                $("#js-note-input-fake").removeClass("ipt-fake-error")
            }
        }).on("focus", function() {
            $("#js-note-input-fake").addClass("ipt-fake-focus")
        }).on("blur", function() {
            $("#js-note-input-fake").removeClass("ipt-fake-focus")
        });
        var isPostNote = false;
        $(document).on("click", "#js-note-submit", function() {
            if ($("#js-note-limit").hasClass("limit-overflow")) {
                msgshow("???????????????1000???", "false");
                return false
            }
            if (isPostNote == true) {
                return false
            }
            isPostNote = true;
            $.post("/course/add_note.html", {
                learn: learn,
                content: $("#js-note-textarea").val()
            }, function(result) {
                if (result.status == 1) {
                    layer.msg(result.msg, {
                        icon: 1
                    });
                    $(".js-modal-close").trigger("click");
                    var data = result.note_ajax;
                    var comment_ajax = '<div class="php-comment-list"><div class="portrait"><a href="/member/' + data.uid + '.html" target="_blank"><img width="40" height="40" src="' + data.avatar + '" alt="' + data.nickname + '"></a></div><div class="comment-info"><p><a href="/member/' + data.uid + '.html" title="' + data.nickname + '" target="_blank">' + data.nickname + "</a></p><p>" + data.content + '</p><p class="comment-time">' + data.add_time + ' <i class="layui-icon course-code-note-good" title="????????????" data-note_id="' + data.note_id + '">&#xe6c6;<span>&nbsp;0</span></i></p></div><div class="layui-clear"></div></div>';
                    $(".note-add").after(comment_ajax)
                } else {
                    layer.msg(result.msg, {
                        icon: 2
                    });
                    isPostNote = false
                }
            })
        });
        $(document).on("click", ".course-code-comment-submit:not('.running')", function() {
            var that = $(this);
            var content = $(".php-comment .course-media-code-comment textarea").val();
            var postdata = {
                "learn": learn,
                "content": content
            };
            var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
            if (!reg.test($.trim(content)) || content.length < 10) {
                layer.msg("???????????????????????????????????????10????????????", {
                    icon: 2
                });
                return false
            }
            that.addClass("running");
            $.ajax({
                url: "/course/add_comment.html",
                data: postdata,
                type: "post",
                cache: false,
                dataType: "json",
                success: function(result) {
                    if (result.status == 1) {
                        layer.msg(result.msg, {
                            icon: 1
                        });
                        var data = result.comment_ajax;
                        var comment_ajax = '<div class="php-comment-list layui-clear"><div class="portrait"><a href="/member/' + data.uid + '.html" target="_blank"><img width="40" height="40" src="' + data.avatar + '" alt="' + data.nickname + '"></a></div><div class="comment-info"><p><a href="/member/' + data.uid + '.html" target="_blank">' + data.nickname + "</a></p><p>" + data.content + '</p><p class="comment-time">??????<i class="layui-icon course-code-comment-good" title="??????" data-comment_id="' + data.id + '">&#xe6c6;&nbsp;<span>0</span></i></p></div></div>';
                        $(".course-media-code-comment").after(comment_ajax);
                        $(".php-comment .course-media-code-comment textarea").val("");
                        that.removeClass("running");
                        is_commented = 1
                    } else {
                        layer.msg(result.msg, {
                            icon: 2
                        });
                        that.removeClass("running")
                    }
                },
                error: function() {
                    layer.msg("????????????", {
                        icon: 2
                    });
                    running = false;
                    that.removeClass("running")
                }
            })
        });
        $(document).on("click", ".php-comment-list .course-code-comment-good", function() {
            var that = $(this);
            var id = that.data("comment_id");
            $.post("/course/comment_good.html", {
                id: id
            }, function(result) {
                if (result.status == 1) {
                    layer.msg(result.msg, {
                        icon: 1
                    });
                    that.find("span").html(parseInt(that.find("span").html()) + 1)
                } else {
                    layer.msg(result.msg, {
                        icon: 2
                    })
                }
            })
        });
        $(document).on("click", ".comment-info .course-code-note-good", function() {
            var that = $(this);
            var id = that.data("note_id");
            $.post("/course/note_good.html", {
                id: id
            }, function(result) {
                if (result.status == 1) {
                    layer.msg(result.msg, {
                        icon: 1
                    });
                    that.find("span").html(parseInt(that.find("span").html()) + 1)
                } else {
                    layer.msg(result.msg, {
                        icon: 2
                    })
                }
            })
        });
        if ($(".js-editor-tab .editor-view .ui-tabs-active").size() > 0) {
            iframe_set();
            code = $("#editor-tabs-html").html();
            code = code.replace(/&lt;/g, "<");
            code = code.replace(/&gt;/g, ">");
            editor = ace.edit("editor-tabs-html");
            editor.setTheme("ace/theme/vibrant_ink");
            editor.getSession().setUseWrapMode(true);
            editor.getSession().setMode("ace/mode/php");
            editor.setShowPrintMargin(false);
            var ifr;
            var initresultbox = function() {
                ifr = document.createElement("iframe");
                ifr.setAttribute("frameborder", "0");
                ifr.setAttribute("id", "iframeResult");
                document.getElementById("viewPort-content").innerHTML = "";
                document.getElementById("viewPort-content").appendChild(ifr);
                $("#iframeResult").css({
                    "width": "100%",
                    "height": "99%"
                })
            };
            initresultbox();
            $("#J_EditorReset").click(function() {
                editor.getSession().setValue(code);
                $("#J_Commit").trigger("click")
            });
            $("#J_Commit").click(function() {
                tmp_code = editor.getSession().getValue();
                if (tmp_code.indexOf("<?php") >= 0 && tmp_code.indexOf("?>") < 0) {
                    tmp_code += "?>"
                }
                if (tmp_code.indexOf("<form") >= 0) {
                    tmp_code += '<script src="/static/js/run.bat.js"><\/script>'
                }
                runcode = 3;
                initresultbox();
                var ifrw = (ifr.contentWindow) ? ifr.contentWindow: (ifr.contentDocument.document) ? ifr.contentDocument.document: ifr.contentDocument;
                if ((tmp_code.indexOf("imagedestroy") >= 0 || tmp_code.indexOf("imagecopyresampled") >= 0 || tmp_code.indexOf("imagecreatetruecolor") >= 0 || tmp_code.indexOf("imagecreatefrom") >= 0) && tmp_code.indexOf("header") >= 0) {
                    tmp_code = tmp_code.replace(/header\(/g, "//header(");
                    tmp_code = "<?php ob_start();?>" + tmp_code;
                    tmp_code += "<?php $output=ob_get_contents();ob_end_clean();eval('$output=base64_'.'encode($output);');echo 'data:image/jpg;base64,'.$output;?>";
                    $.post("https://work.php.cn/compile.php", {
                        code: tmp_code,
                        language: runcode
                    }, function(data) {
                        ifrw.document.open();
                        ifrw.document.write('<h2>????????????????????????</h2><img src="data:image/' + data.split("data:image/")[1] + '">');
                        ifrw.document.close()
                    })
                } else {
                    $.post("https://work.php.cn/compile.php", {
                        code: tmp_code,
                        language: runcode
                    },
                    function(data) {
                        ifrw.document.open();
                        ifrw.document.write(data);
                        ifrw.document.close()
                    })
                }
            });
            $("#J_Commit").trigger("click");
            has_scrollbar();
            now_learn_url();
            $("body").append('<div id="imgT"><span id="maxImg">????????????</span><span id="closes">??????</span><br/><img src="" id="img"></div></div><div id="imgTan"></div>');
            $(".php-code-text-img .code_content_des img").click(function() {
                var srcAdd = $(this).attr("src");
                $("#img").attr("src", srcAdd);
                $("#imgT").show();
                $("#imgTan").show()
            });
            $("#imgTan").click(function() {
                $("#imgT").hide();
                $("#imgTan").hide()
            });
            $("#closes").click(function() {
                $("#imgT").hide();
                $("#imgTan").hide()
            });
            $(".php-code-text-img .code_content_des pre").mouseover(function() {
                $("body").append('<div class="codeTip">???????????????????????????????????????</div>');
                $(".codeTip").css({
                    "left": $(this).offset().left + $(this).width() - 130,
                    "top": $(this).offset().top
                })
            }).mouseout(function() {
                $(".codeTip").remove()
            });
            $(".php-code-text-img .code_content_des pre").click(function() {
                var code = $(this).html();
                code = code.replace(/&lt;/g, "<");
                code = code.replace(/&gt;/g, ">");
                code = code.replace(/&amp;/g, "&");
                code = code.replace(/&nbsp;/g, " ");
                editor.getSession().setValue(code)
            });
            $("#code_spread_shrink").hover(function() {
                if ($(this).is(".is_show")) {
                    $(this).removeClass("is_show");
                    $(this).children("#code_spread_shrink_show").hide()
                } else {
                    $(this).addClass("is_show");
                    $(this).children("#code_spread_shrink_show").show()
                }
            });
            $("#code_spread_shrink").on({
                mousedown: function(e) {
                    $(document).on("mousemove", "body",
                    function(e) {
                        $(".php-code-text-img .layui-col-md3").css({
                            "max-width": "50%",
                            "min-width": "25%",
                            "width": e.pageX
                        })
                    })
                }
            });
            $("body").on("mouseup",
            function() {
                $(document).off("mousemove", "body");
                $(document).off("mousedown", "#code_spread_shrink")
            })
        }
        if ($(".php-video #myVideo").size() > 0) {
            iframe_set();
            $("#myVideo").height($(window).height() - $(".php-code-top").height() - $(".layui-tab.layui-tab-brief").height());
            has_scrollbar();
            var video_path;
            var Video_PdouChange = function(video_path, pdou) {};
            if (learn) {
                var VideoUrl = $("input[name='VideoUrl']").val();
                if (!VideoUrl) {
                    layer.alert("?????????????????????????????????", {
                        icon: 2
                    });
                    return false
                }
                $.ajax({
                    url: "/course/video.html",
                    type: "post",
                    async: false,
                    dataType: "json",
                    data: {
                        "learn": learn,
                        "VideoUrl": VideoUrl
                    },
                    success: function(result) {
                        if (result.status == 1) {
                            if (result.type == 1) {
                                if (!result.given) {
                                    layer.alert("???????????? ?????????????????????phpcn01", {
                                        icon: 2
                                    });
                                    return false
                                } else {
                                    if (result.given == 2) {
                                        layer.msg("?????????php????????????????????????", {
                                            icon: 2,
                                            time: 5000
                                        });
                                        return false
                                    } else {
                                        if (result.given == 1) {} else {
                                            return false
                                        }
                                    }
                                }
                            }
                            if (result.type == 2) {}
                            if (result.login != 1) {
                                is_login = 0;
                                layer.alert("????????????,??????????????????????????????", {
                                    icon: 2
                                },
                                function() {
                                    $(document).trigger("api.loginpopbox");
                                    layer.closeAll()
                                });
                                return false
                            }
                            if (!result.video_path) {
                                video_down();
                                return false
                            }
                            is_commented = result.is_commented;
                            $.getScript("/static/js/jquery.cookie.js",
                            function() {
                                var seek_time = $.cookie("PHPSeekTime" + learn);
                                if (seek_time) {
                                    seek = parseInt(seek_time)
                                } else {
                                    seek = 0
                                }
                                video_play(result.video_path, result.timestamp, seek);
                                $(".layui-row .php-video").append('<div class="video_adjs">?????????????????????????????????<span id="adjs">2</span>???</div><img class="myVideo_img" style="position:absolute;top:0;z-index:998;" src="/static/images/video_loading.gif" width="100%" height="100%">');
                                var adTimer = setInterval(function() {
                                    var adTime = $("#adjs").html();
                                    $("#adjs").html(adTime - 1);
                                    if (adTime <= 0) {
                                        $(".video_adjs").remove();
                                        $(".myVideo_ad_div").remove();
                                        $(".myVideo_img").remove();
                                        /* try {
                                            player.play()
                                        } catch(e) {
                                            player.videoPlay()
                                        } */
                                        setTimeout(function() {
                                            clearInterval(adTimer)
                                        },
                                        300)
                                    }
                                },
                                1000)
                            })
                        } else {
                            video_down(result.msg)
                        }
                    }
                })
            }
            now_learn_url();
            if (videolearn) {
                var VideoUrl = $("input[name='VideoUrl']").val();
                if (!VideoUrl) {
                    layer.alert("?????????????????????????????????", {
                        icon: 2
                    });
                    return false
                }
                $.ajax({
                    url: "/videocheck/",
                    type: "post",
                    async: false,
                    dataType: "json",
                    data: {
                        "learn": videolearn,
                        "VideoUrl": VideoUrl
                    },
                    success: function(result) {
                        if (result.status == 1) {
                            if (result.login != 1) {
                                is_login = 0;
                                layer.alert("????????????,??????????????????????????????", {
                                    icon: 2,
                                    time: 1500,
                                    skin: "layui-layer-molv"
                                },
                                function() {
                                    $(document).trigger("api.loginpopbox");
                                    layer.closeAll()
                                });
                                return false
                            }
                            if (!result.video_path) {
                                video_down();
                                return false
                            }
                            $.getScript("/static/js/jquery.cookie.js",
                            function() {
                                var seek_time = $.cookie("PHPSeekTime" + learn);
                                if (seek_time) {
                                    seek = parseInt(seek_time)
                                } else {
                                    seek = 0
                                }
                                video_play(result.video_path, result.timestamp, seek);
                                var adTimer = setInterval(function() {
                                    var adTime = $("#adjs").html();
                                    $("#adjs").html(adTime - 1);
                                    if (adTime <= 0) {
                                        $(".video_adjs").remove();
                                        $(".myVideo_ad_div").remove();
                                        $(".myVideo_img").remove();
                                        try {
                                            player.play()
                                        } catch(e) {
                                            player.videoPlay()
                                        }
                                        setTimeout(function() {
                                            clearInterval(adTimer)
                                        },
                                        300)
                                    }
                                },
                                1000)
                            })
                        } else {
                            if (result.ispay == 1) {
                                php_course_video_pay(videolearn)
                            } else {
                                layer.alert(result.msg, {
                                    icon: 2,
                                    skin: "layui-layer-molv"
                                },
                                function() {
                                    layer.closeAll()
                                })
                            }
                            return false
                        }
                    }
                })
            }
        }
        if ($(".publish-send-every").size() > 0) {
            ue = getue_config("container", "92%");
            custom_editor();
            $(".category_more").on("click",
            function() {
                if ($(this).is(".is_hide")) {
                    $(".category-other").addClass("layui-hide");
                    $(this).removeClass("is_hide");
                    $(this).html("????????????")
                } else {
                    $(".category-other").removeClass("layui-hide");
                    $(this).addClass("is_hide");
                    $(this).html("????????????")
                }
            })
        }
        if ($(".left-column").size() > 0) {
            var editor = null;
            $(".sidebar-tree>ul>li").mouseover(function() {
                $(this).addClass("selected");
                $(this).find(".tit").addClass("h2-tit");
                $(this).find("ul").show()
            }).mouseout(function() {
                $(this).removeClass("selected");
                $(this).find(".tit").removeClass("h2-tit");
                $(this).find("ul").hide()
            });
            $(".fixed-btn .qrcode").mouseover(function() {
                $("#bottom-qrcode").show()
            }).mouseout(function() {
                $("#bottom-qrcode").hide()
            });
            $(".codebtn").click(function() {
                $("#codeMark").show();
                $("#codeMain").show().css({
                    width: $(window).width() * 0.8,
                    height: $(window).height() * 0.8
                });
                $("#codeEditor").css({
                    height: $("#codeMain").height() - 50
                });
                var code = $(this).closest(".example").find(".example_code pre").html();
                code = code.replace(/&lt;/g, "<");
                code = code.replace(/&gt;/g, ">");
                code = code.replace(/&nbsp;/g, " ");
                if (editor == null) {
                    editor = ace.edit("codeEditor");
                    editor.setTheme("ace/theme/vibrant_ink");
                    editor.getSession().setUseWrapMode(true);
                    editor.getSession().setMode("ace/mode/php");
                    editor.setShowPrintMargin(false);
                    editor.getSession().setValue(code)
                } else {
                    editor.getSession().setValue(code)
                }
                $("#J_Commit").trigger("click");
                return false
            });
            $("#codeMain #close,#codeMark").click(function() {
                $("#codeMark").hide();
                $("#codeMain").hide()
            });
            var ifr;
            var initresultbox = function() {
                ifr = document.createElement("iframe");
                ifr.setAttribute("frameborder", "0");
                ifr.setAttribute("id", "iframeResult");
                document.getElementById("codeResult").innerHTML = "";
                document.getElementById("codeResult").appendChild(ifr);
                $("#iframeResult").css({
                    "width": "100%",
                    "height": "100%"
                })
            };
            initresultbox();
            $("#J_Commit").click(function() {
                tmp_code = editor.getSession().getValue();
                if (tmp_code.indexOf("<?php") >= 0 && tmp_code.indexOf("?>") < 0) {
                    tmp_code += "?>"
                }
                if (tmp_code.indexOf("<form") >= 0) {
                    tmp_code += '<script src="/static/js/run.bat.js"><\/script>'
                }
                runcode = 3;
                initresultbox();
                var ifrw = (ifr.contentWindow) ? ifr.contentWindow: (ifr.contentDocument.document) ? ifr.contentDocument.document: ifr.contentDocument;
                $.post("https://work.php.cn/compile.php", {
                    code: tmp_code,
                    language: runcode
                },
                function(data) {
                    ifrw.document.open();
                    ifrw.document.write(data);
                    ifrw.document.close()
                })
            });
            if ($("body").width() < 767) {
                $("body").css("min-height", $(window).height())
            }
        }
        $(".article_publish").click(function() {
            if ($("#login").size() > 0) {
                $(document).trigger("api.loginpopbox");
                return false
            }
            var content = $.trim($(".article_textarea").val());
            if (!new RegExp("[\\u4E00-\\u9FFF]+", "g").test(content) || content.length < 6) {
                layer.msg("?????????6?????????????????????", {
                    icon: 2
                });
                return false
            }
            var id = $(this).data("id");
            if (!content) {
                layer.msg("??????????????????", {
                    icon: 2
                });
                return false
            }
            $.post("/article/reply_publish.html", {
                id: id,
                content: content
            },
            function(result) {
                if (result.code == 1) {
                    layer.msg(result.msg, {
                        icon: 1,
                        time: 1500
                    },
                    function() {
                        window.location.reload()
                    })
                } else {
                    layer.msg(result.msg, {
                        icon: 2
                    })
                }
            })
        });
        $(".article-comment-publish").click(function() {
            $(".article_comment_textarea").show()
        });
        $(".course_collection_parent .collection:not('.running'),.course_top_left_logo_collection:not('.running')").click(function() {
            var that = $(this);
            var id = that.data("id");
            that.addClass("running");
            $.post("/course/collection.html", {id: id},function(res) {
                if (res.code == 1) {
                    layer.msg(res.msg, {icon: 1,time: 800},function() {window.location.reload()})
                } else {
                    layer.msg(res.msg, {icon: 2});
                    that.removeClass("running")
                }
            })
        });
        var IscourseICollection = false;
        $(".courseICollection").click(function() {
            if ($("#login").size() > 0) {
                $(document).trigger("api.loginpopbox");
                return false
            }
            var id = $(this).data("id");
            if(IscourseICollection){
                return false;
            }
            IscourseICollection = true;
            $.post("/course/collection.html", {id: id},function(res) {
                if (res.code == 1) {
                    layer.msg(res.msg, {icon: 1,time: 800},function() {window.location.reload()})
                } else {
                    layer.msg(res.msg, {icon: 2});
                }
                IscourseICollection = false;
            })
        });
        $(".user_order_close:not(.running)").click(function() {
            var that = $(this);
            var id = that.data("id");
            var isPost = false;
            if (isPost == true) {
                return false
            }
            isPost = true;
            layer.confirm("?????????????????????", {
                title: "????????????",
                skin: "layui-layer-molv",
                btn: ["??????", "??????"],
                shade: false
            },
            function() {
                $.post("/user/order_del.html", {
                    id: id
                },
                function(res) {
                    if (res.code == 1) {
                        layer.msg(res.msg, {
                            icon: 1,
                            time: 2000
                        },
                        function() {
                            window.location.reload()
                        })
                    } else {
                        layer.msg(res.msg, {
                            icon: 2
                        });
                        isPost = false
                    }
                },
                "json")
            })
        });
        if ($("#myVideo_students").size() > 0) {
            video_play(video_url);
            $("#myVideo").append('<div class="video_adjs">?????????????????????????????????<span id="adjs">3</span>???</div><img class="myVideo_img" style="position:absolute;top:0;z-index:998;" src="/static/images/loadings.gif" width="100%" height="100%">');
            var adTimer = setInterval(function() {
                var adTime = $("#adjs").html();
                $("#adjs").html(adTime - 1);
                if (adTime == 0) {
                    $(".video_adjs").remove();
                    $(".myVideo_img").remove();
                    player.videoPlay();
                    clearInterval(adTimer)
                }
            },
            1000)
        }
        $("#close_id").click(function() {
            $(".close_id").hide()
        });
        $(".user-js-add-follow").hover(function() {
            $(".user-follow-me").show()
        },
        function() {
            $(".user-follow-me").hide()
        });
        $(".user-js-add-follow").click(function() {
            if ($("#logn").size() > 0) {
                $(document).trigger("api.loginpopbox");
                return false
            }
            var id = $(this).data("id");
            $.post("/member/follows.html", {
                id: id
            },
            function(res) {
                if (res.code == 1) {
                    layer.msg(res.msg, {
                        icon: 1,
                        time: 1000
                    },
                    function() {
                        window.location.reload()
                    })
                } else {
                    layer.msg(res.msg, {
                        icon: 2
                    })
                }
            },
            "json")
        });
        if ($(".index_new").size() > 0) {
            init();
            $(".search-related.dic_slider span").click(function() {
                var that = $(this);
                $(".search-related.dic_slider span").removeClass("this_index_hover");
                that.addClass("this_index_hover");
                $(".search-related.dic_slider span").each(function(i, e) {
                    if ($(this).is(".this_index_hover")) {
                        $(".dic_div_module").hide();
                        if (i == 0) {
                            $(".dic_three").show()
                        } else {
                            if (i == 1) {
                                $(".dic_first").show()
                            } else {
                                if (i == 2) {
                                    $(".dic_second").show()
                                }
                            }
                        }
                    }
                })
            });
            $(".search-related.manual_slider span").click(function() {
                var that = $(this);
                $(".search-related.manual_slider span").removeClass("this_index_hover");
                that.addClass("this_index_hover");
                $(".search-related.manual_slider span").each(function(i, e) {
                    if ($(this).is(".this_index_hover")) {
                        $(".manual_div_module").hide();
                        if (i == 0) {
                            $(".manual_first").show()
                        } else {
                            if (i == 1) {
                                $(".manual_second").show()
                            } else {
                                if (i == 2) {
                                    $(".manual_three").show()
                                }
                            }
                        }
                    }
                })
            })
        }
        if ($(".pinBoxContainer").size() > 0) {
            $.getScript("/static/js/jquery.nicescroll.min.js");
            $.getScript("/static/js/jquery.pinBox.min.js",
            function() {
                $(".php-news-left").pinBox({
                    Top: "0px",
                    Container: ".pinBoxContainer",
                    Events: function(e) {
                        if (e.active) {
                            $(".php-news-info").niceScroll({
                                cursorcolor: "#ccc",
                                cursoropacitymax: 1,
                                touchbehavior: false,
                                cursorwidth: "5px",
                                cursorborder: "0",
                                cursorborderradius: "5px",
                                autohidemode: false
                            })
                        } else {
                            $(".php-news-info").getNiceScroll().hide()
                        }
                    }
                })
            })
        }
        if ($("#aritcle_detail_new").size() > 0) {
            $.getScript("/static/js/scrollfix.min.js",
            function() {
                $("#aritcle_detail_new").scrollFix({
                    distanceTop: 0
                })
            })
        }
        $(".tool-banner-operation .collection:not('.running')").click(function() {
            var that = $(this);
            var id = that.parent(".php-course-info-botton").data("id");
            that.addClass(".running");
            $.post("/subject/subject_collection.html", {
                type: 0,
                id: id
            },
            function(result) {
                if (result.code == 1) {
                    layer.msg(result.msg, {
                        icon: 1,
                        offset: "t"
                    },
                    function() {
                        window.location.reload()
                    })
                } else {
                    layer.msg(result.msg, {
                        icon: 2,
                        offset: "t"
                    });
                    that.removeClass("running")
                }
            },
            "json")
        });
        $(".tool-banner-operation .good:not('.running')").click(function() {
            var that = $(this);
            var id = that.parent(".php-course-info-botton").data("id");
            that.addClass(".running");
            $.post("/subject/subject_collection.html", {
                type: 1,
                id: id
            },
            function(result) {
                if (result.code == 1) {
                    layer.msg(result.msg, {
                        icon: 1,
                        offset: "t"
                    },
                    function() {
                        window.location.reload()
                    })
                } else {
                    layer.msg(result.msg, {
                        icon: 2,
                        offset: "t"
                    });
                    that.removeClass("running")
                }
            },
            "json")
        });
        $(".tool-banner-operation .oppose:not('.running')").click(function() {
            var that = $(this);
            var id = that.parent(".php-course-info-botton").data("id");
            that.addClass(".running");
            $.post("/subject/subject_collection.html", {
                type: 2,
                id: id
            },
            function(result) {
                if (result.code == 1) {
                    layer.msg(result.msg, {
                        icon: 1,
                        offset: "t"
                    },
                    function() {
                        window.location.reload()
                    })
                } else {
                    layer.msg(result.msg, {
                        icon: 2,
                        offset: "t"
                    });
                    that.removeClass("running")
                }
            },
            "json")
        });
        if ($(".domain-box").size() > 0) {
            $(document).on("click", ".open_blog_btn:not(.running)",
            function() {
                var that = $(this);
                var subdomain = $.trim($("#search-input").val()).toLocaleLowerCase();
                var id = that.data("id");
                $("#search-input").val(subdomain);
                if (subdomain.length == 0) {
                    layer.msg("??????url??????", {
                        icon: 2
                    });
                    $("#search-input").focus();
                    return false
                }
                if (subdomain.length < 6) {
                    layer.msg("url???????????????????????????6?????????", {
                        icon: 2
                    });
                    $("#search-input").focus();
                    return false
                }
                if (/^[\d]+$/.test(subdomain)) {
                    layer.msg("url????????????????????????", {
                        icon: 2
                    });
                    $("#search-input").focus();
                    return false
                }
                if (!/^[a-z0-9]{6,10}$/.test(subdomain)) {
                    layer.msg("url?????????????????????????????????????????????,??????????????????10", {
                        icon: 2
                    });
                    $("#search-input").focus();
                    return false
                }
                $(this).addClass("running");
                layer.confirm("???????????????url??????????????????????????????????????????", {
                    icon: 3,
                    skin: "layui-layer-molv",
                    btn: ["??????", "??????"]
                },
                function() {
                    $.post("/member/" + id + "/blog.html", {
                        subdomain: subdomain
                    },
                    function(result) {
                        if (result.status) {
                            layer.msg("????????????,????????????????????????", {
                                icon: 1
                            },
                            function() {
                                location.href = result.url
                            })
                        } else {
                            layer.msg(result.msg, {
                                icon: 2
                            });
                            that.removeClass("running");
                            return false
                        }
                    })
                })
            })
        }
        if ($(".php-search .translate").size() > 0) {
            var editor;
            $(".codebtn").click(function() {
                $("#codeMark").show();
                $("#codeMain").show().css({
                    width: $(window).width() * 0.8,
                    height: $(window).height() * 0.8
                });
                $("#codeEditor").css({
                    height: $("#codeMain").height() - 50
                });
                var code = $(this).closest(".example").find(".example_code pre").html();
                code = code.replace(/&lt;/g, "<");
                code = code.replace(/&gt;/g, ">");
                code = code.replace(/&nbsp;/g, " ");
                if (editor == null) {
                    editor = ace.edit("codeEditor");
                    editor.setTheme("ace/theme/vibrant_ink");
                    editor.getSession().setUseWrapMode(true);
                    editor.getSession().setMode("ace/mode/php");
                    editor.setShowPrintMargin(false);
                    editor.getSession().setValue(code)
                } else {
                    editor.getSession().setValue(code)
                }
                $("#J_Commit").trigger("click");
                return false
            });
            $("#codeMain #close,#codeMark").click(function() {
                $("#codeMark").hide();
                $("#codeMain").hide()
            });
            var ifr;
            var initresultbox = function() {
                ifr = document.createElement("iframe");
                ifr.setAttribute("frameborder", "0");
                ifr.setAttribute("id", "iframeResult");
                document.getElementById("codeResult").innerHTML = "";
                document.getElementById("codeResult").appendChild(ifr);
                $("#iframeResult").css({
                    "width": "100%",
                    "height": "100%"
                })
            };
            initresultbox();
            $("#J_Commit").click(function() {
                tmp_code = editor.getSession().getValue();
                if (tmp_code.indexOf("<?php") >= 0 && tmp_code.indexOf("?>") < 0) {
                    tmp_code += "?>"
                }
                if (tmp_code.indexOf("<form") >= 0) {
                    tmp_code += '<script src="/static/js/run.bat.js"><\/script>'
                }
                runcode = 3;
                initresultbox();
                var ifrw = (ifr.contentWindow) ? ifr.contentWindow: (ifr.contentDocument.document) ? ifr.contentDocument.document: ifr.contentDocument;
                $.post("https://work.php.cn/compile.php", {
                    code: tmp_code,
                    language: runcode
                },
                function(data) {
                    ifrw.document.open();
                    ifrw.document.write(data);
                    ifrw.document.close()
                })
            })
        }
        $(document).on("click", ".video_task_right_icon",
        function() {
            $(".task_rights").hide();
            $("#myVideo").width($(window).width())
        });
        if ($("#main .noticesPage").size() > 0) {
            $.getScript("/static/js/message.js")
        }
        $(".dic_search_form").keydown(function(e) {
            if (e.keyCode == 13) {
                dic_search()
            }
        });
        $(".dic_search_form").bind("input porpertychange",
        function() {
            var this_val = $.trim($(this).val());
            if (this_val) {
                $.get("/dic/search_ajax", {
                    val: this_val
                },
                function(result) {
                    if (result) {
                        $(".dic_search_dic_div_first").children().remove();
                        $(".dic_search_dic_div_first").append(result)
                    }
                })
            }
        });
        $(".course_detail_down").click(function() {
            $("#down").trigger("click")
        });
        $(".signicon.teacher").hover(function() {
            if ($(this).find(".signicon_iden").is(":hidden")) {
                $(this).find(".signicon_iden").show()
            } else {
                $(this).find(".signicon_iden").hide()
            }
        });
        $(".signicon.supporting_member").hover(function() {
            if ($(this).find(".signicon_iden").is(":hidden")) {
                $(this).find(".signicon_iden").show()
            } else {
                $(this).find(".signicon_iden").hide()
            }
        });
        $(".signicon.author").hover(function() {
            if ($(this).find(".signicon_iden").is(":hidden")) {
                $(this).find(".signicon_iden").show()
            } else {
                $(this).find(".signicon_iden").hide()
            }
        });
        $(".ask_detail_luck_draw").click(function() {
            var id = $(this).data("id");
            layer.open({
                type: 2,
                title: "php????????????14???PHP????????????12???8?????????????????????????????????????????????QQ???27220243",
                shadeClose: false,
                area: ["1050px", "75%"],
                skin: "layui-layer-nobg",
                content: "/extracts/" + id + ".html"
            })
        });
        if ($(".php-article .article-list-left").size() > 0) {
            $("pre").each(function() {
                var theclass = $(this).attr("class");
                if ("undefined" == typeof(theclass) || theclass.indexOf("brush:") < 0) {
                    if ("undefined" == typeof(theclass)) {
                        $(this).attr("class", "brush:php;toolbar:false;")
                    } else {
                        $(this).attr("class", $(this).attr("class") + "toolbar:false;")
                    }
                }
                if ("undefined" == typeof(theclass)) {
                    theclass = ""
                }
                if (theclass.indexOf("toolbar:") < 0) {
                    $(this).attr("class", $(this).attr("class") + "toolbar:false;")
                }
            })
        }
        $(".php-code-top .nv-follow a.js-btn-follow").click(function() {
            if ($("#login").size() > 0) {
                $(document).trigger("api.loginpopbox");
                return false
            }
            var $this = $(this);
            $.ajax({
                url: "/course/follow_media.html",
                data: {
                    id: $this.data("id")
                },
                type: "post",
                cache: false,
                dataType: "json",
                success: function(result) {
                    if (result.code == 1) {
                        layer.msg(result.msg, {
                            icon: 1
                        });
                        $this.find("font").removeClass("off_");
                        if (result.type == 1) {
                            $this.find("font:first-child").addClass("off_")
                        } else {
                            if (result.type == 2) {
                                $this.find("font:nth-child(2)").addClass("off_")
                            }
                        }
                    } else {
                        layer.msg(result.msg, {
                            icon: 2
                        })
                    }
                },
                error: function() {
                    layer.msg("????????????", {
                        icon: 2
                    })
                }
            })
        });
        if ($(".php-ask .report").size() > 0) {
            $(".php-ask .report").click(function() {
                if ($("#login").size() > 0) {
                    $(document).trigger("api.loginpopbox");
                    return false
                }
                var id = $(this).data("id");
                var type = $(this).data("type");
                layer.open({
                    type: 2,
                    title: "????????????",
                    shadeClose: false,
                    shade: 0.8,
                    area: ["600px", "388px"],
                    content: "/report/" + id + "/" + type + ".html"
                })
            })
        }
        $(document).on("click", ".order_alipay_five_layer",
        function() {
            var order = $(this).data("data");
            if (!order) {
                window.location.reload();
                return
            }
            $.post("/weipay_data_status.html", {
                order: order
            },
            function(res) {
                if (res.code == 1) {
                    layer.msg(res.msg, {
                        icon: 1,
                        time: 2000
                    },
                    function() {
                        window.location.href = res.url
                    })
                } else {
                    layer.msg(res.msg, {
                        icon: 2,
                        time: 2000
                    })
                }
            },
            "json")
        });
        $(document).on("click", ".order_alipay_sex_layer",
        function() {
            $(".order_alipay_layer").hide()
        });
        $(".article-body tbody p").css({
            "border-left": "none",
            "margin-top": "10px",
            "color": "#666",
            "background-color": "#f2f2f2"
        });
        $(document).click(function() {
            $(".dic_search_dic_div").hide()
        });
        $(".dic_search_dic_div_first").click(function(event) {
            event.stopPropagation()
        });
        $(".manual-search-button").click(function() {
            var val = $.trim($(".manual_search_form").val());
            if (!val) {
                layui.msg("??????????????????", {
                    icon: 2
                });
                return false
            }
            $.post("/manual_search/", {
                val: val
            },
            function(res) {
                if (res) {
                    $(".route-manual-search-data").empty().append(res.msg)
                } else {
                    layui.msg("??????????????????????????????", {
                        icon: 2
                    })
                }
            },
            "json")
        });
        $(".manual_search_form").bind("input porpertychange",
        function() {
            var this_val = $.trim($(this).val());
            if (this_val) {
                $.get("/route/search_ajax", {
                    val: this_val
                },
                function(result) {
                    if (result) {
                        $(".dic_search_dic_div_first").children().remove();
                        $(".dic_search_dic_div_first").append(result)
                    }
                })
            }
        });
        if ($(".route-join").size() > 0) {
            $(".course-description .route-join").click(function() {
                var id = $(this).data("id");
                if (!id) {
                    layer.msg("??????????????????????????????", {
                        icon: 2
                    });
                    return false
                }
                $.post("/join_route/", {
                    id: id
                },
                function(res) {
                    if (res.code == 1) {
                        layer.msg(res.msg, {
                            icon: 1,
                            time: 1800
                        },
                        function() {
                            window.location.reload()
                        })
                    } else {
                        layer.msg(res.msg, {
                            icon: 2
                        })
                    }
                },
                "json")
            });
            $(".js-study-plan-btn").click(function() {
                layer.tips("??????????????????????????????", ".js-study-plan-btn", {
                    tips: [4, "#78BA32"]
                });
                $(this).addClass("layui-hide");
                $(".route-join-all").removeClass("layui-hide");
                $(".doc").addClass("border");
                $(".doc li").addClass("checed-li");
                $(".doc li img").addClass("check-img");
                $(".doc li .check i").addClass("check-i")
            });
            $(document).on("click", ".route-join-all .join",
            function() {
                var route_param = [];
                $.each($(".route-join-list li"),
                function(i, val) {
                    if ($(this).is(".checed-li")) {
                        route_param.push($(this).data("id"))
                    }
                });
                if (!route_param) {
                    layer.msg("????????????????????????????????????");
                    return false
                }
                $.post("/one_join_route/", {
                    route_param: route_param
                },
                function(res) {
                    if (res.code == 1) {
                        layer.msg(res.msg, {
                            icon: 1,
                            time: 1800
                        },
                        function() {
                            window.location.reload()
                        })
                    } else {
                        layer.msg(res.msg, {
                            icon: 2
                        })
                    }
                },
                "json")
            });
            $(document).on("click", ".route-join-all .cancel",
            function() {
                $(".route-join-all").addClass("layui-hide");
                $(".js-study-plan-btn").removeClass("layui-hide");
                $(".doc").removeClass("border");
                $(".doc li").removeClass("checed-li");
                $(".doc li img").removeClass("check-img");
                $(".doc li .check i").removeClass("check-i")
            })
        }
        $.EasySlide({
            Nav: $(".slide_nav li"),
            Field: $(".slide_field li")
        });
        still_image();
        $(".cart-top .cart-content .detail-box li .del").click(function() {
            var that = $(this);
            layer.confirm("??????????????????????????????????????????", {
                icon: 3,
                skin: "layui-layer-molv",
                btn: ["??????", "??????"]
            },
            function() {
                var id = that.data("id");
                $.post("/Delcart/", {
                    id: id
                },
                function(res) {
                    if (res.code == 1) {
                        layer.msg(res.msg, {
                            icon: 1,
                            time: 1000
                        },
                        function() {
                            window.location.reload()
                        })
                    } else {
                        layer.msg(res.msg, {
                            icon: 0
                        })
                    }
                },
                "json")
            })
        });
        $(".cart-top .cart-content .detail-box li .selected").click(function() {
            var that = $(this);
            if (that.is(".bixiu")) {
                return false
            }
            var count = parseInt($(".cart-top").attr("count"));
            var priceTotal = parseInt($(".nowPrice").html());
            var nowPricetotal = parseInt($(".nowPricetotal").html());
            var thisprice = parseInt(that.prev(".price").find(".price_num").html());
            var thisPriceObj = $(".cart-top .cart-content .detail-box li");
            if (that.is(".green")) {
                that.removeClass("green");
                $(".nowPricetotal").html(nowPricetotal - thisprice);
                if (nowSelectCourse = $(".cart-top .cart-content .detail-box li .green").not(".bixiu").length < 1 && count <= 50) {
                    thisprice = 0
                }
                $(".nowPrice").html(priceTotal - thisprice)
            } else {
                that.addClass("green");
                $(".nowPricetotal").html(nowPricetotal + thisprice);
                if ($(".cart-top .cart-content .detail-box li .green").not(".bixiu").length < 2 && count <= 50) {
                    thisprice = 0
                }
                $(".nowPrice").html(priceTotal + thisprice)
            }
        });
        var payMyTypeStyle = 'w';
        $("#course_class_btn_pay").click(function() {
            var type = $(this).attr("type");
            if (!type) {
                layer.msg("?????????????????????????????????", {icon: 2});
                return;
            }
            if (!$(".cart-top .cart-content .detail-box li .bixiu").is(".green")) {
                layer.msg("????????????", {icon: 2});
                return;
            }
            var thisPriceObj = $(".cart-top .cart-content .detail-box .detail-box-ul li");
            var courses = [];
            $.each(thisPriceObj, function(i, v) {
                if ($(this).find(".selected").is(".green")) {
                    courses.push($(this).attr("course"))
                }
            });
            if (!courses) {
                layer.msg("??????????????????", {icon: 2});
                return;
            }
            switch (payMyTypeStyle){
                case 'a':
                    alipay_type(type,'',0,courses);
                    break;
                default:
                    pay_type(type, courses);
                    break;
            }
        });
        $('.cart-pay-type li').each(function(i,v){
            var thistype = $(this).attr('t');
            $(this).click(function(){
                $('.cart-pay-type li').removeClass('active');
                $('.fq_selected').hide();$('#course_class_btn_pay').show();
                switch (thistype){
                    case 'w':
                        $(this).addClass('active');
                        payMyTypeStyle = 'w';
                        break;
                    case 'a':
                        $(this).addClass('active');
                        payMyTypeStyle = 'a';
                        break;
                    case 'h':
                        $(this).addClass('active');
                        $('.fq_selected.huabei').show();
                        $('#course_class_btn_pay').hide();
                        payMyTypeStyle = 'h';
                        break;
                    case 'j':
                        $(this).addClass('active');
                        $('.fq_selected.jingdong').show();
                        $('#course_class_btn_pay').hide();
                        payMyTypeStyle = 'j';
                        break;
                }
            });
        });
        $(".hb_fq_pay_type").click(function() {
            var type = $('#course_class_btn_pay').attr("type");
            var fq_type = $(this).attr("fq_type");
            if (!type) {
                layer.msg("?????????????????????????????????", {icon: 2});
                return;
            }
            if (!$(".cart-top .cart-content .detail-box li .bixiu").is(".green")) {
                layer.msg("????????????", {icon: 2});
                return;
            }
            var thisPriceObj = $(".cart-top .cart-content .detail-box .detail-box-ul li");
            var courses = [];
            $.each(thisPriceObj, function(i, v) {
                if ($(this).find(".selected").is(".green")) {
                    courses.push($(this).attr("course"))
                }
            });
            if (!courses) {
                layer.msg("??????????????????", {icon: 2});
                return;
            }
            if(!fq_type){fq_type = 0;}
            alipay_type(type,'',fq_type,courses);
        });
        $('.jd_fq_pay_type').click(function(){
            layer.msg("????????????????????????", {icon: 2});
        });
        $(".CDeitalBuy").click(function() {
            if ($("#login").size() > 0) {
                $(document).trigger("api.loginpopbox");
                return false
            }
            // var id = $(".layui-icon-cart-simple").data("id");
            var id = $(this).data("id");
            if(!id){
                layer.msg("??????????????????????????????", {icon: 2});return;
            }
            $.post("/AddCart/", {id: id},function(res) {
                if (res.code == 0) {
                    layer.msg(res.msg, {
                        icon: 2
                    });
                    return false
                }
                window.location.href = "/shop/"
            },
            "json")
        });
        var My_offset = $(".header_cart .phpcn-cart span").offset();
        $(".course_collection_parent .layui-icon-cart-simple").click(function(event) {
            if ($("#login").size() > 0) {
                $(document).trigger("api.loginpopbox");
                return false
            }
            var id = $(this).data("id");
            $.post("/AddCart/", {
                id: id
            },
            function(res) {
                if (res.code != 1) {
                    layer.msg(res.msg, {
                        icon: 2
                    });
                    return false
                } else {
                    var addcar = $(this);
                    var flyer = $('<img class="u-flyer" src="/static/images/carticon.png">');
                    flyer.fly({
                        start: {
                            left: event.pageX,
                            top: event.pageY
                        },
                        end: {
                            left: My_offset.left + 10,
                            top: My_offset.top + 10,
                            width: 0,
                            height: 0
                        },
                        onEnd: function() {
                            $("#msg").show().animate({
                                width: "250px"
                            },
                            200).fadeOut(1000);
                            addcar.css("cursor", "default").unbind("click");
                            this.destory();
                            var num = parseInt($(".CartNum").html()) + 1;
                            $(".CartNum").html(num)
                        }
                    })
                }
            },
            "json")
        });
        /*if ($(".CopyrightData").size() > 0) {
            var ua = navigator.userAgent.toLowerCase();
            if (window.ActiveXObject) {
                document.body.oncopy = function() {
                    event.returnValue = false;
                    var selectedText = document.selection.createRange().text;
                    var pageInfo = "";
                    clipboardData.setData("Text", selectedText.replace(/\n/g, "<br>") + pageInfo)
                }
            } else {
                function addCopyRight() {
                    var body_element = document.getElementsByTagName("body")[0];
                    var selection = window.getSelection();
                    var pageInfo = "";
                    var copyText = selection.toString().replace(/\n/g, "<br>") + pageInfo;
                    var newDiv = document.createElement("div");
                    newDiv.style.position = "absolute";
                    newDiv.style.left = "-99999px";
                    body_element.appendChild(newDiv);
                    newDiv.innerHTML = copyText;
                    selection.selectAllChildren(newDiv);
                    window.setTimeout(function() {
                        body_element.removeChild(newDiv)
                    },
                    0)
                }
                document.oncopy = addCopyRight
            }
        }*/
        if ($(".vipNewData").size() > 0) {
            form.on("radio(level)",
            function(data) {
                layer.msg("????????????????????????", {
                    icon: 2,
                    time: 1200
                });
                return false;
                var id = data.value;
                var time = $("input[name='time']:checked").val();
                $.post("/newVipPrice/", {
                    id: id,
                    time: time
                },
                function(res) {
                    if (res.code == 0) {
                        $(".vipNewMoney").text(res.msg)
                    } else {
                        layer.msg(res.msg, {
                            icon: 2,
                            time: 1200
                        })
                    }
                },
                "json")
            });
            form.on("radio(time)",
            function(data) {
                var time = data.value;
                var id = $("input[name='level']:checked").val();
                $.post("/newVipPrice/", {
                    id: id,
                    time: time
                },
                function(res) {
                    if (res.code == 0) {
                        $(".vipNewMoney").text(res.msg)
                    } else {
                        layer.msg(res.msg, {
                            icon: 2,
                            time: 1200
                        })
                    }
                },
                "json")
            })
        }
        $(".newvipCourseName").click(function() {
            if (!$(this).is(".active")) {
                layer.msg("????????????????????????", {
                    icon: 2,
                    time: 1200
                });
                return
            }
            var id = $(this).attr("data-id");
            $(".newvipCourseName").removeClass("active");
            $(this).addClass("active");
            $("#tagid" + id).show().siblings().hide()
        });
        if ($(".newvip-header").size() > 0) {
            var swiper = new Swiper(".swiper-container", {
                slidesPerView: 4,
                spaceBetween: 30,
                slidesPerGroup: 4,
                loop: true,
                loopFillGroupWithBlank: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            })
        }
        $(".vipDataVideoSet").click(function() {
            layer.open({
                type: 2,
                area: ["600px", "650px"],
                title: false,
                closeBtn: true,
                shadeClose: false,
                content: "/user/videoset/"
            })
        })
        $(".php-comment .course-media-code-comment textarea").focus(function(){
            isSpaceExe = false;
        }).blur(function(){
            isSpaceExe = true;
        })
        if($('#myVideo').length > 0){
            if(!isSpaceExe){
                return;
            }
            document.onkeydown = function(event){
                var e = event || window.event; 
                var k = e.keyCode || e.which;
                if(k == 32 && isSpaceExe){
                    return false;
                }
                /*switch(k) {
                    case 32:
                    return false;
                }*/
            };
        }
    })
});
if ($(".ask-info-title").size() > 0 || $(".php-article .detail-content-wrap").size() > 0 || ($(".article-list-left").size() > 0 && article_status > 0)) {
    code_highlight()
}
if ($(".bdsharebuttonbox").size() > 0) {
    baidu_share();
    $(".bdsharebuttonboxp").hover(function() {
        $(".bdsharebuttonbox").show()
    },
    function() {
        $(".bdsharebuttonbox").hide()
    })
}
function php_course_pay(data) {
    if ($("#login").size() > 0) {
        $(document).trigger("api.loginpopbox");
        return false
    }
    var id = $(data).data("id");
    var type = $(data).data("type");
    layer.open({
        type: 2,
        area: ["700px", "550px"],
        title: false,
        closeBtn: true,
        shadeClose: false,
        content: "/coursepay/?id=" + id.replace("+", "%2B") + "&type=" + type
    });
    window.event ? window.event.cancelBubble = true: e.stopPropagation();
    return false;
    event.stopPropagation()
}
function php_course_video_pay(id) {
    if ($("#login").size() > 0) {
        $(document).trigger("api.loginpopbox");
        return false
    }
    if (!id) {
        return
    }
    var type = 1;
    layer.open({
        type: 2,
        area: ["700px", "550px"],
        title: false,
        closeBtn: true,
        shadeClose: false,
        content: "/coursepay/?id=" + id.replace("+", "%2B") + "&type=" + type
    });
    window.event ? window.event.cancelBubble = true: e.stopPropagation();
    return false;
    event.stopPropagation()
}
function load_more(obj) {
    var div_page = $("#tab_detail_list").children('div:visible[class*="php-news-info"]');
    var page = parseInt($(div_page).attr("page"));
    var cat_id = $("#tab_detail_list").children('div:visible[class*="php-news-info"]').attr("cat_id");
    $(obj).addClass("layui-btn-disabled");
    $.get("/index/get_more.html", {
        "cat_id": cat_id,
        "p": page
    },
    function(res) {
        $("#tab_detail_list").children('div:visible[class*="php-news-info"]').children("div").siblings('div[class="load_more"]').before(res);
        $(div_page).attr("page", (page + 1));
        $(obj).removeClass("layui-btn-disabled")
    },
    "json")
}
function init() {
    init_menu_nav();
    init_tab_menu_list()
}
function init_menu_nav() {
    $("#menu-list li").hover(function() {
        $(this).addClass("active").siblings("li").removeClass("active");
        var flag = $(this).attr("flag");
        $("#child_menu_list").find("div[flag=" + flag + "]").show().siblings("div").hide()
    });
    $("#menu-list").mouseleave(function() {
        $("#menu-list li").removeClass("active")
    });
    $(".php-banner-left").mouseleave(function() {
        $("#child_menu_list").children("div").hide()
    })
}
function init_tab_menu_list() {
    $("#tab_menu_list li").hover(function() {
        var flag = $(this).attr("flag");
        $("#load_more").attr("page", 2);
        $("#tab_detail_list").find("div[flag=" + flag + "]").show().siblings('div[class*="php-news-info"]').hide()
    })
}
function vip_join_group() {
    layer.msg("VIP??????????????????????????????????????????????????????", {
        icon: 2
    })
}
function ask_reply_good(id) {
    if ($("#login").size() > 0) {
        $(document).trigger("api.loginpopbox");
        return false
    }
    $.post("/wenda/good.html", {
        id: id
    },
    function(result) {
        if (result.code == 1) {
            layer.msg(result.msg, {
                icon: 1
            })
        } else {
            layer.msg(result.msg, {
                icon: 2
            })
        }
    })
}
function baidu_share() {
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdPic": "",
            "bdStyle": "0",
            "bdSize": "16"
        },
        "share": {}
    };
    with(document) {
        0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "/static/api/js/share.js?v=89860593.js?cdnversion=" + ~ ( - new Date() / 3600000)]
    }
}
//???Cookie
function addCookie(objName, objValue, objHours) {
    var str = objName + "=" + escape(objValue); //??????
    if (objHours > 0) {//???0?????????????????????????????????????????????cookie????????????
        var date = new Date();
        var ms = objHours * 3600 * 1000;
        date.setTime(date.getTime() + ms);
        str += "; expires=" + date.toGMTString();
    }
    document.cookie = str;
}
//???Cookie
function getCookie(objName) {//?????????????????????cookie??????
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == objName) return unescape(temp[1]);  //??????
    }
    return "";
}

function ask_comment_good(id) {
    if ($("#login").size() > 0) {
        $(document).trigger("api.loginpopbox");
        return false
    }
    var is_ask_good_post = false;
    if (id == "") {
        return false
    }
    if (is_ask_good_post == true) {
        return false
    }
    is_ask_good_post = true;
    $.post("/wenda/follow.html", {
        id: id
    },
    function(result) {
        if (result.code == 1) {
            layer.msg(result.msg, {
                icon: 1,
                time: 1200
            },
            function() {
                window.location.reload()
            })
        } else {
            layer.msg(result.msg, {
                icon: 2
            });
            is_ask_good_post = false
        }
    })
}
function category_join_group() {
    if ($("#login").size() > 0) {
        $(document).trigger("api.loginpopbox");
        return false
    }
    var cid = $(".cancel").data("cat_id");
    var cfid = $(".cancel").data("cat_fid");
    $.post("/wenda/ajax_follow.html", {
        cat_id: cid,
        cat_fid: cfid
    },
    function(result) {
        if (result.add_status == 1) {
            $(".cancel").html("- ????????????");
            layer.msg(result.msg, {
                icon: 1
            })
        } else {
            if (result.add_status == 0) {
                layer.msg(result.msg, {
                    icon: 2
                })
            } else {
                if (result.del_status == 1) {
                    $(".cancel").html("+ ????????????");
                    layer.msg(result.msg, {
                        icon: 1
                    })
                } else {
                    if (result.del_status == 0) {
                        layer.msg(result.msg, {
                            icon: 2
                        })
                    } else {
                        layer.msg("????????????????????????", {
                            icon: 2
                        })
                    }
                }
            }
        }
    })
}
function video_play(video_path, timestamp, seek) {
    if (!timestamp) {
        timestamp = ""
    }
    if (!seek) {
        seek = 0
    }
    if (video_path.indexOf(".m3u8") != -1) {
        player = new Phpcn({
            container: document.getElementById("myVideo"),
            logo: "https://www.php.cn/static/images/logo.png",
			autoplay:false,
			preload:'none',
            video: {
                url: video_path,
                type: "hls"
            }
        });
        player.on("canplay", timeHandler);
        player.on("ended", endedHandler)
    } else {
        var videoObject = {
            container: "#myVideo",
            variable: "php?????????",
            flashplayer: false,
            autoplay: false,
            next: "nextFun",
            loaded: "",
            video: video_path
        };
        player = new ckplayer(videoObject);
        player.addListener("time", timeHandler);
        player.addListener("ended", endedHandler)
    }
    var is_tPost = true;
    var is_record = true;
    var layercloseBtn = true;
    var layerlock = false;
    function timeHandler() {
        if (is_tPost && timestamp && $(".task_right").is(":hidden") && (player.hasOwnProperty("time") && (player.time > timestamp) || player.hasOwnProperty("video") && (player.video.currentTime > timestamp))) {
            is_tPost = false;
            $.post("/course/video_task.html", {
                learn: learn,
                timestamp: timestamp
            },
            function(result) {
                if (result.status == 1) {
                    if (result.task != 1 && result.is_lock == 1) {
                        try {
                            player.pause()
                        } catch(e) {
                            player.videoPause()
                        }
                        layercloseBtn = false;
                        layerlock = true
                    }
                    if (result.task == 0) {
                        if (result.type == 1) {
                            layer.msg(result.msg, {
                                icon: 3
                            },
                            function() {
                                is_tPost = layerlock;
                                course_task_article_publish(result.id)
                            })
                        } else {
                            if (result.type == 2) {
                                layer.msg(result.msg, {
                                    icon: 3
                                },
                                function() {
                                    is_tPost = layerlock;
                                    publish_ask(result.msg, 2, result.id)
                                })
                            } else {
                                if (result.type == 3) {
                                    layer.msg(result.msg + "?<br/>(???????????????????????????)<br/>????????????????????????...", {
                                        icon: 3
                                    },
                                    function() {
                                        is_tPost = layerlock;
                                        layer.open({
                                            type: 1,
                                            area: ["960px", "560px"],
                                            title: result.msg + "???????????????????????????????????????????????????????????????????????????????????????",
                                            closeBtn: layercloseBtn,
                                            shadeClose: false,
                                            content: result.examine += '<link rel="stylesheet" href="/static/quke/css/interest.css"><style>.play-item{display:block;}.play-exam-content .content-intro{display:none;}</style><script src="/static/js/video_task.js?2.3"><\/script><script>learn=' + learn + ";timestamp=" + timestamp + ";videoHtml='" + videoHtml + '\'<\/script><div class="exam-btn-box"><a href="javascript:;" class="exam-btn-jump btn-submit" style="margin-bottom:20px;margin-right:30px;">??????</a></div>'
                                        });
                                        var findEax = setInterval(function() {
                                            $.ajax({
                                                url: "/course/video.html",
                                                type: "post",
                                                async: false,
                                                dataType: "json",
                                                data: {
                                                    "learn": learn
                                                },
                                                success: function(result) {
                                                    if (!result.timestamp || result.timestamp != timestamp) {
                                                        timestamp = result.timestamp;
                                                        clearInterval(findEax)
                                                    }
                                                }
                                            })
                                        },
                                        3000)
                                    })
                                } else {
                                    if (result.type == 5) {
                                        layer.msg(result.msg, {
                                            icon: 3
                                        },
                                        function() {
                                            is_tPost = layerlock;
                                            $(".op.question").trigger("click")
                                        })
                                    }
                                }
                            }
                        }
                    } else {
                        if (result.task == 1) {} else {
                            if (result.task == 2) {} else {
                                layer.msg(result.msg, {
                                    icon: 2
                                })
                            }
                        }
                    }
                } else {
                    layer.msg(result.msg, {
                        icon: 2
                    });
                    try {
                        player.destroy()
                    } catch(e) {
                        player.removeChild()
                    }
                }
            })
        }
        if (is_record) {
            $.post("/course/record.html", {learn:learn,type:1,dur:parseInt(player.video.duration)},
            function() {});
            is_record = false
        }
    }
    function endedHandler() {
        if ($(".course_code_next_tips").is(":hidden")) {
            $(".course_code_next_tips").show()
        }
        $(".course_code_next_a").click(function() {
            try {
                clearInterval(next_autoplay)
            } catch(e) {}
            $(".course_code_next_tips").hide();
            $(".course_code_next_tips_three em").html(5);
            try {
                player.play()
            } catch(e) {
                player.videoPlay()
            }
        });
        try {
            clearInterval(next_autoplay)
        } catch(e) {}
        var url = $(".course_code_header_next").attr("href");
        if (url.indexOf("javascript") != -1) {
            $(".course_code_next_tips_second h2").html("?????????word?????????????????????????????????");
            $(".course_code_next_tips_three").hide()
        } else {
            var next_autoplay = setInterval(function() {
                var num = parseInt($(".course_code_next_tips_three em").html());
                if (num > 1) {
                    $(".course_code_next_tips_three em").html(num - 1)
                } else {
                    clearInterval(next_autoplay);
                    location.href = url
                }
            },
            1000)
        }
        $.post("/course/record.html", {
            learn: learn,
            type: 2
        },
        function() {})
    }
    if (is_login == 0) {
        video_pause = setInterval(timeHandler, 558)
    }
    if (seek) {
        $.getScript("/static/js/jquery.cookie.js",
        function() {
            $.cookie("PHPSeekTime" + learn, null)
        })
    }
}
function nextFun() {
    if ($(".course_code_header_next").size() <= 0) {
        return false
    }
    var url = $(".course_code_header_next").attr("href");
    if (url) {
        location.href = url
    }
}
function wei_pay(type) {
    if ($("#login").size() > 0) {
        $("#login").trigger("click");
        return false
    }
    if (type == 0) {
        pay_type(type)
    } else {
        $.post("/pay_transfer.html", {
            type: type
        },
        function(result) {
            if (result.code == 1) {
                layer.msg(result.msg, {
                    icon: 1,
                    time: 1200
                },
                function() {
                    window.open("/cart.html?type=" + type)
                })
            } else {
                if (result.code == 2) {
                    layer.msg(result.msg, {
                        icon: 7,
                        time: 1200
                    },
                    function() {
                        enroll(0, type)
                    })
                } else {
                    layer.msg(result.msg, {
                        icon: 2
                    })
                }
            }
        },
        "json")
    }
}
function enroll(id, type) {
    if (!type) {
        type = 0
    }
    var enroll = layer.open({
        type: 2,
        title: "????????????????????????????????????",
        shade: 0.5,
        area: ["470px", "500px"],
        closeBtn: 1,
        shadeClose: false,
        content: "/k/enroll.html?id=" + id + "&type=" + type
    })
}
function pay_type(type, params) {
    if ($("#login").size() > 0) {
        $("#login").trigger("click");
        return false
    }
    if (!type) {
        layer.msg("?????????????????????????????????", {
            icon: 2
        })
    }
    var url = "/weipay/" + type + ".html";
    if (params) {
        url += "?pro=" + params
    }
    layer.open({
        type: 2,
        title: "?????????????????????",
        shadeClose: true,
        shade: 0.8,
        area: ["400px", "470px"],
        content: url
    })
}
function alipay_type(type, out_trade_no,fq_type,pro) {
    if ($("#login").size() > 0) {
        $("#login").trigger("click");
        return false
    }
    if ($(".order_alipay_five_layer", parent.document).size() > 0) {
        $(".order_alipay_five_layer", parent.document).attr("data-data", out_trade_no).show();
        $(".order_alipay_layer", parent.document).show()
    }
    if(!out_trade_no){
        out_trade_no = '';
    }
    if(!pro){
        pro = '';
    }
    if(!fq_type){
        fq_type = 0;
    }
    window.open("/alipay/pay_pc.html?out_trade_no=" + out_trade_no + "&type=" + type+ "&fq_type=" + fq_type+ "&pro=" + pro);
    parent.layer.closeAll()
}
var newviplayer;
function newvip_pay(time) {
    if ($("#login").size() > 0) {
        $("#login").trigger("click");
        return false
    }
    var url = "/newVipOpen/";
    if (time) {
        url += "?time=" + time
    }
    newviplayer = layer.open({
        type: 2,
        title: "PHP?????????????????????",
        shadeClose: false,
        shade: 0.8,
        area: ["740px", "560px"],
        content: url
    })
}
function newVipNowPay(isType) {
    if ($("#login").size() > 0) {
        $("#login").trigger("click");
        return false
    }
    var type = parseInt($('input[name="level"]:checked').val()) + 30000;
    var time = parseInt($('input[name="time"]:checked').val());
    var pay_type = $('input[name="pay_type"]:checked').val();
    if (!type) {
        layer.msg("?????????????????????", {
            icon: 2
        });
        return false
    }
    if (!time) {
        layer.msg("?????????????????????", {
            icon: 2
        });
        return false
    }
    if (!isType) {
        layer.msg("??????????????????~");
        layer.open({
            type: 2,
            title: "????????????",
            shade: 0.3,
            area: ["400px", "260px"],
            content: "/user/bind_phone.html"
        });
        return false
    }
    if (pay_type == 2) {
        window.open("/alipay/pay_pc.html?time=" + time + "&type=" + type);
        parent.layer.closeAll();
        if ($(".order_alipay_five_layer", parent.document).size() > 0) {
            $(".order_alipay_five_layer", parent.document).show();
            $(".order_alipay_layer", parent.document).show()
        }
        return
    }
    parent.layer.open({
        type: 2,
        title: "?????????????????????",
        shadeClose: false,
        shade: 0.8,
        area: ["400px", "470px"],
        content: "/weipay/" + type + ".html?time=" + time
    });
    layer.close(newviplayer)
}
function publish_article(id) {
    if ($(".php-user #login").size() > 0) {
        $("#login").trigger("click");
        return false
    }
    var thisUrl = "/article/publish.html";
    if (id) {
        thisUrl = thisUrl + "?ArticleId=" + id
    }
    layer.open({
        type: 2,
        title: "??????????????????",
        shade: 0.5,
        area: ["680px", "85%"],
        content: thisUrl
    })
}
function course_task_article_publish(id) {
    $("#myVideo").width($(window).width() - 690).css("float", "left");
    $(".task_rights").show();
    $(".task_right").attr("src", "/article/publish.html?id=" + id).width("685px").height($(".php-video").height());
    $(".task_right").find(".publish-send-every").css("padding-top", "150px")
}
function course_task_blog_publish(id) {
    $(".task_rights").show();
    $("#myVideo").width($(window).width() - 825).css("float", "left");
    $(".task_right").attr("src", "/blog/admin/article_add.html?id=" + id).width("820px").height($(".php-video").height())
}
function publish_article_send() {
    var isArticlePublishPost = false;
    var title = $.trim($("#ques-title").val());
    var content = ue.getContent();
    var verify = $("#verifycode").val();
    var catId = $("#category").val();
    var pic = $("#art-face").val();
    var task_id = $("#task_id").val();
    var ArtId = $("#ArtId").val();
    var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
    if (!reg.test(content) || content.length < 100) {
        layer.msg("?????????????????????????????????100?????????", {
            icon: 2
        });
        return false
    }
    if (!new RegExp("[\\u4E00-\\u9FFF]+", "g").test(title) || title.length < 6) {
        layer.msg("????????????????????????", {
            icon: 2
        });
        return false
    }
    if (verify == "") {
        layer.msg("?????????????????????", {
            icon: 2
        });
        return false
    }
    if (catId == "") {
        layer.msg("???????????????", {
            icon: 2
        });
        return false
    }
    if (pic == "") {
        layer.msg("???????????????", {
            icon: 2
        });
        return false
    }
    if (isArticlePublishPost == true) {
        return false
    }
    isArticlePublishPost = true;
    $.post("/article/add.html", {
        title: title,
        content: content,
        catid: catId,
        verify: verify,
        pic: pic,
        task_id: task_id,
        ArtId: ArtId
    },
    function(result) {
        if (result.status == 1) {
            layer.msg(result.msg, {
                icon: 1
            },
            function() {
                if (result.url) {
                    parent.location.href = result.url
                } else {
                    parent.location.reload()
                }
            })
        } else {
            refreshVerify(".js-verify-refresh");
            layer.msg(result.msg, {
                icon: 2
            });
            isArticlePublishPost = false
        }
    })
}
function publish_ask(this_html, type, task) {
    if ($(".php-user #login").size() > 0) {
        $("#login").trigger("click");
        return false
    }
    var url = "/wenda/publish.html?type=" + type;
    if (task) {
        url += "&task=" + task
    }
    layer.open({
        type: 2,
        title: this_html,
        shade: 0.5,
        area: ["680px", "600px"],
        content: url
    })
}
function publish_ask_send(type, task) {
    var isPublishPost = false;
    var title = $.trim($("#ques-title").val());
    var content = ue.getContent();
    var verify = $("#verifycode").val();
    var write_task = $(".write_task").val();
    var phpcn = $("input[name='phpcn']").val();
    var catIds = [];
    if (type == 1) {
        var publish_url = "/wenda/add.html"
    } else {
        if (type == 2) {
            var publish_url = "/write/add.html"
        }
    }
    if (!task || task == "undefined") {
        task = 0
    }
    var reg = new RegExp("[\\u4E00-\\u9FFF]+", "g");
    if (!reg.test(content) || content.length < 50) {
        layer.msg("?????????????????????,???????????????50?????????", {
            icon: 2
        });
        return false
    }
    if (!new RegExp("[\\u4E00-\\u9FFF]+", "g").test(title) || title.length < 6) {
        layer.msg("?????????????????????,???????????????7????????????", {
            icon: 2
        });
        return false
    }
    $("input:radio[name='category']:checked").each(function() {
        catIds.push({
            id: $(this).val(),
            fid: $(this).data("fid")
        })
    });
    if (catIds.length <= 0) {
        layer.msg("????????????????????????", {
            icon: 2
        });
        return false
    }
    if (catIds.length > 3) {
        layer.msg("????????????????????????", {
            icon: 2
        });
        return false
    }
    if (verify == "") {
        layer.msg("?????????????????????", {
            icon: 2
        });
        return false
    }
    if (isPublishPost == true) {
        return false
    }
    isPublishPost = true;
    $.post(publish_url, {
        title: title,
        content: content,
        catids: catIds,
        verify: verify,
        task: task,
        write_task: write_task,
        phpcn: phpcn
    },
    function(result) {
        if (result.status == 1) {
            layer.msg(result.msg, {
                icon: 1
            },
            function() {
                if (result.url) {
                    parent.location.href = result.url
                }
            })
        } else {
            refreshVerify(".js-verify-refresh");
            layer.msg(result.msg, {
                icon: 2
            });
            isPublishPost = false
        }
    })
}
function video_down(msg) {
    if (!msg) {
        msg = "????????????????????????????????????"
    }
    $(".myVideo_img").attr("src", "/static/images/video_down.jpg");
    layer.msg(msg, {
        icon: 2
    })
}
function nav_more(data) {
    var flag = $(data).parents("ul").next(".nav_more").is(":hidden");
    if (flag) {
        $(data).parents("ul").next(".nav_more").show()
    } else {
        $(data).parents("ul").next(".nav_more").hide()
    }
    $(".title").mouseleave(function() {
        $(".nav_more").hide()
    })
}
function refreshVerify(classname) {
    var ts = Date.parse(new Date()) / 1000;
    $(classname).attr("src", "/captcha.html?id=" + ts)
}
function getue_config(id, widths) {
    ue = UE.getEditor(id, {
        toolbars: [["source", "bold", "italic", "underline", "fontborder", "blockquote", "pasteplain", "removeformat", "unlink", "inserttable", "deletetable", "insertcode", "fontsize", "paragraph", "simpleupload", "link", "forecolor", "backcolor", "insertorderedlist", "insertunorderedlist", "fullscreen"]],
        wordCount: false,
        elementPathEnabled: false,
        pasteplain: true,
        enableContextMenu: false,
        allowDivTransToP: false,
        initialFrameWidth: widths,
        initialFrameHeight: 350,
        iframeCssUrl: "/static/ueditor/plugin/js/user_code.css"
    });
    return ue
}
function code_highlight() {
    SyntaxHighlighter.all()
}
function course_vip() {
    layer.alert("???????????????????????????", {
        title: "????????????",
        icon: 2,
        skin: "layui-layer-molv",
        closeBtn: 0,
        anim: 4
    })
}
try {
    if (window.console && window.console.log) {
        console.log("\n\n");
        console.log("?????????????????????????????????,???????????????????????????????????????php????????????????????????\n\n");
        console.log("?????????????????????????????????????????????\n??????php??????????????????????????????????????????????????????\n");
        console.log("????????????????????? %c admin@php.cn???????????????????????????-??????XX??????-??????console?????????", "color:#0b8");
        console.log("?????????????????????????????????\n")
    }
} catch(e) {}
try {
    top.location.hostname;
    if (top.location.hostname != window.location.hostname) {
        top.location.href = window.location.href
    }
} catch(e) {
    top.location.href = window.location.href
}
function still_image() {
    var host = window.location.host;
    if (host != "www.php.cn" && host != "www.php.com") {
        location.href = "https://www.php.cn" + window.location.pathname
    }
}
function searchs() {
    var key_words = $.trim($("#key_words").val());
    if (key_words == "") {
        layer.msg("??????????????????", {
            icon: 2,
            offset: "t",
            anim: 6
        });
        return false
    }
    window.location.href = "/search?word=" + key_words
}
function keyup() {
    if (event.keyCode == 13) {
        searchs();
        return false
    }
}
function plan_show_detail(obj, id) {
    var isshow = $("#detail_" + id).is(":hidden");
    $(".course-time-lists").hide(100);
    if (isshow) {
        $("#detail_" + id).show(300)
    }
}
function cancel_plan(id) {
    if (!id) {
        layer.msg("?????????????????????????????????", {
            icon: 2
        });
        return false
    }
    var isPost = false;
    layer.confirm("????????????????????????????????????", {
        icon: 3,
        skin: "layui-layer-molv",
        btn: ["??????", "??????"]
    },
    function() {
        if (isPost == true) {
            return false
        }
        isPost = true;
        $.post("/cancel_plan/", {
            id: id
        },
        function(res) {
            if (res.code == 1) {
                layer.msg(res.msg, {
                    icon: 1,
                    time: 2000
                },
                function() {
                    window.location.reload()
                })
            } else {
                isPost = false;
                layer.msg(res.msg, {
                    icon: 2,
                    time: 2000
                })
            }
        },
        "json")
    })
}
function dic_search() {
    var key = $.trim($("input[name='keywords']").val());
    if (key.length == 0) {
        layer.msg("??????????????????", {
            icon: 2,
            offset: "t",
            anim: 6
        });
        return false
    }
    $.get("/dic_search.html", {
        key: key
    },
    function(result) {
        if (result == 0) {
            layer.msg("???????????????????????????????????????", {
                icon: 2,
                offset: "t",
                anim: 6
            },
            function() {
                $(document).trigger("api.loginpopbox");
                return false
            })
        } else {
            if (result == 2) {
                layer.msg("??????????????????????????????????????????");
                return false
            } else {
                if (result == 3) {
                    layer.msg("??????????????????");
                    return false
                } else {
                    if (result == 1) {
                        window.location.href = "/dic/search/" + key + ".html"
                    }
                }
            }
        }
    })
}
function dic_tips_more() {
    if ($(".dic_first_div").is(".is_show")) {
        $(".dic_first_div").removeClass("is_show").hide()
    } else {
        $(".dic_first_div").addClass("is_show").show()
    }
}
function now_learn_url() {
    var now_learn_li = $(".icon-clock").parent("i").parent("li").next("li");
    if (now_learn_li.is(".sec-title")) {
        now_learn_li = $(".icon-clock").parent("i").parent("li").next("li").next("li")
    }
    var now_learn_url = now_learn_li.children("a").attr("href");
    if (!now_learn_url) {
        now_learn_url = "javascript:void(0)"
    }
    $(".course_code_header_next").attr("href", now_learn_url)
}
function has_scrollbar() {
    if ($(".icon-clock").size() > 0) {
        $(".nano-content").animate({
            scrollTop: $(".icon-clock").offset().top - 200
        },
        1000)
    }
}
function donate_data() {
    if ($("#login").size() > 0) {
        $(document).trigger("api.loginpopbox");
        return false
    }
    layer.open({
        type: 2,
        title: "???????????????",
        shadeClose: false,
        shade: 0.8,
        area: ["380px", "500px"],
        content: "/about/donatetype.html"
    })
}
function advice_data(id,msg) {
    if ($("#login").size() > 0) {
        $(document).trigger("api.loginpopbox");
        return false
    }
    if (!id || id == "undefined") {
        id = 0
    }
    if(!msg){
        msg = '????????????';
    }
    layer.open({
        type: 2,
        title: msg,
        shadeClose: false,
        shade: 0.8,
        area: ["580px", "430px"],
        content: "/advice.html?id=" + id
    })
}
function evaluate_data(id, type) {
    if ($("#login").size() > 0) {
        $(document).trigger("api.loginpopbox");
        return false
    }
    if (!id || id == "undefined") {
        id = 0
    }
    if (!type || type == "undefined") {
        type = 0
    }
    layer.open({
        type: 2,
        title: "??????????????????",
        shadeClose: false,
        shade: 0.8,
        area: ["700px", "70%"],
        content: "/courseEvaluate?id=" + id + "&type=" + type
    })
}
function showTab(m, n) {
    var morelink = new Array();
    var tli = document.getElementById("tabTitle" + m).getElementsByTagName("li");
    for (i = 0; i < tli.length; i++) {
        tli[i].children[0].className = i == n ? "cur": "";
        if (document.getElementById("tabContent" + m + "_" + i) != null) {
            document.getElementById("tabContent" + m + "_" + i).style.display = i == n ? "block": "none"
        }
    }
}
function iframe_set() {
    if (getParentUrl() != null) {
        layer.msg("?????????????????????????????????...", {
            icon: 2
        },
        function() {
            try {
                window.top.location.href = window.location
            } catch(e) {
                window.location.href = "https://www.php.cn"
            }
        })
    }
}
function getParentUrl() {
    var url = null;
    if (parent !== window) {
        try {
            url = parent.location.href
        } catch(e) {
            url = document.referrer
        }
    }
    return url
}
function login_trigger() {
    $(document).trigger("api.loginpopbox")
}
function msg_show(msg, type) {
    layer.msg(msg, {
        icon: type
    })
}
function msg_tip_show(obj, msg) {
    if (!msg) {
        msg = "??????"
    }
    layer.tips(msg, obj, {
        tips: [4, "#69a9ea"],
        time: 0
    })
}
function boANext(aid) {
    layer.open({
        type: 2,
        title: false,
        shadeClose: true,
        shade: 0.5,
        area: ["600px", "580px"],
        content: "/blog/admin/article_add_next/?aid=" + aid
    })
}
function BlogArticleAdd(aid, isType) {
    BlogArticleId = aid;
    if (aid) {
        if (isType) {
            MarkdownDiotr()
        } else {
            MyUeDiotr()
        }
        return false
    }
    layer.open({
        type: 1,
        title: false,
        shadeClose: true,
        shade: 0.5,
        area: ["400px", "280px"],
        content: $(".addType")
    })
}

function WorkArticleAdd(aid) {
    WorkArticleId = aid;
    layer.open({
        type: 1,
        title: false,
        shadeClose: true,
        shade: 0.5,
        area: ["400px", "280px"],
        content: $(".addType")
    })
}

function saveTopDraft() {
    layer.confirm("??????????????????????????????????????????????????????????????????", {
        title: "????????????",
        time: 0,
        shadeClose: true,
        skin: "layui-layer-molv",
        btn: ["??????", "??????"],
        yes: function() {
            var data = new Object();
            data.title = $.trim($('input[name="title"]').val());
            if (window.parent.testEditor == undefined) {
                data.content = $.trim(window.parent.ue.getContent())
            } else {
                data.mcontent = $.trim(window.parent.testEditor.getMarkdown());
                data.content = $.trim(window.parent.testEditor.getPreviewedHTML())
            }
            if (!data.content) {
                layer.msg("??????????????????", {
                    "icon": 2,
                    "anim": 6
                });
                return false
            }
            $.post("/blog/admin/blog_article_draft/", data,
            function(res) {
                if (res.code > 0) {
                    layer.msg(res.msg, {
                        "icon": 2,
                        "anim": 6
                    })
                } else {
                    layer.msg(res.msg, {
                        "icon": 1
                    })
                }
            },
            "json")
        }
    })
}
function saveTipsDraft() {
    var data = new Object();
    data.title = $.trim($('input[name="title"]').val());
    if (window.parent.testEditor == undefined) {
        data.content = $.trim(window.parent.ue.getContent())
    } else {
        data.mcontent = $.trim(window.parent.testEditor.getMarkdown());
        data.content = $.trim(window.parent.testEditor.getPreviewedHTML())
    }
    if (!data.content) {
        return false
    }
    $.post("/blog/admin/blog_article_draft/", data,
    function(res) {},
    "json")
}
function saveDraft() {
    layer.confirm("??????????????????????????????????????????????????????????????????", {
        title: "????????????",
        time: 0,
        shadeClose: true,
        skin: "layui-layer-molv",
        btn: ["??????", "??????"],
        yes: function() {
            var data = new Object();
            data.aid = $("#aid", window.parent.document).val();
            data.title = $.trim($('input[name="title"]', window.parent.document).val());
            data.cid = $("#cid").val();
            data.type = $("#type").val();
            if (window.parent.testEditor == undefined) {
                data.content = $.trim(window.parent.ue.getContent())
            } else {
                data.mcontent = $.trim(window.parent.testEditor.getMarkdown());
                data.content = $.trim(window.parent.testEditor.getPreviewedHTML())
            }
            if (!data.content) {
                layer.msg("??????????????????", {
                    "icon": 2,
                    "anim": 6
                });
                return false
            }
            data.sort = $.trim($('input[name="sort"]').val());
            $.post("/blog/admin/blog_article_draft/", data,
            function(res) {
                if (res.code > 0) {
                    layer.msg(res.msg, {
                        "icon": 2,
                        "anim": 6
                    })
                } else {
                    layer.msg(res.msg, {
                        "icon": 1
                    })
                }
            },
            "json")
        }
    })
}
function MarkdownDiotr() {
    BlogArticleId;
    var $url = "/blog/admin/article_add_markdown.html";
    if (BlogArticleId) {
        $url += "?aid=" + BlogArticleId
    }
    if (WorkArticleId) {
        $url += "?wid=" + WorkArticleId
    }
    location.href = $url
}
function MyUeDiotr() {
    BlogArticleId;
    var $url = "/blog/admin/article_add.html";
    if (BlogArticleId) {
        $url += "?aid=" + BlogArticleId
    }
    if (WorkArticleId) {
        $url += "?wid=" + WorkArticleId
    }
    location.href = $url
}
function BlogArticleSetInterval() {
    BlogArticleSetIt = setInterval(function() {
        saveTipsDraft()
    },
    20000)
}
function BlogArticleDeletes(aid) {
    layer.confirm("?????????????????????", {
        icon: 3,
        skin: "layui-layer-molv",
        btn: ["??????", "??????"]
    },
    function() {
        $.post("/blog/admin/article_del.html", {
            "aid": aid
        },
        function(res) {
            if (res.code > 0) {
                layer.msg(res.msg, {
                    "icon": 2,
                    "anim": 6
                })
            } else {
                layer.msg(res.msg, {
                    "icon": 1
                });
                setTimeout(function() {
                    window.location.reload()
                },
                1000)
            }
        },
        "json")
    })
}
function recycle_article() {
    window.location.href = "/blog/admin/recycle_article.html"
}
function BlogArticleSearchs() {
    var wd = $.trim($("#title").val());
    if (wd == "") {
        layer.msg("????????????????????????", {
            "icon": 2,
            "anim": 6,
            "offset": "t"
        });
        return
    }
    window.location.href = "?title=" + wd
}
function BlogArticleSave() {
    clearInterval(BlogArticleSetIt);
    var isPost = false;
    var data = new Object();
    data.wid = $("#wid", window.parent.document).val();
    data.aid = $("#aid", window.parent.document).val();
    data.title = $.trim($('input[name="title"]', window.parent.document).val());
    data.cid = $("#cid").val();
    data.fid = $("#fid").val();
    data.type = $("#type").val();
    if (window.parent.testEditor == undefined) {
        data.content = $.trim(window.parent.ue.getContent())
    } else {
        data.mcontent = $.trim(window.parent.testEditor.getMarkdown());
        data.content = $.trim(window.parent.testEditor.getPreviewedHTML())
    }
    data.sort = $.trim($('input[name="sort"]').val());
    if (data.title == "") {
        layer.msg("?????????????????????", {
            "icon": 2,
            "anim": 6
        });
        return
    }
    if (data.fid == "0") {
        layer.msg("?????????????????????", {
            "icon": 2,
            "anim": 6
        });
        return
    }
    if (data.content == "") {
        layer.msg("?????????????????????", {
            "icon": 2,
            "anim": 6
        });
        return
    }
    if (isPost == true) {
        return false
    }
    isPost = true;
    $.post("/blog/admin/article_save.html", data,
    function(res) {
        if (res.code > 0) {
            layer.msg(res.msg, {
                "icon": 2,
                "anim": 6
            });
            isPost = false
        } else {
            layer.msg(res.msg, {
                "icon": 1
            });
            setTimeout(function() {
                if (data.aid) {
                    parent.window.location.reload()
                } else {
                    parent.location.href = "/blog/admin/article.html"
                }
            },
            1000)
        }
    },
    "json")
}
function ArticleRecovery(aid) {
    layer.confirm("?????????????????????", {
        icon: 3,
        skin: "layui-layer-molv",
        btn: ["??????", "??????"]
    },
    function() {
        $.post("/blog/admin/article_up.html", {
            "aid": aid
        },
        function(res) {
            if (res.code > 0) {
                layer.msg(res.msg, {
                    "icon": 2,
                    "anim": 6
                })
            } else {
                layer.msg(res.msg, {
                    "icon": 1
                });
                setTimeout(function() {
                    window.location.reload()
                },
                1000)
            }
        },
        "json")
    })
}
function Recoverydeletes(aid) {
    layer.confirm("???????????????????????????", {
        icon: 3,
        skin: "layui-layer-molv",
        btn: ["??????", "??????"]
    },
    function() {
        $.post("/blog/admin/article_alldel.html", {
            "aid": aid
        },
        function(res) {
            if (res.code > 0) {
                layer.msg(res.msg, {
                    "icon": 2,
                    "anim": 6
                })
            } else {
                layer.msg(res.msg, {
                    "icon": 1
                });
                setTimeout(function() {
                    window.location.reload()
                },
                1000)
            }
        },
        "json")
    })
}
function ArticleCommentdel(comment_id) {
    layer.confirm("??????????????????????????????", {
        icon: 3,
        skin: "layui-layer-molv",
        btn: ["??????", "??????"]
    },
    function() {
        $.post("/blog/admin/comment_del.html", {
            "comment_id": comment_id
        },
        function(res) {
            if (res.code > 0) {
                layer.msg(res.msg, {
                    "icon": 2,
                    "anim": 6
                })
            } else {
                layer.msg(res.msg, {
                    "icon": 1
                });
                setTimeout(function() {
                    window.location.reload()
                },
                1000)
            }
        },
        "json")
    })
}
function ACommentrecovery(comment_id) {
    layer.confirm("??????????????????????????????", {
        icon: 3,
        skin: "layui-layer-molv",
        btn: ["??????", "??????"]
    },
    function() {
        $.post("/blog/admin/up_comment.html", {
            "comment_id": comment_id
        },
        function(res) {
            if (res.code > 0) {
                layer.msg(res.msg, {
                    "icon": 2,
                    "anim": 6
                })
            } else {
                layer.msg(res.msg, {
                    "icon": 1
                });
                setTimeout(function() {
                    window.location.reload()
                },
                1000)
            }
        },
        "json")
    })
}
function ACommentdel(comment_id) {
    layer.confirm("????????????????????????????????????", {
        icon: 3,
        skin: "layui-layer-molv",
        btn: ["??????", "??????"]
    },
    function() {
        $.post("/blog/admin/comment_alldel.html", {
            "comment_id": comment_id
        },
        function(res) {
            if (res.code > 0) {
                layer.msg(res.msg, {
                    "icon": 2,
                    "anim": 6
                })
            } else {
                layer.msg(res.msg, {
                    "icon": 1
                });
                setTimeout(function() {
                    window.location.reload()
                },
                1000)
            }
        },
        "json")
    })
}
function BlogCatadd(cid) {
    layer.open({
        type: 2,
        title: cid > 0 ? "????????????": "????????????",
        shade: 0.3,
        area: ["550px", "400px"],
        content: "/blog/admin/category_add.html?cid=" + cid
    })
}
function BlogCatdel(cid) {
    layer.confirm("??????????????????????????????", {
        icon: 3,
        skin: "layui-layer-molv",
        btn: ["??????", "??????"]
    },
    function() {
        $.post("/blog/admin/category_del.html", {
            "cid": cid
        },
        function(res) {
            if (res.code > 0) {
                layer.alert(res.msg, {
                    "icon": 2
                })
            } else {
                layer.msg(res.msg, {
                    "icon": 1
                });
                setTimeout(function() {
                    window.location.reload()
                },
                1000)
            }
        },
        "json")
    })
}
function BlogSysSave() {
    var url = window.location.href;
    $.post(url, $("form").serialize(),
    function(res) {
        if (res.code > 0) {
            layer.msg(res.msg, {
                "icon": 2
            })
        } else {
            layer.msg(res.msg, {
                "icon": 1
            });
            setTimeout(function() {
                window.location.reload()
            },
            1000)
        }
    },
    "json")
}
function custom_editor() {
    UE.registerUI("btn_code",
    function(editor, uiName) {
        editor.registerCommand(uiName, {
            execCommand: function() {
                var range = UE.getEditor("container").selection.getRange();
                range.applyInlineStyle("code");
                range.select()
            }
        });
        var btn = new UE.ui.Button({
            name: uiName,
            title: uiName,
            cssRules: "background-position: -520px 0;",
            onclick: function() {
                editor.execCommand(uiName)
            }
        });
        editor.addListener("selectionchange",
        function() {
            var state = editor.queryCommandState(uiName);
            if (state == -1) {
                btn.setDisabled(true);
                btn.setChecked(false)
            } else {
                btn.setDisabled(false);
                btn.setChecked(state)
            }
        });
        return btn
    })
}
$.EasySlide = function(Opt) {
    Opt = $.extend({
        Nav: null,
        Field: null,
        Cur: "cur",
        Index: 0,
        AutoTime: 3000
    },
    Opt || {});
    var show = function() {
        Opt.Nav.removeClass().eq(Opt.Index).addClass(Opt.Cur);
        Opt.Field.removeClass(Opt.Cur).eq(Opt.Index).addClass(Opt.Cur)
    },
    timer;
    Opt.Nav.mouseover(function() {
        Opt.Index = Opt.Nav.index(this);
        show()
    }).add(Opt.Field).hover(function() {
        clearInterval(timer)
    },
    function() {
        timer = setInterval(function() {
            Opt.Index = ++Opt.Index % Opt.Nav.length;
            show()
        },
        Opt.AutoTime)
    }).eq(0).trigger("mouseleave")
};
var TINY = {};
function T$(i) {
    return document.getElementById(i)
}
function T$$(e, p) {
    return p.getElementsByTagName(e)
}
TINY.slider = function() {
    function slide(n, p) {
        this.n = n;
        this.init(p)
    }
    slide.prototype.init = function(p) {
        var s = this.x = T$(p.id),
        u = this.u = T$$("ul", s)[0],
        c = this.m = T$$("li", u),
        l = c.length,
        i = this.l = this.c = 0;
        this.b = 1;
        if (p.navid && p.activeclass) {
            this.g = T$$("li", T$(p.navid));
            this.s = p.activeclass
        }
        this.a = p.auto || 0;
        this.p = p.resume || 0;
        this.r = p.rewind || 0;
        this.e = p.elastic || false;
        this.v = p.vertical || 0;
        s.style.overflow = "hidden";
        for (i; i < l; i++) {
            if (c[i].parentNode == u) {
                this.l++
            }
        }
        if (this.v) {
            u.style.top = 0;
            this.h = p.height || c[0].offsetHeight;
            u.style.height = (this.l * this.h) + "px"
        } else {
            u.style.left = 0;
            this.w = p.width || c[0].offsetWidth;
            u.style.width = (this.l * this.w) + "px"
        }
        this.nav(p.position || 0);
        if (p.position) {
            this.pos(p.position || 0, this.a ? 1 : 0, 1)
        } else {
            if (this.a) {
                this.auto()
            }
        }
        if (p.left) {
            this.sel(p.left)
        }
        if (p.right) {
            this.sel(p.right)
        }
    },
    slide.prototype.auto = function() {
        this.x.ai = setInterval(new Function(this.n + ".move(1,1,1)"), this.a * 1000)
    },
    slide.prototype.move = function(d, a) {
        var n = this.c + d;
        if (this.r) {
            n = d == 1 ? n == this.l ? 0 : n: n < 0 ? this.l - 1 : n
        }
        this.pos(n, a, 1)
    },
    slide.prototype.pos = function(p, a, m) {
        var v = p;
        clearInterval(this.x.ai);
        clearInterval(this.x.si);
        if (!this.r) {
            if (m) {
                if (p == -1 || (p != 0 && Math.abs(p) % this.l == 0)) {
                    this.b++;
                    for (var i = 0; i < this.l; i++) {
                        this.u.appendChild(this.m[i].cloneNode(1))
                    }
                    this.v ? this.u.style.height = (this.l * this.h * this.b) + "px": this.u.style.width = (this.l * this.w * this.b) + "px"
                }
                if (p == -1 || (p < 0 && Math.abs(p) % this.l == 0)) {
                    this.v ? this.u.style.top = (this.l * this.h * -1) + "px": this.u.style.left = (this.l * this.w * -1) + "px";
                    v = this.l - 1
                }
            } else {
                if (this.c > this.l && this.b > 1) {
                    v = (this.l * (this.b - 1)) + p;
                    p = v
                }
            }
        }
        var t = this.v ? v * this.h * -1 : v * this.w * -1,
        d = p < this.c ? -1 : 1;
        this.c = v;
        var n = this.c % this.l;
        this.nav(n);
        if (this.e) {
            t = t - (8 * d)
        }
        this.x.si = setInterval(new Function(this.n + ".slide(" + t + "," + d + ",1," + a + ")"), 10)
    },
    slide.prototype.nav = function(n) {
        if (this.g) {
            for (var i = 0; i < this.l; i++) {
                this.g[i].className = i == n ? this.s: ""
            }
        }
    },
    slide.prototype.slide = function(t, d, i, a) {
        var o = this.v ? parseInt(this.u.style.top) : parseInt(this.u.style.left);
        if (o == t) {
            clearInterval(this.x.si);
            if (this.e && i < 3) {
                this.x.si = setInterval(new Function(this.n + ".slide(" + (i == 1 ? t + (12 * d) : t + (4 * d)) + "," + (i == 1 ? ( - 1 * d) : ( - 1 * d)) + "," + (i == 1 ? 2 : 3) + "," + a + ")"), 10)
            } else {
                if (a || (this.a && this.p)) {
                    this.auto()
                }
                if (this.b > 1 && this.c % this.l == 0) {
                    this.clear()
                }
            }
        } else {
            var v = o - Math.ceil(Math.abs(t - o) * 0.1) * d + "px";
            this.v ? this.u.style.top = v: this.u.style.left = v
        }
    },
    slide.prototype.clear = function() {
        var c = T$$("li", this.u),
        t = i = c.length;
        this.v ? this.u.style.top = 0 : this.u.style.left = 0;
        this.b = 1;
        this.c = 0;
        for (i; i > 0; i--) {
            var e = c[i - 1];
            if (t > this.l && e.parentNode == this.u) {
                this.u.removeChild(e);
                t--
            }
        }
    },
    slide.prototype.sel = function(i) {
        var e = T$(i);
        e.onselectstart = e.onmousedown = function() {
            return false
        }
    };
    return {
        slide: slide
    }
} ();