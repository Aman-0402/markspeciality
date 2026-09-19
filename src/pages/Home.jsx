import SEO from '../components/common/SEO.jsx';
import HomeHero from '../components/home/HomeHero.jsx';

export default function Home() {
  return (
    <>
      <SEO
        title="Mark Speciality | Quality Lubricant Solutions"
        description="A modern React implementation for Mark Speciality's automotive, industrial, grease, and specialty lubricant solutions."
      />
      <HomeHero />
    </>
  );
}
