import Card from "@/components/home/card";
import Layout from "@/components/layout";
import Balancer from "react-wrap-balancer";
import { motion, useScroll, useTransform } from "framer-motion";
import { DEPLOY_URL, FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Iphone from "@/components/home/iphone";
import { useInView } from "react-intersection-observer";



export default function Home() {
  let { scrollY } = useScroll();


  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: false
  });

  const [ref2, inView2] = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: false
  });

  const y1 = useTransform(scrollY, [0, 2000], [0, 200]);
  

  return (
    <Layout>
      <motion.div
        className="max-w-xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <div className="h-[80vh] flex items-center flex-col justify-center">
          <motion.h1
            className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-5xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <Balancer>Reinvent Your Business Cards</Balancer>
          </motion.h1>
          <br />
          <motion.div
            className="mx-auto mt-6 flex items-center justify-center space-x-5"
            variants={FADE_DOWN_ANIMATION_VARIANTS}
          >
            <a
              className="group flex max-w-fit items-center justify-center space-x-2 rounded-full border border-black bg-black px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-black"
              href={DEPLOY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-4 w-4 group-hover:text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L20 20H4L12 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Deploy to Vercel</p>
            </a>

          </motion.div>
        </div>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer>
            A digital business card that includes all of your important contact information, such as name, phone number, and email address.
          </Balancer>
        </motion.p>

        <div className="relative flex mt-20 flex-col items-center justify-center  py-6 sm:py-12">
          <div className="animate-float-fastest">
            <div className="absolute inset-auto h-80 w-80 -translate-x-8 translate-y-16 scale-50 rounded-full bg-gradient-to-br from-blue-400 via-violet-400   to-purple-300  sm:translate-x-20 sm:translate-y-28 sm:scale-100"></div>
          </div>

          <div className="animate-float-fast scale-50 sm:scale-100">
            <div className="absolute inset-auto h-60 w-60 -translate-x-16 -translate-y-16 scale-50 rounded-full bg-gradient-to-tr from-red-300 via-pink-300 to-orange-100 sm:-translate-x-72 sm:-translate-y-28 sm:scale-100"></div>
          </div>


          <div className="scale-[55%] sm:scale-100">

            <div className="relative animate-float mask border border-gray-400 shadow shadow-sm pointer-events-none relative z-10 h-[269px] w-[444px] select-none rounded-3xl bg-[#191e40]/80 p-7 backdrop-blur-2xl after:absolute after:inset-0 after:rounded-3xl after:bg-gradient-to-br after:from-white/10 after:via-white/20 after:to-white/20 after:p-px">

              <div className="absolute z-30 -mt-5 right-[5%] flex justify-end mt-0.5">
                <span className="text-xl font-mono font-bold text-white">YOUR NAME</span>
              </div>
              <div className="inline-block rounded-md p-1 border border-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon text-white icon-tabler icon-tabler-qrcode" width="72" height="72" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                  <path d="M7 17l0 .01"></path>
                  <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                  <path d="M7 7l0 .01"></path>
                  <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"></path>
                  <path d="M17 7l0 .01"></path>
                  <path d="M14 14l3 0"></path>
                  <path d="M20 14l0 .01"></path>
                  <path d="M14 14l0 3"></path>
                  <path d="M14 20l3 0"></path>
                  <path d="M17 17l3 0"></path>
                  <path d="M20 17l0 3"></path>
                </svg>
              </div>


              <div className="absolute bottom-4 right-[5%] flex justify-between">
                <span className="font-mono text-base text-white opacity-75"></span>
                <span className="font-mono text-base text-white">swoosh</span>
              </div>

            </div>
            <div className="relative h-[2000px]">
              <div style={{top:160}} className="sticky z-40 top-[100px]">
                <motion.div
                  animate={inView ? 'visible' : 'hidden'}
                  variants={{
                    visible: { opacity: 1, scale: 1, x: 0, y: -140 },
                    hidden: {
                      opacity: 0.5,
                      scale: 0.9,
                      x: 50,
                      y: 100
                    },

                  }}
                  transition={{ duration: 0.8, type: "tween" }}
                  ref={ref}
                >
                  <Iphone />
                </motion.div>
              </div>
            </div>

            <motion.div variants={{
                    visible: { opacity: 1, scale: 1, x: 0, y: -140 },
                    hidden: {
                      opacity: 0.5,
                      scale: 0.9,
                      x: 50,
                      y: 100
                    },

                  }}
                  transition={{ duration: 0.8 }} animate={inView ? 'visible' : 'hidden'} ref={ref2} style={{zIndex:100}}  className="absolute rounded-2xl w-80 z-100 bottom-[40%] bg-white shadow shadow-lg p-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <p className="font-mono">YOUR NAME</p>
                  <br/>
                  <div className="text-gray-700 flex flex-col">
                    <span>+49 112 334</span>
                  </div>

                  <div className="text-gray-700 flex flex-col">
                    <span>Invincix.com</span>
                  </div>

                  <div className="text-gray-700 flex flex-col">
                    <span>Invincix.com</span>
                  </div>

                  <div className="text-gray-700 flex flex-col">
                    <span>Invincix.com</span>
                  </div>

                  <div className="text-gray-700 flex flex-col">
                    <span>Invincix.com</span>
                  </div>
            </motion.div>

            <div style={{zIndex:100}} className="absolute left-10 sm:left-[100%] bottom-[35%] ">
                <span className="sm:text-6xl font-display text-white sm:text-black text-5xl">
                  <Balancer>Your information in one place</Balancer>
                </span>
            </div>


          </div>

        </div>

      </motion.div>


    </Layout>
  );
}

