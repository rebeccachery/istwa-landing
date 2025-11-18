import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Play, Bell } from "lucide-react";
import { useRef } from "react";
import { useScrollToRef } from "../hooks/useScrollToRef";

export function Hero({ waitlistRef }: { waitlistRef: React.RefObject<HTMLElement | null> }) {
  const scrollToWaitlist = useScrollToRef(waitlistRef);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1510796962426-959af1dc86e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
          alt="Haiti landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-2 border border-amber-50/40 rounded-full bg-transparent">
            <span className="text-amber-50 text-sm tracking-wide font-medium">Our First Film • Coming 2026</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-amber-50 mb-4 tracking-widest font-light"
        >
          <div className="text-7xl md:text-8xl lg:text-9xl font-thin">LIBERTÉ</div>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl text-amber-50 mb-8 font-light tracking-normal"
        >
          The Story of Haiti's Revolution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-lg md:text-xl text-amber-50/90 max-w-2xl mx-auto mb-12 font-light"
        >
          Experience the untold story of the world's only successful slave revolution,
          brought to life through groundbreaking animation
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium flex items-center gap-2 transition-colors"
          >
            <Play className="h-5 w-5" />
            Watch Trailer
          </Button>
          <Button
            size="lg"
            onClick={scrollToWaitlist}
            className="border-2 border-amber-50 text-amber-50 hover:bg-amber-50/10 px-8 py-3 rounded-md font-medium flex items-center gap-2 transition-colors bg-transparent cursor-pointer"
          >
            <Bell className="h-5 w-5" />
            Get Notified
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-amber-50/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-amber-50/50 rounded-full"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
