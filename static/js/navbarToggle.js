$(document).ready(function () {

    $(document).on('click','.navbar-collapse.show',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    }); 
    
    $(document).on('click','#navbarCareerContent.show',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    }); 

    $('#perspectiveNavbarToggler').click(function () {

        $('#navbarSupportedContent').collapse('hide')

    });

    $('#menuNavbarToggler').click(function () {

        $('#navbarCareerContent').collapse('hide')

    });

});
