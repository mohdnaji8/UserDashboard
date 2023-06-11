/**
 * Created by mnaji on 26/08/2017.
 */
var base_url = $('#base_url').val();
$(document).ready( function() {
    var table = $('#table-pagination');

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

    $('[data-toggle="popover"]').popover();
    var i =1;
    if (i==1)
    {
        $("#warn_msg").fadeOut().fadeIn().fadeOut().fadeIn().fadeOut().fadeIn();
    }
    else
    {

    }

    $('input[name="applyjob[]"]').on('click',function(e){
        var tr=$(this).closest('tr');

        var ADVER_ID =tr.find('input[name="ADVER_ID[]"]').val();
        // alert(arr[0]);
        $.ajax({

            url: base_url + "jobs/jobs/insert_job_apply",
            type: "post",
            data: {ADVER_ID: ADVER_ID},
            success: function (e) {
               tr.find('div[id="show-button[]"]').html("<p>تم تقديم الطلب </p><br><p> طلبك قيد التدقيق</p>");

                toastr.success("تم تقديم الطلب");

            },
            error: function (e) {

                toastr.error("حدث خطأ في تقديم الطلب");
            }


        });
    })


})