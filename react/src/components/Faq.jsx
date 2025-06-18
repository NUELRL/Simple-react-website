import { motion } from "motion/react";

function Faq() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
        <motion.h2
          className="text-2xl font-bold md:text-4xl md:leading-tight"
          initial={{ x: "-50vw" }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1.2 }}
        >
          You might be wondering...
        </motion.h2>
      </div>

      <div className="max-w-2xl mx-auto divide-y divide-gray-200">
        <FaqTag
          delay={0.2}
          question="What service do you offer?"
          answer="We offer a wide range of services including digital
                transformation consulting, software development, cloud computing
                solutions, data analytics, UI/UX design and more."
        />

        <FaqTag
          delay={0.4}
          question="How experienced is your team?"
          answer="We have a diverse team of highly skilled experts in various
                domains, ensuring that we can deliver exceptional results for
                our clients."
        />

        <FaqTag
          delay={0.6}
          question="Do you provide ongoing support after project completion?"
          answer="Yes, we offer comprehensive post-project support and maintenance
                services. We are committed to long-term partnerships and provide
                continuous support to ensure the smooth operation of our
                solutions."
        />

        <FaqTag
          delay={0.8}
          question="How do we get started with your services?"
          answer="Getting started is easy! Simply reach out to us through our website or contact our team directly."
        />

        <FaqTag
          delay={1}
          question="What is your approach to project management?"
          answer="We use agile methodologies to manage our projects, ensuring that
                they are delivered on time, within budget, and to the
                satisfaction of our clients."
        />
      </div>
    </div>
  );
}

export default Faq;

function FaqTag({ question, answer, delay }) {
  return (
    <motion.div
      className="py-8 first:pt-0 last:pb-0"
      initial={{ x: "-50vw" }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.2 + delay }}
    >
      <div className="flex gap-x-5">
        <svg
          className="shrink-0 mt-1 size-6 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>

        <div className="grow">
          <h3 className="md:text-lg font-semibold text-gray-800">{question}</h3>
          <p className="mt-1 text-gray-500">{answer}</p>
        </div>
      </div>
    </motion.div>
  );
}
