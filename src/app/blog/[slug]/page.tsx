import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.title} | DevOps Virtuoso`,
    description: post.description,
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-24 md:py-32 max-w-3xl">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold font-headline">{post.title}</h1>
        <p className="mt-4 text-muted-foreground text-lg">{post.date}</p>
      </header>
      <Separator className="my-8" />
      <div
        className="prose dark:prose-invert prose-lg max-w-none prose-pre:bg-secondary prose-pre:font-code prose-pre:p-4 prose-pre:rounded-lg"
        dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
      />
    </article>
  );
}
