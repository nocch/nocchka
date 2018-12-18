function refocuszp(type) {
    var m, b;
    var W = document;
    var V = navigator;
    var flash = 0;
    var site_id = 1196160;
    var userid='8827b98c467745725211b2e72889f7e0';
    var reqId = 0;
    var uId = 0;
    var isSSL = ('https:' == document.location.protocol);
    var baseUrl = ('https:' == document.location.protocol ? 'https:' : 'http:') + '//sys.refocus.ru/';
    var IE = document.all ? true : false;
    var r = document.referrer;
	
    // ip: 158.181.28.5

    function getXmlHttp() {
        var xmlhttp;
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else if (IE) {
            xmlhttp = new XDomainRequest();
        }
        return xmlhttp;
    }

    function sendData() {
        var xmlhttp = getXmlHttp();
        var path = baseUrl + 't=1415253616?request';
        var param = 'type=1&referrer=' + r + '&resol=' + screen.width + 'x' + screen.height + "&site_id=" + site_id;
        if (IE && window.XDomainRequest) {
            var xdr = new XDomainRequest();
            xdr.open("POST", path);
            xdr.withCredentials = true;
            xdr.onload = function () {
                reqId = parseInt(xdr.responseText);
				localStorage.setItem("refocus_id", reqId);
            };
            xdr.send(param);
        }
        else {
            xmlhttp.open('POST', path, true);
            xmlhttp.withCredentials = true;
            xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4) {
                    reqId = parseInt(xmlhttp.responseText);
					localStorage.setItem("refocus_id", reqId);
                }
            };
            xmlhttp.send(param);
        }
		
    }

    function sendEvent(param) {
		reqId=localStorage.getItem("refocus_id");
        var path = baseUrl + "t=1415253616?requestId=" + reqId + '&' + param + '';
		if (reqId > 0) {
            if (IE && window.XDomainRequest) {
                var xdr = new XDomainRequest();
                xdr.open("get", path);
                xdr.send();
            } else {
                var xmlhttp = getXmlHttp();
                xmlhttp.open('POST', path, true);
                xmlhttp.send();
            }
        }
    }

    document.onclick = function (e) {
        var x;
        var y;
        if (IE) {
            try {
                x = window.event.clientX;
                y = window.event.clientY;
            }
            catch (e) {
                x = 0;
                y = 0;
            }
        } else {
            x = e.pageX;
            y = e.pageY;
        }

        var b = "event=click";
        b += "&x=" + x
            + "&y=" + y;
		// sendEvent(b);
    }

    function sendRequest() {
        if (u != document.URL) {
            sessP++;
            var str = '';
            str += '&referrer=' + u;
            str += '&url=' + document.URL;
            str += '&display=' + screen.width + 'x' + screen.height;
            str += '&t=1415253616';
            sendData(str);
            u = document.URL;
        }
    }

    function loadScript(path) {
        var ra = document.createElement('script');
        ra.type = 'text/javascript';
        ra.async = true;
        ra.src = (path);
        var st = document.getElementsByTagName('script')[0];
        st.parentNode.insertBefore(ra, st);
    }

function beelineSync() {
	var xhr_sync = new XMLHttpRequest();
        xhr_sync.open('GET', "//sys.refocus.ru/t=1415253616?beelineSync=testHeaders", true);
        xhr_sync.send();
}
function mtsSync() {
	
	var imgSync = document.createElement("img");
    imgSync.style.cssText="width:1px !important; height:1px !important; display:none !important;";
    imgSync.setAttribute("alt","");
    imgSync.setAttribute("src", "//rtb.com.ru/refocus-sync?uid=" + userid);
    var s = document.body;
    s.appendChild(imgSync);
}

function mtsSync2() {
	var xhr_sync = new XMLHttpRequest();
	xhr_sync.open('GET', "//rtb.com.ru/mts-sync", true);
	xhr_sync.withCredentials = true; 
	xhr_sync.send();
}

    function timeRequest() {
		refocus_timer = refocus_timer + 5000;
        var sy = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (refocus_timer == 5000 || refocus_timer == 30000 || refocus_timer == 60000 || refocus_timer == 90000
            || refocus_timer == 180000 || refocus_timer == 300000) {
            var b = "event=time";
            b += "&time=" + refocus_timer
                + "&height=" + (document.height == null ? 0 : document.height)
                + "&sy=" + (sy == null ? 0 : sy);
             sendEvent(b);
			
        }
	}

    if (type == 1) {
		timeRequest();
    }

    if (type == 0) {
        sendData();
	
	if (site_id != 1195936){
		
		mtsSync();
		mtsSync2();
		beelineSync();
	}
	
	

	if (flash == 1) {
		if (!IE)
			setInterval("sendRequest();", 1000);
		else
			window.setInterval("sendRequest();", 1000);
	}

//if(!document.URL.includes('volkswagen')){
if (!isSSL) {
    loadScript('http://sys.refocus.ru/t=1415253842?type=getZp&ishide=false');
}else{
 loadScript('https://sys.refocus.ru/t1475387388?type=getZp&ishide=false&domain='+window.location.href);
}
//}

    }
}

var refocus_timer=0;
if (document.all==null)
	setInterval("refocuszp(1);", 5000);
else
	window.setInterval("refocuszp(1);", 5000);
refocuszp(0);



