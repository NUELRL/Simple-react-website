import { motion } from "motion/react";
import ScalableImage from "../assets/scalable.png";
import AgileImage from "../assets/agile.png";
import FeedbackImage from "../assets/feedback.png";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

function Features() {
  return (
    <div className="max-w-[85rem] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 mx-auto my-8 sm:my-12">
      <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
        {/* Images */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
            <ImageCont className="col-span-4" src={ScalableImage} delay={0.1} />
            <ImageCont className="col-span-3" src={AgileImage} delay={0.2} />
            <ImageCont className="col-span-5" src={FeedbackImage} delay={0.3} />
          </div>
        </div>

        {/* Text */}
        <div className="mt-10 lg:mt-0 lg:col-span-5">
          <div className="space-y-6 sm:space-y-8">
            {/* Terminal badge */}
            <motion.div
              {...fadeIn(0)}
              className="inline-flex items-center gap-2 bg-indigo-950/50 border border-indigo-500/20 rounded-md px-3 py-1.5 font-mono text-[11px] text-indigo-400"
            >
              <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
              $ team --mode augmented
            </motion.div>

            <div className="space-y-2 md:space-y-4">
              <motion.h2
                {...fadeIn(0.1)}
                className="font-bold text-3xl lg:text-4xl text-gray-800"
              >
                Build your dedicated augmented team to scale up with confidence
                💯
              </motion.h2>
              <motion.p {...fadeIn(0.2)} className="text-gray-500">
                As ideas evolve and customer expectations increase post-MVP, we
                provide a specialized team focused on rapidly scaling and
                enhancing your product to meet those changing needs.
              </motion.p>
            </div>

            <motion.ul {...fadeIn(0.3)} className="space-y-3">
              <Listitem tag="feedback.ts">
                Continuous feedback integration
              </Listitem>
              <Listitem tag="team.config">
                Agile and flexible team structure
              </Listitem>
              <Listitem tag="infra.scale">
                Scalable technology foundation
              </Listitem>
            </motion.ul>

            {/* Mini stat row */}
            <motion.div
              {...fadeIn(0.4)}
              className="grid grid-cols-3 gap-3 pt-2"
            >
              {[
                { val: "2x", label: "Faster delivery" },
                { val: "98%", label: "Client retention" },
                { val: "24/7", label: "Support uptime" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center"
                >
                  <span className="block font-mono text-lg font-semibold text-indigo-600">
                    {s.val}
                  </span>
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wide mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

function ImageCont({ src, className, delay }) {
  return (
    <motion.div className={`${className} relative group`} {...fadeIn(delay)}>
      <img
        className="rounded-xl w-full h-full object-cover"
        src={src}
        alt="Features"
      />
      {/* Subtle indigo overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-indigo-500/0 group-hover:bg-indigo-500/5 transition-colors duration-300" />
    </motion.div>
  );
}

function Listitem({ children, tag }) {
  return (
    <li className="flex items-start gap-x-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-indigo-100 hover:bg-indigo-50/30 transition-colors duration-200">
      <span className="mt-0.5 size-5 flex-shrink-0 flex justify-center items-center rounded-full bg-indigo-100 text-indigo-600">
        <svg
          className="shrink-0 size-3"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      <div className="flex-1 flex items-center justify-between gap-4">
        <span className="text-sm text-gray-700 font-medium">{children}</span>
        <span className="font-mono text-[10px] text-gray-300 flex-shrink-0">
          {tag}
        </span>
      </div>
    </li>
  );
}
