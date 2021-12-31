  document.addEventListener('DOMContentLoaded', function() {
    var calendarE2 = document.querySelector('.calendar2');

    var calendar = new FullCalendar.Calendar(calendarE2, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
      },

      initialDate: '2021-01-01',
      navLinks: true, // can click day/week names to navigate views
      editable: true,
      nowIndicator: true,
    // selectable: true,    //Quando seleciona o dia ele fica de outra cor
      editable: true,
      dayMaxEvents: true, // allow "more" link when too many events
      events: [
        {
          title: 'Silvio - Área externa 1',
          start: '2021-12-09T16:00:00'
        },
        {
          title: 'Daniel - Sala 5',
          start: '2021-12-14',
          end: '2021-12-16'
        },
        {
          title: 'Womar - Sala 6',
          start: '2021-12-14T10:00:00'
        },
        {
          title: 'Ana - Sala 1',
          start: '2021-12-14T12:00:00'
        },
        {
          title: 'João - Sala 3',
          start: '2021-12-13',
          end: '2021-12-17'
        },
        {
          title: 'Womar - Sala 2',
          start: '2021-12-17T11:00:00'
        },
        {
          title: 'Juliana - Sala 2',
          start: '2021-12-15T17:00:00'
        },
        {
          title: 'Juliana - Sala 1',
          start: '2021-12-17T12:00:00'
        },
        {
          title: 'Ana - Sala 4',
          start: '2021-12-17T08:00:00'
        },
        {
          title: 'Ana - Sala 4',
          start: '2021-12-23T08:00:00'
        },
        {
          title: 'Daniel - Sala 6',
          start: '2021-12-22T18:00:00'
        },
        {
          title: 'Womar - Sala 2',
          start: '2021-12-20',
          end: '2021-12-23'
        },
        {
          title: 'Silvio - Área externa 2',
          start: '2021-12-27',
          end: '2021-12-30'
        }
      ]
    });

    calendar.render();
  });