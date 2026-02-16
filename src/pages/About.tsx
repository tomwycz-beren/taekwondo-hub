const About = () => (
  <main>
    {/* Hero */}
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container text-center">
        <h1 className="text-5xl md:text-7xl mb-4">ABOUT OUR TEAM</h1>
        <p className="text-primary-foreground/70 max-w-2xl mx-auto">
          Discover our history, philosophy, and what makes our Taekwondo community special.
        </p>
      </div>
    </section>

    <section className="container py-16 max-w-3xl">
      <h2 className="text-3xl mb-4">Our Story</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Founded in 2005, our team has grown from a small group of enthusiasts to one of the region's most respected Taekwondo clubs. We are affiliated with World Taekwondo and committed to developing athletes of all ages and skill levels.
      </p>

      <h2 className="text-3xl mb-4">What is Taekwondo?</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        Taekwondo is a Korean martial art known for its emphasis on head-height kicks, jumping and spinning kicks, and fast kicking techniques. It combines combat and self-defense with sport, exercise, and philosophy. "Tae" means foot, "Kwon" means fist, and "Do" means the way — the way of the foot and fist.
      </p>

      <h2 className="text-3xl mb-4">Our Philosophy</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        We believe Taekwondo is more than a sport. It's a path to personal growth that builds discipline, respect, perseverance, and self-confidence. Our training emphasizes the five tenets of Taekwondo: Courtesy, Integrity, Perseverance, Self-Control, and Indomitable Spirit.
      </p>

      <h2 className="text-3xl mb-4">Why Join Us?</h2>
      <ul className="space-y-3 text-muted-foreground">
        {[
          "Experienced, certified coaches with international competition backgrounds",
          "Classes for all ages — from 5 years old to adults",
          "A supportive and welcoming community",
          "Regular competitions and belt promotion opportunities",
          "Modern training facility with professional equipment",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-accent font-bold mt-0.5">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

export default About;
