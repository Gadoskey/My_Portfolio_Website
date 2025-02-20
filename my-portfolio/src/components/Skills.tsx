"use client";
import { skills } from "@/components/Data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="skills" className="pt-16">
      <section ref={ref} className="text-[8px] sm:text-[14px] py-8 bg-slate-900 text-white rounded-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-[12px] sm:text-[15px] border-b pb-2 font-bold text-left mb-6">Skills</h2>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 py-1 px-0.5 sm:px-2 rounded-lg shadow-md text-[10px] sm:text-sm font-medium"
                whileHover={{ scale: 1.02 }}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
