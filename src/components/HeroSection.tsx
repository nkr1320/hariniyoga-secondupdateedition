import { useEffect, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";
import profileHarini from "@/assets/profile-harini.jpg";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      />

      {/* Parallax Sacred Geometry Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-sacred opacity-30"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />

      {/* Fixed Opening/Closing Dots */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left dots */}
        <motion.div
          className="absolute top-20 left-20 w-3 h-3 bg-krishna-glow rounded-full"
          animate={{
            scale: [0.5, 1.2, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <motion.div
          className="absolute top-32 left-16 w-2 h-2 bg-dharma-gold rounded-full"
          animate={{
            scale: [0.3, 1, 0.3],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4,
            delay: 1,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        
        {/* Top right dots */}
        <motion.div
          className="absolute top-24 right-24 w-2 h-2 bg-krishna-light rounded-full"
          animate={{
            scale: [0.4, 1.1, 0.4],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 3.5,
            delay: 0.5,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-dharma-gold/60 rounded-full"
          animate={{
            scale: [0.2, 1, 0.2],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4.5,
            delay: 2,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />

        {/* Bottom dots */}
        <motion.div
          className="absolute bottom-32 left-28 w-2 h-2 bg-krishna-glow/70 rounded-full"
          animate={{
            scale: [0.3, 1.2, 0.3],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3.2,
            delay: 1.5,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
        <motion.div
          className="absolute bottom-40 right-32 w-3 h-3 bg-dharma-gold/50 rounded-full"
          animate={{
            scale: [0.5, 1.3, 0.5],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3.8,
            delay: 0.8,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        />
      </div>

      {/* Main Content Container */}
      <motion.div
        className="relative z-10 container mx-auto px-6 text-center pt-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Sanskrit Quote */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.p
            className="text-sanskrit text-white/90 text-xl md:text-2xl mb-2 glow-text"
            animate={{
              textShadow: [
                "0 0 20px hsla(194, 100%, 85%, 0.5)",
                "0 0 30px hsla(194, 100%, 85%, 0.8)",
                "0 0 20px hsla(194, 100%, 85%, 0.5)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            न मे भक्तः प्रणश्यति
          </motion.p>
          <motion.p
            className="text-white/80 text-sm md:text-base italic tracking-wide"
            variants={itemVariants}
          >
            "My Devotee Is Never Destroyed" - Bhagavad Gita 9.31
          </motion.p>
        </motion.div>

        {/* Animated Profile Image */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <div className="relative inline-block">
            <motion.div
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-krishna-glow"
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  "0 0 0 0 hsla(194, 100%, 85%, 0.7)",
                  "0 0 0 20px hsla(194, 100%, 85%, 0)",
                  "0 0 0 0 hsla(194, 100%, 85%, 0.7)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <motion.img
                src={profileHarini}
                alt="Harini - Spiritual Teacher"
                className="w-full h-full object-cover"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
            
            {/* Rotating Chakra Rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-krishna-light/30"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: "120%",
                height: "120%",
                left: "-10%",
                top: "-10%",
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border border-dharma-gold/20"
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: "140%",
                height: "140%",
                left: "-20%",
                top: "-20%",
              }}
            />
          </div>
        </motion.div>

        {/* Animated Main Title */}
        <motion.div
          className="mb-6"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Namaste, I'm{' '}
            <motion.span
              className="text-divine glow-text inline-block"
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 },
              }}
            >
              Harini
            </motion.span>
          </motion.h1>
          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-white/90 font-medium"
            variants={itemVariants}
          >
            A Spiritual Teacher Guided by{' '}
            <motion.span
              className="text-dharma-gold"
              whileHover={{ scale: 1.05 }}
            >
              Ancient Wisdom
            </motion.span>
            ,{' '}
            Serving through{' '}
            <motion.span
              className="text-krishna-light"
              whileHover={{ scale: 1.05 }}
            >
              Yoga & Vedanta
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Animated Description */}
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Sharing the timeless wisdom of yoga and Vedanta through authentic teachings. 
            Connecting seekers to the ancient path while staying rooted in{' '}
            <span className="text-dharma-gold font-medium">Sanātana Dharma</span> and{' '}
            <span className="text-krishna-light font-medium">traditional lineage</span>.
          </motion.p>
        </motion.div>

        {/* Animated Call to Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px -10px hsla(231, 48%, 48%, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => scrollToSection('classes')}
              className="btn-divine min-w-[200px] relative overflow-hidden"
            >
              <motion.span
                className="relative z-10"
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                Join Sacred Classes
              </motion.span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 60px -10px hsla(45, 86%, 58%, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() => scrollToSection('contact')}
              className="btn-dharma min-w-[200px]"
              variant="outline"
            >
              Connect with Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <div className="flex flex-col items-center text-white/60">
            <motion.p
              className="text-sm mb-2"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              Scroll to explore
            </motion.p>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
                animate={{
                  y: [0, 16, 0],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Sacred Symbols */}
      <motion.div
        className="absolute top-20 left-20 text-4xl text-krishna-glow/30"
        variants={floatingVariants}
        animate="animate"
      >
        ॐ
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-20 text-3xl text-dharma-gold/30"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        🕉️
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-10 text-2xl text-krishna-light/30"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        📿
      </motion.div>
    </section>
  );
};

export default HeroSection;