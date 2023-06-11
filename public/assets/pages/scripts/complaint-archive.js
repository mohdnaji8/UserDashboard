/**
 * Created by mnaji on 26/08/2017.
 */
var base_url = $('#base_url').val();
var  table;
$(document).ready( function() {
    var year="";
    var arr=[];
    arr[1]="";
    $('#filterText2').on('change', function(){
        arr[1]=  $('#filterText2 option:selected').val();
        //$('#filterText option:eq(0)').prop('selected', true);
        year =  $('#filterText option:selected').val();
        if(year ==0){


        }
        else {


            arr[0]=year;
            $.ajax({

                url: base_url + "complaint/COMPLAINT_TB_GET",
                type: "post",
                data: {arr: arr},
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
                            "data": "TITLE", "orderable": true
                        }, {
                            "render": function ( data, type, full, meta ) {

                                var SER = full.SER;
                                return '<input id=" "  data-toggle="modal" name="details1[]" data-target="#myModal1" class=" btn btn-success"  value="التفاصيل" type="button" onclick="y('+SER+')"> ';

                            }

                        },{
                            "render": function ( data, type, full, meta ) {

                                return '<input id=" "  data-toggle="modal" name="details1[]" data-target="#myModal2" class=" btn btn-success"  value="الرد " type="button" onclick=" zz('+full.SER+') "> ';


                            }
                        } , {
                            "data": "ENTER_DATE", "orderable": false
                        },{
                            "render": function ( data, type, full, meta ) {

                                if(full.STATUS ==1)
                                {
                                    return 'قيد التدقيق ';
                                }
                                else {
                                    return 'تم النظر';
                                }
                            }
                        } ]
                        ,

                        "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

                        "lengthMenu": [
                            [5 ,10, 20, 30, -1],
                            [5 ,10, 20, 30, "All"] // change per page values here
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
                        ]

                    });


                },
                error: function (e) {

                    toastr.error("error");
                }


            });
        }

    });



    $('#filterText').on('change',function(){

        arr[1]=  $('#filterText2 option:selected').val();
        //$('#filterText option:eq(0)').prop('selected', true);
        year =  $('#filterText option:selected').val();
        if(year ==0){


        }
        else {


            arr[0]=year;
            $.ajax({

                url: base_url + "complaint/COMPLAINT_TB_GET",
                type: "post",
                data: {arr: arr},
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
                            "data": "TITLE", "orderable": true
                        }, {
                            "render": function ( data, type, full, meta ) {

                                var SER = full.SER;
                                 return '<input id=" "  data-toggle="modal" name="details1[]" data-target="#myModal1" class=" btn btn-success"  value="التفاصيل" type="button" onclick="y('+SER+')"> ';

                            }

                        },{
                            "render": function ( data, type, full, meta ) {

                                return '<input id=" "  data-toggle="modal" name="details1[]" data-target="#myModal2" class=" btn btn-success"  value="الرد " type="button" onclick=" zz('+full.SER+') "> ';


                            }
                        } , {
                            "data": "ENTER_DATE", "orderable": false
                        },{
                            "render": function ( data, type, full, meta ) {

                                if(full.STATUS ==1)
                                {
                                    return 'قيد التدقيق ';
                                }
                                else {
                                    return 'تم النظر';
                                }

                            }
                        } ]
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
        }

    });

});

function y(ee){

    var serial = ee;
    
    $.ajax({

        url: base_url + "complaint/complaint/COMPLAINT_TB_GET_BY_SER/"+serial,
        type: "post",
        success: function  (e) {
              var data = $.parseJSON(e);
              console.log(data[0]['SER']);
              $('#comp_title').text(data[0]['TITLE']);
              $('#comp_details').text(data[0]['DETAILS']);
        },
        error: function (e) {
        }
    });
};

function zz(ee){

    var serial = ee;


    $.ajax({

        url: base_url + "complaint/complaint/get_complaint_reply/"+serial,
        type: "post",
        success: function  (e) {
            var data = $.parseJSON(e);
            if(data==""){
                $('#comp_reply').text(" ");
            }
            else {
            $('#comp_reply').text(data[0]['REPLY']);

            }
        },
        error: function (e) {
        }
    });
};

