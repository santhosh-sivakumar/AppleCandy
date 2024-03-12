// This code is underdevelopment and is not yet included in the main code.

$('.nav_item').on('mouseenter', function(e) {
      var centerX = $(this).offset().left + $(this).outerWidth() / 2; // Calculate the x-coordinate of the center of the .nav_item
      var distance = Math.abs(e.clientX - centerX); // Calculate the distance from the mouse pointer to the center
      var scaleFactor = 1 + (distance / ($(this).outerWidth() / 2)); // Calculate the scaling factor
      $(this).css('transform', 'scale(' + scaleFactor + ')');
    });
    
    $('.nav_item').on('mouseleave', function() {
      $(this).css('transform', 'scale(1)');
    });
    