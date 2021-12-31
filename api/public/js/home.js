document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.querySelector('.calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },

      initialDate: '2021-01-01',
    //   navLinks: true, // can click day/week names to navigate views
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        // {
        //   title: 'Meu aniversario',
        //   start: '2021-01-21'
        // }
      ]
    });

    calendar.render();
  }); 
  