Leap.loop(function(frame) {
   $('.fingers').html(frame.fingers.length);

   $.each(frame.hands, function(i, h) {
    var x = Math.floor(h.sphereCenter[0]);
    var y = Math.floor(h.sphereCenter[1]);
    var r = Math.floor(h.sphereRadius);

    $('.hands').html(x + ", " + y + ", " + r);
    $('circle').attr('cx', 180 + x);
    $('circle').attr('cy', 180 - y);
    $('circle').attr('r', r);
   });
});
