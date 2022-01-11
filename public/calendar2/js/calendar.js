document.addEventListener('DOMContentLoaded', function() {
    var calendarEl2 = document.getElementById('calendar2');

    var calendar = new FullCalendar.Calendar(calendarEl2, {
      headerToolbar: {
        left: 'prev',
        center: 'title',
        right: 'next'
      },
      dayMaxEvents: true // allow "more" link when too many events
    });

    calendar.render();
  });