/**
 * Created by mnaji on 26/08/2017.
 */
var base_url = $('#base_url').val();
var  table;
$(document).ready( function() {

  /*  $('input[name="details1[]"]').on('click',function(e){
        alert();

        var tr=$(this).closest('tr');
        var camp_id =tr.find('input[name="camp_id[]"]').val();
        var subID =tr.find('input[name="sub_id[]"]').val();
        $('#subid').val(subID);
        $('#campid').val(camp_id);
       // alert(subID);

         $.ajax({

         url: base_url + "Campaigns/Campaigns/get_name_pay/"+ subID,
         type: "post",
         success: function  (e) {
         if (e==0){
         alert(e);
         $('.modal-body2').fadeIn();
         //$('#mymodal1').find('div[class="modal-body1"]').html("<p>تم تقديم الطلب </p><br><p> طلبك قيد التدقيق</p>");
         }
         else {

         var data = $.parseJSON(e);
         console.log(data[0]);
         $('#username').val(data[0]['NAME']);
         $('#userID').val(data[0]['ID']);
         $('#userBankName').val(data[0]['BANK_ACCOUNT_NAME']);
         $('#servicetype').val(data[0]['SUBSCRIBER_TYPE']);
         $('#commettype').val(data[0]['SUBSCRIBER_TYPE']);
         $('#BankName').val(data[0]['BANK_NAME']);
         $('#BankAccount').val(data[0]['ACCOUNT_NO']);

         $('.modal-body1').fadeIn();

         // alert(result.ID);


         }



         },
         error: function (e) {
         }
         });
    });*/

    $('#filterText').on('change',function(){
        var year =  $(this).val();
        //var table = 'table_format';

        var count=0;
        //$('#'+table+'tr').parent().remove();


        $.ajax({

            url: base_url + "Campaigns/get_sub_campaigns_archive",
            type: "post",
            data: {year: year},
            success: function (e) {
                var data = $.parseJSON(e);
               // console.log(e);
                var details;
                var jqTds=[];
               // details.innerHTML = '<input id="details1"  data-toggle="modal" name="details1[]" data-target="#myModal1" class=" btn btn-success"  value="تفعيل الخدمة" type="button">';
               // jqTds[6].innerHTML = '<a class="edit" href="">Save</a>';
              //  var html = '<tr><td></td><td> <input id=""  name="camp_id[]" data-target="#myModal1" hidden=""  value=" " type="button"></td></tr>';
              //  $('#table_format').append(html);
                table = $('#table_format').DataTable({
                    destroy: true,
                    "language": {
                        "aria": {
                            "sortAscending": ": activate to sort column ascending",
                            "sortDescending": ": activate to sort column descending"
                        },
                        "emptyTable": "لا يوجد بيانات",
                        "info": "عرض _START_ إلى  _END_ من  _TOTAL_ مدخلات",
                        "infoEmpty": "No entries found",
                        "infoFiltered": "(filtered1 from _MAX_ total entries)",
                        "search": "بحث:",
                        "zeroRecords": "لا يوجد بيانات متطابقة",
                        "lengthMenu": "عرض  _MENU_ نتائج",
                        "paginate": {
                            "previous": "السابق",
                            "next": "التالي",
                            "last": "الأخيرة",
                            "first": "الأولى"
                        }
                    },
                    "processing": true,
                    "aaData": data,
                    "columns": [{
                        "data": "CAMPAIGNS_NAME", "orderable": true
                    }, {
                        "render": function ( data, type, full, meta ) {
                            var buttonID = full.CAMP_ID;
                            if(buttonID==1){ return '<a href="' + base_url+'/' + full.FILE_DET+'" target="_blank"><input    class=" btn btn-success"  value="التفاصيل " type="button"> </a> ';
                            }
                            else if(buttonID==2)
                            { return '<a href="' + base_url+'/' + full.FILE_DET+'" target="_blank"><input    class=" btn btn-success"  value="التفاصيل " type="button"> </a> ';
                            }
                            else
                                return ' ';
                        }
                    }, {
                        "data": "CAMP_START_DATE", "orderable": false
                    }, {
                        "data": "CAMP_END_DATE", "orderable": false
                    }, {
                        "data": "SUBSCRIBER", "orderable": true
                    }, {
                        "render": function ( data, type, full, meta ) {
                            var buttonID = full.CAMP_ID;
                            var SER = full.SER;
                            if(buttonID==1){ return '<input id="'+buttonID +' "  data-toggle="modal" name="details1[]" data-target="#myModal1" class=" btn btn-success"  value="بيانات الاشتراك " type="button" onclick="x('+SER+','+ full.SUBSCRIBER+')"> <input id=""  name="sub_id1[]"  hidden=""  value="'+ full.SUBSCRIBER+'" type="button"><input id=""  name="camp_id1[]"  hidden=""  value="'+ full.CAMP_ID+'" type="button">';
                            }
                            else if(buttonID==2)
                            { return '<input id="'+buttonID +' "  data-toggle="modal" name="details2[]" data-target="#myModal2" class=" btn btn-success"  value=" بيانات الاشتراك" type="button" onclick="y('+SER+','+ full.SUBSCRIBER+')"> <input id=""  name="sub_id2[]"  hidden=""  value="'+ full.SUBSCRIBER+'" type="button">';
                            }
                            else
                                return '<input id=""  name="sub_id3[]"  hidden=""  value="'+ full.SUBSCRIBER+'" type="button">';
                        }
                    }, {
                        "data": "SHOW_DATE", "orderable": false
                    }, {
                        "data": "STATUS_NAME", "orderable": false
                    }]
                    ,

                    "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

                    "lengthMenu": [
                        [10, 20, 30, -1],
                        [10, 20, 30, "All"] // change per page values here
                    ],
                    // set the initial value
                    "pageLength": 15,
                    "pagingType": "bootstrap_full_number"

                });


            },
            error: function (e) {

                toastr.error("error");
            }


        });
    });

});
function x(camp_id,subID){
    var tr = $(this).closest('tr');
    $('#subid').val(subID);
    $('#campid').val(camp_id);
    $('#subid').val(subID);
    $.ajax({

        url: base_url + "Campaigns/Campaigns/get_name_pay/"+ subID,
        type: "post",
        success: function  (e) {
            var data = $.parseJSON(e);
            console.log(data);
            if (data==0){
                alert(e);
                $('.modal-body2').fadeIn();
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

                // alert(result.ID);


            }



        },
        error: function (e) {
        }
    });
};

function y(camp_id,subID){

    /*var camp_id = table.row( e ).data().CAMP_ID;
    var subID =table.row( e).data().SUBSCRIBER;*/
  //  alert(camp_id);
    $('#subid2').val(subID);
    $('#campid2').val(camp_id);
    !($('#check_confirme').is(":checked"));
    $.ajax({

        url: base_url + "Campaigns/Campaigns/CAMPAIGNS_DETAILS_GET2/"+camp_id+"/"+ subID,
        type: "post",
        success: function  (e) {


                var data2 = $.parseJSON(e);
                console.log(data2[0]);
                $('#username2').val(data2[0]['NAME_SUB']);
                $('#kw').val(data2[0]['KW_NAME']);
                $('#kw_f').val(data2[0]['KW_F_NAME']);

               // $('.modal-body3').fadeIn();
        },
        error: function (e) {
        }
    });
};

