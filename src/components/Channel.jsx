import React from "react";
import pfp from "../assets/source/channel-pfp.jpg"


const Channel = () => {
    return (
        <div id="channel" className="channel-container bg-gray-100 grid md:grid-cols-3 grid-cols-2 gap-4 md:gap-8 px-4 md:px-8 py-8 md:py-0 min-h-screen w-full auto-rows-max md:auto-rows-fr">
            
            {/* Mobile wrapper: Image and Stats side by side - col 1 and 2 */}
            <div className="md:hidden col-span-1 flex justify-center items-start">
                {/* Image on mobile */}
                <a href="https://www.youtube.com/@nexia-editz" target="_blank" rel="noopener noreferrer">
                    <img className="w-[100%] h-[100%] object-cover rounded-full border-4 border-gray-300 shadow-md" src={pfp} alt="YouTube Channel" />
                </a>
            </div>
            
            <div className="md:hidden col-span-1 flex justify-center items-start overflow-hidden">
                {/* Stats on mobile */}
                <div className="subs flex justify-center">
                    <iframe
                        className="live"
                        title="Live Subscriber Count"
                        height="10"
                        width="10"
                        src="https://livecounts.io/embed/youtube-live-subscriber-counter/UCUfBabBVYldrEquoqbExRAQ"
                        style={{ border: 0, width: '100%', maxWidth: '286px', height: '160px' }}
                    >
                    </iframe>
                </div>
            </div>
            
            {/* Stats - Left on desktop only - col 1 */}
            <div className="hidden md:flex col-span-1 justify-center items-center">
                <div className="subs flex justify-center w-full">
                    <iframe
                        className="live"
                        title="Live Subscriber Count"
                        height="10"
                        width="300"
                        src="https://livecounts.io/embed/youtube-live-subscriber-counter/UCUfBabBVYldrEquoqbExRAQ"
                        style={{ border: 0, width:'100%', maxWidth: '300px', height: '180px' }}
                    >
                    </iframe>
                </div>
            </div>

            {/* Image - Middle on desktop only - col 2 */}
            <div className="hidden lg:w-[100%] md:w-[17em] md:h-[14em] md:flex col-span-1 justify-center items-center">
                <a href="https://www.youtube.com/@nexia-editz" target="_blank" rel="noopener noreferrer">
                    <img className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-gray-300 shadow-md" src={pfp} alt="YouTube Channel" />
                </a>
            </div>

            {/* Paragraph - Right on larger devices (col 3), full width below on 768px-999px */}
            <div className="channel-content bg-white p-3 md:p-6 rounded-lg shadow-md col-span-2 md:col-span-3 lg:col-span-1 1000:col-span-1 flex flex-col justify-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-700 mb-3 md:mb-4 text-center md:text-left">My Channel</h1>
                <p className="text-xs md:text-sm lg:text-base text-gray-600 mb-6 md:mb-8 text-center md:text-left">Subscribe to my YouTube channel for more amazing content and updates on my latest projects.</p>
                <a href="https://www.youtube.com/@nexia-editz" className="bg-red-700 text-white font-bold py-2 px-4 rounded button-hover inline-block w-full text-center text-xs md:text-sm lg:text-base">Visit My YouTube Channel</a>
            </div>
        </div>
    );
};


export default Channel;