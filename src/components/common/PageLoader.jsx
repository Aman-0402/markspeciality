export default function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-live="polite">
      <span className="page-loader__mark" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}
