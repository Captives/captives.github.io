$(function() {
    // ------------------------------------------------------ //
    //  Off-canvas menu
    // ------------------------------------------------------ //

    $(document).ready(function() {
        $('[data-toggle="offcanvas"]').click(function() {
            $('.row-offcanvas').toggleClass('active')
        });
    });

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    $("#colour").change(function() {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

        }

        return false;
    });

});