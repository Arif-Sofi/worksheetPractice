"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import schoolBg from "@/images/school_bg.png";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
      setLoading(false);
      // Redirect to worksheet page
      router.push("/");
    }, 1200);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden flex items-center justify-center font-montserrat">
      {/* 1. Background Image using next/image fill */}
      <Image
        src={schoolBg}
        alt="School Background"
        fill
        className="object-cover pointer-events-none"
        priority
      />

      {/* 2. 50% opacity dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] pointer-events-none z-0" />

      {/* 3. Center Login Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4 p-8 md:p-10 bg-white/95 backdrop-blur-md rounded-3xl border-3 border-secondary shadow-2xl flex flex-col items-center">
        {/* Playful School Icon Header */}
        <div className="mb-6 p-4 bg-primary/10 rounded-full border-2 border-primary/20">
          <svg
            className="w-10 h-10 text-primary"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-center text-slate-900 mb-1">
          Worksheet Practice
        </h2>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Sign in to access your interactive lessons
        </p>

        {/* Role Switcher Tabs */}
        <div className="w-full grid grid-cols-2 p-1.5 bg-slate-100 rounded-2xl mb-6 border-2 border-secondary/15">
          <button
            type="button"
            onClick={() => {
              setRole("student");
              setError("");
            }}
            className={`py-2 text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer ${
              role === "student"
                ? "bg-primary text-white shadow-md scale-102"
                : "text-gray-500 hover:text-slate-900 hover:bg-slate-200/50"
            }`}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => {
              setRole("teacher");
              setError("");
            }}
            className={`py-2 text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer ${
              role === "teacher"
                ? "bg-primary text-white shadow-md scale-102"
                : "text-gray-500 hover:text-slate-900 hover:bg-slate-200/50"
            }`}
          >
            Teacher
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="w-full mb-4 px-4 py-2.5 bg-red-50 border-2 border-red-200 text-red-700 text-xs font-semibold rounded-xl flex items-center gap-2 animate-bounce">
            <svg
              className="w-4 h-4 text-red-500 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5 ml-1">
              {role === "student" ? "Student ID or Email" : "Teacher Email"}
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={
                  role === "student"
                    ? "e.g. STU12345 or student@school.edu"
                    : "e.g. teacher@school.edu"
                }
                className="w-full bg-white border-2 border-secondary/20 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium placeholder-gray-400 text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-800 mb-1.5 ml-1">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-white border-2 border-secondary/20 rounded-xl pl-11 pr-11 py-3 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all font-medium placeholder-gray-400 text-slate-900"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center cursor-pointer"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-slate-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L5.636 5.636m4.242 4.242L3 3m10 10l5.636 5.636"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-400 hover:text-slate-600 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between mt-1 text-sm font-semibold">
            <label className="flex items-center gap-2 cursor-pointer text-slate-700 hover:text-slate-900 select-none">
              <input
                type="checkbox"
                className="w-4 h-4 rounded accent-primary border-gray-300 focus:ring-primary cursor-pointer"
              />
              <span>Remember me</span>
            </label>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setError("Please contact your administrator to reset password.");
              }}
              className="text-primary hover:text-primary/80 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 w-full bg-primary border-2 border-secondary text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer
              ${
                !loading
                  ? "hover:scale-[1.02] active:scale-[0.98] hover:bg-primary/95 hover:shadow-lg"
                  : "opacity-80 cursor-wait"
              }`}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                <span>Logging in...</span>
              </>
            ) : (
              <>
                <span>Sign In</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-gray-500 font-semibold">
          <p>
            Demo Accounts: <span className="text-slate-800">student / password</span> or{" "}
            <span className="text-slate-800">teacher / password</span>
          </p>
        </div>
      </div>
    </div>
  );
}
