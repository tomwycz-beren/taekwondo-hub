import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Users, Trophy, ArrowRight } from "lucide-react";
import { newsItems } from "@/data/siteData";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroBanner}
          alt="Taekwondo team training session"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center text-primary-foreground container">
          <h1 className="text-6xl md:text-8xl mb-4">DISCIPLINE. STRENGTH. SPIRIT.</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-primary-foreground/80">
            Join our Taekwondo family — building champions on and off the mat since 2005.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/schedule">View Schedule</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: CalendarDays, title: "Classes & Schedule", desc: "Find the right class for your age and skill level.", to: "/schedule" },
            { icon: Users, title: "Meet the Team", desc: "Our experienced coaches and dedicated athletes.", to: "/team" },
            { icon: Trophy, title: "Achievements", desc: "Celebrating our medals and competition results.", to: "/gallery" },
          ].map((item) => (
            <Card key={item.title} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <item.icon className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-2xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                <Link to={item.to} className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>


      {/* News Feed */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-4xl md:text-5xl text-center mb-10">LATEST NEWS</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {newsItems.map((item) => (
              <Link key={item.id} to={`/news/${item.slug}`} className="block group">
                <Card className="h-full transition-shadow group-hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="secondary" className="bg-accent/10 text-accent border-0">{item.tag}</Badge>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                    <h3 className="text-xl mb-1 group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.summary}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
