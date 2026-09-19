import SEO from '../components/common/SEO.jsx';
import HomeHero from '../components/home/HomeHero.jsx';
import HomeProducts from '../components/home/HomeProducts.jsx';
import Industries from '../components/home/Industries.jsx';
import WhyChooseUs from '../components/home/WhyChooseUs.jsx';

export default function Home() {
  return (
    <>
      <SEO
        title="Mark Speciality | Quality Lubricant Solutions"
        description="A modern React implementation for Mark Speciality's automotive, industrial, grease, and specialty lubricant solutions."
      />
      <HomeHero />
      <HomeProducts />
      <WhyChooseUs />
      <Industries />
    </>
  );
}
