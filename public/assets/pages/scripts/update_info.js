/**
 * Created by mnaji on 20/09/2017.
 */



var base_url = $('#base_url').val();

$(document).ready( function() {
    var form1 = $('#update_info_form');
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
            f_name: {
                minlength: 2,
                required: true
            },
            sec_name: {
                required: true
            },
            third_name: {
                required: true
            },
            last_name: {
                required: true
            },
            family: {
                required: true
            },
            mobile: {
                required: true ,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            telephone: {
                required: true ,
                digits: true,
                minlength: 7,
                maxlength: 7
            },

            email: {
                required: true ,
                email: true
            },
            city: {
                required: true
            },

            address: {
                required: true
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
    $('#insert_info').click(function () {
        if (form1.valid() == false) {
            return false;
        }else {
                $.ajax({
                    url: base_url + "Campaigns/get_subscriber_info_count",
                    type: "POST",
                    success: function (e) {
                        if (e==0)
                        {
                            var arr = [];
                            arr[1] = $('#f_name').val();
                            arr[2] = $('#sec_name').val();
                            arr[3] = $('#third_name').val();
                            arr[4] = $('#last_name').val();
                            arr[5] =$('#email').val();
                            arr[6] = $('#telephone').val();
                            arr[7] = $('#mobile').val();
                            arr[8] = $('#district option:selected').val();
                            arr[9] = $('#city').val();
                            arr[10] = $('#address').val();
                            $.ajax({
                                url: base_url + "community/insert_refresh_data",
                                type: "POST",
                                data: {arr: arr},
                                success: function (e) {
                                    if (!isNaN(e))
                                        toastr.success('تمت عملية الاضافة بنجاح');
                                    else
                                    {
                                        console.log(e);
                                        toastr.error('لم يتم عملية الحفظ');

                                    }
                                },
                                error: function (e) {
                                    console.log(e);
                                    toastr.error('خطأ في عملية الحفظ');
                                }
                            });
                        }
                        else
                        {
                            var arr = [];
                            arr[1] = $('#f_name').val();
                            arr[2] = $('#sec_name').val();
                            arr[3] = $('#third_name').val();
                            arr[4] = $('#last_name').val();
                            arr[5] =$('#email').val();
                            arr[6] = $('#telephone').val();
                            arr[7] = $('#mobile').val();
                            arr[8] = $('#district option:selected').val();
                            arr[9] = $('#city').val();
                            arr[10] = $('#address').val();
                            $.ajax({
                                url: base_url + "community/update_refresh_data",
                                type: "POST",
                                data: {arr: arr},
                                success: function (e) {
                                    //   alert(e);
                                    if (!isNaN(e))
                                        toastr.success('تمت عملية التعديل بنجاح');
                                    else
                                        toastr.error('لم يتم عملية التعديل');

                                },
                                error: function (e) {
                                    toastr.error('خطأ في عملية التعديل');
                                }
                            });
                        }
                    },
                    error: function (e) {
                        toastr.error('خطأ في عملية الحفظ');
                    }
                });

        }
    });

})