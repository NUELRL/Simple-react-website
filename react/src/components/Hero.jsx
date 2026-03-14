import { motion } from "motion/react";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const STATS = [
  { num: "50+", label: "Projects shipped" },
  { num: "99%", label: "Uptime SLA" },
  { num: "12ms", label: "Avg. latency" },
];

const ACTIVITY = [
  {
    color: "#4ade80",
    type: "deploy",
    msg: "v2.4.1 → production",
    time: "2m ago",
  },
  { color: "#818cf8", type: "build", msg: "passed 148 tests", time: "5m ago" },
  {
    color: "#c084fc",
    type: "pr merged",
    msg: "feat/auth-redesign",
    time: "18m ago",
  },
  { color: "#4ade80", type: "scale", msg: "3 → 6 instances", time: "1h ago" },
];

function Hero() {
  return (
    <section className="relative min-h-svh w-full overflow-hidden flex items-center justify-center px-4 py-20 sm:px-6 lg:px-8 bg-[#06060f]">
      {/* Dot grid */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(99,102,241,0.12) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
        }}
      />

      {/* Orbs */}
      <div className="absolute -top-32 -left-32 size-[500px] rounded-full bg-indigo-600 opacity-10 blur-[120px] -z-10" />
      <div className="absolute -bottom-32 -right-32 size-[400px] rounded-full bg-purple-600 opacity-10 blur-[100px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl w-full items-center relative z-10">
        {/* LEFT */}
        <div>
          <motion.div
            {...fadeIn(0.1)}
            className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/20 rounded-md px-3 py-1.5 font-mono text-[11px] text-indigo-400 mb-6"
          >
            <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
            $ jionerd --status active
          </motion.div>

          <motion.h1
            {...fadeIn(0.2)}
            className="font-extrabold tracking-tight text-slate-100 text-4xl sm:text-5xl leading-[1.1] mb-5"
          >
            Build faster.
            <br />
            Unleash the Power of Technology{" "}
            <span className="bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Elevate, Innovate, Dominate.
            </span>
          </motion.h1>

          <motion.p
            {...fadeIn(0.3)}
            className="text-slate-500 leading-relaxed mb-8 max-w-sm"
          >
            Tired of unreliable developers? We're a software company that turns
            your vision into reality—fast. From MVP to scale, we've got you
            covered.
          </motion.p>

          <motion.div {...fadeIn(0.4)} className="flex flex-wrap gap-3 mb-10">
            <motion.a
              href="#"
              whileHover={{ y: -2, boxShadow: "0 0 32px rgba(99,102,241,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.3)]"
            >
              Get started
              <svg
                className="size-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-medium text-slate-400 transition-colors"
            >
              View our work
              <svg
                className="size-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </motion.a>
          </motion.div>

          <motion.div
            {...fadeIn(0.5)}
            className="flex items-center gap-6 flex-wrap"
          >
            {STATS.map((s, i) => (
              <div key={i} className="flex items-center gap-6">
                {i > 0 && <div className="w-px h-8 bg-white/5" />}
                <div>
                  <span className="block font-mono text-xl font-medium text-slate-200">
                    {s.num}
                  </span>
                  <span className="block text-[10px] uppercase tracking-widest text-slate-600 mt-0.5">
                    {s.label}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Dashboard */}
        <motion.div {...fadeIn(0.3)} className="relative hidden lg:block">
          {/* Chip — systems */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute -top-5 right-6 z-10 flex items-center gap-2.5 bg-[#111124] border border-indigo-500/20 rounded-xl px-3 py-2 font-mono text-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            style={{ animation: "floatY 5s ease-in-out infinite 1.2s" }}
          >
            <span className="size-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]" />
            <div>
              <p className="text-slate-200 font-medium text-[11px]">
                All systems operational
              </p>
              <p className="text-slate-600">jionerd.io · 99.9% uptime</p>
            </div>
          </motion.div>

          {/* Chip — deploy */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-5 left-6 z-10 flex items-center gap-2.5 bg-[#111124] border border-indigo-500/20 rounded-xl px-3 py-2 font-mono text-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            style={{ animation: "floatY 7s ease-in-out infinite 1.4s" }}
          >
            <span className="size-2 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,0.6)]" />
            <div>
              <p className="text-slate-200 font-medium text-[11px]">
                Latest deploy · main
              </p>
              <p className="text-slate-600">2 mins ago · 0 errors</p>
            </div>
          </motion.div>

          {/* Main dash card */}
          <div className="bg-[#0d0d1c] border border-indigo-500/15 rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            {/* Titlebar */}
            <div className="bg-[#111124] border-b border-white/5 px-4 py-2.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                {["#ff5f57", "#ffbd2e", "#28c840"].map((c, i) => (
                  <span
                    key={i}
                    className="size-2.5 rounded-full"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div className="flex-1 bg-white/4 border border-white/5 rounded-md px-3 py-1 font-mono text-[10px] text-slate-600">
                app.jionerd.io/dashboard
              </div>
            </div>

            <div className="p-4 flex flex-col gap-3">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  {
                    label: "Response",
                    val: "12ms",
                    color: "#818cf8",
                    delta: "↓ 4ms vs last",
                  },
                  {
                    label: "Uptime",
                    val: "99.9%",
                    color: "#4ade80",
                    delta: "30-day avg",
                  },
                  {
                    label: "Deploys",
                    val: "142",
                    color: "#c084fc",
                    delta: "this month",
                  },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="bg-[#111124] border border-white/5 rounded-xl p-3"
                  >
                    <p className="text-[10px] text-slate-600 uppercase tracking-wide mb-1">
                      {m.label}
                    </p>
                    <p
                      className="font-mono text-lg font-medium"
                      style={{ color: m.color }}
                    >
                      {m.val}
                    </p>
                    <p className="text-[10px] text-green-500 mt-0.5">
                      {m.delta}
                    </p>
                  </div>
                ))}
              </div>

              {/* Activity feed */}
              <div className="bg-[#111124] border border-white/5 rounded-xl p-3">
                <p className="font-mono text-[10px] text-slate-600 mb-2.5">
                  // recent activity
                </p>
                {ACTIVITY.map((a, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 py-1.5 border-b border-white/[0.03] last:border-0"
                  >
                    <span
                      className="size-1.5 rounded-full flex-shrink-0"
                      style={{ background: a.color }}
                    />
                    <span className="font-mono text-[10px] text-slate-600 flex-1">
                      <span style={{ color: "#818cf8" }}>{a.type}</span> ·{" "}
                      {a.msg}
                    </span>
                    <span className="font-mono text-[10px] text-slate-700">
                      {a.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Deploy bar */}
              <div className="bg-[#111124] border border-green-500/15 rounded-xl px-3 py-2.5 flex items-center gap-3">
                <div className="size-7 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="size-3.5 text-green-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-mono text-[11px] font-medium text-slate-200">
                    $ git push origin main
                  </p>
                  <p className="font-mono text-[10px] text-slate-600 mt-0.5">
                    → deployed to production in 1.2s
                  </p>
                </div>
                <span className="font-mono text-[10px] text-green-400 bg-green-500/10 border border-green-500/20 rounded px-2 py-0.5">
                  ✓ live
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
