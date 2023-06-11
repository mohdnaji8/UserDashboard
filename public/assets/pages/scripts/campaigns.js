/**
 * Created by mnaji on 11/09/2017.
 */

var base_url = $('#base_url').val();
$(document).ready( function() {
    var RowNum1;
    var RowNum2;
    $.ajax({

        url: base_url + "Campaigns/Campaigns/get_subscriber_info_count",
        type: "post",
        success: function  (e) {
            if (e==0){
                $('.campagins-body').fadeOut();
                $('#pulsate-regular').fadeIn();
                 }
            else {
                $('#pulsate-regular').fadeOut();
                  }
        },
        error: function (e) {
        }
    });
   $('#more-than').fadeOut();
   $('.modal-body1').fadeOut();
   $('.modal-body2').fadeOut();
   $('.modal-body3').fadeOut();
   $('.modal-body4').fadeOut();
       $('#wat').on('change', function () {
           if ($('#wat').val() == 6)
           {
               $('#more-than').fadeIn();
           }
           else {
               $('#more-than').fadeOut();
           }
       });
    $('input[name="details1[]"]').on('click',function(e){
        RowNum1 =$(this).closest('tr');
        var tr=$(this).closest('tr');
        var camp_id =tr.find('input[name="camp_id[]"]').val();
        var subID =tr.find('input[name="sub_id[]"]').val();
        $('#subid').val(subID);
        $('#campid').val(camp_id);
        $.ajax({

            url: base_url + "Campaigns/Campaigns/get_name_pay/"+ subID,
            //url: base_url + "Campaigns/Campaigns/CAMPAIGNS_DETAILS_GET2/"+camp_id+"/"+ subID,
            type: "post",
            success: function  (e) {
                var data = $.parseJSON(e);
                console.log(data);
                if (data== 0){
                    //  alert(e);
                    $('.modal-body2').fadeIn();
                    $('.modal-body1').fadeOut();
                    //$('#mymodal1').find('div[class="modal-body1"]').html("<p>تم تقديم الطلب </p><br><p> طلبك قيد التدقيق</p>");
                }
                else {
                    $('#username').val(data[0]['NAME']);
                    $('#userID').val(data[0]['ID']);
                    $('#userBankName').val(data[0]['BANK_ACCOUNT_NAME']);
                    $('#servicetype').val(data[0]['SUBSCRIBER_TYPE']);
                    $('#commettype').val('سداد الي');
                    $('#BankName').val(data[0]['BANK_NAME']);
                    $('#BankAccount').val(data[0]['ACCOUNT_NO']);
                    $('.modal-body1').fadeIn();
                    $('.modal-body2').fadeOut();
                }




            },
            error: function (e) {
            }
        });
    });
    $('input[name="details2[]"]').on('click',function(e){
        RowNum2 =$(this).closest('tr');
        var tr=$(this).closest('tr');
        var camp_id =tr.find('input[name="camp_id[]"]').val();
        var subID =tr.find('input[name="sub_id[]"]').val();
        $('#subid2').val(subID);
        $('#campid2').val(camp_id);
        !($('#check_confirme').is(":checked"));
        $.ajax({

            url: base_url + "Campaigns/Campaigns/get_have_remainder/"+ subID,
            type: "post",
            success: function  (e) {
                  if (e==0){
                      $.ajax({

                          url: base_url + "Campaigns/Campaigns/get_subscriber_no/"+ subID,
                          type: "post",
                          success: function  (e) {
                              var data2 = $.parseJSON(e);
                              console.log(data2);
                              $('#username2').val(data2[0]['NAME']);
                              $('.modal-body3').fadeIn();
                              $('.modal-body4').fadeOut();
                          },
                          error: function (e) {
                          }
                      });
                         //$('#mymodal1').find('div[class="modal-body1"]').html("<p>تم تقديم الطلب </p><br><p> طلبك قيد التدقيق</p>");
                 }
                 else {

                      $('.modal-body4').fadeIn();
                      $('.modal-body3').fadeOut();
                 }
            },
            error: function (e) {
            }
        });

    });

    $('input[name="register_sub[]"]').on('click',function(e){

        var tr=$(this).closest('tr');
        var camp_id =tr.find('input[name="camp_id[]"]').val();
        var subID =tr.find('input[name="sub_id[]"]').val();
        swal({
                title: "هل تريد الدخول في الحملة",
                text: "بالضغط على نعم, سوف يتم تسجيلك في الحملة!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "نعم, أريد التسجيل",
                cancelButtonText: "لا",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function(isConfirm){
                if (isConfirm) {

                    var arr=[];
                    arr[1] = camp_id;
                    arr[2] = subID;


                    //alert(arr);

                    $.ajax({

                        url: base_url + "Campaigns/Campaigns/insert_sub_camp",
                        type: "POST",
                        data: {arr: arr},
                        success: function (e) {
                            if (isNaN(e)){
                                toastr.error('لم تتم عملية التسجيل');
                                swal("لم يتم التسجيل!", "لم تتم عملية التسجيل بنجاح", "error");
                            }
                            else {
                                tr.find('div[id="show-button[]"]').html("<p>تم تقديم الطلب <br> طلبك قيد التدقيق</p>");

                                toastr.success(' تمت عملية التسجيل في الحملة بنجاح');
                            }
                        },
                        error: function (e) {
                            toastr.error('لم تتم عملية التسجيل');
                        }
                    });
                    swal("تم التسجيل!", "  تهانينآ, لقد تم تسجيلك في الحملة بنجاح.", "success");
                } else {
                    swal("لم يتم التسجيل!", "م تتم عملية التسجيل بنجاح", "error");
                }
            });
    });


    $('input[name="register_sub2[]"]').on('click',function(e){

        var camp_id =$('#campid').val();
        var subID =$('#subid').val();

        swal({
                title: "هل تريد الدخول في الحملة",
                text: "بالضغط على نعم, سوف يتم تسجيلك في الحملة!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "نعم, أريد التسجيل",
                cancelButtonText: "لا",
                closeOnConfirm: false,
                closeOnCancel: false
            },function(isConfirm){
                if($('#check_confirme').is(":checked"))
                {
                    $('#check_confirme').val(1);
                    if (isConfirm) {
                        var arr=[];
                        arr[1] = camp_id;
                        arr[2] = subID;
                        arr[7]=$('#check_confirme').val();
                        $.ajax({

                            url: base_url + "Campaigns/Campaigns/insert_campaigns_details",
                            type: "POST",
                            data: {arr: arr},
                            success: function (e) {
                                if (isNaN(e)){
                                    toastr.error('لم تتم عملية التسجيل');
                                    swal("لم يتم التسجيل!", "لم تتم عملية التسجيل بنجاح", "error");
                                }
                                else
                                {
                                    toastr.success(' تمت عملية التسجيل في الحملة بنجاح');
                                    swal("تم التسجيل!", "  تهانينآ, لقد تم تسجيلك في الحملة بنجاح.", "success");
                                    RowNum1.find('div[id="show-button[]"]').html("<p>تم تقديم الطلب </p><p> طلبك قيد التدقيق</p>");

                                }




                            },
                            error: function (e) {
                                toastr.error('لم تتم عملية التسجيل');
                                swal("لم يتم التسجيل!", "لم تتم عملية التسجيل بنجاح", "error");

                            }
                        });
                    }


                    else {
                        swal("لم يتم التسجيل!", "لم تتم عملية التسجيل بنجاح", "error");
                    }
                }
                else
                    {
                        $('#check_confirme').val(0);
                        toastr.error('يجب عليك تأكيد الاشتراك في الحملة');
                        swal("لم يتم التسجيل!", "يجب عليك تأكيد تفعيل الخدمة أولاً!", "error");
                    }

            });
    });

    $('input[name="register_sub3[]"]').on('click',function(e){

        var camp_id =$('#campid2').val();
        var subID =$('#subid2').val();

        swal({
                title: "هل تريد الدخول في الحملة",
                text: "بالضغط على نعم, سوف يتم تسجيلك في الحملة!",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "نعم, أريد التسجيل",
                cancelButtonText: "لا",
                closeOnConfirm: false,
                closeOnCancel: false
            },
            function(isConfirm){
                if($('#checkconfirm2').is(":checked"))
                {
                    $('#checkconfirm2').val(1);
                    if (isConfirm) {
                        var arr=[];
                        arr[1] = camp_id;
                        arr[2] = subID;
                        arr[4] = $('#wat option:selected').val();
                        arr[5] = $('#wat2 option:selected').val();
                        arr[6]=$('#checkconfirm2').val();
                     // alert(arr[4]);
                    //  alert(arr[5]);

                        $.ajax({

                            url: base_url + "Campaigns/Campaigns/insert_campaigns_details",
                            type: "POST",
                            data: {arr: arr},
                            success: function (e) {
                                if (isNaN(e)){
                                    toastr.error('لم تتم عملية التسجيل');
                                    swal("لم يتم التسجيل!", "لم تتم عملية التسجيل بنجاح", "error");
                                }
                                else
                                {
                                    toastr.success(' تمت عملية التسجيل في الحملة بنجاح');
                                    swal("تم التسجيل!", "  تهانينآ, لقد تم تسجيلك في الحملة بنجاح.", "success");
                                    RowNum2.find('div[id="show-button2[]"]').html("<p>تم تقديم الطلب </p><p> طلبك قيد التدقيق</p>");


                                }

                            },
                            error: function (e) {
                                toastr.error('لم تتم عملية التسجيل');
                                swal("لم يتم التسجيل!", "لم تتم عملية التسجيل بنجاح", "error");

                            }
                        });

                    }


                    else {
                        swal("لم يتم التسجيل!", "لم تتم عملية التسجيل بنجاح", "error");
                    }
                }
                else
                {
                    $('#check_confirme').val(0);
                    toastr.error('يجب عليك تأكيد الاشتراك في الحملة');
                    swal("لم يتم التسجيل!", "يجب عليك تأكيد تفعيل الخدمة أولاً!", "error");
                }

            });
    });

    /***********************************************************************************************/
    var table = $('#sub_table1');

    var oTable = table.dataTable({

        "lengthMenu": [
            [3,5, 15, 20, -1],
            [3,5, 15, 20, "All"] // change per page values here
        ],


        // set the initial value
        "pageLength": 3,


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

    //////////////////////////////////////////////////////////////
    var table = $('#sub_table2');

    var oTable = table.dataTable({

        "lengthMenu": [
            [3,5, 15, 20, -1],
            [3,5, 15, 20, "All"] // change per page values here
        ],


        // set the initial value
        "pageLength": 3,

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

    //////////////////////////////////////////////////////////////

    var table = $('#sub_table3');

    var oTable = table.dataTable({

        "lengthMenu": [
            [3,5, 15, 20, -1],
            [3,5, 15, 20, "All"] // change per page values here
        ],


        // set the initial value
        "pageLength": 3,

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

    //////////////////////////////////////////////////////////////



    var table = $('#sub_table4');

    var oTable = table.dataTable({

        "lengthMenu": [
            [3,5, 15, 20, -1],
            [3,5, 15, 20, "All"] // change per page values here
        ],


        // set the initial value
        "pageLength": 3,


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

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var table = $('#sub_table5');

    var oTable = table.dataTable({

        "lengthMenu": [
            [3,5, 15, 20, -1],
            [3,5, 15, 20, "All"] // change per page values here
        ],


        // set the initial value
        "pageLength": 3,

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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var table = $('#sub_table6');

    var oTable = table.dataTable({

        "lengthMenu": [
            [3,5, 15, 20, -1],
            [3,5, 15, 20, "All"] // change per page values here
        ],


        // set the initial value
        "pageLength": 3,


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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var table = $('#sub_table7');

    var oTable = table.dataTable({

        "lengthMenu": [
            [3,5, 15, 20, -1],
            [3,5, 15, 20, "All"] // change per page values here
        ],


        // set the initial value
        "pageLength": 3,

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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var table = $('#sub_table8');

    var oTable = table.dataTable({

        "lengthMenu": [
            [3,5, 15, 20, -1],
            [3,5, 15, 20, "All"] // change per page values here
        ],


        // set the initial value
        "pageLength": 3,


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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var table = $('#sub_table9');

    var oTable = table.dataTable({

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],


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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var table = $('#sub_table10');

    var oTable = table.dataTable({

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],


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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var table = $('#sub_table11');

    var oTable = table.dataTable({

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],


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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var table = $('#sub_table12');

    var oTable = table.dataTable({

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],


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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var table = $('#sub_table13');

    var oTable = table.dataTable({

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],


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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var table = $('#sub_table14');

    var oTable = table.dataTable({

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],


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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var table = $('#sub_table15');

    var oTable = table.dataTable({

        "lengthMenu": [
            [5, 15, 20, -1],
            [5, 15, 20, "All"] // change per page values here
        ],


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

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var table = $('#sub_table16');

    var oTable = table.dataTable({

        "lengthMenu": [
            [3,5, 15, 20, -1],
            [3,5, 15, 20, "All"] // change per page values here
        ],


        // set the initial value
        "pageLength": 3,

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

});