"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PageLayout, Marquee } from "../../components";
import { useSoundEffect } from "../../hooks/useSoundEffect";

export default function Works() {
  const [activeImage, setActiveImage] = useState(
    "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
  );
  const [activeTitle, setActiveTitle] = useState("Montra Connect");
  const { playSound } = useSoundEffect();

  const projects = [
    {
      id: "01",
      title: "Montra Connect",
      type: "EV Command Center",
      stack: "RN · SWIFT · MAPS",
      image:
        "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=800&auto=format&fit=crop",
      desc: "Real-time vehicle telemetry and command interface for advanced Electric Vehicles. Engineered with zero-latency map updates and custom native modules.",
    },
    {
      id: "02",
      title: "iSportz",
      type: "Fan Engagement",
      stack: "RN · REDUX · SOCIAL",
      image:
        "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=800&auto=format&fit=crop",
      desc: "Global sports community platform delivering live-stream data and interactive fan experiences to millions of users.",
    },
    {
      id: "03",
      title: "Invafresh",
      type: "Retail Intelligence",
      stack: "RN · ENTERPRISE · DATA",
      image:
        "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=800&auto=format&fit=crop",
      desc: "Critical business tool for inventory forecasting and demand sensing. Reduced operational friction for enterprise retail giants.",
    },
    {
      id: "04",
      title: "GigaFit AI",
      type: "Fitness Ecosystem",
      stack: "RN · TF_JS · SENSORS",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
      desc: "An AI-powered coach that uses computer vision and device sensors to track form and intensity in real-time.",
    },
    {
      id: "05",
      title: "Helius Home",
      type: "IoT Dashboard",
      stack: "RN · MQTT · GRAPHS",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop",
      desc: "High-performance smart home hub controlling hundreds of nodes with sub-100ms response times and predictive energy analytics.",
    },
    {
      id: "06",
      title: "SafeRide",
      type: "Logistics Engine",
      stack: "RN · LOCATION · GOOGLE",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad86d7c7ce83?q=80&w=800&auto=format&fit=crop",
      desc: "Critical safety and dispatch platform for large-scale logistics, featuring automated emergency protocols and driver fatigue detection.",
    },
  ];

  return (
    <PageLayout
      title="WORKS"
      subtitle="MISSION_LOGS"
      iphoneImage={activeImage}
      iphoneTitle={activeTitle}
      iphoneSubtitle="Production // Active"
      showMockup={true}
    >
      <div className="space-y-16 max-w-2xl font-courier-tight">
        {/* Tech Marquee Dividers */}
        <div className="py-4 border-y border-white/5 space-y-2 opacity-30 select-none pointer-events-none">
          <Marquee
            text="MISSION_LOG_DATA // PROJECT_INDEX_2025 // STABLE_ARCH //"
            speed={25}
            className="text-[10px] font-mono tracking-[0.5em] text-emerald-500"
          />
          <Marquee
            text="EXCEEDING_PERFORMANCE_METRICS // CORE_SYSTEM_ACTIVE //"
            speed={35}
            reverse={true}
            className="text-[10px] font-mono tracking-[0.5em] text-white"
          />
        </div>

        {projects.map((project, idx) => (
          <motion.section
            key={project.id}
            onViewportEnter={() => {
              setActiveImage(project.image);
              setActiveTitle(project.title);
              playSound("CLICK", 0.1);
            }}
            onMouseEnter={() => {
              setActiveImage(project.image);
              setActiveTitle(project.title);
              playSound("CLICK", 0.2);
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + idx * 0.15 }}
            className="group relative border-l-2 border-white/10 pl-10 md:pl-16 py-4"
          >
            {/* Status Dot */}
            <div className="absolute left-[-5px] top-6 w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-[2.5] transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-emerald-500/60 uppercase tracking-[0.5em] block">
                  PROJECT_REF_0{project.id}
                </span>

                <h2 className="text-3xl md:text-7xl font-black tracking-tighter uppercase leading-none group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h2>
                <h3 className="text-xl font-bold italic text-white/40">
                  {"// "} {project.type}
                </h3>
              </div>

              <p className="text-base md:text-xl text-white/80 leading-relaxed italic border-b border-white/5 pb-8">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="px-4 py-1.5 bg-emerald-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                  STABLE_BUILD
                </div>
                <span className="text-xs font-mono font-bold text-white/30 uppercase tracking-[0.3em]">
                  {project.stack}
                </span>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </PageLayout>
  );
}
