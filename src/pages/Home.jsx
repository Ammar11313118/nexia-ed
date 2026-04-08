import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Channel from '../components/Channel';
import '../assets/styles.css'; // Add Tailwind styles if configured
import PFP from "../assets/source/pf-img.jpg";
import bluelock from "../assets/source/blue-lock.jpg";
import vinland from "../assets/source/Vinland.jpg";
import zentisu from "../assets/source/zenitsu.jpg";
import Haikyu from "../assets/source/haikyu.jpg";
import jjk from "../assets/source/JJK.jpg";
import naruto from "../assets/source/Naruto.jpg";
import avt1 from "../assets/source/avatar-1.jpg";
import avt2 from "../assets/source/Avatar-2.jpg";
import avt3 from "../assets/source/Avatar-3.jpg";
import avt4 from "../assets/source/avatar-4.jpg";


const Home = () => {
    const carouselRef = useRef(null);
    const rotationRef = useRef(0);
    
    const scrollToWork = () => {
        const workSection = document.getElementById('P-work');
        if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Rotate carousel to specific angle
    const rotateCarousel = (angle, smooth = false) => {
        if (carouselRef.current) {
            // Pause animation while rotating
            carouselRef.current.classList.add('paused');
            
            if (smooth) {
                carouselRef.current.classList.add('smooth');
            } else {
                carouselRef.current.classList.remove('smooth');
            }
            
            carouselRef.current.style.transform = `rotateY(${angle}deg)`;
            rotationRef.current = angle;
            
            // Resume animation after transition completes
            const transitionTime = smooth ? 800 : 100;
            setTimeout(() => {
                if (carouselRef.current) {
                    carouselRef.current.classList.remove('paused');
                    carouselRef.current.classList.remove('smooth');
                }
            }, transitionTime);
        }
    };

    // Add draggable functionality to carousel
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let isDragging = false;
        let startX = 0;
        let startRotation = 0;
        let isAnimating = false;

        const startDragging = (e) => {
            // Don't start dragging if carousel is animating from a search
            if (carousel.style.transition && carousel.style.transition.includes('0.8s')) {
                isAnimating = true;
                setTimeout(() => { isAnimating = false; }, 800);
                return;
            }
            isDragging = true;
            startX = e.type.startsWith('touch') ? e.touches[0].pageX : e.pageX;
            startRotation = rotationRef.current;
        };

        const stopDragging = () => {
            isDragging = false;
        };

        const drag = (e) => {
            if (!isDragging || isAnimating) return;

            const currentX = e.type.startsWith('touch') ? e.touches[0].pageX : e.pageX;
            const deltaX = currentX - startX;
            const rotationDelta = (deltaX / window.innerWidth) * 360;
            const newRotation = startRotation + rotationDelta;
            
            rotateCarousel(newRotation, false);
        };

        // Mouse events
        carousel.addEventListener('mousedown', startDragging);
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', stopDragging);

        // Touch events
        carousel.addEventListener('touchstart', startDragging);
        window.addEventListener('touchmove', drag);
        window.addEventListener('touchend', stopDragging);

        return () => {
            carousel.removeEventListener('mousedown', startDragging);
            window.removeEventListener('mousemove', drag);
            window.removeEventListener('mouseup', stopDragging);

            carousel.removeEventListener('touchstart', startDragging);
            window.removeEventListener('touchmove', drag);
            window.removeEventListener('touchend', stopDragging);
        };

    }, []);

    return (
        
        <div className='selection:bg-red-300'>
            <main id='main-1' className='mt-16'>
            <Header />
                <div className='BG-image bg-gray-200 justify-between flex flex-col sm:flex-row md:flex-row items-center justify-center min-h-screen px-2 md:px-8 py-8 md:py-0 gap-4 md:gap-0'>

                    <img className='img-chld border-4 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full m-2 md:m-4 shadow-lg border-gray-300 flex-shrink-0' src={PFP} alt="Description of the image" />

                    <div className='max-w-2xl ml-0 md:ml-8 mr-0 md:mr-8 p-4 md:p-6 bg-transparent rounded-lg shadow-md opacity-90 m-2 md:m-4'>

                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-red-700 mb-4'>Welcome to My Portfolio</h1>

                        <p className='text-lg md:text-xl font-semibold text-gray-600 mb-4'>Cinematic • Hype • Creative Edits</p>

                        <p className='text-base md:text-lg space-y-2 text-gray-600 mb-8'>
                            I create high-impact edits that blend energy, emotion, and cinematic storytelling.
                            From hype edit to smooth transitions — every frame is crafted to stand out.

                        </p>
                        <button onClick={scrollToWork} className='bg-red-700 text-white font-bold py-2 px-4 rounded button-hover text-sm md:text-base'>Explore My Work ↓</button>

                    </div>
                </div>

            </main>
            <main id='P-work' className='car bg-gray-100 justify-between flex flex-col items-center justify-center min-h-screen px-2 md:px-8 py-8 md:py-0'>

                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-red-700 mb-4 text-center'>My Work</h2>

                <p className='text-base md:text-lg text-gray-600 mb-8 text-center px-2'>Check out some of my latest projects and edits below.</p>


                <div className='carousel-container'>
                    <div className='carousel' ref={carouselRef}>

                        <div className='carousel-item bg-rose-700'>
                            <h1 className='text-xs md:text-sm flex justify-center font-bold text-white mb-1'>Blue Lock</h1>
                            <a href="https://www.youtube.com/shorts/SZGQKJXoMcs?feature=share">
                                <img className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-lg shadow-md' src={bluelock} alt="YouTube Video" />
                            </a>
                        </div>

                        <div className='carousel-item bg-rose-600'>
                            <h1 className='text-xs md:text-sm flex justify-center font-bold text-white mb-1'>Vinland Saga</h1>
                            <a href="https://www.youtube.com/shorts/JSLaCH0r0rU?feature=share">
                                <img className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-lg shadow-md' src={vinland} alt="YouTube Video" />
                            </a>
                        </div>

                        <div className='carousel-item bg-rose-500'>
                            <h1 className='text-xs md:text-sm flex justify-center font-bold text-white mb-1'>Demon Slayer</h1>
                            <a href="https://www.youtube.com/shorts/cqpmzIhiC0E?feature=share">
                                <img className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-[0.6em] shadow-md' src={zentisu} alt="YouTube Video" />
                            </a>
                        </div>

                        <div className='carousel-item bg-rose-400'>
                            <h1 className='text-xs md:text-sm flex justify-center font-bold text-white mb-1'>Haikyu</h1>
                            <a href="https://www.youtube.com/shorts/zMKkm8Fudpk?feature=share">
                                <img className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-lg shadow-md' src={Haikyu} alt="YouTube Video" />
                            </a>
                        </div>
                        <div className='carousel-item bg-rose-300'>
                            <h1 className='text-xs md:text-sm flex justify-center font-bold text-white mb-1'>Jujutsu Kaisen</h1>
                            <a href="https://www.youtube.com/shorts/3tHfH5XFFuo?feature=share">
                                <img className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-lg shadow-md' src={jjk} alt="YouTube Video" />
                            </a>
                        </div>
                        <div className='carousel-item bg-rose-200'>
                            <h1 className='text-xs md:text-sm flex justify-center font-bold text-white mb-1'>Naruto</h1>
                            <a href="https://www.youtube.com/shorts/elmfFE_1mrc?feature=share">
                                <img className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-lg shadow-md' src={naruto} alt="YouTube Video" />
                            </a>
                        </div>
                    </div>
                </div>
                <button onClick={scrollToWork} className='bg-red-700 mt-5 text-white font-bold py-2 px-4 rounded-[100px] button-hover text-sm md:text-base'>Explore My Work ↓</button>
            </main>
<main id='about' className='abt bg-gray-200 flex flex-col items-center justify-center min-h-screen px-2 md:px-8 py-12 md:py-0 gap-8'>
                <div className='flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-12'>
                    <div className='max-w-xl p-4 md:p-6 bg-transparent rounded-lg shadow-md opacity-90'>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-red-700 mb-4'>About Me</h1>

                        <p className='text-sm md:text-base lg:text-lg font-semibold text-gray-600 mb-4'>I'm Ammar, the creator behind Nexia — a video editor passionate about crafting cinematic and hype edits that capture attention and emotion. I love turning ordinary clips into visually powerful stories using creative transitions, sound design, and smooth effects. Beyond editing, I'm also interested in coding, AI, and graphic design, which helps me bring unique and modern ideas to my work. I'm constantly learning, experimenting with new styles, and pushing my creativity to the next level. My goal is simple — create edits that people don't just watch, but feel. 🚀✨</p>
                    </div>
                    <div className='relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex-shrink-0'>
                        <img className='w-full h-full object-cover rounded-full shadow-md' src={avt1} alt="Avatar 1" />
                        <img className='anim-img w-12 h-12 md:w-16 md:h-16 object-cover rounded-full shadow-md absolute top-0 right-0' src={avt2} alt="Avatar 2" />
                        <img className='anim-img w-10 h-10 md:w-14 md:h-14 object-cover rounded-full shadow-md absolute bottom-2 left-2' src={avt3} alt="Avatar 3" />
                        <img className='anim-img w-11 h-11 md:w-16 md:h-16 object-cover rounded-full shadow-md absolute bottom-0 right-4' src={avt4} alt="Avatar 4" />
                    </div>
                </div>


            </main>

            <Channel />
            <Footer onRotateCarousel={rotateCarousel} />
        </div>
    );
};

export default Home;