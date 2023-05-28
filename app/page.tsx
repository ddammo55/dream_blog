
import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';

export default function HomePage() {
  return <section className='items-center'>
            <Hero/>
            {/* @ts-expect-error Server Component*/}
            <FeaturedPosts/>
  </section>;
}

