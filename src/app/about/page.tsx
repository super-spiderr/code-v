"use client";

import { PageLayout } from "../../components";

export default function About() {
  return (
    <PageLayout
      title="ABOUT"
      subtitle="PERSONA_IDENTIFICATION"
      iphoneImage="/assets/images/vignesh2.jpeg"
      iphoneTitle="Vignesh B."
      iphoneSubtitle="Developer // Explorer"
    >
      <div className="space-y-12 font-courier-tight">
        <section className="space-y-8">
          <p className="text-xl md:text-5xl font-bold leading-tight uppercase tracking-tight">
            Speaks fluent <span className="text-emerald-400">React Native</span>
            . <br />
            Thinks in <span className="italic">Systems</span>. <br />
            Engineers{" "}
            <span className="text-white bg-emerald-600 px-3">Impact</span>.
          </p>
          <p className="text-lg md:text-2xl text-white/70 italic max-w-2xl leading-relaxed font-medium">
            Building smooth, scaleable digital products that live at the
            intersection of high performance and premium aesthetics.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8 border-t border-white/10">
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-500">
              CORE_PASSIONS
            </h3>
            <ul className="space-y-4 text-lg md:text-xl font-bold italic">
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-white rotate-45" />
                Zero-Latency UI
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-white rotate-45" />
                Clean Architecture
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-white rotate-45" />
                Performance Art
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-500">
              CURRENT_MISSION
            </h3>
            <p className="text-lg md:text-xl leading-relaxed opacity-80">
              Pushing the boundaries of mobile engineering while shipping
              production-grade solutions that users actually love.
            </p>
          </div>
        </section>

        <div className="pt-8">
          <div className="bg-white/5 border-l-4 border-emerald-500 p-10 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.6em] text-emerald-500 mb-4 block">
              CONSOLE_OUTPUT // PHILOSOPHY
            </span>
            <p className="text-2xl md:text-3xl font-bold italic leading-snug">
              &quot;Code is poetry, but only if it runs at 60 FPS.&quot;
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
