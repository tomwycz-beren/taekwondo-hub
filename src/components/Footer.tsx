import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import TKKF_Logo_new from "@/assets/promyk_logo_new.jpg";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
  
    <div className="container py-12">
      <div className="grid gap-2 md:gap-1 md:grid-cols-2">
	  
        <div>
          <h3 className="text-2xl mb-3">Klub TKKF "Promyk" Ciechanów</h3>
          
		  <img 
			src={TKKF_Logo_new}
			alt="TKKF Promyk Logo"
			className="w-32 h-auto mb-4 mx-auto md:mx-0" 
			/>
			<p className="text-primary-foreground/70 text-sm leading-relaxed">
            Budujemy dyscyplinę, pewność siebie i siłę poprzez sztukę taekwondo od 2005 roku.
          </p>
        </div>
		
        

          

{/* Kontakt*/}
<div>
  <h4 className="text-lg mb-3">Kontakt</h4>
  <div className="text-sm text-primary-foreground/70 space-y-1">
  
	  {/* Adres */}
      <div className="flex items-center space-x-3 p-3 bg-background/10 hover:bg-background/20 rounded-md transition-all duration-200">
      <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          Adres
        </div>
        <a href="https://maps.app.goo.gl/yc2a4XbJZvBC1VJ59" className="text-sm font-medium hover:text-primary transition-colors">
          Hala Sportowa, 17 Stycznia 60B, 06-400 Ciechanów
        </a>
      </div>
    </div>
  
    {/* Telefon */}
    <div className="flex items-center space-x-3 p-3 bg-background/10 hover:bg-background/20 rounded-md transition-all duration-200">
      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          Telefon
        </div>
        <a href="tel:+48515132442" className="text-sm font-medium hover:text-primary transition-colors">
          +48 515 132 442
        </a>
      </div>
    </div>
    
    {/* Email */}
    <div className="flex items-center space-x-3 p-3 bg-background/10 hover:bg-background/20 rounded-md transition-all duration-200">
      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
      <div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          Email
        </div>
        <a href="mailto:tkkfpromykwp@op.pl" className="text-sm font-medium hover:text-primary transition-colors">
          tkkfpromykwp@op.pl
        </a>
      </div>
    </div>
  </div>
</div>

		  

      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Klub TKKF "Promyk" Ciechanów. Wszelkie prawa zastrzeżone.
      </div>
    </div>
  </footer>
);

export default Footer;
