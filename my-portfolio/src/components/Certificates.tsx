"use client";
import { certificates } from "@/components/Data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function Certificates() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="certificates" className="pt-12 sm:pt-16">
      <section ref={ref} className="text-[8px] sm:text-[14px] py-8 bg-slate-900 text-white rounded-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-[16px] sm:text-[20px] border-b pb-2 font-bold text-left mb-6">Certificates</h2>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 gap-4 text-left"
          >
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 w-fit py-1 px-2 sm:px-2 rounded-lg shadow-md text-[13px] sm:text-[16px] font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {certificate}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
