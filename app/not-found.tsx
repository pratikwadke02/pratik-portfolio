import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] items-center justify-center px-8">
      <div className="flex flex-col items-start gap-6">
        <p className="mono-label">ERROR · 404</p>
        <h1 className="font-display text-display-xl text-fg">Not here.</h1>
        <p className="text-fg-muted max-w-md text-body-lg">
          That page doesn&rsquo;t exist. It may have been moved, or it may have never existed at all.
        </p>
        <Link
          href="/"
          className="border-border hover:border-fg border-b py-3 font-sans text-sm font-medium transition-colors"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
