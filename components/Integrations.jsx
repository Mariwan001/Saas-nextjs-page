'use client'
import Image from "next/image"
import { animate, motion } from "framer-motion"
import Button from "./Button"
import { fadeInOnScroll, fadeInUpSpring } from "@/motion/motionVariants"


const icons =  [
  {
    src: "/integrations/notion.svg",
  },
  {
    src: "/integrations/slack.svg",
  },
  {
    src: "/integrations/google_drive.svg",
  },
  {
    src: "/integrations/intercom.svg",
  },
  {
    src: "/integrations/jira.svg",
  },
  {
    src: "/integrations/dropbox.svg",
  },
  {
    src: "/integrations/stripe.svg",
  },
  {
    src: "/integrations/zapier.svg",
  },
  {
    src: "/integrations/figma.svg",
  },
  {
    src: "/integrations/confluence.svg",
  },
  {
    src: "/integrations/mailchimp.svg",
  },
  {
    src: "/integrations/whatsapp.svg",
  },
  {
    src: "/integrations/discord.svg",
  },
  {
    src: "/integrations/bitbucket.svg",
  },
  {
    src: "/integrations/invision.svg",
  },
  {
    src: "/integrations/evernote.svg",
  },
]

const iconAnimation = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
    delay: 0.05 * index,
    },
  }),
}



const Integration = () => {
  return (
    <section className='py-24 xl:py-32 min-h-[720] xl:mt-32'>
      <div className='container mx-auto flex flex-col justify-center items-center gap-8 xl:gap-16'>
        <motion.div variants={fadeInOnScroll(0.2, 0.6)} initial="hidden" whileInView="visible" className='text-center'>
          <h2 className='h2 mb-3'>Unified Workflows</h2>
          <p className='lead'>
            Integrate with top apps to create and seamless, connected experience.
          </p>
        </motion.div>
        <div className='flex flex-wrap gap-8 w-full max-w-[1024px] mx-auto place-content-center mb-8'>
          {icons.map((icon, index) => {
            return(
              <motion.div 
              className='relative w-[80px] h-[80px]'
              key={index} 
              custom={index} 
              variants={iconAnimation} 
              whileInView="animate" 
              initial="initial">
                <Image src={icon.src} fill alt=""/>
              </motion.div>
            )
          })}
        </div>
        <motion.div 
        initial={{y: 60, opacity: 0, scale: 0.8}}
        whileInView={{y: 0, opacity: 1, scale: 1}}
        transition={{
          delay:0.6,
          duration: 0.4,
          ease: [0.6, -0.05, 0.01, 0.99],
          type: 'spring',
          stiffness: 100,
        }}
        >
          <Button btnText={'See all'}/>
        </motion.div>
      </div>
    </section>
  )
}

export default Integration