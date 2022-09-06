$(document).ready(function () {
    var str = document.getElementById("rich-text").innerHTML;
    var words = str.match(/(\w+)/g).length;
    var readTime = words / 400;
    var result = readTime.toFixed(2);
    result = Math.ceil(result);
    document.getElementById("read-time-result").innerHTML = result;
  });