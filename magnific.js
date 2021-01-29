$(document).ready(function() {
    $('#gallery-center').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options

        gallery: {
            // options for gallery
            enabled: true
          }
      });
   
  });