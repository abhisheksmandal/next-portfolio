import { posts } from "@/lib/posts";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BackButton } from '@/components/back-button'
import blogData from "@/data/blog.json";

export const metadata = {
  title: blogData.title,
  description: blogData.description,
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-32">
      <header className="text-center mb-12">
        <BackButton />
        <h1 className="text-4xl md:text-5xl font-bold font-headline">{blogData.pageHeader}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {blogData.pageSubheader}
        </p>
      </header>
      <Separator className="mb-12" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block group">
            <Card className="h-full light:bg-white/30 dark:bg-card/50 light:backdrop-blur-lg border-2 border-primary/10 group-hover:border-primary/40 transition-all duration-300 transform group-hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="font-headline group-hover:text-primary transition-colors">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground pt-2">{post.date}</p>
              </CardHeader>
              <CardContent>
                <CardDescription>{post.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
