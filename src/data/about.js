import { Award, Leaf, Lightbulb, ShieldCheck } from 'lucide-react';
import specialtyImage from '../assets/images/product-specialty-products.png';
import specialtyImageWebp from '../assets/images/product-specialty-products.webp';
import heroImage from '../assets/images/home-hero-industrial.png';
import heroImageWebp from '../assets/images/home-hero-industrial.webp';
import visionImage from '../assets/images/about-vision-lab.png';
import visionImageWebp from '../assets/images/about-vision-lab.webp';
import missionImage from '../assets/images/about-mission-lab.png';
import missionImageWebp from '../assets/images/about-mission-lab.webp';
import productLineupImage from '../assets/images/about-product-lineup.png';
import productLineupImageWebp from '../assets/images/about-product-lineup.webp';

export const companyOverview = {
  intro:
    'Mark Speciality India Pvt. Ltd. formulates and supplies lubricants for automotive, industrial, and specialty applications, helping businesses keep engines and equipment running reliably.',
  vision:
    'To be a trusted name in lubrication technology, recognized for quality, innovation, and long-term partnerships across the industries we serve.',
  visionImage,
  visionImageWebp,
  visionImageAlt:
    'Industrial lubricant testing laboratory with scientists performing quality control using chemical analysis equipment',
  mission:
    'To deliver dependable, application-specific lubricant solutions backed by technical expertise, consistent quality, and responsive customer support.',
  missionImage,
  missionImageWebp,
  missionImageAlt:
    'Industrial lubricant testing laboratory with technicians conducting quality control and lubricant performance testing',
};

export const coreValues = [
  {
    id: 'integrity',
    title: 'Integrity',
    description:
      'Honest, transparent dealings with customers, partners, and employees guide every business decision.',
    icon: ShieldCheck,
  },
  {
    id: 'excellence',
    title: 'Excellence',
    description:
      'Consistent quality control and rigorous testing keep every batch performing to specification.',
    icon: Award,
  },
  {
    id: 'innovation',
    title: 'Innovation',
    description:
      'Ongoing formulation research keeps products aligned with evolving equipment and industry demands.',
    icon: Lightbulb,
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description:
      'Responsible sourcing and manufacturing practices help reduce environmental impact over time.',
    icon: Leaf,
  },
];

export const companyStrengths = [
  {
    id: 'technical-expertise',
    title: 'Technical Expertise',
    description:
      'Experienced formulation and application specialists support product selection and troubleshooting.',
  },
  {
    id: 'quality-control',
    title: 'Rigorous Quality Control',
    description: 'Every batch is tested against defined performance standards before dispatch.',
  },
  {
    id: 'wide-portfolio',
    title: 'Wide Product Portfolio',
    description:
      'Automotive, industrial, grease, and specialty formulations cover a broad range of operating needs.',
  },
  {
    id: 'responsive-support',
    title: 'Responsive Customer Support',
    description: 'Dedicated support helps customers resolve lubrication challenges quickly.',
  },
];

export const aboutSections = [
  {
    id: 'manufacturing-capability',
    title: 'Manufacturing Capability',
    preview:
      'Our production facility follows controlled blending processes and standardized quality checks at every stage.',
    body: 'Our production facility follows controlled blending processes and standardized quality checks at every stage. Raw materials are sourced from qualified suppliers and verified before use, and finished products are tested against defined specifications before they leave the facility. Batch tracking and documentation support consistent quality and traceability across every order, whether it is a small trial quantity or a large recurring supply contract.',
    image: productLineupImage,
    imageWebp: productLineupImageWebp,
    imageAlt: 'Range of Mark Speciality manufactured lubricant drums, grease tubs, and oil containers',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    preview:
      'Formulation development is guided by real operating conditions reported by customers across served industries.',
    body: 'Formulation development is guided by real operating conditions reported by customers across served industries. Our technical team reviews equipment performance data, application feedback, and emerging industry requirements to refine existing products and develop new ones. This practical, feedback-driven approach helps ensure that innovation translates into measurable performance improvements rather than change for its own sake.',
    image: specialtyImage,
    imageWebp: specialtyImageWebp,
    imageAlt: 'Specialty lubricant samples and metal test coupons arranged on a clean industrial lab bench',
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    preview:
      'Responsible sourcing, efficient processes, and careful handling practices reduce environmental impact.',
    body: 'Responsible sourcing, efficient processes, and careful handling practices reduce environmental impact across our operations. We work to minimize waste during production, encourage responsible disposal and recycling practices among customers where applicable, and continually evaluate formulation choices for opportunities to reduce environmental footprint without compromising product performance.',
    image: heroImage,
    imageWebp: heroImageWebp,
    imageAlt: 'Industrial manufacturing facility with machinery and equipment',
  },
  {
    id: 'quality-commitment',
    title: 'Quality Commitment',
    preview:
      'Every product is developed and tested to meet defined performance benchmarks before reaching customers.',
    body: 'Every product is developed and tested to meet defined performance benchmarks before reaching customers. Quality checks span raw material verification, in-process monitoring, and finished-product testing. This structured approach helps ensure that customers receive consistent performance, batch after batch, regardless of order size or application.',
  },
  {
    id: 'customer-partnerships',
    title: 'Customer Partnerships',
    preview:
      'Long-term relationships are built on responsive support, technical guidance, and consistent product supply.',
    body: 'Long-term relationships are built on responsive support, technical guidance, and consistent product supply. Our team works closely with customers to understand their equipment, operating environment, and performance goals, then recommends solutions suited to those specific needs. This partnership approach helps customers reduce downtime, extend equipment life, and plan supply with confidence.',
  },
  {
    id: 'future-vision',
    title: 'Future Vision',
    preview:
      'We aim to expand our product range and technical capability while staying focused on reliability and service.',
    body: 'We aim to expand our product range and technical capability while staying focused on reliability and service. Planned growth includes broadening specialty formulations, strengthening quality infrastructure, and deepening technical support so customers can rely on us as their lubrication needs evolve.',
  },
];
