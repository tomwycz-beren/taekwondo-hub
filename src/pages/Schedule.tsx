import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { schedule } from "@/data/siteData";

const days = ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Schedule = () => (
  <main>
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center">
        <h1 className="text-5xl md:text-7xl mb-4">SCHEDULE & CLASSES</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Find the right class for you. All levels welcome — first trial session is free!
        </p>
      </div>
    </section>

    <section className="container py-16">
      {/* Desktop table */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary">
              <TableHead className="font-bold">Day</TableHead>
              <TableHead className="font-bold">Time</TableHead>
              <TableHead className="font-bold">Class</TableHead>
              <TableHead className="font-bold">Level</TableHead>
              <TableHead className="font-bold">Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((s, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{s.day}</TableCell>
                <TableCell>{s.time}</TableCell>
                <TableCell>{s.class}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{s.level}</Badge>
                </TableCell>
                <TableCell>{s.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-6">
        {days.map((day) => (
          <div key={day}>
            <h3 className="text-2xl mb-3 text-accent">{day}</h3>
            <div className="space-y-3">
              {schedule
                .filter((s) => s.day === day)
                .map((s, i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium">{s.class}</span>
                        <Badge variant="secondary" className="text-xs">{s.level}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{s.time} · {s.location}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Class descriptions */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {[
          { title: "Kids (5–8)", desc: "Fun-focused introduction to Taekwondo fundamentals. Builds coordination, discipline, and confidence through games and basic techniques." },
          { title: "Juniors (9–14)", desc: "Structured training covering poomsae, sparring basics, and self-defense. Prepares students for belt promotions and competitions." },
          { title: "Adults (Beginners)", desc: "No experience needed. Learn the foundations of Taekwondo in a supportive environment with a focus on fitness and technique." },
          { title: "Competition Team", desc: "Intensive training for athletes preparing for regional and national tournaments. Invitation or coach approval required." },
        ].map((c) => (
          <Card key={c.title}>
            <CardContent className="p-6">
              <h3 className="text-xl mb-2">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </main>
);

export default Schedule;
