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
      events: {
        url: "http://localhost:3000/agendar"
      }
    });

    calendar.render();
  });