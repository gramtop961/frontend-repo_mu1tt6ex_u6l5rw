import { Wand2, Target, FileSignature } from "lucide-react";

export default function AITailorSection() {
  return (
    <section id="ai" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
            <Wand2 className="h-4 w-4" /> AI-Powered Resume Modification
          </div>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Tailor to any job description in seconds</h2>
          <p className="mt-3 text-slate-600">
            Paste a job post or upload a JD. Our model maps required skills, extracts keywords, and rephrases your achievements to maximize ATS scores while staying truthful.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <label className="text-sm font-medium text-slate-700">Job Description</label>
            <textarea className="mt-2 h-40 w-full rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm outline-none focus:border-indigo-400" placeholder="Paste the job description here..." />
            <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500">
              <Target className="h-4 w-4" /> Analyze & Suggest
            </button>
            <p className="mt-3 text-xs text-slate-500">We surface missing keywords, seniority signals, and phrasing suggestions based on the role.</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="mb-3 text-sm font-medium text-slate-700">AI Suggestions</div>
            <ul className="space-y-3 text-sm">
              <li className="rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-emerald-900">Add measurable impact: “Increased conversion by 23% via pricing experiment.”</li>
              <li className="rounded-lg border border-indigo-200 bg-indigo-50 p-3 text-indigo-900">Include keywords: “stakeholder management”, “funnel analysis”, “OKRs”.</li>
              <li className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-900">Align title with role: “Senior Product Manager”.</li>
            </ul>
            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-600">Premium</div>
              <p className="text-sm text-slate-700">Unlock one-click rewriting, multi-variant testing, and export to PDF/Word with our Pro plan.</p>
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-indigo-100 px-3 py-1 text-indigo-700">10 tailored resumes / mo</span>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-violet-700">JD keyword heatmaps</span>
                <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-700">Cover letter drafts</span>
              </div>
              <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-4 py-2 text-indigo-700 hover:bg-indigo-50">
                <FileSignature className="h-4 w-4" /> Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
