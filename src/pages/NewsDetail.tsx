import { useParams, Link } from "react-router-dom";
import { newsItems } from "@/data/siteData";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = newsItems.find((n) => n.slug === slug);

  if (!item) {
    return (
      <main className="container py-20 text-center">
        <h1 className="text-4xl mb-4">Article Not Found</h1>
        <p className="text-muted-foreground mb-6">The news article you're looking for doesn't exist.</p>
        <Button asChild variant="outline">
          <Link to="/">Back to Home</Link>
        </Button>
      </main>
    );
  }

  return (
    <main className="container max-w-3xl py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <div className="flex items-center gap-3 mb-4">
        <Badge variant="secondary" className="bg-accent/10 text-accent border-0">{item.tag}</Badge>
        <span className="text-sm text-muted-foreground">{item.date}</span>
      </div>

      <h1 className="text-4xl md:text-5xl mb-8">{item.title}</h1>

      {item.images && item.images.length > 0 && (
        <div className="grid gap-4 mb-8 grid-cols-1 sm:grid-cols-2">
          {item.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${item.title} - image ${i + 1}`}
              className="w-full rounded-lg aspect-video object-cover bg-muted"
              loading="lazy"
            />
          ))}
        </div>
      )}

      <div className="prose prose-lg max-w-none text-foreground">
        {item.content.split("\n\n").map((paragraph, i) => (
          <p key={i} className="mb-4 text-muted-foreground leading-relaxed whitespace-pre-line">
            {paragraph.split(/(\*\*[^*]+\*\*)/).map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="text-foreground">{part.slice(2, -2)}</strong>
              ) : (
                part
              )
            )}
          </p>
        ))}
      </div>
    </main>
  );
};

export default NewsDetail;
