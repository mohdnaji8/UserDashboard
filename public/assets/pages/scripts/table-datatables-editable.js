var base_url = $('#base_url').val();
function handleChange(input) {
    if (input.value < 0) input.value = 0;
    if (input.value > 100) input.value = 100;
}

function disableOption() {
    $('#sample_editable_2 > tbody >tr ').each(function () {


        var getLanguage = $(this).find('td div select option:selected').val();
        alert(getLanguage);
        /*
         $(".getLang_sel option[value*='" +
         a +
         "']").prop('disabled', true);
         */
    });

}

function FormValid() {

    var form = $('#submit_form');

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
                digits: true

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
            address: {
                required: true
            },
            city: {
                required: true
            },
            competence: {
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
            d_number: {
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
        }
    });
    return form.valid();
}

var TableDatatablesEditable = function () {

////////////////////////////////////////////////////[جدول المؤهلات العليمة///////////////////////////////////////////

    var handleTable = function () {
        var nAdd = 1;

        function restoreRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);

            for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                oTable.fnUpdate(aData[i], nRow, i, false);
            }

            oTable.fnDraw();
        }

        function editRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            // jqTds[0].innerHTML = '<input type="text" class="form-control input-small" value="' + aData[0] + '">';
            /*

            */
            jqTds[0].innerHTML = '<div style="padding-right: 10px;padding-left: 10px"  class="form-group"><input name="" class="form-control input-small seq_num" id="seq_num" disabled type="text" value="' + aData[0] + '"> </div>';
            jqTds[1].innerHTML = '<div style="padding-right: 15px;" class="form-group"><select id="sel1" name="special" class="select_id form-control input-small special" value="' + aData[1] + '">' +
               /* '<option value="0"></option>' +
                '<option value="1">مؤهل مهني</option>' +
                '<option value="2" >ثانوية عامة</option>' +
                '<option value="3">دبلوم متوسط</option>' +
                '<option value="4">بكالوريس</option>' +
                '<option value="5">دبلوم عالي</option>' +
                '<option value="6">ماجستير</option>' +
                '<option value="7">دكتوراه</option>' +
                '<option value="8">دبلوم مهني سنتين</option>' + */
                '</select> </div>';

            $.ajax({
                url: base_url + "jobs/jobs/get_const_editableTable",
                type: "POST",
                data: {con_no:161},
                success: function (e) {
                    var json = $.parseJSON(e);
                    var elm = document.getElementById('sel1'), // get the select
                        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
                    $.each(json , function (k,v) {

                            var option = document.createElement('option'); // create the option element
                            option.value = v.CON_NO; // set the value property
                            option.appendChild(document.createTextNode(v.CON_NAME)); // set the textContent in a safe way.
                            df.appendChild(option); // append the option to the document fragment


                    });
                    elm.appendChild(df);
                    var text1 = aData[1];
                    $("select.select_id option").filter(function () {
                        return $(this).text() == text1;
                    }).prop('selected', true);
                }
            });



            jqTds[2].innerHTML = '<div style="padding-right: 10px;padding-left: 10px" class="form-group"><select id="sel2" name="special2" class="select2_id form-control input-small special2" value="' + aData[2] + '">' +
                /*'<option value="0"></option>' +
                '<option value="1">هندسة حاسوب</option>' +
                '<option value="2">تكنولوجيا المعلومات</option>' +
                '<option value="3">تجارة</option>' +
                '<option value="4">صحافة واعلام</option>' + */
                '</select> </div>';

            $.ajax({
                url: base_url + "jobs/jobs/get_const_editableTable",
                type: "POST",
                data: {con_no:162},
                success: function (e) {
                    var json = $.parseJSON(e);
                    var elm = document.getElementById('sel2'), // get the select
                        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
                    $.each(json , function (k,v) {

                        var option = document.createElement('option'); // create the option element
                        option.value = v.CON_NO; // set the value property
                        option.appendChild(document.createTextNode(v.CON_NAME)); // set the textContent in a safe way.
                        df.appendChild(option); // append the option to the document fragment


                    });
                    elm.appendChild(df);
                    var text2 = aData[2];
                    $("select.select2_id option").filter(function () {
                        return $(this).text() == text2;
                    }).prop('selected', true);

                }
            });

            jqTds[3].innerHTML = '<div style="padding-right: 10px;padding-left: 10px" class="form-group"> <input name="University" type="text" class="form-control input-small University" value="' + aData[3] + '"> </div>';
            jqTds[4].innerHTML = '<div style="padding-right: 10px;padding-left: 10px" class="form-group"><input name="Graduation_date" type="text" class="form-control input-small date-picker Graduation_date" value="' + aData[4] + '"> </div>';
            jqTds[5].innerHTML = '<div style="padding-right: 10px;padding-left: 10px" class="form-group"><input  name="GPA" type="text" onchange="handleChange(this);" class="form-control input-small GPA" value="' + aData[5] + '"> </div>';


            jqTds[6].innerHTML = '<a class="edit" href="">Save</a>';
            jqTds[7].innerHTML = '<a class="cancel" href="">Cancel</a>';

            $('.date-picker').datepicker();
            }




    function saveRow(oTable, nRow) {
        var jqInputs = $('input', nRow);
        var jqInputs2 = $('select.select_id', nRow);
        var jqInputs3 = $('select.select2_id', nRow);


        //  var getSelect = jqInputs2.find('option:selected').text();
        var getSelect1 = jqInputs2.find('option:selected').text();
        var getSelect2 = jqInputs3.find('option:selected').text();

        var getSelect1_value = jqInputs2.find('option:selected').val();
        var getSelect2_value = jqInputs3.find('option:selected').val();


        var arr_data = [];

        arr_data[0] = getSelect1_value;
        arr_data[1] = getSelect2_value;
        arr_data[2] = jqInputs[1].value;
        arr_data[3] = jqInputs[2].value;
        arr_data[4] = jqInputs[3].value;
        arr_data[5] = jqInputs[0].value;

        oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);

        oTable.fnUpdate(getSelect1, nRow, 1, false);
        oTable.fnUpdate(getSelect2, nRow, 2, false);
        oTable.fnUpdate(jqInputs[1].value, nRow, 3, false);
        oTable.fnUpdate(jqInputs[2].value, nRow, 4, false);
        oTable.fnUpdate(jqInputs[3].value, nRow, 5, false);

        oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 6, false);
        oTable.fnUpdate('<a class="delete" href="">Delete</a>', nRow, 7, false);
        oTable.fnDraw();


        $("table.getData_display").empty();


        var modify = document.getElementById("sample_editable_1").innerHTML;


        $("table.getData_display").append(modify);

        $("table.getData_display").find('#edit_th').remove();
        $("table.getData_display").find('#delete_th').remove();
        $("table.getData_display").find('.edit').remove();
        $("table.getData_display").find('.delete').remove();

        return arr_data;

    }


    function cancelEditRow(oTable, nRow) {
        var jqInputs = $('input', nRow);

        oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
        oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
        oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
        oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
        oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
        oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
        oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 6, false);
        oTable.fnDraw();
    }

    var table = $('#sample_editable_1');

    var oTable = table.dataTable({

        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
        // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
        // So when dropdowns used the scrollable div should be removed.
        //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
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
        "pageLength": 5,

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

    var tableWrapper = $("#sample_editable_1_wrapper");

    var nEditing = null;
    var nNew = false;

    $('#sample_editable_1_new').click(function (e) {
        e.preventDefault();

        if (nNew && nEditing) {
            if (confirm("Previose row not saved. Do you want to save it ?")) {
                saveRow(oTable, nEditing); // save
                $(nEditing).find("td:first").html("Untitled");
                nEditing = null;
                nNew = false;

            } else {
                oTable.fnDeleteRow(nEditing); // cancel
                nEditing = null;
                nNew = false;

                return;
            }
        }

        var aiNew = oTable.fnAddData(['', '', '', '', '', '', '', '']);
        var nRow = oTable.fnGetNodes(aiNew[0]);
        editRow(oTable, nRow);
        nEditing = nRow;
        nNew = true;
        nAdd = 2;

    });

    table.on('click', '.delete', function (e) {
        e.preventDefault();

        if (confirm("هل انت متأكد من عملية الحذف؟") == false) {
            return;
        }


        var nRow = $(this).parents('tr')[0];
        var aData = oTable.fnGetData(nRow);
        var seq = aData[0];

        $.ajax({
            url: base_url + "jobs/jobs/delete_qif",
            type: "POST",
            data: {seq: seq},
            success: function (e) {

                    toastr.success(' تمت عملية الحذف بنجاح');

            },
            error: function (e) {
                toastr.error('لم يتم الحذف');
            }


        });

        oTable.fnDeleteRow(nRow);

        var modify = document.getElementById("sample_editable_1").innerHTML;
        $("table.getData_display").empty();
        $("table.getData_display").append(modify);
        $("table.getData_display").find('#edit_th').remove();
        $("table.getData_display").find('#delete_th').remove();
        $("table.getData_display").find('.edit').remove();
        $("table.getData_display").find('.delete').remove();




    });

    table.on('click', '.cancel', function (e) {
        e.preventDefault();
        if (nNew) {
            oTable.fnDeleteRow(nEditing);
            nEditing = null;
            nNew = false;
        } else {
            restoreRow(oTable, nEditing);
            nEditing = null;
        }
    });

    var termTable = $('#sample_editable_1').dataTable();

    table.on('click', '.edit', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();


        var special = $(this).parent().parent().find('.special');
        var special2 = $(this).parent().parent().find('.special2');

        nNew = false;
        var nRow = $(this).parents('tr')[0];


        if (nEditing !== null && nEditing != nRow) {
            /* Currently editing - but not this row - restore the old before continuing to edit mode */

            restoreRow(oTable, nEditing);
            editRow(oTable, nRow);
            nEditing = nRow;
        } else if (nEditing == nRow && this.innerHTML == "Save") {

            /* Editing this row and want to save it */


            var valid_form = FormValid();
            if (valid_form == false) {

            } else {
                saveRow(oTable, nRow);
                // alert(arr);
                nEditing = null;
                if (nAdd == 2) {
                    // Add new Row
                    // if nAdd == 2 then Add new row

                    // oTable.fnUpdate(88, nRow, 0, false);
                    // oTable.fnDraw();
                    var arr = [];
                    var aData = oTable.fnGetData(nRow);
                    arr[0] = special.val();
                    arr[1] = special2.val();
                    arr[2] = aData[3];
                    arr[3] = aData[4];
                    arr[4] = aData[5];

                  //  alert(arr[0] + " " +arr[1]);
                    $.ajax({

                        url: base_url + "jobs/jobs/insert_qif",
                        type: "POST",
                        data: {arr: arr},
                    success: function (e) {
                        oTable.fnUpdate(e, nRow, 0, false);
                        oTable.fnDraw();
                        if (!isNaN(e))
                            toastr.success(' تمت عملية الاضافة بنجاح');
                        else
                            toastr.error('لم تتم عملية الاضافة');

                    },
                    error: function (e) {
                        toastr.error('لم يتم الحذف');
                    }


                });


                } else if (nAdd == 3) {
                    // Edit Row
                    var arr = [];
                    var aData = oTable.fnGetData(nRow);
                    arr[0] = aData[0];
                    arr[1] = special.val();
                    arr[2] = special2.val();
                    arr[3] = aData[3];
                    arr[4] = aData[4];
                    arr[5] = aData[5];

                    $.ajax({
                        url: base_url + "jobs/jobs/update_qif",
                        type: "POST",
                        data: {arr: arr},
                        success: function (e) {
                            if (!isNaN(e))
                                toastr.success(' تمت عملية التعديل بنجاح');
                            else
                                toastr.error('لم تتم عملية التعديل');

                        },
                        error: function (e) {
                            toastr.error('لم يتم التعديل');
                        }

                    });

                }

            }

        } else {
            /* No edit in progress - let's start one */

            nAdd = 3;
            editRow(oTable, nRow);
            nEditing = nRow;
        }
    });
}


