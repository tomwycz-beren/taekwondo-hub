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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you as soon as possible." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main>
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h1 className="text-5xl md:text-7xl mb-4">CONTACT US</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Questions about classes, registration, or anything else? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can we help?"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
              Send Message
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            {[
              { icon: MapPin, title: "Address", text: "123 Martial Arts Street\nSport City, SC 12345" },
              { icon: Clock, title: "Training Hours", text: "Mon / Wed / Fri: 16:00 – 21:00\nThursday: 18:00 – 19:30\nSaturday: 10:00 – 13:30" },
              { icon: Phone, title: "Phone", text: "+1 (555) 123-4567" },
              { icon: Mail, title: "Email", text: "info@tkdteam.com" },
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
