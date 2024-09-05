import { motion } from "framer-motion";
import ButtonTertiary from "./ButtonTertiary";
import { fadeInOnScroll } from "@/motion/motionVariants";

const Trail = () => {
  return (
    <section className='xl:mb-32 w-full'>
      <motion.div 
        variants={fadeInOnScroll(0.2, 0.6)} 
        initial='hidden' 
        whileInView='visible' 
        className='py-0 w-full xl:max-w-[1140px] mx-auto min-h-[300px] bg-gradient-to-r from-accent via-accent_secondary to-accent h-full flex items-center xl:rounded-2xl'
      >
        <div className='flex flex-col xl:flex-row items-center justify-center w-full xl:py-24 space-y-16 xl:space-y-0 xl:space-x-24'>
          <div className='text-center xl:text-left max-w-[560px]'>
            <h2 className='text-[40px] leading-tight font-bold mb-6'>Start Your 30-day Trail 🌄</h2>
            <p className='lead'>
              Experience the full power of our platform with a 30-day free trial. No credit card required. 💯
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <ButtonTertiary btnText={"Start Free Trial"} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Trail;