////////////////////////////////////////////////////[جدول اللغات///////////////////////////////////////////
    var handleTable2 = function () {
        var nAdd = 1;
        function restoreRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);

            for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                oTable.fnUpdate(aData[i], nRow, i, false);
            }

            oTable.fnDraw();
        }

        function editRow(oTable, nRow) {

            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            jqTds[0].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="ser" disabled type="text" class="ZXC form-control input-small" value="' + aData[0] + '"></div>';
            jqTds[1].innerHTML = '<div style="padding-right: 15px;" class="form-group"><select id="sel4"  name="language" class="getLang_sel form-control input-small" value="' + aData[1] + '">' +
                /*'<option value=""></option>' +
                 '<option  value="L1">العربية</option>' +
                 '<option value="L2">الانجليزية</option>' +
                 '<option value="L3">الألمانية</option>' +
                 '<option value="L4">الفرنسية</option>' +
                 */
                '</select> </div>';
            $.ajax({
                url: base_url + "jobs/jobs/get_const_editableTable",
                type: "POST",
                data: {con_no:167},
                success: function (e) {
                    var json = $.parseJSON(e);
                    var elm3 = document.getElementById('sel4'), // get the select
                        dff = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
                    $.each(json , function (k,v) {

                        var option = document.createElement('option'); // create the option element
                        option.value = v.CON_NO; // set the value property
                        option.appendChild(document.createTextNode(v.CON_NAME)); // set the textContent in a safe way.
                        dff.appendChild(option); // append the option to the document fragment


                    });
                    elm3.appendChild(dff);
                    var text3 = aData[1];
                    $("select.getLang_sel option").filter(function () {
                        return $(this).text() == text3;
                    }).prop('selected', true);

                }
            });

            jqTds[2].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="read_rate" type="text" class="ZXC form-control input-small" value="' + aData[2] + '"></div>';
            jqTds[3].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="write_rate" type="text" class="form-control input-small " value="' + aData[3] + '"> </div>';
            jqTds[4].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="speak_rate" type="text" onchange="handleChange(this);" class="form-control input-small" value="' + aData[4] + '"> </div>';
            jqTds[5].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="Note" type="text"    class="form-control input-small" value="' + aData[5] + '"> </div>';
            jqTds[6].innerHTML = '<a class="edit " href="">Save</a>';
            jqTds[7].innerHTML = '<a class="cancel" href="">Cancel</a>';

        }

        function saveRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            var jqInputs2 = $('select.getLang_sel', nRow);

            var getSelect2 = jqInputs2.find('option:selected').text();



            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(getSelect2, nRow, 1, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 3, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 4, false);
            oTable.fnUpdate(jqInputs[4].value, nRow, 5, false);
            oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 6, false);
            oTable.fnUpdate('<a class="delete" href="">Delete</a>', nRow, 7, false);
            oTable.fnDraw();


            $("table.getData_display2").empty();


            var modify = document.getElementById("sample_editable_2").innerHTML;


            $("table.getData_display2").append(modify);

            $("table.getData_display2").find('#edit_th').remove();
            $("table.getData_display2").find('#delete_th').remove();
            $("table.getData_display2").find('.edit').remove();
            $("table.getData_display2").find('.delete').remove();

        }


        function cancelEditRow(oTable, nRow) {
            var jqInputs = $('input', nRow);

            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
            oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
            oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
            oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 6, false);
            oTable.fnDraw();
        }


        var table = $('#sample_editable_2');

        var oTable = table.dataTable({

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            //},

            // set the initial value
            "pageLength": 5,

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

        var tableWrapper = $("#sample_editable_2_wrapper");

        var nEditing = null;
        var nNew = false;

        $('.form-group').validate({
            rules: {

                read_rate: {
                    required: true
                }
            }
        });

        $('#sample_editable_2_new').click(function (e) {
            e.preventDefault();

            if (nNew && nEditing) {
                if (confirm("Previose row not saved. Do you want to save it ?")) {
                    saveRow(oTable, nEditing); // save
                    $(nEditing).find("td:first").html("Untitled");
                    nEditing = null;
                    nNew = false;

                } else {
                    oTable.fnDeleteRow(nEditing); // cancel
                    nEditing = null;
                    nNew = false;

                    return;
                }
            }

            var aiNew = oTable.fnAddData(['', '', '', '', '', '', '','']);
            var nRow = oTable.fnGetNodes(aiNew[0]);
            editRow(oTable, nRow);
            nEditing = nRow;
            nNew = true;
            nAdd = 2;

        });

        table.on('click', '.delete', function (e) {
            e.preventDefault();

            if (confirm("هل انت متأكد من عملية الحذف؟") == false) {
                return;
            }


            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            var seq = aData[0];

            $.ajax({
                url: base_url + "jobs/jobs/delete_language",
                type: "POST",
                data: {seq: seq},
                success: function (e) {

                        toastr.success(' تمت عملية الحذف بنجاح');

                },
                error: function (e) {
                    toastr.error('لم يتم الحذف');
                }

            });

            oTable.fnDeleteRow(nRow);

            var modify = document.getElementById("sample_editable_2").innerHTML;

            $("table.getData_display2").empty();
            $("table.getData_display2").append(modify);
            $("table.getData_display2").find('#edit_th').remove();
            $("table.getData_display2").find('#delete_th').remove();
            $("table.getData_display2").find('.edit').remove();
            $("table.getData_display2").find('.delete').remove();

        });

        table.on('click', '.cancel', function (e) {
            e.preventDefault();
            if (nNew) {
                oTable.fnDeleteRow(nEditing);
                nEditing = null;
                nNew = false;
            } else {
                restoreRow(oTable, nEditing);
                nEditing = null;
            }
        });


        table.on('click', '.edit', function (e) {
            e.preventDefault();
            nNew = false;
            var lang = $(this).parent().parent().find('.getLang_sel');

            /* Get the row as a parent of the link that was clicked on */
            var nRow = $(this).parents('tr')[0];

            if (nEditing !== null && nEditing != nRow) {
                /* Currently editing - but not this row - restore the old before continuing to edit mode */

                restoreRow(oTable, nEditing);
                editRow(oTable, nRow);
                nEditing = nRow;
            } else if (nEditing == nRow && this.innerHTML == "Save") {

                /* Editing this row and want to save it */

                var valid_form = FormValid();
                if (valid_form == false) {
                } else {
                    saveRow(oTable, nRow);
                    // alert(arr);
                    nEditing = null;
                    if (nAdd == 2) {

                        // Add new Row
                        // if nAdd == 2 then Add new row

                        // oTable.fnUpdate(88, nRow, 0, false);
                        // oTable.fnDraw();
                        var arr = [];
                        var aData = oTable.fnGetData(nRow);
                        //alert(aData); arr[2] = aData[3];
                        arr[0] = lang.val();
                        arr[1] = aData[2];
                        arr[2] = aData[3];
                        arr[3] = aData[4];
                        arr[4] = aData[5];

                        //alert(arr);
                        $.ajax({

                            url: base_url + "jobs/jobs/insert_language",
                            type: "POST",
                            data: {arr: arr},
                            success: function (e) {
                                oTable.fnUpdate(e, nRow, 0, false);
                                oTable.fnDraw();
                                if (!isNaN(e))
                                    toastr.success(' تمت عملية الاضافة بنجاح');
                                else
                                    toastr.error('لم تتم عملية الاضافة');

                            },
                            error: function (e) {
                                toastr.error('لم يتم الحذف');
                            }

                        });


                    } else if (nAdd == 3) {
                        // Edit Row
                        var arr = [];
                        var aData = oTable.fnGetData(nRow);
                        arr[0] = aData[0];
                        arr[1] = lang.val();
                        arr[2] = aData[2];
                        arr[3] = aData[3];
                        arr[4] = aData[4];
                        arr[5] = aData[5];


                        $.ajax({
                            url: base_url + "jobs/jobs/update_language",
                            type: "POST",
                            data: {arr: arr},
                            success: function (e) {
                                if (!isNaN(e))
                                    toastr.success(' تمت عملية التعديل بنجاح');
                                else
                                    toastr.error('لم تتم عملية التعديل');

                            },
                            error: function (e) {
                                toastr.error('لم يتم التعديل');
                            }


                        });

                    }

                }

            } else {
                /* No edit in progress - let's start one */

                nAdd = 3;
                editRow(oTable, nRow);
                nEditing = nRow;
            }
        });
    }

//////////////////////////////////////////////////////انتهاء جدول اللغات/////////////////////////////////////////////
////////////////////////////////////////////////////جدول تقديم الوظائف///////////////////////////////////////////////////////////
var handleTable6 = function () {

    function restoreRow(oTable, nRow) {
        var aData = oTable.fnGetData(nRow);
        var jqTds = $('>td', nRow);

        for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
            oTable.fnUpdate(aData[i], nRow, i, false);
        }

        oTable.fnDraw();
    }

    function editRow(oTable, nRow) {
        var aData = oTable.fnGetData(nRow);
        var jqTds = $('>td', nRow);
        jqTds[0].innerHTML = '<div style="padding-right: 15px;" class="form-group"><select id="pos" name="adv_num" class=" select_job form-control input-small" value="' + aData[0] + '">' +
            '<option value=""></option>' +
            '<option value="A1">788888888888</option>' +
            '<option class="A2">111111</option>' +
            '<option value="A3">22222</option>' +
            '<option value="A4">3333333</option>' +
            '<option value="A5">7 77777</option>' +
            '</select> </div>';
        jqTds[1].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="date" type="text" class="form-control input-small date-picker" value="' + aData[1] + '"> </div>';
        jqTds[2].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="state" type="text" class="form-control input-small" value="' + aData[2] + '"></div>';
        jqTds[3].innerHTML = '<a class="edit " href="">Save</a>';
        jqTds[4].innerHTML = '<a class="cancel" href="">Cancel</a>';

        $('.date-picker').datepicker();


        var text1 = aData[0];
        $("select.select_job option").filter(function () {
            return $(this).text() == text1;
        }).prop('selected', true);


    }

    function saveRow(oTable, nRow) {
        var jqInputs = $('input', nRow);
        var jqInputs2 = $('select.select_job', nRow);


        var getSelect1 = jqInputs2.find('option:selected').text();

        oTable.fnUpdate(getSelect1, nRow, 0, false);
        oTable.fnUpdate(jqInputs[0].value, nRow, 1, false);
        oTable.fnUpdate(jqInputs[1].value, nRow, 2, false);
        oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 3, false);
        oTable.fnUpdate('<a class="delete" href="">Delete</a>', nRow, 4, false);
        oTable.fnDraw();


        $("table.getData_display6").empty();


        var modify = document.getElementById("sample_editable_6").innerHTML;


        $("table.getData_display2").append(modify);

        $("table.getData_display2").find('#edit_th').remove();
        $("table.getData_display2").find('#delete_th').remove();
        $("table.getData_display2").find('.edit').remove();
        $("table.getData_display2").find('.delete').remove();
        disableOption();
    }


    function cancelEditRow(oTable, nRow) {
        var jqInputs = $('input', nRow);

        oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
        oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
        oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
        oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 3, false);
        oTable.fnDraw();
    }


    var table = $('#sample_editable_6');

    var oTable = table.dataTable({

        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
        // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
        // So when dropdowns used the scrollable div should be removed.
        //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],

        // Or you can use remote translation file
        //"language": {
        //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
        //},

        // set the initial value
        "pageLength": 5,

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

    var tableWrapper = $("#sample_editable_6_wrapper");

    var nEditing = null;
    var nNew = false;

    $('.form-group').validate({
        rules: {

            read_rate: {
                required: true
            }
        }
    });

    $('#sample_editable_6_new').click(function (e) {
        e.preventDefault();

        if (nNew && nEditing) {
            if (confirm("Previose row not saved. Do you want to save it ?")) {
                saveRow(oTable, nEditing); // save
                $(nEditing).find("td:first").html("Untitled");
                nEditing = null;
                nNew = false;

            } else {
                oTable.fnDeleteRow(nEditing); // cancel
                nEditing = null;
                nNew = false;

                return;
            }
        }

        var aiNew = oTable.fnAddData(['', '', '', '', '',]);
        var nRow = oTable.fnGetNodes(aiNew[0]);
        editRow(oTable, nRow);
        nEditing = nRow;
        nNew = true;
    });

    table.on('click', '.delete', function (e) {
        e.preventDefault();

        if (confirm("Are you sure to delete this row ?") == false) {
            return;
        }

        var nRow = $(this).parents('tr')[0];
        oTable.fnDeleteRow(nRow);

        var modify = document.getElementById("sample_editable_2").innerHTML;

        $("table.getData_display2").empty();
        $("table.getData_display2").append(modify);
        $("table.getData_display2").find('#edit_th').remove();
        $("table.getData_display2").find('#delete_th').remove();
        $("table.getData_display2").find('.edit').remove();
        $("table.getData_display2").find('.delete').remove();

        alert("Deleted! Do not forget to do some ajax to sync with backend :)");

    });

    table.on('click', '.cancel', function (e) {
        e.preventDefault();
        if (nNew) {
            oTable.fnDeleteRow(nEditing);
            nEditing = null;
            nNew = false;
        } else {
            restoreRow(oTable, nEditing);
            nEditing = null;
        }
    });


    table.on('click', '.edit', function (e) {
        e.preventDefault();
        nNew = false;

        /* Get the row as a parent of the link that was clicked on */
        var nRow = $(this).parents('tr')[0];

        if (nEditing !== null && nEditing != nRow) {
            /* Currently editing - but not this row - restore the old before continuing to edit mode */

            restoreRow(oTable, nEditing);
            editRow(oTable, nRow);
            nEditing = nRow;
        } else if (nEditing == nRow && this.innerHTML == "Save") {

            /* Editing this row and want to save it */

            var valid_form = FormValid();
            if (valid_form == false) {

            } else {
                saveRow(oTable, nEditing);
                nEditing = null;
                alert("Updated! Do not forget to do some ajax to sync with backend :)");
                disableOption();
            }
        } else {
            /* No edit in progress - let's start one */


            editRow(oTable, nRow);
            nEditing = nRow;
        }
    });


}
//////////////////////////////////////////////////////انتهائ جدول تقديم الوظائف///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////الخبرات///////////////////////////////////////////////
var handleTable3 = function () {

        var  nAdd=1;
    function restoreRow(oTable, nRow) {
        var aData = oTable.fnGetData(nRow);
        var jqTds = $('>td', nRow);

        for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
            oTable.fnUpdate(aData[i], nRow, i, false);
        }

        oTable.fnDraw();
    }

    function editRow(oTable, nRow) {
        var aData = oTable.fnGetData(nRow);
        var jqTds = $('>td', nRow);

        jqTds[0].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="serial" disabled type="text" class="form-control input-small" value="' + aData[0] + '"> </div>';
        jqTds[1].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="experience_place" type="text" class="form-control input-small" value="' + aData[1] + '"> </div>';
        jqTds[2].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="Job_title" type="text" class="form-control input-small" value="' + aData[2] + '"> </div>';
        jqTds[3].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="exp_date_from" type="text" class="form-control input-small date-picker " value="' + aData[3] + '"> </div>';
        jqTds[4].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="exp_date_to" type="text" class="form-control input-small date-picker" value="' + aData[4] + '"> </div>';
        jqTds[5].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="notes" type="text" class="form-control input-small" value="' + aData[5] + '"> </div>';
        jqTds[6].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="tasks" type="text" class="form-control input-small" value="' + aData[6] + '"> </div>';
        jqTds[7].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="manager_name" type="text" class="form-control input-small" value="' + aData[7] + '"> </div>';
        jqTds[8].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="manager phone" type="text" class="form-control input-small" value="' + aData[8] + '"> </div>';
        jqTds[9].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="manager_job_title" type="text" class="form-control input-small" value="' + aData[9] + '"> </div>';
        jqTds[10].innerHTML = '<a class="edit" href="">Save</a>';
        jqTds[11].innerHTML = '<a class="cancel" href="">Cancel</a>';


        $('.date-picker').datepicker();
    }









    function saveRow(oTable, nRow) {
        var jqInputs = $('input', nRow);

        oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
        oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
        oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
        oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
        oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
        oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
        oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);
        oTable.fnUpdate(jqInputs[7].value, nRow, 7, false);
        oTable.fnUpdate(jqInputs[8].value, nRow, 8, false);
        oTable.fnUpdate(jqInputs[9].value, nRow, 9, false);
        oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 10, false);
        oTable.fnUpdate('<a class="delete" href="">Delete</a>', nRow, 11, false);
        oTable.fnDraw();


        $("table.getData_display3").empty();


        var modify = document.getElementById("sample_editable_3").innerHTML;


        $("table.getData_display3").append(modify);

        $("table.getData_display3").find('#edit_th').remove();
        $("table.getData_display3").find('#delete_th').remove();
        $("table.getData_display3").find('.edit').remove();
        $("table.getData_display3").find('.delete').remove();

    }


    function cancelEditRow(oTable, nRow) {
        var jqInputs = $('input', nRow);

        oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
        oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
        oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
        oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
        oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
        oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
        oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);
        oTable.fnUpdate(jqInputs[7].value, nRow, 7, false);
        oTable.fnUpdate(jqInputs[8].value, nRow, 8, false);
        oTable.fnUpdate(jqInputs[9].value, nRow, 9, false);
        oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 10, false);
        oTable.fnDraw();
    }

    var table = $('#sample_editable_3');

    var oTable = table.dataTable({

        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
        // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
        // So when dropdowns used the scrollable div should be removed.
        //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],

        // Or you can use remote translation file
        //"language": {
        //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
        //},

        // set the initial value
        "pageLength": 5,

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

    var tableWrapper = $("#sample_editable_3_wrapper");

    var nEditing = null;
    var nNew = false;

    $('#sample_editable_3_new').click(function (e) {
        e.preventDefault();

        if (nNew && nEditing) {
            if (confirm("Previose row not saved. Do you want to save it ?")) {
                saveRow(oTable, nEditing); // save
                $(nEditing).find("td:first").html("Untitled");
                nEditing = null;
                nNew = false;

            } else {
                oTable.fnDeleteRow(nEditing); // cancel
                nEditing = null;
                nNew = false;

                return;
            }
        }

        var aiNew = oTable.fnAddData(['', '', '', '', '', '', '','','','','','']);
        var nRow = oTable.fnGetNodes(aiNew[0]);
        editRow(oTable, nRow);
        nEditing = nRow;
        nNew = true;
        nAdd=2;
    });

    table.on('click', '.delete', function (e) {
        e.preventDefault();

        if (confirm("هل انت متأكد من عملية الحذف؟") == false) {
            return;
        }

        var nRow = $(this).parents('tr')[0];
        var aData = oTable.fnGetData(nRow);
        var seq = aData[0];

        $.ajax({
            url: base_url + "jobs/jobs/delete_experiance",
            type: "POST",
            data: {seq: seq},
            success: function (e) {

                    toastr.success(' تمت عملية الحذف بنجاح');

            },
            error: function (e) {
                toastr.error('لم يتم الحذف');
            }


        });

        oTable.fnDeleteRow(nRow);

        var modify = document.getElementById("sample_editable_3").innerHTML;

        $("table.getData_display3").empty();
        $("table.getData_display3").append(modify);
        $("table.getData_display3").find('#edit_th').remove();
        $("table.getData_display3").find('#delete_th').remove();
        $("table.getData_display3").find('.edit').remove();
        $("table.getData_display3").find('.delete').remove();


    });

    table.on('click', '.cancel', function (e) {
        e.preventDefault();
        if (nNew) {
            oTable.fnDeleteRow(nEditing);
            nEditing = null;
            nNew = false;
        } else {
            restoreRow(oTable, nEditing);
            nEditing = null;
        }
    });

    table.on('click', '.edit', function (e) {
            e.preventDefault();
            nNew = false;

            /* Get the row as a parent of the link that was clicked on */
            var nRow = $(this).parents('tr')[0];

            if (nEditing !== null && nEditing != nRow) {
                /* Currently editing - but not this row - restore the old before continuing to edit mode */

                restoreRow(oTable, nEditing);
                editRow(oTable, nRow);
                nEditing = nRow;
            } else if (nEditing == nRow && this.innerHTML == "Save") {

                /* Editing this row and want to save it */

                var valid_form = FormValid();
                if (valid_form == false) {

                } else {
                    saveRow(oTable, nRow);
                    // alert(arr);
                    nEditing = null;
                    if (nAdd == 2) {

                        // Add new Row
                        // if nAdd == 2 then Add new row

                        // oTable.fnUpdate(88, nRow, 0, false);
                        // oTable.fnDraw();
                        var arr = [];
                        var aData = oTable.fnGetData(nRow);
                        //alert(aData); arr[2] = aData[3];
                        arr[0] = aData[1];
                        arr[1] = aData[2];
                        arr[2] = aData[3];
                        arr[3] = aData[4];
                        arr[4] = aData[5];
                        arr[5] = aData[6];
                        arr[6] = aData[7];
                        arr[7] = aData[8];
                        arr[8] = aData[9];


                        $.ajax({

                            url: base_url + "jobs/jobs/insert_experiance",
                            type: "POST",
                            data: {arr: arr},
                            success: function (e) {
                                oTable.fnUpdate(e, nRow, 0, false);
                                oTable.fnDraw();
                                if (!isNaN(e))
                                    toastr.success(' تمت عملية الاضافة بنجاح');
                                else
                                    toastr.error('لم تتم عملية الاضافة');

                            },
                            error: function (e) {
                                toastr.error('لم يتم الحذف');
                            }
                        });


                    } else if (nAdd == 3) {
                        // Edit Row
                        var arr = [];
                        var aData = oTable.fnGetData(nRow);
                        arr[0] = aData[0];
                        arr[1] = aData[1];
                        arr[2] = aData[2];
                        arr[3] = aData[3];
                        arr[4] = aData[4];
                        arr[5] = aData[5];
                        arr[6] = aData[6];
                        arr[7] = aData[7];
                        arr[8] = aData[8];
                        arr[9] = aData[9];

                        $.ajax({
                            url: base_url + "jobs/jobs/update_experiance",
                            type: "POST",
                            data: {arr: arr},
                            success: function (e) {
                                if (!isNaN(e))
                                    toastr.success(' تمت عملية التعديل بنجاح');
                                else
                                    toastr.error('لم تتم عملية التعديل');

                            },
                            error: function (e) {
                                toastr.error('لم يتم التعديل');
                            }


                        });

                    }

                }

            } else {
                /* No edit in progress - let's start one */

                nAdd = 3;
                editRow(oTable, nRow);
                nEditing = nRow;
            }
    });
}


/////////////////////////////////////////////انتهاء جدول الخبرات////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////جدول العضويات////////////////////////////////////////////////////
    var handleTable5 = function () {
        var nAdd = 1;
        function restoreRow(oTable, nRow) {
            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);

            for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
                oTable.fnUpdate(aData[i], nRow, i, false);
            }

            oTable.fnDraw();
        }

        function editRow(oTable, nRow) {

            var aData = oTable.fnGetData(nRow);
            var jqTds = $('>td', nRow);
            jqTds[0].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="ser" disabled type="text" class="ZXC form-control input-small" value="' + aData[0] + '"></div>';
            jqTds[1].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="organization" type="text" class="ZXC form-control input-small" value="' + aData[1] + '"></div>';
            jqTds[2].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="date" type="text" class="form-control input-small date-picker" value="' + aData[2] + '"> </div>';
            jqTds[3].innerHTML = '<div style="padding-right: 15px;" class="form-group"><select id="sel5"  name="membership" class="mem_sel form-control input-small" value="' + aData[3] + '">' +
                /*'<option value=""></option>' +
                 '<option  value="L1">العربية</option>' +
                 '<option value="L2">الانجليزية</option>' +
                 '<option value="L3">الألمانية</option>' +
                 '<option value="L4">الفرنسية</option>' +
                 */
                '</select> </div>';
            $.ajax({
                url: base_url + "jobs/jobs/get_const_editableTable",
                type: "POST",
                data: {con_no:169},
                success: function (e) {
                    var json = $.parseJSON(e);
                    var elm4 = document.getElementById('sel5'), // get the select
                        dff = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
                    $.each(json , function (m,w) {

                        var option = document.createElement('option'); // create the option element
                        option.value = w.CON_NO; // set the value property
                        option.appendChild(document.createTextNode(w.CON_NAME)); // set the textContent in a safe way.
                        dff.appendChild(option); // append the option to the document fragment


                    });
                    elm4.appendChild(dff);
                    var text4 = aData[3];
                    $("select.mem_sel option").filter(function () {
                        return $(this).text() == text4;
                    }).prop('selected', true);

                }
            });
            jqTds[4].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="Note" type="text"    class="form-control input-small" value="' + aData[4] + '"> </div>';
            jqTds[5].innerHTML = '<a class="edit " href="">Save</a>';
            jqTds[6].innerHTML = '<a class="cancel" href="">Cancel</a>';

            $('.date-picker').datepicker();


        }

        function saveRow(oTable, nRow) {
            var jqInputs = $('input', nRow);
            var jqInputs2 = $('select.mem_sel', nRow);

            var getSelect5 = jqInputs2.find('option:selected').text();


            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(getSelect5, nRow, 3, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 4, false);
            oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 5, false);
            oTable.fnUpdate('<a class="delete" href="">Delete</a>', nRow, 6, false);
            oTable.fnDraw();


            $("table.getData_display2").empty();


            var modify = document.getElementById("sample_editable_5").innerHTML;


            $("table.getData_display2").append(modify);

            $("table.getData_display2").find('#edit_th').remove();
            $("table.getData_display2").find('#delete_th').remove();
            $("table.getData_display2").find('.edit').remove();
            $("table.getData_display2").find('.delete').remove();

        }


        function cancelEditRow(oTable, nRow) {
            var jqInputs = $('input', nRow);

            oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
            oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
            oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
            oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
            oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
            oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 5, false);
            oTable.fnDraw();
        }


        var table = $('#sample_editable_5');

        var oTable = table.dataTable({

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
            // So when dropdowns used the scrollable div should be removed.
            //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            //},

            // set the initial value
            "pageLength": 5,

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

        var tableWrapper = $("#sample_editable_5_wrapper");

        var nEditing = null;
        var nNew = false;

        $('.form-group').validate({
            rules: {

                membership: {
                    required: true
                }
            }
        });

        $('#sample_editable_5_new').click(function (e) {
            e.preventDefault();

            if (nNew && nEditing) {
                if (confirm("Previose row not saved. Do you want to save it ?")) {
                    saveRow(oTable, nEditing); // save
                    $(nEditing).find("td:first").html("Untitled");
                    nEditing = null;
                    nNew = false;

                } else {
                    oTable.fnDeleteRow(nEditing); // cancel
                    nEditing = null;
                    nNew = false;

                    return;
                }
            }

            var aiNew = oTable.fnAddData(['', '', '', '', '', '', '']);
            var nRow = oTable.fnGetNodes(aiNew[0]);
            editRow(oTable, nRow);
            nEditing = nRow;
            nNew = true;
            nAdd = 2;

        });

        table.on('click', '.delete', function (e) {
            e.preventDefault();

            if (confirm("هل انت متأكد من عملية الحذف؟") == false) {
                return;
            }


            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            var seq = aData[0];

            $.ajax({
                url: base_url + "jobs/jobs/delete_membership",
                type: "POST",
                data: {seq: seq},
                success: function (e) {
                    if (!isNaN(e))
                        toastr.success(' تمت عملية الحذف بنجاح');
                    else
                        toastr.success('تمت عملية الحذف بنجاح');

                },
                error: function (e) {
                    toastr.error('لم يتم الحذف');
                }


            });

            oTable.fnDeleteRow(nRow);

            var modify = document.getElementById("sample_editable_5").innerHTML;

            $("table.getData_display2").empty();
            $("table.getData_display2").append(modify);
            $("table.getData_display2").find('#edit_th').remove();
            $("table.getData_display2").find('#delete_th').remove();
            $("table.getData_display2").find('.edit').remove();
            $("table.getData_display2").find('.delete').remove();


        });

        table.on('click', '.cancel', function (e) {
            e.preventDefault();
            if (nNew) {
                oTable.fnDeleteRow(nEditing);
                nEditing = null;
                nNew = false;
            } else {
                restoreRow(oTable, nEditing);
                nEditing = null;
            }
        });


        table.on('click', '.edit', function (e) {
            e.preventDefault();
            nNew = false;
            var member = $(this).parent().parent().find('.mem_sel');
            /* Get the row as a parent of the link that was clicked on */
            var nRow = $(this).parents('tr')[0];

            if (nEditing !== null && nEditing != nRow) {
                /* Currently editing - but not this row - restore the old before continuing to edit mode */

                restoreRow(oTable, nEditing);
                editRow(oTable, nRow);
                nEditing = nRow;
            } else if (nEditing == nRow && this.innerHTML == "Save") {

                /* Editing this row and want to save it */

                var valid_form = FormValid();
                if (valid_form == false) {
                } else {
                    saveRow(oTable, nRow);
                    // alert(arr);
                    nEditing = null;
                    if (nAdd == 2) {

                        // Add new Row
                        // if nAdd == 2 then Add new row

                        // oTable.fnUpdate(88, nRow, 0, false);
                        // oTable.fnDraw();
                        var arr = [];
                        var aData = oTable.fnGetData(nRow);
                        //alert(aData); arr[2] = aData[3];
                        arr[0] = aData[1];
                        arr[1] = aData[2];
                        arr[2] = member.val();
                        arr[3] = aData[4];


                       //alert(arr);

                        $.ajax({

                            url: base_url + "jobs/jobs/insert_membership",
                            type: "POST",
                            data: {arr: arr},
                            success: function (e) {
                                oTable.fnUpdate(e, nRow, 0, false);
                                oTable.fnDraw();
                                if (!isNaN(e))
                                    toastr.success(' تمت عملية الاضافة بنجاح');
                                else
                                    toastr.error('لم تتم عملية الاضافة');

                            },
                            error: function (e) {
                                toastr.error('لم يتم الحذف');
                            }
                        });


                    } else if (nAdd == 3) {
                        // Edit Row
                        var arr = [];
                        var aData = oTable.fnGetData(nRow);
                        arr[0] = aData[0];
                        arr[1] = aData[1];
                        arr[2] = aData[2];
                        arr[3] = member.val();
                        arr[4] = aData[4];



                        $.ajax({
                            url: base_url + "jobs/jobs/update_membership",
                            type: "POST",
                            data: {arr: arr},
                            success: function (e) {

                                    toastr.success(' تمت عملية التعديل بنجاح');

                            },
                            error: function (e) {
                                toastr.error('لم يتم التعديل');
                            }


                        });

                    }

                }

            } else {
                /* No edit in progress - let's start one */

                nAdd = 3;
                editRow(oTable, nRow);
                nEditing = nRow;
            }
        });
    }

////////////////////////////////////////////////////////////انتهاء جدول العضويات//////////////////////////////////
/////////////////////////////////////////////جدول الدورات////////////////////////////////////////////////////

var handleTable4 = function () {
    var  nAdd =1;
    function restoreRow(oTable, nRow) {
        var aData = oTable.fnGetData(nRow);
        var jqTds = $('>td', nRow);

        for (var i = 0, iLen = jqTds.length; i < iLen; i++) {
            oTable.fnUpdate(aData[i], nRow, i, false);
        }

        oTable.fnDraw();
    }

    function editRow(oTable, nRow) {
        var aData = oTable.fnGetData(nRow);
        var jqTds = $('>td', nRow);

        jqTds[0].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="ser" type="text" disabled class="form-control input-small" value="' + aData[0] + '"> </div>';
        jqTds[1].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="course_name" type="text" class="form-control input-small" value="' + aData[1] + '"> </div>';
        jqTds[2].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="special" type="text" class="form-control input-small" value="' + aData[2] + '"> </div>';
        jqTds[3].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="place" type="text" class="form-control input-small" value="' + aData[3] + '"> </div>';
        jqTds[4].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="course_hours" type="text" class="form-control input-small" value="' + aData[4] + '"> </div>';
        jqTds[5].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="coruse_date_from" type="text" class="form-control input-small date-picker " value="' + aData[5] + '"> </div>';
        jqTds[6].innerHTML = '<div style="padding-right: 15px;" class="form-group"><input name="coruse_date_to" type="text" class="form-control input-small date-picker" value="' + aData[6] + '"> </div>';
        jqTds[7].innerHTML = '<a class="edit" href="">Save</a>';
        jqTds[8].innerHTML = '<a class="cancel" href="">Cancel</a>';


        $('.date-picker').datepicker();
        var text1 = aData[0];
        $("select.select_lang option").filter(function () {
            return $(this).text() == text1;
        }).prop('selected', true);


    }

    function saveRow(oTable, nRow) {
        var jqInputs = $('input', nRow);
        oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
        oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
        oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
        oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
        oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
        oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
        oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);

        oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 7, false);
        oTable.fnUpdate('<a class="delete" href="">Delete</a>', nRow, 8, false);
        oTable.fnDraw();


        $("table.getData_display4").empty();


        var modify = document.getElementById("sample_editable_4").innerHTML;


        $("table.getData_display4").append(modify);

        $("table.getData_display4").find('#edit_th').remove();
        $("table.getData_display4").find('#delete_th').remove();
        $("table.getData_display4").find('.edit').remove();
        $("table.getData_display4").find('.delete').remove();

    }


    function cancelEditRow(oTable, nRow) {
        var jqInputs = $('input', nRow);

        oTable.fnUpdate(jqInputs[0].value, nRow, 0, false);
        oTable.fnUpdate(jqInputs[1].value, nRow, 1, false);
        oTable.fnUpdate(jqInputs[2].value, nRow, 2, false);
        oTable.fnUpdate(jqInputs[3].value, nRow, 3, false);
        oTable.fnUpdate(jqInputs[4].value, nRow, 4, false);
        oTable.fnUpdate(jqInputs[5].value, nRow, 5, false);
        oTable.fnUpdate(jqInputs[6].value, nRow, 6, false);

        oTable.fnUpdate('<a class="edit" href="">Edit</a>', nRow, 7, false);
        oTable.fnDraw();
    }

    var table = $('#sample_editable_4');

    var oTable = table.dataTable({

        // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
        // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js).
        // So when dropdowns used the scrollable div should be removed.
        //"dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],

        // Or you can use remote translation file
        //"language": {
        //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
        //},

        // set the initial value
        "pageLength": 5,

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

    var tableWrapper = $("#sample_editable_4_wrapper");

    var nEditing = null;
    var nNew = false;

    $('#sample_editable_4_new').click(function (e) {
        e.preventDefault();

        if (nNew && nEditing) {
            if (confirm("Previose row not saved. Do you want to save it ?")) {
                saveRow(oTable, nEditing); // save
                $(nEditing).find("td:first").html("Untitled");
                nEditing = null;
                nNew = false;

            } else {
                oTable.fnDeleteRow(nEditing); // cancel
                nEditing = null;
                nNew = false;

                return;
            }
        }

        var aiNew = oTable.fnAddData(['', '', '', '', '', '', '', '','','']);
        var nRow = oTable.fnGetNodes(aiNew[0]);
        editRow(oTable, nRow);
        nEditing = nRow;
        nNew = true;
        nAdd = 2;
    });

    table.on('click', '.delete', function (e) {
        e.preventDefault();

        if (confirm("هل انت متأكد من عملية الحذف؟") == false) {
            return;
        }


        var nRow = $(this).parents('tr')[0];
        var aData = oTable.fnGetData(nRow);
        var seq = aData[0];

        $.ajax({
            url: base_url + "jobs/jobs/delete_course",
            type: "POST",
            data: {seq: seq},
            success: function (e) {

                    toastr.success(' تمت عملية الحذف بنجاح');

            },
            error: function (e) {
                toastr.error('لم يتم الحذف');
            }


        });

        oTable.fnDeleteRow(nRow);


        var modify = document.getElementById("sample_editable_3").innerHTML;

        $("table.getData_display4").empty();
        $("table.getData_display4").append(modify);
        $("table.getData_display4").find('#edit_th').remove();
        $("table.getData_display4").find('#delete_th').remove();
        $("table.getData_display4").find('.edit').remove();
        $("table.getData_display4").find('.delete').remove();

     });

    table.on('click', '.cancel', function (e) {
        e.preventDefault();
        if (nNew) {
            oTable.fnDeleteRow(nEditing);
            nEditing = null;
            nNew = false;
        } else {
            restoreRow(oTable, nEditing);
            nEditing = null;
        }
    });

    table.on('click', '.edit', function (e) {
        e.preventDefault();
        nNew = false;

        /* Get the row as a parent of the link that was clicked on */
        var nRow = $(this).parents('tr')[0];

        if (nEditing !== null && nEditing != nRow) {
            /* Currently editing - but not this row - restore the old before continuing to edit mode */

            restoreRow(oTable, nEditing);
            editRow(oTable, nRow);
            nEditing = nRow;
        } else if (nEditing == nRow && this.innerHTML == "Save") {

            /* Editing this row and want to save it */
            var valid_form = FormValid();
            if (valid_form == false) {

            } else {
                saveRow(oTable, nRow);
                // alert(arr);
                nEditing = null;
                if (nAdd == 2) {

                    // Add new Row
                    // if nAdd == 2 then Add new row

                    // oTable.fnUpdate(88, nRow, 0, false);
                    // oTable.fnDraw();
                    var arr = [];
                    var aData = oTable.fnGetData(nRow);
                    //alert(aData); arr[2] = aData[3];
                    arr[0] = aData[1];
                    arr[1] = aData[2];
                    arr[2] = aData[3];
                    arr[3] = aData[4];
                    arr[4] = aData[5];
                    arr[5] = aData[6];
                   // alert(arr);
                    $.ajax({

                        url: base_url + "jobs/jobs/insert_course",
                        type: "POST",
                        data: {arr: arr},
                        success: function (e) {
                            oTable.fnUpdate(e, nRow, 0, false);
                            oTable.fnDraw();
                            if (!isNaN(e))
                                toastr.success(' تمت عملية الاضافة بنجاح');
                            else
                                toastr.error('لم تتم عملية الاضافة');

                        },
                        error: function (e) {
                            toastr.error('لم يتم الحذف');
                        }
                    });


                } else if (nAdd == 3) {
                    // Edit Row
                    var arr = [];
                    var aData = oTable.fnGetData(nRow);
                    arr[0] = aData[0];
                    arr[1] = aData[1];
                    arr[2] = aData[2];
                    arr[3] = aData[3];
                    arr[4] = aData[4];
                    arr[5] = aData[5];
                    arr[6] = aData[6];

                    $.ajax({
                        url: base_url + "jobs/jobs/update_course",
                        type: "POST",
                        data: {arr: arr},
                        success: function (e) {
                            if (!isNaN(e))
                                toastr.success(' تمت عملية التعديل بنجاح');
                            else
                                toastr.error('لم تتم عملية التعديل');

                        },
                        error: function (e) {
                            toastr.error('لم يتم التعديل');
                        }


                    });

                }

            }

        } else {
            /* No edit in progress - let's start one */

            nAdd = 3;
            editRow(oTable, nRow);
            nEditing = nRow;
        }
    });
}

    return {

    //main function to initiate the module
    init: function () {
         handleTable();
         handleTable2();
         handleTable3();
         handleTable4();
         handleTable5();
         handleTable6();
    }

};

}
();


jQuery(document).ready(function () {

    TableDatatablesEditable.init();
});