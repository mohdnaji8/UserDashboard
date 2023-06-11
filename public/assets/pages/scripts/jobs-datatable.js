/**
 * Created by mnaji on 26/08/2017.
 */
var base_url = $('#base_url').val();
$(document).ready( function() {



$('#nextbtn').on('click',function () {

        $.ajax({

            url: base_url + "jobs/jobs/get_gif",
            type: "post",
            success: function (e) {
                var data = $.parseJSON(e);

                table = $('#qualification_view').DataTable({
                    destroy: true,
                    "language": {
                        "aria": {
                            "sortAscending": ": activate to sort column ascending",
                            "sortDescending": ": activate to sort column descending"
                        },
                        "emptyTable": "لا يوجد بيانات",
                        "info": "",
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
                        "data": "QUAL_TYPE_NAME", "orderable": true
                    }, {
                        "data": "QUAL_FIELD_NAME", "orderable": true
                    }, {
                        "data": "UNIVERSITY", "orderable": false
                    }, {
                        "data": "GRAD_DATE", "orderable": false
                    },{
                        "data": "GPA", "orderable": true
                    }]
                    ,

                    "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

                    "lengthMenu": [
                        [ -1],
                        [ "All"] // change per page values here
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
    $.ajax({

        url: base_url + "jobs/jobs/get_experiance",
        type: "post",
        success: function (e) {
            var data = $.parseJSON(e);

            table = $('#exper_view').DataTable({
                destroy: true,
                "language": {
                    "aria": {
                        "sortAscending": ": activate to sort column ascending",
                        "sortDescending": ": activate to sort column descending"
                    },
                    "emptyTable": "لا يوجد بيانات",
                    "info": "",
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
                    "data": "JOB_PLACE", "orderable": true
                }, {
                    "data": "JOB_TITLE", "orderable": true
                }, {
                    "data": "START_DATE", "orderable": false
                }, {
                    "data": "END_DATE", "orderable": false
                }, {
                    "data": "NOTES", "orderable": false
                }, {
                    "data": "TASKS", "orderable": false
                },{
                    "data": "MANAGER_NAME", "orderable": false
                },{
                    "data": "MANAGER_MOBILE", "orderable": false
                },{
                    "data": "MANAGER_JOB_TITLE", "orderable": true
                }]
                ,

               /* $date1 = new DateTime($item['START_DATE']);
                $result1 = $date1->format('d/m/Y');
                $date2 = new DateTime($item['END_DATE']);
                $result2 = $date2->format('d/m/Y');*/

            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

                "lengthMenu": [
                    [ -1],
                    [ "All"] // change per page values here
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

    $.ajax({

        url: base_url + "jobs/jobs/get_course",
        type: "post",
        success: function (e) {
            var data = $.parseJSON(e);

            table = $('#course_view').DataTable({
                destroy: true,
                "language": {
                    "aria": {
                        "sortAscending": ": activate to sort column ascending",
                        "sortDescending": ": activate to sort column descending"
                    },
                    "emptyTable": "لا يوجد بيانات",
                    "info": "",
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
                    "data": "CRS_NAME", "orderable": true
                }, {
                    "data": "CRS_SPEC", "orderable": true
                }, {
                    "data": "CRS_PLACE", "orderable": false
                }, {
                    "data": "HOURS", "orderable": false
                }, {
                    "data": "START_DATE", "orderable": false
                }, {
                    "data": "END_DATE", "orderable": false
                }]
                ,

                /* $date1 = new DateTime($item['START_DATE']);
                 $result1 = $date1->format('d/m/Y');
                 $date2 = new DateTime($item['END_DATE']);
                 $result2 = $date2->format('d/m/Y');*/

                "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

                "lengthMenu": [
                    [-1],
                    ["All"] // change per page values here
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

    $.ajax({

        url: base_url + "jobs/jobs/get_language",
        type: "post",
        success: function (e) {
            var data = $.parseJSON(e);

            table = $('#language_view').DataTable({
                destroy: true,
                "language": {
                    "aria": {
                        "sortAscending": ": activate to sort column ascending",
                        "sortDescending": ": activate to sort column descending"
                    },
                    "emptyTable": "لا يوجد بيانات",
                    "info": "",
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
                    "data": "LANG_ID_NAME", "orderable": true
                }, {
                    "data": "READING", "orderable": true
                }, {
                    "data": "WRITING", "orderable": false
                }, {
                    "data": "SPEAKIING", "orderable": false
                }, {
                    "data": "NOTES", "orderable": false
                }]
                ,

                /* $date1 = new DateTime($item['START_DATE']);
                 $result1 = $date1->format('d/m/Y');
                 $date2 = new DateTime($item['END_DATE']);
                 $result2 = $date2->format('d/m/Y');*/

                "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

                "lengthMenu": [
                    [-1],
                    ["All"] // change per page values here
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

    $.ajax({

        url: base_url + "jobs/jobs/get_membership",
        type: "post",
        success: function (e) {
            var data = $.parseJSON(e);

                    table = $('#member_view').DataTable({
                        destroy: true,
                        "language": {
                            "aria": {
                                "sortAscending": ": activate to sort column ascending",
                                "sortDescending": ": activate to sort column descending"
                            },
                            "emptyTable": "لا يوجد بيانات",
                            "info": "",
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
                    "data": "SYNDICATE", "orderable": true
                }, {
                    "data": "START_DATE", "orderable": true
                }, {
                    "data": "TITLE_NAME", "orderable": false
                }, {
                    "data": "NOTES", "orderable": false
                }]
                ,
                  /* $date1 = new DateTime($item['START_DATE']);
                 $result1 = $date1->format('d/m/Y');
                 $date2 = new DateTime($item['END_DATE']);
                 $result2 = $date2->format('d/m/Y');*/

                "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

                "lengthMenu": [
                    [-1],
                    ["All"] // change per page values here
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