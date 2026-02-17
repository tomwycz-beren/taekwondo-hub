const Calendar = () => {
  return (
    <main className="container py-16">
      <h1 className="text-5xl md:text-6xl text-center mb-10">CALENDAR</h1>
      <div className="rounded-lg overflow-hidden border bg-card shadow-sm">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York&showTitle=0&showNav=1&showPrint=0&showTabs=1&showCalendars=0"
          className="w-full h-[500px] md:h-[700px] border-0"
          title="Team Calendar"
        />
      </div>
      <p className="text-xs text-muted-foreground text-center mt-4">
        Replace the calendar ID in the embed URL with your team's Google Calendar to show your own events.
      </p>
    </main>
  );
};

export default Calendar;
