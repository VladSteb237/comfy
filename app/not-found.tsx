"use client";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <h1 className="text-6xl font-semibold tracking-tight">404</h1>
      <h2 className="mt-4 text-2xl font-medium text-gray-600 dark:text-gray-400">
        Page not found
      </h2>
      <p className="mt-2 text-gray-500 max-w-md">
        The page you're looking for doesn’t exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-6 inline-flex items-center px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black font-medium shadow hover:opacity-90 transition">
        Go Home
      </a>
    </div>
  );
}
