/*
Code modified from:
https://dev.to/aveb/making-your-first-get-request-to-youtube-search-api-4c2f

*/

function getVideo() {
    
    $.ajax({
      
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyDoqPTMMQoIGAndhnX17aKH-Y4IyiH8elU',
          q: $("#searchbar").val() + " ssbu",
          part: 'snippet',
          maxResults: 5,
          type: 'video',
          videoEmbeddable: true,
      },
      success: function(data){
          embedVideo(data);
      },
      error: function(response){
          console.log("Request Failed")
      }
    });
  }

function embedVideo(data) {
    $('#vidframe1').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('#vidtitle1').text(data.items[0].snippet.title)
    $('#viddesc1').text(data.items[0].snippet.description)

    $('#vidframe2').attr('src', 'https://www.youtube.com/embed/' + data.items[1].id.videoId)
    $('#vidtitle2').text(data.items[1].snippet.title)
    $('#viddesc2').text(data.items[1].snippet.description)

    $('#vidframe3').attr('src', 'https://www.youtube.com/embed/' + data.items[2].id.videoId)
    $('#vidtitle3').text(data.items[2].snippet.title)
    $('#viddesc3').text(data.items[2].snippet.description)

    $('#vidframe4').attr('src', 'https://www.youtube.com/embed/' + data.items[3].id.videoId)
    $('#vidtitle4').text(data.items[3].snippet.title)
    $('#viddesc4').text(data.items[3].snippet.description)

    $('#vidframe5').attr('src', 'https://www.youtube.com/embed/' + data.items[4].id.videoId)
    $('#vidtitle5').text(data.items[4].snippet.title)
    $("#viddesc5").text(data.items[4].snippet.description)
}
getVideo();