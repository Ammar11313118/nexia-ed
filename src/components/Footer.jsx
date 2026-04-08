import React, { useRef, useEffect } from 'react';


const Footer = ({ onRotateCarousel }) => {
    const carouselItems = useRef([]);

    useEffect(() => {
        // Update carousel items after the DOM is rendered
        carouselItems.current = Array.from(document.querySelectorAll('.carousel-item'));
    }, []);

    /* Updated handleSearch to bring the matched item to the front */
    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value.toLowerCase();

            if (!query.trim()) return;

            // Find matching carousel item
            const matchedItem = carouselItems.current.find((item) => {
                const title = item.querySelector('h1').textContent.toLowerCase();
                return title.includes(query);
            });

            if (matchedItem) {
                // Get the index of matched item
                const itemIndex = carouselItems.current.indexOf(matchedItem);
                // Calculate rotation angle (60 degrees per item for 6 items in 360 degrees)
                const rotationAngle = itemIndex * 60;
                
                // Scroll to carousel section
                const carouselSection = document.getElementById('P-work');
                if (carouselSection) {
                    carouselSection.scrollIntoView({ behavior: 'smooth' });
                }
                
                // Call parent's rotation function with smooth transition
                if (onRotateCarousel) {
                    onRotateCarousel(rotationAngle, true);
                }
                
                // Add highlight class
                matchedItem.classList.add('highlight');
                
                // Remove highlight after 4 seconds
                setTimeout(() => {
                    matchedItem.classList.remove('highlight');
                }, 4000);
                
                // Clear search input
                event.target.value = '';
            } else {
                alert('Video not found! Try: Blue Lock, Vinland Saga, Demon Slayer, Haikyu, Jujutsu Kaisen, or Naruto');
            }
        }
    };


    return (
        <footer className='md:m-2'>
            <div className='footer bg-gray-200 flex flex-col md:flex-row px-2 md:px-8 py-8 gap-6 md:gap-8'>
                {/* Top Section: Logo and Quick Links (visible first on mobile) */}
                <div className='flex flex-col md:flex-row gap-6 md:gap-8 w-full md:flex-1 order-1'>
                    <div className='site-title mt-0 md:mt-25 mb-0 md:mb-3 text-center md:text-left flex-1'>
                        <a href="#main-1"><h1 className='text-lg md:text-2xl text-blue-500 whitespace-nowrap'><span className='text-gray-600 mr-[-7px]'>〆</span> 𝗡Ξ𝗫𝗜𝗔 <span className='text-gray-600'>音久</span></h1></a>
                        <p className='text-gray-600 mt-2 text-xs md:text-sm'>Nexia Editz is a creative editing channel focused on hype, cinematic, and visually engaging edits.</p>
                    </div>
                    <div className='ft-div text-center md:text-left flex-1'>
                        <h1 className='text-sm md:text-base font-bold text-gray-800'>Quick Links</h1>
                        <ul className='ft-ul flex flex-wrap md:flex-col justify-center md:justify-start gap-2 md:gap-0'>
                            <li className='list-ft'><a href="#main-1" className='hover:text-blue-500 transition-colors'>Home</a></li>
                            <li className='list-ft'><a href="#P-work" className='hover:text-blue-500 transition-colors'>Project</a></li>
                            <li className='list-ft'><a href="#about" className='hover:text-blue-500 transition-colors'>About</a></li>
                            <li className='list-ft'><a href="#channel" className='hover:text-blue-500 transition-colors'>Channel</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Search (appears below on mobile) */}
                <div className='search-videos mt-0 md:mt-8 text-center md:text-left w-full md:flex-1 order-2 md:order-none'>
                    <h1 className='text-sm md:text-base font-bold text-gray-800 mb-2'>Search My Videos</h1>
                    <input
                        type='text'
                        placeholder='Search my videos...'
                        className='search-input border border-gray-300 rounded px-3 md:px-4 py-2 mb-4 w-full md:w-auto text-xs md:text-base'
                        onKeyDown={handleSearch}
                    />

                    <ul className='video-list mt-4 flex flex-col gap-2'>
                        <li className='video-item text-xs md:text-sm'><a href='https://youtu.be/YgE_aTWl3MY' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500 transition-colors'>Anime Amvs</a></li>
                        <li className='video-item text-xs md:text-sm'><a href='https://www.youtube.com/watch?v=video2' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500 transition-colors'>Twixtor Clips</a></li>
                        <li className='video-item text-xs md:text-sm'><a href='https://youtu.be/cCFqkYjLKSg' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500 transition-colors'>Colour Grading Clips</a></li>
                    </ul>
                </div>

            </div>
            <p className='text-ft text-xs md:text-sm px-2 md:px-8 py-4 text-center md:m-2'>&copy; 2026 My Portfolio. All rights reserved.</p>
        </footer>

    );
};

export default Footer;