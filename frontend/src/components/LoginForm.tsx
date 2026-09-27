
import React, { useState } from 'react';
import { User, Lock, EyeOff, Eye, LogIn } from 'lucide-react';

interface LoginFormProps {
  onSignIn?: () => void;
  onBack?: () => void;
}

export default function LoginForm({ onSignIn, onBack }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (onSignIn) {
      onSignIn();
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center bg-[#FFFBF4] p-10">
      <div className="w-full max-w-[440px]">
        {/* Back to Home Button */}
        <button
          type="button"
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[#1F2328] transition-colors hover:bg-gray-100"
        >
          <span aria-hidden="true">←</span>
          Back to Home
        </button>

        {/* Sign In Heading */}
        <div className="mb-10">
          <h1 className="mb-2 font-serif text-[32px] font-bold text-[#1F2328]">
            Sign In
          </h1>

          <p className="text-sm leading-relaxed text-gray-500">
            Welcome back! Sign in to access your attendance monitoring
            platform.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Username */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-[13px] font-semibold text-[#1F2328]"
            >
              Username
            </label>

            <div className="relative flex items-center">
              <User
                size={18}
                className="pointer-events-none absolute left-3.5 text-gray-400"
              />

              <input
                type="text"
                id="username"
                name="username"
                placeholder="Ex. Scaluya7"
                autoComplete="username"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-10 py-3 text-sm text-[#1F2328] transition-all placeholder-gray-400 focus:border-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/10"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-[13px] font-semibold text-[#1F2328]"
            >
              Password
            </label>

            <div className="relative flex items-center">
              <Lock
                size={18}
                className="pointer-events-none absolute left-3.5 text-gray-400"
              />

              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="current-password"
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-10 py-3 text-sm text-[#1F2328] transition-all placeholder-gray-400 focus:border-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A]/10"
              />

              <button
                type="button"
                className="absolute right-3.5 flex cursor-pointer items-center justify-center border-none bg-transparent p-0 text-gray-400 hover:text-[#1F2328]"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={
                  showPassword ? 'Hide password' : 'Show password'
                }
              >
                {showPassword ? (
                  <Eye size={18} />
                ) : (
                  <EyeOff size={18} />
                )}
              </button>
            </div>

            {/* Forgot Password */}
            <div className="-mt-1 flex justify-end">
              <a
                href="#forgot"
                className="text-[12px] text-gray-500 transition-colors hover:text-[#1F2328] hover:underline"
              >
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="mt-2.5 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border-none bg-[#1A1A1A] py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#333333]"
          >
            <LogIn size={18} />
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}