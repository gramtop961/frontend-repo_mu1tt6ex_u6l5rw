import { Rocket, Sparkles, ShieldCheck } from "lucide-react";

export default function HeroHeader() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-violet-900 text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.2),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 backdrop-blur">
              <Rocket className="h-6 w-6" />
            </div>
            <span className="text-lg font-semibold">FluxHire ATS</span>
          </div>
          <div className="hidden gap-6 md:flex">
            <a href="#builder" className="text-white/80 hover:text-white">Builder</a>
            <a href="#ai" className="text-white/80 hover:text-white">AI Tailor</a>
            <a href="#jobs" className="text-white/80 hover:text-white">Job Board</a>
          </div>
          <div className="hidden md:block">
            <a href="#cta" className="rounded-lg bg-white px-4 py-2 text-slate-900 shadow-sm transition hover:shadow">Get Started</a>
          </div>
        </nav>
        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Build ATS-optimized resumes that land interviews
            </h1>
            <p className="mt-5 max-w-xl text-white/80">
              Create beautiful, compliant resumes in minutes. Tailor them with AI for any job description and apply directly through our integrated job board.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#builder" className="rounded-lg bg-indigo-500 px-5 py-3 font-medium text-white shadow-md transition hover:bg-indigo-400">Launch Resume Builder</a>
              <a href="#ai" className="rounded-lg border border-white/20 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10">Try AI Tailor</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>ATS compliant templates</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                <span>GDPR-ready privacy</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur">
              <div className="rounded-xl bg-slate-900/70 p-4 text-left">
                <div className="mb-3 flex items-center gap-2 text-xs text-white/60">
                  <div className="h-2 w-2 rounded-full bg-rose-400" />
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-800/50 p-4">
                  <div className="mb-3 h-3 w-1/2 rounded bg-white/10" />
                  <div className="mb-2 h-2 w-2/3 rounded bg-white/10" />
                  <div className="mb-2 h-2 w-5/6 rounded bg-white/10" />
                  <div className="mb-2 h-2 w-1/2 rounded bg-white/10" />
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="h-24 rounded bg-white/5" />
                    <div className="h-24 rounded bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </header>
  );
}
