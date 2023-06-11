/**
 * Created by mnaji on 26/09/2017.
 */

/**
 * Created by mnaji on 20/09/2017.
 */



var base_url = $('#base_url').val();

$(document).ready( function() {

    $.ajax({

        url: base_url + "Campaigns/Campaigns/get_subscriber_info_count",
        type: "post",
        success: function  (e) {
            if (e==0){
                $('.complaint-body').fadeOut();
                $('#pulsate-regular').fadeIn();
            }
            else {

            }
        },
        error: function (e) {
        }
    });

    $('#submit_complaint').on('click',function () {
        var arr = [];
        if($('input:radio:checked')){
         arr[1]=  $('input:radio:checked').val();
        }

        arr[2] = $('#manager option:selected').val();
        arr[3] = $('#complaintTitle').val();
        arr[4] = $('#complaintDetails').val();
        if ($('#complaintTitle').val() !='' || $('#complaintDetails').val()!='')
        {
        $.ajax({

            url: base_url + "complaint/insert_complaint_details",
            type: "POST",
            data: {arr: arr},
            success: function (e) {
                if (!isNaN(e))
                    toastr.success('تمت عملية الارسال بنجاح');
                else
                    toastr.error('لم تتم علمية الارسال');


            },
            error: function (e) {
                toastr.error('خطأ في عملية الحفظ');
            }

        });
        }
        else
        {

            toastr.error('خطأ في عملية الحفظ');
        }

    });


})