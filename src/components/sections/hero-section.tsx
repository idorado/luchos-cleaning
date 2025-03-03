"use client"

import { Button } from "@/components/ui/button"
import { motion, useReducedMotion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useMemo, useEffect, useState } from "react"
import Link from "next/link"

interface Position {
  left: number;
  top: number;
}

export function HeroSection() {
  // Check if user prefers reduced motion
  const prefersReducedMotion = useReducedMotion();
  
  // Initialize with empty positions to avoid hydration mismatch
  const [positions, setPositions] = useState<Position[]>([]);
  
  // Generate positions only on the client side to avoid hydration mismatch
  useEffect(() => {
    // Reduce number of particles for better performance
    setPositions(Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    })));
  }, []);

  // Define animation variants for better orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}>

          <motion.div
            variants={itemVariants}
            className="max-w-2xl bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl p-6 sm:p-10 gap-8"
            style={{ willChange: 'opacity, transform' }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-extrabold leading-tight mb-6 overflow-hidden">
              <motion.span
                className="relative inline-block text-primary px-2 py-1 mb-1 mt-1 rounded"
                animate={prefersReducedMotion ? {} : {
                  opacity: [0.8, 1, 0.8],
                  backgroundColor: ["rgba(59, 130, 246, 0.05)", "rgba(59, 130, 246, 0.15)", "rgba(59, 130, 246, 0.05)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut"
                }}
              >
                Shine
              </motion.span>
              {" "}
              and{" "}
              <span className="relative inline-block text-primary">
                Brighten
                {!prefersReducedMotion && positions.length > 0 && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
                    style={{ willChange: 'opacity' }}
                  >
                    {positions.map((position, i) => {
                      // Use a stable delay value instead of Math.random() in the JSX
                      const delay = i * 0.1;
                      return (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-yellow-400 rounded-full shadow-sm"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 0.3,
                            delay,
                          }}
                          style={{
                            left: `${position.left}%`,
                            top: `${position.top}%`,
                            willChange: 'opacity, transform'
                          }}
                        />
                      );
                    })}
                  </motion.div>
                )}
              </span>
              <br />
              Your Space
            </h1>
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg"
            >
              Professional cleaning services that offer quick estimates & transparent pricing
            </motion.p>
            <motion.div variants={itemVariants}>
              <Button 
                asChild
                size="lg" 
                className="text-lg px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-primary/50 focus:outline-none"
                aria-label="Get a free estimate for cleaning services"
              >
                <Link href="#estimate">Free Estimate</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] md:block drop-shadow-lg rounded-2xl overflow-hidden"
            style={{ willChange: 'opacity, transform' }}
          >
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-0 bg-white opacity-20 rounded-2xl"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror" }}
                style={{ willChange: 'opacity' }}
              />
            )}
            <Image
              src="/pro-cleaning.jpg"
              alt="Professional cleaner in action, showcasing our cleaning services"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-2xl"
              loading="eager"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
      <BackgroundGrid prefersReducedMotion={prefersReducedMotion} />
    </section>
  )
}

function BackgroundGrid({ prefersReducedMotion }: { prefersReducedMotion: boolean | null }) {
  return (
    <motion.div 
      className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f8f9fa_1px,transparent_1px),linear-gradient(to_bottom,#f8f9fa_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: prefersReducedMotion ? 0.1 : 1.5 }}
      aria-hidden="true"
    />
  )
}
