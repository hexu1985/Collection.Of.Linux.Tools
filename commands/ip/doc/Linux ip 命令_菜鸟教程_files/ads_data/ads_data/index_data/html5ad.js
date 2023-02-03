function runLabsTests() {
    
    function doIPT(config) {

        // this is just how to make eval return an object so we can promote a string argument to the structure it represents
        if (typeof config == "string") config = eval("(function() {return " +  config + "})();");

        var _done = !1;
        var _timeout = config.ipptimeout;
        var _xtimer = config.xtimer;
        
        var _testSet = config.ipptestset;
        var _testSetLen = _testSet.length;
        var _tests = config.ipptests;
        var _testsComplete = 0;
        var _xTimer = [];
        var _result = {};

        var finishTest = function() {
          clearTimeout(_timeoutEvent);
          if(!_done) {
            var _now = new Date;
            var _testTime = _now.getTime();
            for(var b = '', d = 0; d<_testSetLen; d++) {
              var c = _testSet[d]
              c = c.replace(/\./g,'')
              b = b+['z',c,'-',_result[c]?_result[c]:'null','.'].join('');
            }
            //  append clients view of time, and tralling '.' to b (has tralling '.' on it already from above)
            b = ['//',config.ippresults,b,'zt-',_testTime,'.'].join('');
            // document.createElement('img').src = b;
            basicFetchImg(b);
            _done = !0;
          }
        };

        var startTest = function() {
            for(var b = 0; b<_testSetLen; b++) { //foreach experiment
                var a = _tests[b].exName;
                new_name = a.replace(/\./g,'')
                _result[a.replace(/\./g,'')] = !1;
                _xTimer[new_name] = {"nCall": 0}
                httpFetchImg(_tests[b].exUrl,'_ipt_'+new_name)
            }
            _timeoutEvent = setTimeout(finishTest,_timeout)//global timeout
        };

        var basicFetchImg = function(url) { //Used to fetch the results "exp"
            // Make the url protocol relative.
            url = url.replace(/http:/,'');
            document.createElement('img').src = url;
        };

        var httpFetchImg=function(url,name) { //Do each actual experiment
            var req = document.createElement('img');
            req.name = name;
            req._start = (new Date).getTime();
            var res_match = req.name.match(/^_ipt_(\w+)$/);
            exp_name = res_match[1]
            if (exp_name.startsWith("x") && _xTimer[exp_name]["nCall"]<1) {
              // x exps get executed a second time after xtimer wait
              url_elements = url.split("/")
              labels = url_elements[2].split('.')
              exp_labels = labels[0].split('-')
              exp_labels[exp_labels.length-1] = "2-".concat(exp_labels[exp_labels.length-1])
              labels[0] = exp_labels.join('-')
              url_elements[2] = labels.join('.')
              new_url = url_elements.join('/')
              setTimeout(httpFetchImg.bind(null,new_url,name),_xtimer)
              _xTimer[exp_name]["nCall"]++
            }
            
            req.onload = function() {
              _duration = (new Date).getTime() - req._start;
              var res_match = req.name.match(/^_ipt_(\w+)$/);
              exp_name = res_match[1]
              _testsComplete++;
              if (exp_name.startsWith("x")) {
                _duration -= _xtimer
              }
              exp_name && (_result[exp_name] = _duration);
              _testsComplete >= _testSetLen&&finishTest();
            };
            // Make the url protocol relative.
            url = url.replace(/http:/,'');
            var d = new Date()
            var n = d.getTime()
            req.src = url
        };
        startTest(); // This is the actual start of the experiment after setup
    }

    config  = {"ipptimeout":10000};
    var xpt = [];
    var xpl = [];
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (xhr.status === 200) {
            var sp = xhr.responseText.split("\n");
            var d = sp.length;
            for(var a=0;a<(d-1); a++) {
              var xp = sp[a].split(/\s/);
                if (xp[0] == 'results') { //results line
                    config["ippresults"]=xp[1];
                } else if (xp[0] == 'config') { //config line
                  config["ipptimeout"]=xp[1];
                  config["xtimer"]=xp[2];
                } else { //normal experiment lines
                  xpt.push(xp[0])
                  xpl.push({"exName":xp[0], "exUrl": xp[1]})
                }
            }
            config["ipptestset"]=xpt;
            config["ipptests"]=xpl;
            doIPT(config);
        } else {
            console.debug('not run');
        };
    };
    xhr.open('GET', encodeURI('//cfg.dotnxdomain.net/newadcfg/ad.py?A=2111&N&R&F'));
    xhr.send();
}
