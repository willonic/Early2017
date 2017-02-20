$('#clock').countdown('2017/06/02', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<h5><span class="badge badge-primary">%m</span> months '
    + '<span class="badge badge-primary">%d</span> days '
    + '<span class="badge badge-primary">%H</span> hours '
    + '<span class="badge badge-primary">%M</span> minutes '
    + '<span class="badge badge-primary">%S</span> seconds</h5>'));
});
