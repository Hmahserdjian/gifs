var gifs = ["butters", "ralph wiggum", "rick and morty", "archer"];

$("button").on("click", function () {

      var show = $(this).attr("data-show");
      console.log(show);

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dUOR33r2f01kwcquDh7haLP2dQSyGMMV&limit=10";
      
      $.ajax({
                  url: queryURL,
                  method: "GET"
            })
            .then(function (response) {
                  {
                        $("#show-view").text(JSON.stringify(response));
                  };
                  console.log(response);

                  var results = response.data;

                  for (var i = 0; i < results.length; i++) {

                        if (results[i].rating !== "r" && results[i].rating !== "pg") {

                              var gifDiv = $("<div class='item'>");

                              var rating = results[i].rating;

                              var p = $("<p>").text("Rating: " + rating);

                              var showImage = $("<img>");

                              showImage.attr("src", results[i].images.fixed_height.url);

                              gifDiv.append(p);
                              gifDiv.append(showImage);

                              $("#show-me-the-gify").prepend(gifDiv);
                        }
                  }
             


            });
            
             
});