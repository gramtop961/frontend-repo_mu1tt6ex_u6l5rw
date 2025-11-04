import HeroHeader from "./components/HeroHeader";
import ResumeBuilderSection from "./components/ResumeBuilderSection";
import AITailorSection from "./components/AITailorSection";
import JobBoardSection from "./components/JobBoardSection";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-600">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} FluxHire ATS. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroHeader />
      <ResumeBuilderSection />
      <AITailorSection />
      <JobBoardSection />
      <CTA />
      <Footer />
    </div>
  );
}

function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-600 py-16 text-white">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom_right,white,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Ready to land your next role?</h3>
            <p className="mt-2 text-white/90">Start free, then upgrade for AI tailoring, export formats, and application insights.</p>
          </div>
          <div className="flex justify-start md:justify-end">
            <div className="flex gap-3">
              <a href="#builder" className="rounded-lg bg-white px-4 py-2 font-medium text-slate-900 shadow hover:shadow-md">Build a resume</a>
              <a href="#ai" className="rounded-lg border border-white/30 px-4 py-2 font-medium text-white hover:bg-white/10">Try AI Tailor</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
