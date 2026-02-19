import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { schedule } from "@/data/siteData";

const days = ["Poniedziałek", "Środa", "Czwartek", "Piątek", "Sobota"];

const Schedule = () => (
  <main>
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center">
        <h1 className="text-5xl md:text-7xl mb-4">HARMONOGRAM I ZAJĘCIA</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Znajdź odpowiednie zajęcia dla siebie. Zapraszamy na wszystkich poziomach — pierwsza lekcja próbna gratis!
        </p>
      </div>
    </section>

    <section className="container py-16">
      {/* Desktop table */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow className="bg-secondary">
              <TableHead className="font-bold">Dzień</TableHead>
              <TableHead className="font-bold">Godzina</TableHead>
              <TableHead className="font-bold">Zajęcia</TableHead>
              <TableHead className="font-bold">Poziom</TableHead>
              <TableHead className="font-bold">Miejsce</TableHead>
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
          { title: "Dzieci (5–8)", desc: "Zabawowe wprowadzenie do podstaw taekwondo. Rozwija koordynację, dyscyplinę i pewność siebie poprzez gry i podstawowe techniki." },
          { title: "Juniorzy (9–14)", desc: "Ustrukturyzowany trening obejmujący poomsae, podstawy sparingu i samoobronę. Przygotowuje uczniów do egzaminów na pasy i zawodów." },
          { title: "Dorośli (Początkujący)", desc: "Doświadczenie nie jest wymagane. Poznaj podstawy taekwondo w przyjaznym środowisku z naciskiem na kondycję i technikę." },
          { title: "Kadra zawodnicza", desc: "Intensywny trening dla sportowców przygotowujących się do turniejów regionalnych i krajowych. Wymagane zaproszenie lub zgoda trenera." },
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
