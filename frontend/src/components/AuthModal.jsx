import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Eye, EyeOff } from "lucide-react";

const AuthModal = ({ open, onClose }) => {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Auth backend integration can be added here
    alert(
      mode === "login"
        ? `Welcome back! (Login coming soon)`
        : `Account created! (Registration coming soon)`
    );
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        data-testid="auth-modal"
        aria-describedby="auth-modal-description"
        className="bg-white p-0 max-w-md w-full border-0 shadow-2xl overflow-hidden"
      >
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#2D1648] via-[#E8D5A3] to-[#3D2060]" />

        <div className="px-8 pt-6 pb-8">
          <DialogHeader className="mb-6">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-[#E8D5A3] font-bold mb-2">
                Barqat Luxury Gifting
              </p>
              <DialogTitle className="font-serif text-2xl text-slate-900">
                {mode === "login" ? "Welcome Back" : "Create Account"}
              </DialogTitle>
              <p className="text-sm text-slate-500 mt-2">
                {mode === "login"
                  ? "Sign in to your Barqat account"
                  : "Join the Barqat gifting family"}
              </p>
            </div>
          </DialogHeader>

          {/* Mode Toggle */}
          <div
            data-testid="auth-mode-toggle"
            className="flex border border-slate-200 mb-6"
          >
            <button
              data-testid="login-tab"
              onClick={() => setMode("login")}
              className={`flex-1 py-2.5 text-sm font-medium uppercase tracking-wider transition-colors ${
                mode === "login"
                  ? "bg-[#2D1648] text-white"
                  : "text-slate-600 hover:text-slate-900 bg-white"
              }`}
            >
              Login
            </button>
            <button
              data-testid="register-tab"
              onClick={() => setMode("register")}
              className={`flex-1 py-2.5 text-sm font-medium uppercase tracking-wider transition-colors ${
                mode === "register"
                  ? "bg-[#2D1648] text-white"
                  : "text-slate-600 hover:text-slate-900 bg-white"
              }`}
            >
              Register
            </button>
          </div>

          <form data-testid="auth-form" onSubmit={handleSubmit} className="space-y-4">
            {/* Name field - only for register */}
            {mode === "register" && (
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-500 mb-1.5 font-medium">
                  Full Name
                </label>
                <input
                  data-testid="name-input"
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-slate-200 text-sm outline-none focus:border-[#2D1648] text-slate-800 bg-white transition-colors"
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-500 mb-1.5 font-medium">
                Email Address
              </label>
              <input
                data-testid="email-input"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-slate-200 text-sm outline-none focus:border-[#2D1648] text-slate-800 bg-white transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-slate-500 mb-1.5 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  data-testid="password-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border border-slate-200 text-sm outline-none focus:border-[#2D1648] text-slate-800 bg-white transition-colors pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {mode === "login" && (
              <div className="text-right">
                <button
                  type="button"
                  className="text-xs text-[#3D2060] hover:text-[#2D1648] transition-colors"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              data-testid="auth-submit-btn"
              type="submit"
              className="w-full bg-[#2D1648] text-white py-3.5 text-sm uppercase tracking-widest font-semibold hover:bg-[#3D2060] transition-colors mt-2"
            >
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="text-center text-xs text-slate-400 mt-5">
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className="text-[#2D1648] font-medium hover:underline"
            >
              {mode === "login" ? "Register here" : "Login here"}
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
