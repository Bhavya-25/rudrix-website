import { pageMeta } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { blogPosts } from '@/data/blog';
import BlogIndex from '@/components/blog/BlogIndex';

export const metadata = pageMeta({
  title: 'Rudrix Blog | Insights on Tech, Design & Development',
  description: 'Read the latest insights, practical tips, and strategies on software development, web design, eCommerce, and digital growth from the experts at Rudrix.',
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
