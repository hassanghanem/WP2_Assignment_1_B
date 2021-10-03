$(document).ready(function () {
    $('#submit').click(function () {
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var gender = $('#gender').val();
        if (username.length == 0) {
            $('#p0').text('Please enter your Username');
            $('#username').focus();
            return false;
        }
        else if (email.length == 0) {
            $('#p1').text('Please enter your email address');
            $('#email').focus();
            return false;
        }
        else if (password.length == 0) {
            $('#p2').text('Please enter your password');
            $('#password').focus();
            return false;
        }
        else if ($("#gender:checked").length > 1 || $("#gender:checked").length == 0) {
            $('#p3').text('Please select your gender ');
            $('#gender').focus();
            return false;
        }
        else {
            if ($('#email').val() && ($('#password').val())) {
                alert('Welcome to our Website');
                return true;
            }
            else {
                return false;
            }
        }
    });
});

