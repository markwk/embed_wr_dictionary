$(document).ready(function() {
  $('#search-dictionary').click(function() {
    $('#wr_content').slideToggle('slow');
    if ($('#search-dictionary').html() =='Search Dictionary for Words') {
      $('#search-dictionary').html('Hide Dictionary'); 
    }
    else {
      $('#search-dictionary').html('Search Dictionary for Words');  
    }
  });
});