import { fadeInOnScroll } from "@/motion/motionVariants"
import { motion } from "framer-motion"
import { BiSolidQuoteAltLeft } from 'react-icons/bi'

const testimonial = [
    {
    name: 'Mariwan Iraj',
    message: "a deep-lover of technologocal increadibly efforts! it exceeded all my expectations and I couldn't be happier with results. He's a Kick Ass man! 🧠",
    },
    {
    name: 'Hewr Haval',
    message: "An avid enthusiast of technological advancements! The results far surpassed my expectations, and I couldn’t be more thrilled. He's absolutely phenomenal 🔥",
    },
    {
    name: 'Lisa Mathew',
    message: "A passionate advocate for technological innovation! The outcome exceeded all my expectations, and I’m absolutely delighted. She’s fantastic! 💡",
    },
    {
    name: 'Ana Doe',
    message: "A dedicated lover of tech innovations! The results blew me away, and I’m thrilled with what she’s achieved. She’s remarkable! 💯",
    },
    {
    name: 'Ashly James',
    message: "A tech enthusiast with a remarkable knack for innovation! The results were even better than I hoped, and I’m beyond pleased. She’s truly exceptional! 🤝"
    },
    {
    name: 'Micheal Brown',
    message: "A true tech visionary! The results were beyond my wildest dreams, and I’m incredibly impressed. He’s extraordinary! 🦾"
    },
    {
    name: 'Jack Wright',
    message: "A passionate tech aficionado who truly delivers! The outcome exceeded all my expectations, and I couldn’t be happier. He’s exceptional!💪"
    },
]


const Testimonial = () => {
  return (
    <section className='w-full mb-24 xl:mb-32 flex justify-center items-center'>
        <div className='overflow-hidden'>
            <motion.div variants={fadeInOnScroll(0.2, 0.6)} initial="hidden" whileInView="visible">
                <h2 className='h2 mb-6 text-center'>What People Are Saying👇</h2>
                <p className='lead text-center mb-24'>
                    Hear direcly form those who have improved their efficiency and oraganization 💬
                </p>
            </motion.div>
            <div>
                <motion.div className='flex' variants={fadeInOnScroll(0.2, 0.6)} initial="hidden" whileInView="visible">
                    <motion.div
                    initial={{x: 0}}
                    animate={{x: "-100%"}}
                    transition={{duration: 30, repeat: Infinity, ease: 'linear'}}
                    className='flex'
                    >
                        {testimonial.map((item, index) => {
                            return(
                                <div key={index} className='relative w-[460px] h-[300px]
                                bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14'>
                                    <BiSolidQuoteAltLeft  className='text-accent mb-3 text-3xl'/>
                                    <p className='mb-4 text-lg text-white/80'>{item.message}</p>
                                    <p className='text-xl'>{item.name}</p>
                                </div>
                            )
                        })}
                    </motion.div>

                    <motion.div
                    initial={{x: 0}}
                    animate={{x: "-100%"}}
                    transition={{duration: 30, repeat: Infinity, ease: 'linear'}}
                    className='flex'
                    >
                        {testimonial.map((item, index) => {
                            return(
                                <div key={index} className='relative w-[460px] h-[300px]
                                bg-[#0e11354e] mr-12 rounded-2xl flex flex-col justify-center px-14'>
                                    <BiSolidQuoteAltLeft  className='text-accent mb-3 text-3xl'/>
                                    <p className='mb-4 text-lg text-white/80'>{item.message}</p>
                                    <p className='text-xl'>{item.name}</p>
                                </div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial