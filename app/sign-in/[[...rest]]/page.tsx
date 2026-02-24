export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-black px-6">
      <div className="w-full max-w-md space-y-10">
        {/* Logo / Brand */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-black dark:text-white">
            Sign in
          </h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Use your account to continue
          </p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl shadow-xl border border-neutral-200 dark:border-neutral-800 p-8">
          <div className="w-full max-w-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-2xl shadow-xl p-10 text-center">
            <h1 className="text-3xl font-semibold tracking-tight">
              Access Required
            </h1>

            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              You need to sign in to access this part of the application. Please
              use the login button in the navigation bar.
            </p>

            <div className="mt-8"></div>
          </div>
        </div>
        {/* Footer */}
        <p className="text-center text-xs text-neutral-400">
          By continuing, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
