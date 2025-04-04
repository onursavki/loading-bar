window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var docHeight = document.documentElement.scrollHeight;
  var winHeight = window.innerHeight;
  var scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
  
  document.getElementById('progress-bar').style.width = scrollPercent + '%';
});
