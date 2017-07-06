var sspopuphead = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://authsit.ultimatix.net/logout/js/ssopopup.js';
sspopuphead.appendChild(script);

var sspopuplink = document.getElementsByTagName('head')[0];
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'https://authsit.ultimatix.net/logout/css/ssopopup.css';
sspopuplink.appendChild(link);
