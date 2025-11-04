import { Briefcase, Building2, Send } from "lucide-react";

export default function JobBoardSection() {
  return (
    <section id="jobs" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            <Briefcase className="h-4 w-4" /> Job Board
          </div>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Discover roles and apply with tailored resumes</h2>
          <p className="mt-3 text-slate-600">One hub for searching curated opportunities and submitting AI-optimized resumes directly to employers.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Senior Product Manager", company: "Nebula Labs", location: "Remote • US", tags: ["B2B", "SaaS", "A/B"] },
            { title: "Frontend Engineer", company: "Orbit Cloud", location: "Berlin, DE", tags: ["React", "Vite", "UI"] },
            { title: "Data Analyst", company: "Helix Health", location: "NYC, US", tags: ["SQL", "dbt", "BI"] },
          ].map((job) => (
            <div key={job.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-slate-600">
                    <Building2 className="h-4 w-4" />
                    <span>{job.company} • {job.location}</span>
                  </div>
                </div>
                <button className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">View</button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <span key={t} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">{t}</span>
                ))}
              </div>
              <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-200 bg-indigo-50 px-4 py-2 text-indigo-700 hover:bg-indigo-100">
                <Send className="h-4 w-4" /> Apply with tailored resume
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
