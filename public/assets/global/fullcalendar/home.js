$(function() {
	var base_url = $('#base_url').val();
    var myEvents = [];
	var todayDate = moment().startOf('day');
	var YM = todayDate.format('YYYY-MM');
	var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
	var TODAY = todayDate.format('YYYY-MM-DD');
	var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

    $.ajax({

        url: base_url + "template/general/get_calendar",
        type: "post",
        success: function (e) {

            var data = $.parseJSON(e);
            $.each(data, function (key, value) {
                if (value.TYPE=='1')
                {

                    myEvents.push({
                        title: value.ADVER_TITLE_NAME,
                        start: value.START_DATE,
                        end: value.END_DATE,
                        allDay: true
                    });
                }
                else if (value.TYPE=='2')
                {

                    myEvents.push({
                        title: value.ADVER_TITLE_NAME,
                        start: value.START_DATE,
                        end: value.END_DATE,
                        color: '#8775a7',
                      // color: '#44b6ae',
                        //color:'#e35b5a',

                        allDay: true
                    });
                }


            });

            $('#calendar').fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay,listWeek'
                },
                editable: true,
                eventLimit: true, // allow "more" link when too many events
                navLinks: true,
                events: myEvents,
                eventRender: function (event, element, view) {
                    if (event.color) {
                        element.css('background-color', event.color)
                    }

                }




            });
        }
    });
    //alert(myEvents);
    //$('#calendar').fullCalendar({events: myEvents});

});