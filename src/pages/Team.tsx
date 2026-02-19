import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { coaches } from "@/data/siteData";

const Team = () => (
  <main>
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center">
        <h1 className="text-5xl md:text-7xl mb-4">NASI TRENERZY</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Poznaj oddanych trenerów, którzy prowadzą naszych sportowców ku doskonałości.
        </p>
      </div>
    </section>

    <section className="container py-16">
      <div className="grid gap-8 md:grid-cols-2">
        {coaches.map((coach) => (
          <Card key={coach.name} className="overflow-hidden">
            <CardContent className="p-0 flex flex-col sm:flex-row">
              <div className="sm:w-40 h-48 sm:h-auto bg-secondary flex items-center justify-center shrink-0">
                <img src={coach.image} alt={coach.name} className="w-24 h-24 rounded-full object-cover" />
              </div>
              <div className="p-6 flex-1">
                <h3 className="text-2xl mb-1">{coach.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <Badge className="bg-accent text-accent-foreground border-0">{coach.role}</Badge>
                  <span className="text-xs text-muted-foreground">{coach.belt}</span>
                </div>
                <p className="text-sm text-muted-foreground">{coach.bio}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </main>
);

export default Team;
