import automotiveImage from '../assets/images/product-automotive-lubricants.png';
import industrialImage from '../assets/images/product-industrial-lubricants.png';
import greaseImage from '../assets/images/product-greases.png';
import specialtyImage from '../assets/images/product-specialty-products.png';

export const productCategories = [
  {
    id: 'automotive-lubricants',
    slug: 'automotive-lubricants',
    title: 'Automotive Lubricants',
    description:
      'High-performance oils designed to enhance engine efficiency, ensure smooth transmission, and protect components for gasoline and diesel vehicles.',
    image: automotiveImage,
    imageAlt:
      'Golden engine oil being poured into a modern vehicle engine in a service bay',
    category: 'Automotive',
    benefits: ['Engine Protection', 'Fuel Efficiency', 'Smooth Performance'],
    applications: ['Engine oils', 'Transmission fluids', 'Gear oils'],
    features: ['Thermal stability', 'Wear control', 'Deposit protection'],
  },
  {
    id: 'industrial-lubricants',
    slug: 'industrial-lubricants',
    title: 'Industrial Lubricants',
    description:
      'Robust solutions for industrial machinery, reducing wear and helping equipment perform reliably in demanding operating environments.',
    image: industrialImage,
    imageAlt:
      'Industrial gear and bearing assembly with golden lubricant on a manufacturing floor',
    category: 'Industrial',
    benefits: ['Reduced Wear', 'Longer Service Life', 'Equipment Reliability'],
    applications: ['Hydraulic systems', 'Gearboxes', 'Compressors'],
    features: ['Oxidation resistance', 'Load carrying', 'Corrosion control'],
  },
  {
    id: 'specialty-products',
    slug: 'specialty-products',
    title: 'Specialty Products',
    description:
      'Advanced formulations tailored for specific applications, offering reliable protection and performance under challenging conditions.',
    image: specialtyImage,
    imageAlt:
      'Specialty lubricant samples and metal test coupons arranged on a clean industrial lab bench',
    category: 'Specialty',
    benefits: ['Application-Specific', 'Performance Focused', 'Technical Support'],
    applications: ['Process oils', 'Metalworking fluids', 'Specialty fluids'],
    features: ['Custom formulation', 'Surface protection', 'Process compatibility'],
  },
  {
    id: 'grease',
    slug: 'grease',
    title: 'Greases',
    description:
      'Advanced greases formulated to resist temperature, wear, and corrosion while protecting bearings and moving components.',
    image: greaseImage,
    imageAlt:
      'Close-up of ball bearings and gears protected with amber industrial grease',
    category: 'Grease',
    benefits: ['Extreme Protection', 'Water Resistance', 'Stable Lubrication'],
    applications: ['Bearings', 'Chassis points', 'Heavy machinery'],
    features: ['Adhesion strength', 'Mechanical stability', 'Rust protection'],
  },
];

export function getProductCategory(slug) {
  return productCategories.find((product) => product.slug === slug);
}
