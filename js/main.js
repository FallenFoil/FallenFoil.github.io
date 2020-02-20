(function($) {
    var	$window = $(window),
    $body = $('body');
    
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });
})(jQuery);