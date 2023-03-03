import { useScroll } from "framer-motion";
import {
    motion,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Iphone() {

    const [ref, inView, entry] = useInView({
        /* Optional options */
        threshold: 0.1,
        triggerOnce: false
    });

    return <div className="min-h-screen px-10 flex justify-center items-center bg-texture bg-cover pt-20 sm:py-0">

        <div className="relative shadow min-w-[375px] h-[712px] bg-black rounded-[60px] shadow-xl overflow-hidden ring-[14px] ring-black">
            <div className="w-full h-full bg-gradient-to-b from-indigo-500 via-blue-400/80 to-sky-900">

                {/* <!-- iPhone  notch --> */}
                <div className="absolute  top-0 inset-x-0">
                    <div className="relative w-40 h-7 bg-black mx-auto rounded-b-3xl">
                        <div className="w-16 h-2 bg-gray-800 mx-auto rounded-full absolute top-1 inset-x-0"></div>
                        <div className="w-2 h-2 bg-gray-800 rounded-full absolute top-1 right-6"></div>
                    </div>
                </div>



                {/* <!-- 左右 icon --> */}
                <div className="flex justify-between px-8 pt-2">
                    <p className="text-sm text-white ml-5">9:41</p>
                    <div className="relative">
                        <div className="h-5 flex justify-end items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <i className="fas fa-wifi text-white text-sm"></i>
                            <i className="fas fa-battery-full text-white text-sm"></i>
                        </div>
                        <div className="absolute w-1 h-1 rounded-full bg-green-300 -top-1 left-2"></div>
                    </div>
                </div>

                {/* <!-- Container --> */}
                <div className="flex flex-col mx-4">
                    {/* <!-- Cover --> */}
                    <div className="mt-4 pt-10 pb-4 flex flex-col text-white w-full justify-center items-center">
                        <span className="text-6xl">09:41</span>
                        <span className="text-1xl">Friday, 1 March</span>
                    </div>





                </div>



                {/* <!-- notification --> */}

                <div className=" top-9 inset-x-0 mx-2">
                    <motion.div
                        animate={inView ? 'visible' : 'hidden'}
                        variants={{
                            visible: { opacity: 1, scale: 1, y: 0 },
                            hidden: {
                                opacity: 0,
                                y: 80
                            }
                        }}
                        transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                        ref={ref}
                    >
                        <div className="w-full h-auto mx-auto p-3 bg-white/40 backdrop-filter backdrop-blur-lg rounded-2xl backdrop-blur-xl">

                            <div className="flex items-center">
                         
                                    <div className="relative">
                                        <div className="w-10 h-10 bg-black flex items-center justify-center text-white rounded-lg overflow-hidden">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="rotate-90" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M12 18l.01 0"></path>
                                                <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
                                                <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
                                                <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
                                            </svg>
                                        </div>

                                    </div>
                                    <div className="block pl-2 flex-1">
                                        <p className="text-white text-md">Website NFC Tag</p>
                                        <p className="text-white text-sm">Open website in safari</p>
                                    </div>
                             
                                <button type="button" className="bg-white/20 text-white text-sm h-8 py-0 px-4 rounded-full hover:bg-gray-100/20 focus:outline-none">View</button>
                            </div>
                            {/* <!-- 下方 icon --> */}
                           
                        </div>
                    </motion.div>
                </div>


                {/* <!-- Home Indicator --> */}
                <div className="absolute w-2/5 h-[5px] rounded-full bg-white mx-auto inset-x-0 bottom-2"></div>
            </div>
        </div>
    </div>
}