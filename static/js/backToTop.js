$(document).ready(function () {

    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

});