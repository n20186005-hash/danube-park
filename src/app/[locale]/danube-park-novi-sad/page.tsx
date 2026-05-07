import { setRequestLocale } from 'next-intl/server';
import DanubeParkHeader from '@/components/DanubeParkHeader';
import Hero from '@/components/Hero';
import DanubeParkIntro from '@/components/DanubeParkIntro';
import DanubeParkInfoSection from '@/components/DanubeParkInfoSection';
import DanubeParkGallery from '@/components/DanubeParkGallery';
import DanubeParkAccommodation from '@/components/DanubeParkAccommodation';
import DanubeParkReviews from '@/components/DanubeParkReviews';
import DanubeParkMap from '@/components/DanubeParkMap';
import DanubeParkFooter from '@/components/DanubeParkFooter';

export default async function DanubeParkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <DanubeParkHeader />
      <main>
        <Hero 
          imageSrc="/gallery/images (1).jpg"
          imageAlt="Danube Park"
          mapsLink="https://maps.app.goo.gl/qdYkYweFBppxG6SM9"
        />
        <DanubeParkIntro />
        <DanubeParkInfoSection />
        <DanubeParkGallery />
        <DanubeParkAccommodation />
        <DanubeParkReviews />
        <DanubeParkMap />
      </main>
      <DanubeParkFooter />
    </>
  );
}
