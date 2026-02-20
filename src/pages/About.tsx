import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { achievements } from "@/data/siteData";

const About = () => (
  <main>
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center">
        <h1 className="text-5xl md:text-7xl mb-4">O NASZYM ZESPOLE</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Poznaj naszą historię, filozofię i to, co czyni naszą społeczność taekwondo wyjątkową.
        </p>
      </div>
    </section>

    <section className="container py-16 max-w-3xl">
      <h2 className="text-3xl mb-4">Nasza historia</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Założony w 2005 roku, nasz zespół wyrósł z małej grupy entuzjastów w jeden z najbardziej szanowanych klubów taekwondo w regionie. Jesteśmy zrzeszeni w World Taekwondo i zobowiązani do rozwoju sportowców w każdym wieku i na każdym poziomie zaawansowania.
      </p>

      <h2 className="text-3xl mb-4">Czym jest Taekwondo?</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Taekwondo to koreańska sztuka walki znana z naciskiem na kopnięcia na wysokość głowy, kopnięcia z wyskoku i obrotu oraz szybkie techniki kopania. Łączy walkę i samoobronę ze sportem, ćwiczeniami i filozofią. „Tae" oznacza stopę, „Kwon" oznacza pięść, a „Do" oznacza drogę — drogę stopy i pięści.
      </p>

      <h2 className="text-3xl mb-4">Nasza filozofia</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Wierzymy, że taekwondo to więcej niż sport. To droga do rozwoju osobistego, która buduje dyscyplinę, szacunek, wytrwałość i pewność siebie. Nasz trening podkreśla pięć zasad taekwondo: Uprzejmość, Uczciwość, Wytrwałość, Samokontrola i Niezłomny Duch.
      </p>

      <h2 className="text-3xl mb-4">Dlaczego warto do nas dołączyć?</h2>
      <ul className="space-y-3 text-muted-foreground">
        {[
          "Doświadczeni, certyfikowani trenerzy z międzynarodowym doświadczeniem zawodniczym",
          "Zajęcia dla wszystkich grup wiekowych — od 5 lat do dorosłych",
          "Wspierająca i przyjazna społeczność",
          "Regularne zawody i możliwości awansu na kolejne pasy",
          "Nowoczesny obiekt treningowy z profesjonalnym wyposażeniem",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-accent font-bold mt-0.5">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
	
	<section className="bg-secondary py-16">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <Trophy className="h-8 w-8 text-accent" />
          <h2 className="text-4xl">OSIĄGNIĘCIA</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold">Rok</TableHead>
              <TableHead className="font-bold">Wydarzenie</TableHead>
              <TableHead className="font-bold">Wynik</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {achievements.map((a, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{a.year}</TableCell>
                <TableCell>{a.event}</TableCell>
                <TableCell className="text-accent font-medium">{a.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
	
	
  </main>
);


export default About;
