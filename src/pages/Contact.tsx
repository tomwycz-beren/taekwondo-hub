import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });



  return (
    <main>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl mb-4">KONTAKT</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Masz pytania dotyczące zajęć, rejestracji lub czegokolwiek innego? Chętnie pomożemy.
          </p>
        </div>
      </section>

      <section className="container py-10">
        <div className="grid gap-2 md:grid-cols-1">
          

          <div className="space-y-4">
            {[
              { icon: MapPin, title: "Adres", text: "Hala Widowiskowo-Sportowa (sala na 1 piętrze)\n17 Stycznia 60B, 06-400 Ciechanów" },
              { icon: Phone, title: "Telefon", text: "+48 515 132 442" },
              { icon: Mail, title: "Email", text: "tkkfpromykwp@op.pl" },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-4 flex gap-4 items-start">
                  <item.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{item.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
