import { Link } from 'react-router-dom';
import Page from '../components/Page.jsx';

export default function NotFound() {
  return (
    <Page>
      <section className="flex min-h-[80svh] items-center bg-ink text-warm-white">
        <div className="shell py-32">
          <p className="label text-warm-white/50">404</p>
          <h1 className="display mt-6 text-[clamp(2.25rem,6vw,5rem)] uppercase">
            This page does not exist.
          </h1>
          <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-warm-white/65">
            The page you are looking for may have been moved, or the link may be incorrect.
          </p>
          <Link
            to="/"
            className="label mt-10 inline-block border border-warm-white/40 px-8 py-4 transition-all duration-500 ease-editorial hover:bg-warm-white hover:text-charcoal"
          >
            Return home →
          </Link>
        </div>
      </section>
    </Page>
  );
}
