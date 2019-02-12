function validate() {
    let usernameBool = false;
    let passwordBool = false;
    let passwordConfirmBool = false;
    let emailBool = false;
    let companyCheckBool = false;
    let companyNumberBool = false;

    //check box
    $('#company').on('change', function () {
        if ($('#company').prop('checked') === true) {
            $('#companyInfo').css('display', 'inline');
            companyCheckBool = true;
        } else {
            $('#companyInfo').css('display', 'none')
        }
    });


    $('#submit').on("click", function (ev) {
        let userNames = $('#username').val();
        let emails = $('#email').val();
        let passWord = $('#password').val();
        let passWordConfirm = $('#confirm-password').val();

        //username validation
        let regex = /^[a-zA-Z0-9]+$/gm;
        if (regex.test(userNames) === true && userNames.length >= 3 && userNames.length <= 20) {
            usernameBool = true;
        }

        //email validation
        let emailRegEx = /(.)*@(.)*\.(.)*/g;
        if (emailRegEx.test(emails) === true) {
            emailBool = true;
        }

        //password validation
        let passRegEx = /^[a-zA-Z0-9_]+$/gm;
        if (passWord.length >= 5 && passWord.length <= 15 && passRegEx.test(passWord) === true && passWord === passWordConfirm) {
            passwordBool = true;
            passwordConfirmBool = true;
        }

        //company number validation
        if (companyCheckBool === true) {
            let compNum = $('#companyNumber').val();

            if (compNum >= 1000 && compNum <= 9999) {
                companyNumberBool = true;
            }
        }
        if (usernameBool === true && emailBool === true && passwordBool === true && passwordConfirmBool === true) {
            if (companyCheckBool === true) {
                if (companyNumberBool === true) {
                    $('#valid').css('display', 'inherit');
                } else {
                    $('#companyNumber').css('border-color', 'red')
                }
            } else {
                $('#valid').css('display', 'inherit');
            }
        } else {
            $('#valid').css('display', 'none');
        }

        if (usernameBool === false) {
            $('#username').css('border-color', 'red')
        }
        if (emailBool === false) {
            $('#email').css('border-color', 'red')
        }
        if (passwordBool === false) {
            $('#password').css('border-color', 'red')
        }
        if (passwordConfirmBool === false) {
            $('#confirm-password').css('border-color', 'red')
        }
        if (companyCheckBool === true) {
            if (companyNumberBool === false) {
                $('#companyNumber').css('border-color', 'red')
            }
        }

        ev.preventDefault();

    });
}
