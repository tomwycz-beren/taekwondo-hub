import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { galleryImages, achievements } from "@/data/siteData";

const Gallery = () => (
  <main>
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center">
        <h1 className="text-5xl md:text-7xl mb-4">GALERIA I OSIĄGNIĘCIA</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Chwile z naszych treningów, zawodów i uroczystości.
        </p>
      </div>
    </section>

    <section className="container py-16">
      <h2 className="text-4xl mb-8">GALERIA ZDJĘĆ</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((img, i) => (
          <Card key={i} className="overflow-hidden group">
            <CardContent className="p-0 relative aspect-square">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-primary-foreground text-sm font-medium">{img.caption}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-6">
        Zamień te przykładowe zdjęcia na własne zdjęcia zespołu!
      </p>
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

export default Gallery;
