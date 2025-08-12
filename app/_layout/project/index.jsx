'use client';

import { useRef, useState } from 'react';
import { motion, useTransform, useScroll, AnimatePresence } from 'framer-motion';
import { projectOptions } from '@/data';
import { useProjectSlider } from '@/hooks';
import { randomId } from '@/utils';
import { ProjectSlider } from './slider';

export function Project() {
  /** @type {import('react').MutableRefObject<HTMLElement>} */
  const containerRef = useRef(null);
  const { transformX1, transformX2, transformY } = useProjectSlider(containerRef);
  
  
  // Add scroll-based motion
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create scroll-based transforms
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const firstSlider = projectOptions.first.map(({ type, source, title, caption }) => {
    const id = randomId();
    return <ProjectSlider key={id} type={type} source={source} title={title} caption={caption} />;
  });

  const secondSlider = projectOptions.second.map(({ type, source, title, caption }) => {
    const id = randomId();
    return <ProjectSlider key={id} type={type} source={source} title={title} caption={caption} />;
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const sliderVariants = {
    hover: { scale: 1.02, transition: { duration: 0.3 } }
  };

  return (
    <motion.section 
      ref={containerRef} 
      className='relative z-10 mt-14'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className='text-center mb-16'>
        <motion.div
          className='inline-block'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className='text-5xl font-bold mb-4 relative text-black'>
  {/* <span className="text-black">Video Gallery</span> */}
</h2>
        </motion.div>
        
        <motion.div
          className='flex items-center justify-center gap-2 mb-6'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className='h-[1px] w-12 bg-black/20 dark:bg-white/20'></span>
          {/* <span className='text-sm text-black/60 dark:text-white/60 uppercase tracking-wider'>Project Videos</span> */}
          <span className='h-[1px] w-12 bg-black/20 dark:bg-white/20'></span>
        </motion.div>

        <motion.p 
          className='text-black/70 max-w-2xl mx-auto text-lg'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {/* <span className="text-black">Watch my projects in action — See how they work</span> */}
        </motion.p>
      </div>

      {/* Original Animated Slider Section */}
      <div className='grid items-center'>
        <div className='bg-background overflow-hidden'>
          <motion.div
            className='mb-10 flex gap-10 cursor-grab active:cursor-grabbing'
            style={{
              width: '120vw',
              x: transformX1,
            }}
            drag="x"
            dragConstraints={{
              left: -1000,
              right: 0
            }}
            dragElastic={0.1}
            dragMomentum={true}
          >
            {firstSlider}
          </motion.div>

          <motion.div
            className='mb-10 flex gap-10 cursor-grab active:cursor-grabbing'
            style={{
              width: '120vw',
              x: transformX2,
            }}
            drag="x"
            dragConstraints={{
              left: -1000,
              right: 0
            }}
            dragElastic={0.1}
            dragMomentum={true}
          >
            {secondSlider}
          </motion.div>
        </div>

        <motion.div
          className='w-screen bg-background'
          style={{
            height: transformY,
            borderRadius: '0 0 50% 50%',
          }}
        />
      </div>

      
    </motion.section>
  );
}
