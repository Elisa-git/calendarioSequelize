document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },
      navLinks: true, // can click day/week names to navigate views
      businessHours: {
        daysOfWeek: [ 1, 2, 3, 4, 5 ],
        startTime: '08:00', 
        endTime: '18:00',
      },
      editable: true,
      selectable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [

        {

          title: 'Operacional',

          start: '2022-01-25T08:00:00',

          end: '2022-01-28T16:00:00',

          color: '#ff9f89'

        },

        {

          title: 'Comércio',

          start: '2022-01-20T09:00:00',

          color: '#183884'

        },

        {

          title: 'Autoplay',

          start: '2022-01-26T12:00:00',

          color: '#FF0000'

        },

        {

          title: 'Autocode',

          start: '2022-01-28T08:00:00',

          color: '#FEFE2F'

        },

        {

          title: 'Operacional',

          start: '2022-01-27T08:00:00',

          color: '#745AC0'

        }

      ]
    });

    calendar.render();
  }
);