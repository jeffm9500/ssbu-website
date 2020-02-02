function getVideo() {
    
    $.ajax({
      
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyDoqPTMMQoIGAndhnX17aKH-Y4IyiH8elU',
          q: $("#searchbar").val(),
          part: 'snippet',
          maxResults: 1,
          type: 'video',
          videoEmbeddable: true,
      },
      success: function(data){
          embedVideo(data)
      },
      error: function(response){
          console.log("Request Failed")
      }
    });
  }

function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
getVideo();