import { pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import BlogIndex from '@/components/blog/BlogIndex';

export const metadata = pageMeta({
  title: 'Blog — Rudrix',
  description: 'Practical writing on product, engineering and e-commerce from the Rudrix team.',
  alternates: { canonical: '/blog' },
});

export default function BlogPage() {
  return (
    <>
      <main>
        <Header />
        <BlogIndex posts={blogPosts} />
      </main>
      <Footer />
    </>
  );
}
