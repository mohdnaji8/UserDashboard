/**
 * Created by lanakh on 23/09/17.
 */


var base_url = $('#base_url').val();
$(document).ready(function () {
    var table = $('#billstable');

    var oTable = table.dataTable({

        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
        // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
        // So when dropdowns used the scrollable div should be removed.
        //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

        "lengthMenu": [
            [5,10, 15, 20, -1],
            [5,10, 15, 20, "All"] // change per page values here
        ],

        // Or you can use remote translation file
        //"language": {
        //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
        //},
        /*
         "sAjaxSource": base_url + "jobs/jobs/get_gif/401123456",
         "sAjaxDataProp": "",
         "aoColumns": [
         {"mData": "SER"},
         {"mData": "QUAL_TYPE"},
         {"mData": "QUAL_FIELD"},
         {"mData": "UNIVERSITY"},
         {"mData": "GRAD_DATE"},
         {"mData": "GPA"},
         ],
         */
        // set the initial value
        "pageLength": -1,

        "language": {
            "lengthMenu": " _MENU_ records"
        },
        "columnDefs": [
            { // set default column settings
                'orderable': true,
                'targets': [0]
            },
            {
                "searchable": true,
                "targets": [0]
            }
        ],
        "order": [
            [0, "asc"]
        ] // set first column as a default sort by asc
    });

    $('.details').click(function () {
        var first_col = $(this).parent().parent().find('input[name="num_bill[]"]').val();
        $('#show_num_bill').text(first_col);
    });
    $('input[name="meter-read[]"]').click(function () {
        var sub;
        sub= $(this).parent().parent().find('.subscribers').val();
        $('#subscriber1').text(sub);
        $.ajax({
            url: base_url + "bills/bills/get_bills_is_found/" + sub,
            type: "post",
            success: function (e) {
                if (e==0)
                {
                    $('.sendClass').fadeIn();
                    var form1 = $('#modal11');
                    var error1 = $('.alert-danger', form1);
                    var success1 = $('.alert-success', form1);
                    $('#count_read').val("");

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
                            count_read: {
                                required: true,
                                minlength: 5,
                                maxlength: 6
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
                    $('input[name="send_counter[]"]').click(function () {
                        var count_read = $('#count_read').val();
                        var subscr= $(this).parent().parent().parent().find('#subscriber1').text();
                        if (form1.valid() == false) {
                            return false;
                        }
                        else {

                            var tr= $(this).parent().parent();

                            if ($('#count_read').val() !=""||$('#count_read').val() !=0 ){

                                $.ajax({
                                    url: base_url + "bills/bills/insert_counter_read",
                                    type: "post",
                                    data: {subscr:subscr,count_read: count_read},
                                    success: function (e) {
                                            if(!isNaN(e)) {
                                                toastr.success("تم إدخال القراءة");
                                                tr.find('div[id="sendClass[]"]').hide();
                                            }
                                    },
                                    error: function (e) {
                                        toastr.error("حدث خطأ في إدخال القراءة");
                                    }
                                });


                            }
                        }
                    });

                }
                else {
                    $.ajax({
                    url: base_url + "bills/bills/get_bills_is_found2/" + sub,
                    type: "post",
                    success: function (e) {
                        var data=$.parseJSON(e);
                        $('#count_read').val(data[0]['KW_READ']);
                    },
                    error: function (e) {
                        toastr.error("حدث خطأ في إدخال القراءة");
                    }
                    });
                    $('.sendClass').fadeOut();


                }
            },
                error: function (e) {
                toastr.error("حدث خطأ في تقديم الطلب");
            }
        });
    });
});