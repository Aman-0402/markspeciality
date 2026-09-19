import {
  Building2,
  Car,
  Construction,
  Factory,
  FlaskConical,
  Gem,
  Hammer,
  HardHat,
  Pickaxe,
  Plane,
  Ship,
  Zap,
} from 'lucide-react';

export const industries = [
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Lubrication support for engines, transmissions, drivetrains, and service networks.',
    icon: Car,
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Solutions for continuous production lines, bearings, compressors, and hydraulic systems.',
    icon: Factory,
  },
  {
    id: 'steel',
    name: 'Steel',
    description: 'High-load lubrication for rolling, forming, cutting, and heavy-duty plant equipment.',
    icon: Gem,
  },
  {
    id: 'cement',
    name: 'Cement',
    description: 'Reliable protection for kilns, crushers, mills, conveyors, and dusty operating conditions.',
    icon: Building2,
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Durable lubrication for mobile equipment, earthmoving fleets, and site machinery.',
    icon: Construction,
  },
  {
    id: 'mining',
    name: 'Mining',
    description: 'Robust grease and oil solutions for harsh loads, vibration, contamination, and heat.',
    icon: Pickaxe,
  },
  {
    id: 'power-generation',
    name: 'Power Generation',
    description: 'Dependable fluids for turbines, compressors, pumps, and critical auxiliary systems.',
    icon: Zap,
  },
  {
    id: 'engineering',
    name: 'Engineering',
    description: 'Technical lubricant support for precision fabrication, workshops, and machine tools.',
    icon: Hammer,
  },
  {
    id: 'marine',
    name: 'Marine',
    description: 'Protection for engines, gearboxes, deck equipment, and corrosion-prone environments.',
    icon: Ship,
  },
  {
    id: 'textile',
    name: 'Textile',
    description: 'Clean-running lubrication for high-speed machinery, spindles, looms, and auxiliaries.',
    icon: HardHat,
  },
  {
    id: 'pharmaceuticals',
    name: 'Pharmaceuticals',
    description: 'Specialized support for precise, clean, and controlled manufacturing operations.',
    icon: FlaskConical,
  },
  {
    id: 'food-processing',
    name: 'Food Processing',
    description: 'Operational lubricant guidance for packaging lines, conveyors, gearboxes, and utilities.',
    icon: Plane,
  },
];
