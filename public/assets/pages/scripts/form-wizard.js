var FormWizard = function () {
    var base_url = $('#base_url').val();

    return {
        //main function to initiate the module
        init: function () {
            if (!jQuery().bootstrapWizard) {
                return;
            }

            function format(state) {
                if (!state.id) return state.text; // optgroup
                return "<img class='flag' src='../../assets/global/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
            }

            $("#country_list").select2({
                placeholder: "Select",
                allowClear: true,
                formatResult: format,
                width: 'auto',
                formatSelection: format,
                escapeMarkup: function (m) {
                    return m;
                }
            });

            var form = $('#submit_form');
            var form2 = $('.save_validate2');

            var error = $('.alert-danger', form);
            var success = $('.alert-success', form);

            form.validate({
                doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                errorElement: 'span', //default input error message container
                errorClass: 'help-block help-block-error', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                rules: {
                    //account
                    username: {
                        minlength: 5,
                        required: true
                    },
                    WWW: {
                        required: true
                    },
                    f_name: {

                        required: true
                    },
                    sec_name: {

                        required: true
                    },
                    third_name: {

                        required: true
                    },
                    Job_title: {
                        required: true
                    },
                    Reason: {
                        required: true
                    },
                    place: {
                        required: true
                    },
                    company_name: {
                        required: true
                    },
                    date: {
                        required: true
                    }, Note_2: {
                        required: true
                    },
                    adv_num: {
                        required: true
                    },
                    date: {
                        required: true
                    }, state: {
                        required: true
                    },


                    last_name: {

                        required: true
                    },
                    password: {
                        minlength: 5,
                        required: true
                    },
                    rpassword: {
                        minlength: 5,
                        required: true,
                        equalTo: "#submit_form_password"
                    },
                    //profile
                    fullname: {
                        required: true
                    },
                    phone_num: {
                        required: true,
                        digits: true,
                        maxlength: 7,
                        minlength: 7,
                    },
                    mobile_num: {
                        required: true,
                        digits: true,
                        maxlength: 10,
                        minlength: 10,
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    phone: {
                        required: true
                    },
                    Social_status: {
                        required: true
                    },
                    special: {
                        required: true
                    },
                    special2: {
                        required: true
                    },
                    competence: {
                        required: true
                    },
                    University: {
                        required: true
                    },
                    Graduation_date: {
                        required: true
                    },
                    GPA: {
                        required: true,
                        digits: true
                    },
                    Health_status: {
                        required: true
                    },
                    gender: {
                        required: true
                    },
                    Date_of_Birth: {
                        required: true
                    },
                    place_of_Birth: {
                        required: true
                    },
                    address: {
                        required: true
                    },
                    city: {
                        required: true
                    },
                    experience_place: {
                        required: true
                    },
                    experience_num: {
                        required: true,
                        digits: true
                    },
                    course_place: {
                        required: true
                    },
                    course_num: {
                        required: true,
                        digits: true
                    },
                    country: {
                        required: true
                    },
                    exp_date_from: {
                        required: true
                    },
                    exp_date_to: {
                        required: true
                    },
                    coruse_date_from: {
                        required: true
                    },
                    coruse_date_to: {
                        required: true
                    },
                    read_rate: {
                        required: true,
                        digits: true,
                        range: [0, 100]

                    },
                    write_rate: {
                        required: true,
                        digits: true,
                        range: [0, 100]
                    },
                    speak_rate: {
                        required: true,
                        digits: true,
                        range: [0, 100]
                    },
                    //payment
                    card_name: {
                        required: true
                    },
                    sel_m: {
                        required: true
                    },
                    sel_lang: {
                        required: true
                    },
                    card_number: {
                        minlength: 16,
                        maxlength: 16,
                        required: true
                    },
                    card_cvc: {
                        digits: true,
                        required: true,
                        minlength: 3,
                        maxlength: 4
                    },
                    card_expiry_date: {
                        required: true
                    },
                    'payment[]': {
                        required: true,
                        minlength: 1
                    }
                },

                messages: { // custom messages for radio buttons and checkboxes
                    'payment[]': {
                        required: "Please select at least one option",
                        minlength: jQuery.validator.format("Please select at least one option")
                    }
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                        error.insertAfter("#form_gender_error");
                    } else if (element.attr("name") == "payment[]") { // for uniform checkboxes, insert the after the given container
                        error.insertAfter("#form_payment_error");
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success.hide();
                    error.show();
                    App.scrollTo(error, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.form-group').removeClass('has-success').addClass('has-error');
                    $(element)
                        .closest('.err-table').removeClass('has-success').addClass('has-error');// set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.form-group').removeClass('has-error'); // set error class to the control group
                    $(element)
                        .closest('.err-table').removeClass('has-error');
                },

                success: function (label) {
                    if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                        label
                            .closest('.form-group').removeClass('has-error').addClass('has-success');
                        label
                            .closest('.err-table').removeClass('has-error').addClass('has-success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label
                            .addClass('valid') // mark the current input as valid and display OK icon
                            .closest('.err-table').removeClass('has-error').addClass('has-success'); // set success class to the control group

                        label
                            .addClass('valid') // mark the current input as valid and display OK icon
                            .closest('.err-table').removeClass('has-error').addClass('has-success');
                    }
                },

                submitHandler: function (form) {
                    success.show();
                    error.hide();
                    //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                }

            });

            var displayConfirm = function () {
                $('#tabg5 .form-control-static', form).each(function () {
                    var input = $('[name="' + $(this).attr("data-display") + '"]', form);
                    if (input.is(":radio")) {
                        input = $('[name="' + $(this).attr("data-display") + '"]:checked', form);
                    }
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    } else if ($(this).attr("data-display") == 'payment[]') {
                        var payment = [];
                        $('[name="payment[]"]:checked', form).each(function () {
                            payment.push($(this).attr('data-title'));
                        });
                        $(this).html(payment.join("<br>"));
                    }
                });
            }

            var handleTitle = function (tab, navigation, index) {
                var total = navigation.find('li').length;
                var current = index + 1;
                // set wizard title
                $('.step-title', $('#form_wizard_1')).text('Step ' + (index + 1) + ' of ' + total);
                // set done steps
                jQuery('li', $('#form_wizard_1')).removeClass("done");
                var li_list = navigation.find('li');
                for (var i = 0; i < index; i++) {
                    jQuery(li_list[i]).addClass("done");
                }

                if (current == 7) {
                    displayConfirm();
                }
                if (current == 1) {
                    $('#form_wizard_1').find('.button-previous').hide();
                } else {
                    $('#form_wizard_1').find('.button-previous').show();
                }

                if (current >= total) {
                    $('#form_wizard_1').find('.button-next').hide();
                    $('#form_wizard_1').find('.button-submit').show();
                } else {
                    $('#form_wizard_1').find('.button-next').show();
                    $('#form_wizard_1').find('.button-submit').hide();
                }
                App.scrollTo($('.page-title'));
            }

            // default form wizard
            $('#form_wizard_1').bootstrapWizard({
                'nextSelector': '.button-next',
                'previousSelector': '.button-previous',
                onTabClick: function (tab, navigation, index, clickedIndex) {
                    return false;


                    success.hide();
                    error.hide();
                    if (form.valid() == false) {
                        return false;
                    }

                    handleTitle(tab, navigation, clickedIndex);
                },

                onNext: function (tab, navigation, index) {

                    var btn_next = 1;
                    // btn_next == 1 this is insert
                    // btn_next == 2 this is update

                    success.hide();
                    error.hide();

                    if (form.valid() == false) {
                        return false;
                    } else {
                        // $("form").serialize()
                        if (index == 1) {

                          //  var ID = "923456456";
                            var ID = "904365673";
                            $.ajax({


                                url: base_url + "jobs/jobs/get",
                                type: "POST",
                                data: {ID:ID},

                                success: function (e) {
                                    if (e == 1) {
                                       // alert(e);

                                        var arr = [];
                                        arr[0] = $('#f_name').val();
                                        arr[1] = $('#sec_name').val();
                                        arr[2] = $('#third_name').val();
                                        arr[3] = $('#last_name').val();
                                        arr[4] = $('#gender option:selected').val();
                                        arr[5] = $('#Social_status option:selected').val();
                                        arr[6] = $('#Health_status option:selected').val();
                                        arr[7] = $('#country option:selected').val();
                                        arr[8] = $('#city').val();
                                        arr[9] = $('#address').val();
                                        arr[10] = $('#Date_of_Birth').val();
                                        arr[11] = $('#place_of_Birth').val();
                                        arr[12] = $('#mobile_num').val();
                                        arr[13] = $('#phone_num').val();
                                        arr[14] = ID;



                                        $.ajax({

                                            url: base_url + "jobs/jobs/insert",
                                            type: "POST",
                                            data: {arr: arr},
                                            success: function (e) {
                                                console.log(e);
                                                if (!isNaN(e))
                                                    toastr.success('تمت عملية الاضافة بنجاح');
                                                else
                                                    toastr.error('لم الحفظ');

                                            },
                                            error: function (e) {
                                                toastr.error('خطأ في عملية الحفظ');
                                            }

                                        });

                                    } else {

                                        var arr = [];
                                        arr[0] = $('#f_name').val();
                                        arr[1] = $('#sec_name').val();
                                        arr[2] = $('#third_name').val();
                                        arr[3] = $('#last_name').val();
                                        arr[4] = $('#gender option:selected').val();
                                        arr[5] = $('#Social_status option:selected').val();
                                        arr[6] = $('#Health_status option:selected').val();
                                        arr[7] = $('#country option:selected').val();
                                        arr[8] = $('#city').val();
                                        arr[9] = $('#address').val();
                                        arr[10] = $('#Date_of_Birth').val();
                                        arr[11] = $('#place_of_Birth').val();
                                        arr[12] = $('#mobile_num').val();
                                        arr[13] = $('#phone_num').val();
                                        arr[14] = ID;
//alert(arr[10]);

                                        $.ajax({

                                            url: base_url + "jobs/jobs/update",
                                            type: "POST",
                                            data: {arr:arr},
                                            success: function (e) {
                                                console.log(e);
                                                if (!isNaN(e))
                                                    toastr.success('تمت عملية التعديل بنجاح');
                                                else
                                                    toastr.error('لم يتم التعديل');

                                            },
                                            error: function (e) {
                                                toastr.error('خطأ في عملية التعديل');
                                            }
                                        });
                                    }

                                }

                            });

                        }


                    }


                    handleTitle(tab, navigation, index);
                },

                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    handleTitle(tab, navigation, index);
                },
                onTabShow: function (tab, navigation, index) {

                    var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 100;
                    $('#form_wizard_1').find('.progress-bar').css({
                        width: $percent + '%'
                    });
                }
            });


            $('.save_validate2').click(function () {
                alert("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW");
            });


            $('#form_wizard_1').find('.button-previous').hide();

            $('#form_wizard_1 .button-submit').click(function () {
                alert('Finished! Hope you like it :)');
            }).hide();


            //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
            $('#country_list', form).change(function () {
                form.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
        }

    };

}();

jQuery(document).ready(function () {

    FormWizard.init();

});