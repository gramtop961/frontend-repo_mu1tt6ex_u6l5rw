import { FileText, Linkedin, Plus, GripVertical } from "lucide-react";

export default function ResumeBuilderSection() {
  return (
    <section id="builder" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
            <FileText className="h-4 w-4" /> Resume Builder
          </div>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Craft a polished resume in minutes</h2>
          <p className="mt-3 text-slate-600">
            Drag-and-drop sections, one-click LinkedIn import, real-time ATS checks, and elegant typography presets give you full control with zero fuss.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* Editor Panel */}
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <GripVertical className="h-4 w-4" /> Sections
              </div>
              <button className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">
                <Plus className="h-4 w-4" /> Add Section
              </button>
            </div>
            <ul className="space-y-2">
              {[
                "Summary",
                "Experience",
                "Education",
                "Skills",
                "Projects",
              ].map((s) => (
                <li key={s} className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                  <span>{s}</span>
                  <span className="text-slate-400">drag</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-2 text-sm">
              <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50">Template</button>
              <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50">Typography</button>
              <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50">Spacing</button>
              <button className="rounded-lg border border-slate-200 bg-white px-3 py-2 hover:bg-slate-50">Colors</button>
            </div>
            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:bg-slate-50">
              <Linkedin className="h-5 w-5 text-[#0A66C2]" /> Import from LinkedIn
            </button>
          </div>

          {/* Preview Panel */}
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="mb-3 flex items-center justify-between text-sm text-slate-600">
              <span>Live Preview</span>
              <div className="flex gap-2">
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700">ATS 92%</span>
                <span className="rounded-full bg-indigo-100 px-2 py-0.5 text-indigo-700">A/B</span>
              </div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-6 leading-relaxed shadow-sm">
              <div className="text-center">
                <h3 className="text-xl font-semibold">Alex Johnson</h3>
                <p className="text-sm text-slate-500">Product Manager • San Francisco, CA • alex@example.com</p>
              </div>
              <div className="mt-5 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-700">Experience</h4>
                <div>
                  <p className="font-medium">Senior PM, Nova Systems</p>
                  <p className="text-sm text-slate-600">2021–Present • Led cross-functional teams delivering a 15% revenue uplift.</p>
                </div>
                <h4 className="pt-2 text-sm font-semibold uppercase tracking-wide text-slate-700">Skills</h4>
                <p className="text-sm text-slate-600">Roadmapping, SQL, A/B Testing, Stakeholder Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
