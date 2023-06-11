/**
 * Created by mnaji on 26/08/2017.
 */
var base_url = $('#base_url').val();
$(document).ready( function() {
    /*var table = $('#table_format');*/

  /*  var oTable = table.dataTable({

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
       /* "pageLength": 5,

        "language": {
            "lengthMenu": " _MENU_ records"
        },
        "columnDefs": [
            { // set default column settings
                'orderable': false,
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
    });*/

   // $('[data-toggle="popover"]').popover();


    $('#filterText').on('change',function(){
    var year =  $(this).val();
        //var table = 'table_format';

        var count=0;
        //$('#'+table+'tr').parent().remove();

        $.ajax({

            url: base_url + "jobs/jobs/get_archive",
            type: "post",
            data: {year: year},
            success: function (e) {
                var data = $.parseJSON(e);
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
                        "data": "ADVER_ID", "orderable": true
                    }, {
                        "data": "ADVER_TYPE_EMP_NAME", "orderable": true
                    }, {
                        "data": "ENTERY_DATE", "orderable": false
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

    })
})