var FormValidation = function () {

    // basic validation
    var handleValidation1 = function() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#complaint_form');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);

        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            messages: {
                select_multi: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
            },
            rules: {
                name: {
                    minlength: 2,
                    required: true
                },
                select: {
                    required: true
                },
                title: {
                    required: true
                },
                detail : {
                    required: true
                },
                address: {
                    required: true
                },
                Governorate: {
                    required: true
                },
                District: {
                    required: true
                },
                mobile: {
                    required: true ,
                    digits: true
                },
                phone: {
                    required: true ,
                    digits: true
                },
                email: {
                    required: true ,
                    email: true
                },

                select_multi: {
                    required: true,
                    minlength: 1,
                    maxlength: 3
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
                App.scrollTo(error1, -200);
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                success1.show();
                error1.hide();

            }
        });

        $('#submit_complaint').click(function () {
            if (form1.valid() == true) {
            //    alert("سيتم تقديم الطلب");
            }
        });

    }
    var handleValidation3 = function() {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation

        var form1 = $('#community-form');
        var error1 = $('.alert-danger', form1);
        var success1 = $('.alert-success', form1);

        form1.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            messages: {
                select_multi: {
                    maxlength: jQuery.validator.format("Max {0} items allowed for selection"),
                    minlength: jQuery.validator.format("At least {0} items must be selected")
                }
            },
            rules: {
                place: {
                    required: true
                },
                num_account: {
                    required: true
                },
                ser_num_account: {
                    required: true
                },
                req_date: {
                    required: true
                },
                applicant: {
                    required: true
                },
                type_doc: {
                    required: true
                },
                num_doc: {
                    required: true
                },
                applicant_name: {
                    required: true ,
                    digits: true
                },
                mobile: {
                    required: true ,
                    digits: true
                },
                phone: {
                    required: true ,
                    digits: true
                },
                email: {
                    required: true ,
                    email: true
                },
                job: {
                    required: true
                },

                service_type: {
                    required: true
                },
                faz: {
                    required: true
                },
                District:{
                    required: true
                },
                neighborhood: {
                    minlength: 2,
                    required: true
                },
                peice: {
                    required: true
                },
                peice_num: {
                    required: true
                },
                home_name: {
                    required: true
                },
                account_neighbor_num: {
                    required: true
                },
                neighbor_place: {
                    required: true ,

                },
                neighbor_name: {
                    required: true ,

                },
                home_number : {
                    required: true ,
                    digits: true
                },

                select_multi: {
                    required: true,
                    minlength: 1,
                    maxlength: 3
                }
            },

            invalidHandler: function (event, validator) { //display error alert on form submit
                success1.hide();
                error1.show();
                App.scrollTo(error1, -200);
            },

            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },

            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },

            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            },

            submitHandler: function (form) {
                success1.show();
                error1.hide();

            }
        });

        $('#update_info').click(function () {
            if (form1.valid() == true) {
             //   alert("سيتم تقديم الطلب");
            }
        });

    }
    var handleValidation4 = function() {
        // for more info visit the official plugin documentation:
        // http://docs.jquery.com/Plugins/Validation

    }
    var handleWysihtml5 = function() {
        if (!jQuery().wysihtml5) {

            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5({
                "stylesheets": ["../assets/global/plugins/bootstrap-wysihtml5/wysiwyg-color.css"]
            });
        }
    }

    return {
        //main function to initiate the module
        init: function () {

            handleWysihtml5();
            handleValidation1();
            handleValidation3();
            handleValidation4();



        }

    };

}();

jQuery(document).ready(function() {
    FormValidation.init();
});