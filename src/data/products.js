import automotiveImage from '../assets/images/product-automotive-lubricants.png';
import automotiveImageWebp from '../assets/images/product-automotive-lubricants.webp';
import industrialImage from '../assets/images/product-industrial-lubricants.png';
import industrialImageWebp from '../assets/images/product-industrial-lubricants.webp';
import greaseImage from '../assets/images/product-greases.png';
import greaseImageWebp from '../assets/images/product-greases.webp';
import specialtyImage from '../assets/images/product-specialty-products.png';
import specialtyImageWebp from '../assets/images/product-specialty-products.webp';

const IMAGE_WIDTH = 900;
const IMAGE_HEIGHT = 600;

export const productCategories = [
  {
    id: 'automotive-lubricants',
    slug: 'automotive-lubricants',
    title: 'Automotive Lubricants',
    description:
      'High-performance oils designed to enhance engine efficiency, ensure smooth transmission, and protect components for gasoline and diesel vehicles.',
    image: automotiveImage,
    imageWebp: automotiveImageWebp,
    imageWidth: IMAGE_WIDTH,
    imageHeight: IMAGE_HEIGHT,
    imageAlt:
      'Golden engine oil being poured into a modern vehicle engine in a service bay',
    category: 'Automotive',
    tagline: 'Engineered for the road, mile after mile.',
    accentColor: 'var(--color-gold-600)',
    benefits: ['Engine Protection', 'Fuel Efficiency', 'Smooth Performance'],
    applications: ['Engine oils', 'Transmission fluids', 'Gear oils'],
    features: ['Thermal stability', 'Wear control', 'Deposit protection'],
    performanceAdvantages: [
      'Reduced Friction',
      'Wear Protection',
      'Thermal Stability',
      'Longer Service Life',
    ],
    industriesServed: ['automotive', 'engineering', 'construction'],
  },
  {
    id: 'industrial-lubricants',
    slug: 'industrial-lubricants',
    title: 'Industrial Lubricants',
    description:
      'Robust solutions for industrial machinery, reducing wear and helping equipment perform reliably in demanding operating environments.',
    image: industrialImage,
    imageWebp: industrialImageWebp,
    imageWidth: IMAGE_WIDTH,
    imageHeight: IMAGE_HEIGHT,
    imageAlt:
      'Industrial gear and bearing assembly with golden lubricant on a manufacturing floor',
    category: 'Industrial',
    tagline: 'Built to keep heavy machinery running without interruption.',
    accentColor: 'var(--color-ink-700)',
    benefits: ['Reduced Wear', 'Longer Service Life', 'Equipment Reliability'],
    applications: ['Hydraulic systems', 'Gearboxes', 'Compressors'],
    features: ['Oxidation resistance', 'Load carrying', 'Corrosion control'],
    performanceAdvantages: [
      'Improved Equipment Reliability',
      'Corrosion Protection',
      'Wear Protection',
      'Thermal Stability',
    ],
    industriesServed: ['manufacturing', 'steel', 'cement', 'power-generation'],
  },
  {
    id: 'specialty-products',
    slug: 'specialty-products',
    title: 'Specialty Products',
    description:
      'Advanced formulations tailored for specific applications, offering reliable protection and performance under challenging conditions.',
    image: specialtyImage,
    imageWebp: specialtyImageWebp,
    imageWidth: IMAGE_WIDTH,
    imageHeight: IMAGE_HEIGHT,
    imageAlt:
      'Specialty lubricant samples and metal test coupons arranged on a clean industrial lab bench',
    category: 'Specialty',
    tagline: 'Purpose-built formulations for challenging, specific applications.',
    accentColor: 'var(--color-safety-600)',
    benefits: ['Application-Specific', 'Performance Focused', 'Technical Support'],
    applications: ['Process oils', 'Metalworking fluids', 'Specialty fluids'],
    features: ['Custom formulation', 'Surface protection', 'Process compatibility'],
    performanceAdvantages: [
      'Corrosion Protection',
      'Improved Equipment Reliability',
      'Reduced Friction',
    ],
    industriesServed: ['pharmaceuticals', 'food-processing', 'textile'],
  },
  {
    id: 'grease',
    slug: 'grease',
    title: 'Greases',
    description:
      'Advanced greases formulated to resist temperature, wear, and corrosion while protecting bearings and moving components.',
    image: greaseImage,
    imageWebp: greaseImageWebp,
    imageWidth: IMAGE_WIDTH,
    imageHeight: IMAGE_HEIGHT,
    imageAlt:
      'Close-up of ball bearings and gears protected with amber industrial grease',
    category: 'Grease',
    tagline: 'Long-lasting protection for bearings and moving components.',
    accentColor: 'var(--color-steel-700)',
    benefits: ['Extreme Protection', 'Water Resistance', 'Stable Lubrication'],
    applications: ['Bearings', 'Chassis points', 'Heavy machinery'],
    features: ['Adhesion strength', 'Mechanical stability', 'Rust protection'],
    performanceAdvantages: [
      'Wear Protection',
      'Corrosion Protection',
      'Longer Service Life',
    ],
    industriesServed: ['mining', 'construction', 'marine'],
  },
];

export function getProductCategory(slug) {
  return productCategories.find((product) => product.slug === slug);
}
