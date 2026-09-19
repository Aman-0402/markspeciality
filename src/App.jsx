import { Suspense, lazy } from 'react';
import { MotionConfig } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import PageLoader from './components/common/PageLoader.jsx';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import MainLayout from './components/layout/MainLayout.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const ProductCategory = lazy(() => import('./pages/ProductCategory.jsx'));
const Brands = lazy(() => import('./pages/Brands.jsx'));
const Blog = lazy(() => import('./pages/Blog.jsx'));
const BlogDetail = lazy(() => import('./pages/BlogDetail.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const PlaceholderPage = lazy(() => import('./pages/PlaceholderPage.jsx'));

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:slug" element={<ProductCategory />} />
            <Route path="brands" element={<Brands />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route
              path="privacy-policy"
              element={
                <PlaceholderPage
                  title="Privacy Policy"
                  description="Our privacy policy is being finalized. Please contact us directly with any data privacy questions."
                  path="/privacy-policy"
                />
              }
            />
            <Route
              path="terms"
              element={
                <PlaceholderPage
                  title="Terms & Conditions"
                  description="Our terms and conditions are being finalized. Please contact us directly with any questions."
                  path="/terms"
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </MotionConfig>
  );
}
