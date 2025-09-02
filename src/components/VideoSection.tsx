import React from 'react';

export const VideoSection = () => {
  return (
    <section className="bg-special-section-bg py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Meet NOSO, your master mechanics
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
            See how NOSO AI transforms HVAC diagnostics and helps technicians become experts
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border border-foreground dark:border-border">
            <iframe
              src="https://www.youtube.com/embed/mUzbZ-Qn7N8"
              title="Meet NOSO, your master mechanics"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};