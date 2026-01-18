"use client";

import { PageLayout } from "../../components";

export default function Contact() {
  return (
    <PageLayout
      title="CONTACT"
      subtitle="ESTABLISH_CONNECTION"
      iphoneImage="/assets/images/vignesh1.jpeg"
      iphoneTitle="DIRECT_LINE"
      iphoneSubtitle="Awaiting // Signal"
      showMockup={false}
    >
      <div className="grid grid-cols-1 gap-12 w-full max-w-2xl">
        <section className="space-y-6">
          <h2 className="text-lg md:text-3xl font-bold font-courier-tight italic leading-relaxed">
            Got an idea? <br />
            Building something interesting? <br />
            Or just want to talk tech and mobile.
          </h2>
          <div className="pt-2">
            <span className="bg-white text-[#0a5c36] px-3 py-1 font-black uppercase text-sm tracking-widest">
              📬 LET’S CONNECT.
            </span>
          </div>
        </section>

        <form
          className="space-y-6 font-courier-tight bg-white/5 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-sm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-[10px] uppercase tracking-widest opacity-50 block"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Sender ID"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white placeholder:opacity-20"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-[10px] uppercase tracking-widest opacity-50 block"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Origin Signal"
                className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white placeholder:opacity-20"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-[10px] uppercase tracking-widest opacity-50 block"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Data Payload..."
              className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-lg focus:outline-none focus:border-white/40 transition-colors text-white placeholder:opacity-20 resize-none"
            />
          </div>
          <button className="w-full bg-white text-[#0a5c36] py-4 rounded-xl font-black uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all">
            Transmit Signal
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
