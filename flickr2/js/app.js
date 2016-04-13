$(document).ready(function() {


 $('form').submit(function (evt) {
  evt.preventDefault();
  var searchField = $('#search');
  var searchTerm = $('#search').val();
  var searchButton = $('#submit');

  searchField.prop('disable', true);
  searchButton.attr('disable',true).val('searching...');


    // the AJAX part
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var animal = $(this).text();
    var flickrOptions = {
      tags: searchTerm,
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      searchField.prop('disable',false);
      searchButton.attr('disable',false).val('Search');
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); // end click

}); // end ready