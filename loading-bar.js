  window.addEventListener(&#39;scroll&#39;, function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight;
    var winHeight = window.innerHeight;
    var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    
    document.getElementById(&#39;progress-bar&#39;).style.width = scrollPercent + &#39;%&#39;;
  });