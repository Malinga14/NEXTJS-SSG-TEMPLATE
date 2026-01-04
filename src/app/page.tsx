"use client";

import dynamic from "next/dynamic";

const Plasma = dynamic(() => import("@/components/Plasma"), { ssr: false });

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#faf9f7]">
      {/* Plasma Background */}
      <div className="absolute inset-0 z-0">
        <Plasma
          color="#d6af78"
          speed={0.4}
          scale={1.2}
          opacity={0.35}
          mouseInteractive={true}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex">
        {/* Left Decorative Bar */}
        <div className="hidden lg:flex w-12 flex-col items-center justify-center border-r border-[#e8e4df]/50">
          <div className="w-px h-20 bg-linear-to-b from-transparent via-[#c4a77d] to-transparent animate-pulse-soft" />
        </div>

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-center px-6 lg:px-12 py-6">
          <div className="max-w-4xl">
            {/* Title Section */}
            <header className="mb-8 opacity-0 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-px bg-[#c4a77d] animate-expand-line" />
                <span className="text-[10px] tracking-[0.25em] text-[#8b8680] uppercase font-medium">
                  Static Site Generation
                </span>
              </div>
              <h1 className="font-(family-name:var(--font-cormorant)) text-4xl lg:text-6xl font-light text-[#1a1a1a] mb-4 leading-[1.1] tracking-tight">
                Next.js
                <br />
                <span className="font-medium">SSG Template</span>
              </h1>
              <p className="text-base text-[#5a5754] max-w-lg leading-relaxed font-light">
                A Jamstack-powered template crafted for frontend developers.
                Pre-Rendered pages at build time for lightning-fast performance.
              </p>
            </header>

            {/* Tech Stack */}
            <div className="mb-8 opacity-0 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-6 flex-wrap">
                {["Next.js 15", "React 19", "TypeScript", "Tailwind 4"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="text-sm text-[#5a5754] relative group cursor-default"
                    >
                      <span className="relative z-10">{tech}</span>
                      <span className="absolute bottom-0 left-0 w-full h-px bg-[#c4a77d] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Features Grid */}
            <div className="flex items-stretch mb-8 opacity-0 animate-fade-in-up animation-delay-400">
              {[
                { title: "Performance", desc: "Static HTML from CDN" },
                { title: "Security", desc: "No server runtime" },
                { title: "Scalability", desc: "Global distribution" },
                { title: "SEO", desc: "Pre-rendered HTML" },
              ].map((feature, index) => (
                <div key={feature.title} className="flex items-stretch">
                  <div className="bg-transparent backdrop-blur-sm p-4 hover:scale-105 transition-transform flex-1">
                    <h3 className="font-(family-name:var(--font-cormorant)) text-base font-medium text-[#1a1a1a] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#8b8680]">{feature.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="w-px bg-[#c4a77d]/30 mx-4 self-stretch" />
                  )}
                </div>
              ))}
            </div>

            {/* Two Column Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 opacity-0 animate-fade-in-up animation-delay-600">
              {/* Code Quality */}
              <div>
                <h2 className="font-(family-name:var(--font-cormorant)) text-xl font-medium text-[#1a1a1a] mb-4">
                  Quality
                </h2>
                <div className="space-y-2.5">
                  {[
                    "Husky pre-commit hooks",
                    "Prettier formatting",
                    "ESLint validation",
                    "Strict TypeScript",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <span className="w-5 h-px bg-[#e8e4df] group-hover:bg-[#c4a77d] group-hover:w-6 transition-all" />
                      <span className="text-sm text-[#5a5754]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commands */}
              <div>
                <h2 className="font-(family-name:var(--font-cormorant)) text-xl font-medium text-[#1a1a1a] mb-4">
                  Commands
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "dev",
                    "build",
                    "lint:fix",
                    "format",
                    "type-check",
                    "validate",
                  ].map((cmd) => (
                    <code
                      key={cmd}
                      className="px-3 py-2 bg-transparent text-[#5a5754] text-xs font-mono border-l-2 border-transparent hover:border-[#c4a77d] transition-colors"
                    >
                      npm run {cmd}
                    </code>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right Side Info */}
        <div className="hidden lg:flex w-48 flex-col justify-end p-6 border-l border-[#e8e4df]/50">
          <div className="space-y-5 opacity-0 animate-slide-in-left animation-delay-800">
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#8b8680] uppercase block mb-1">
                Architecture
              </span>
              <span className="text-sm text-[#1a1a1a]">Jamstack / SSG</span>
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#8b8680] uppercase block mb-1">
                Deploy
              </span>
              <span className="text-sm text-[#1a1a1a]">Cloudflare Pages</span>
            </div>
            <div>
              <span className="text-[9px] tracking-[0.2em] text-[#8b8680] uppercase block mb-1">
                Dev Server
              </span>
              <span className="text-sm text-[#1a1a1a]">Turbopack</span>
            </div>
            <div className="pt-4">
              <div className="w-6 h-6 border border-[#e8e4df] rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#c4a77d] rounded-full animate-pulse-soft" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
