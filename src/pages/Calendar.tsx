const Calendar = () => {
  return (
    <main className="container py-16">
      <h1 className="text-5xl md:text-6xl text-center mb-10">KALENDARZ</h1>
      <div className="rounded-lg overflow-hidden border bg-card shadow-sm">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=6b8a55ec0a76da9f1eb663d6dd221793e41da9bc35c97616a3b5c412c1f680c9%40group.calendar.google.com&ctz=Europe%2FWarsaw"
          className="w-full h-[500px] md:h-[700px] border-0"
          title="Kalendarz zespołu"
        />
      </div>
    </main>
  );
};

export default Calendar;
