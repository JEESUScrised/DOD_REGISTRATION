$(document).ready(function() {
    $('.switch input[type="checkbox"]').click(function() {
      $('.hiddenO').slideToggle('fast'); 
    });
  });
  

  
$(document).ready(function() {
  $('input[type="submit"]').click(function() {
      clearInputFields();
  });
});

function clearInputFields() {
  $('input[type="text"]').val(''); 
}  
