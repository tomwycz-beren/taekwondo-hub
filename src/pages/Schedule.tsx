import React, { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { schedule } from "@/data/siteData";

const days = ["Poniedziałek", "Wtorek", "Czwartek", "Piątek", "Sobota"];

const Schedule = () => {
  const [filters, setFilters] = useState({
    search: '',
    day: '',
    class: '',
    location: ''
  });

  // Filtruj dane
  const filteredSchedule = useMemo(() => {
    return schedule.filter(s => {
      const matchesSearch = 
        s.day.toLowerCase().includes(filters.search.toLowerCase()) ||
        s.time.toLowerCase().includes(filters.search.toLowerCase()) ||
        s.class.toLowerCase().includes(filters.search.toLowerCase()) ||
        s.level.toLowerCase().includes(filters.search.toLowerCase()) ||
        s.location.toLowerCase().includes(filters.search.toLowerCase());
      
      const matchesDay = !filters.day || s.day === filters.day;
      const matchesClass = !filters.class || s.class === filters.class;
      const matchesLocation = !filters.location || s.location === filters.location;
      
      return matchesSearch && matchesDay && matchesClass && matchesLocation;
    });
  }, [schedule, filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
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
        {/* Desktop table z filtrami */}
        <div className="hidden md:block mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6 p-4 bg-secondary rounded-lg">
            <input
              type="text"
              placeholder="Szukaj..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
            />
            <select
              value={filters.day}
              onChange={(e) => handleFilterChange('day', e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
            >
              <option value="">Wszystkie dni</option>
              {days.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
            <select
              value={filters.class}
              onChange={(e) => handleFilterChange('class', e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
            >
              <option value="">Wszystkie grupy</option>
              {[...new Set(schedule.map(s => s.class))].map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
            >
              <option value="">Wszystkie miejsca</option>
              {[...new Set(schedule.map(s => s.location))].map(l => <option key={l} value={l}>{l}</option>)}
            </select>
            <button
              onClick={() => setFilters({ search: '', day: '', class: '', location: '' })}
              className="px-4 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90"
            >
              Wyczyść
            </button>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary">
                  <TableHead className="font-bold">Dzień</TableHead>
                  <TableHead className="font-bold">Godzina</TableHead>
                  <TableHead className="font-bold">Grupa</TableHead>
                  <TableHead className="font-bold">Poziom</TableHead>
                  <TableHead className="font-bold">Miejsce</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredSchedule.map((s, i) => (
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
        </div>

        {/* Mobile cards – bez zmian */}
        <div className="md:hidden space-y-6">
          {days.map(day => (
            <div key={day}>
              <h3 className="text-2xl mb-3 text-accent">{day}</h3>
              <div className="space-y-3">
                {filteredSchedule
                  .filter(s => s.day === day)
                  .map((s, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium">{s.class}</span>
                          <Badge variant="secondary" className="text-xs">{s.level}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {s.time} · {s.location}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Opisy klas – bez zmian */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {[
            { title: "Dzieci 5-8", desc: "Zabawowe wprowadzenie do podstaw taekwondo. Rozwija koordynację, dyscyplinę i pewność siebie poprzez gry i podstawowe techniki." },
            { title: "Młodzicy 9-11", desc: "Ustrukturyzowany trening obejmujący poomsae, podstawy sparingu i samoobronę. Przygotowuje uczniów do egzaminów na pasy i zawodów." },
            { title: "Grupa Senior", desc: "Doświadczenie nie jest wymagane. Poznaj podstawy taekwondo w przyjaznym środowisku z naciskiem na kondycję i technikę." },
            { title: "Młodzież/Zawodnicy", desc: "Intensywny trening dla sportowców przygotowujących się do turniejów regionalnych i krajowych." }
          ].map(c => (
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
};

export default Schedule;
