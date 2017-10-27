window.onload = function() {
  console.log("Ready!!! MEOW!!!");
  var searchGiphyButton = document.getElementById("getMeow");
  var giphyImage = document.getElementById("rando-gliph-img");

  searchGiphyButton.addEventListener("click", function() {
    console.log("Meow Click Click!!!");
    fetchGiphy();
  });

  function fetchGiphy() {
    var xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=kitten"
    );
    //console.log(XMLHttpRequest);
    xhr.onload = function() {
      if (xhr.status === 200 && xhr.readyState === 4) {
        var payload = JSON.parse(xhr.response);
        console.log(payload.data.image_url);
        giphyImage.src = payload.data.image_url;
      }
    };
    xhr.send();
  }
};
