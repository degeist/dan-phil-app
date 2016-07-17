$(document).ready(function() {
  // When selecting pre-made bg in modal, the artboard bg should change
  $('.select-background').click(function() {
    var chosenImg = $(this).find('img').attr('src');
    var chosenImgParent = chosenImg.replace('/thumbnails', '');
    $('#artboard').css("background-image", "url(" + chosenImgParent +")");
    $('#backgroundUploadModal').modal('hide');
  })

  // Inline text edit
  $('#userCoverTextEditable').inlineEdit('click');

  // Init tooltips
  $('[data-toggle="tooltip"]').tooltip();

});
