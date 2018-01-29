var color, size; 

color = $('#colorPicker').val();
$('#colorPicker').on('change', function(){
  color = $('#colorPicker').val();
});


size = $('#sizePicker').on('change', 'input[type=number]', function() {
  $(this).attr('value', $(this).val());
  size = [$('#inputHeight').val(), $('#inputWeight').val()];
});

$('#sizePicker').submit(function(evt) {
  evt.preventDefault();
  $('#pixelCanvas').empty();
  makeGrid(size);
});

$('#pixelCanvas').on('mousedown mouseover', 'td', function (evt) {
  evt.preventDefault();
  if(evt.which === 1) {
    $(this).css('background-color', color);
  }
});

function makeGrid(size) {
  let height = size[0];
  let width = size[1];

  for (var row = 0; row < height; row++) {
    $('#pixelCanvas').append('<tr></tr>');
    for (var col = 0; col < width; col++) {
      $('tr').last().append('<td></td>');
    }
  }
}
