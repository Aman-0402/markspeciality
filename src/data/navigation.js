export const productLinks = [
  {
    label: 'Automotive Lubricants',
    href: '/products/automotive-lubricants',
  },
  {
    label: 'Industrial Lubricants',
    href: '/products/industrial-lubricants',
  },
  {
    label: 'Greases',
    href: '/products/grease',
  },
  {
    label: 'Specialty Products',
    href: '/products/specialty-products',
  },
];

export const mainNavigation = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products', children: productLinks },
  { label: 'Blog', href: '/blog' },
  { label: 'Our Brands', href: '/brands' },
  { label: 'Contact', href: '/contact' },
];
