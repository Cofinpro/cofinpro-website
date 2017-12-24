$(document).ready(function () {

    $('#navbarToggleExternalContent').collapse({toggle: false})

    $('#button-startseite-collapse').click(function () {

        if ( $( '#button-startseite-collapse>i' ).hasClass( "fa" ) ) {
            $('#navbarToggleExternalContent').collapse('toggle')

            $('#button-startseite-collapse>i').toggleClass('fa-chevron-down')
            $('#button-startseite-collapse>i').toggleClass('fa-chevron-up')
        }

        if( $( '#button-startseite-collapse>i' ).hasClass( "material-icons" ) ) {
            $('#navbarToggleExternalContent').collapse('toggle')

            $('#button-startseite-collapse>i').text(function (i, old) {
                return old == 'keyboard_arrow_down'
                    ? 'keyboard_arrow_up'
                    : 'keyboard_arrow_down';
            });
        }
    });

    $('#oldNewsContent').collapse({toggle: false})
    
        $('#button-pinnwand-collapse').click(function () {

            if ( $( '#button-pinnwand-collapse>i' ).hasClass( "fa" ) ) {
                $('#oldNewsContent').collapse('toggle')
    
                $('#button-pinnwand-collapse>i').toggleClass('fa-chevron-down')
                $('#button-pinnwand-collapse>i').toggleClass('fa-chevron-up')
            }
    
            if( $( '#button-pinnwand-collapse>i' ).hasClass( "material-icons" ) ) {
                $('#oldNewsContent').collapse('toggle')
    
                $('#button-pinnwand-collapse>i').text(function (i, old) {
                    return old == 'keyboard_arrow_down'
                        ? 'keyboard_arrow_up'
                        : 'keyboard_arrow_down';
                });
            }
    

        });
    

});
