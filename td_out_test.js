!function(t,e){if(void 0===e[t]){e[t]=function(){e[t].clients.push(this),this._init=[Array.prototype.slice.call(arguments)]},e[t].clients=[];for(var r=function(t){return function(){return this["_"+t]=this["_"+t]||[],this["_"+t].push(Array.prototype.slice.call(arguments)),this}},s=["addRecord","set","trackEvent","trackPageview","trackClicks","ready","fetchUserSegments"],a=0;a<s.length;a++){var c=s[a];e[t].prototype[c]=r(c)}var n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=("https:"===document.location.protocol?"https:":"http:")+"//cdn.treasuredata.com/sdk/1.9.0/td.min.js";var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(n,i)}}("Treasure",this);

var createImage = function(url) {
  var img = document.createElement('img');
  img.src = (('https:' == document.location.protocol) ? 'https://' : 'http://') + url;
  img.width=1;img.height=1;img.style.display='none';
  document.body.appendChild(img);
};

var sync_callback = function() {
  var td_client_id = td.client.track.uuid;
  var account = 'aws-9265'
  var dbm_url = 'cm.g.doubleclick.net/pixel?google_nid=treasuredata_dmp&google_cm&td_write_key=8151/fcd628065149d648b80f11448b4083528c0d8a91&td_global_id=td_global_id' + '&td_client_id=' + td_client_id + '&account=' + account;
  createImage(dbm_url);
};

var td = new Treasure({
    host: 'in.treasuredata.com',
    writeKey: '9265/d4a94f4730be45ab1d6248491444b38c08fe240f',
    database: document.domain.replace(".net","")
  });

td.set('$global', 'td_global_id', 'td_global_id');

    // Enable click tracking
 td.trackClicks();
  
td.trackPageview(document.domain.replace(".net","_all"),sync_callback);
