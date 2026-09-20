import vorstabIndustrialImage from '../assets/images/brand-vorstab-industrial.png';
import vorstabIndustrialImageWebp from '../assets/images/brand-vorstab-industrial.webp';
import vorstabMetalImage from '../assets/images/brand-vorstab-metal.png';
import vorstabMetalImageWebp from '../assets/images/brand-vorstab-metal.webp';
import markIndustrialImage from '../assets/images/brand-mark-industrial.png';
import markIndustrialImageWebp from '../assets/images/brand-mark-industrial.webp';
import markMetalImage from '../assets/images/brand-mark-metal.png';
import markMetalImageWebp from '../assets/images/brand-mark-metal.webp';

export const brandFamilies = [
  {
    id: 'vorstab',
    name: 'Vorstab',
    tagline: 'Innovative Chemistry Way Ahead',
    accentColor: 'var(--color-ink-700)',
  },
  {
    id: 'mark-speciality',
    name: 'Mark Speciality',
    tagline: 'Machines Lifeline',
    accentColor: 'var(--color-gold-600)',
  },
];

export const brands = [
  {
    id: 'vorstab-industrial',
    family: 'vorstab',
    title: 'Vorstab Industrial',
    category: 'Industrial Lubricants',
    description:
      'Industrial lubricants engineered for continuous-duty machinery, keeping gearboxes, bearings, and hydraulic systems protected under demanding operating conditions.',
    image: vorstabIndustrialImage,
    imageWebp: vorstabIndustrialImageWebp,
    imageAlt: 'Amber industrial lubricant being applied to a brass valve assembly on a machine',
    accentColor: 'var(--color-ink-700)',
    productSlug: 'industrial-lubricants',
  },
  {
    id: 'vorstab-metal',
    family: 'vorstab',
    title: 'Vorstab Metal',
    category: 'Metalworking Fluids',
    description:
      'Metalworking fluids formulated for CNC machining, delivering reliable cooling and lubrication across precision cutting, milling, and drilling operations.',
    image: vorstabMetalImage,
    imageWebp: vorstabMetalImageWebp,
    imageAlt: 'White metalworking coolant spraying onto a CNC machining tool',
    accentColor: 'var(--color-steel-700)',
    productSlug: 'specialty-products',
  },
  {
    id: 'mark-speciality-industrial',
    family: 'mark-speciality',
    title: 'Mark Speciality Industrial',
    category: 'Industrial Lubricants',
    description:
      'Our flagship industrial line, built on the "Machines Lifeline" promise, covering hydraulic oils, gear oils, and greases for heavy-duty plant equipment.',
    image: markIndustrialImage,
    imageWebp: markIndustrialImageWebp,
    imageAlt: 'Amber industrial oil pouring onto a machine gear during operation',
    accentColor: 'var(--color-gold-600)',
    productSlug: 'industrial-lubricants',
  },
  {
    id: 'mark-speciality-metal',
    family: 'mark-speciality',
    title: 'Mark Speciality Metal',
    category: 'Metalworking Products',
    description:
      'Metalworking and specialty formulations supporting precision fabrication, offering dependable performance across a wide range of machining applications.',
    image: markMetalImage,
    imageWebp: markMetalImageWebp,
    imageAlt: 'Blue-toned coolant spraying across a CNC milling operation',
    accentColor: 'var(--color-safety-600)',
    productSlug: 'specialty-products',
  },
];
