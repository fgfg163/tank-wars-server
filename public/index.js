(function (window, document) {

  var source = new EventSource('/get-room-list')
  source.onmessage = function (event) {
    document.getElementById('result').innerHTML += event.data + '<br />'
  }
  source.addEventListener('keepalive', function (e) {
    console.log(e.data);
  });
})(window, document);
