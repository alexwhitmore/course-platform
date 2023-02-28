import LandingPageLayout from '../layouts/LandingPageLayout';
import Hero from '@/ui/Hero';
import FeaturedScreenshot from '@/ui/FeaturedScreenshot';
import FeaturedGrid from '@/ui/FeaturedGrid';
import Testimonial from '@/ui/Testimonial';
import Blog from '@/ui/Blog';
import CallToAction from '@/ui/CallToAction';

export default function Home() {
  return (
    <LandingPageLayout>
      <main>
        <Hero />
        <FeaturedScreenshot />
        <FeaturedGrid />
        <Testimonial />
        <Blog />
        <CallToAction />
      </main>
    </LandingPageLayout>
  );
}
