"use client";

import TargetCursor from "@/components/TargetCursor";
import AboutCard from "@/components/AboutCard";

export default function AboutPage() {
  return (
    <main className="relative p-8">
      <TargetCursor />
      <div className="mt-6 cursor-target pointer-events-auto">
  <AboutCard />
</div>
    </main>
  );
}