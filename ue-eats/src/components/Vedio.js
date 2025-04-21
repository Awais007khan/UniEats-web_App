// import React, { useRef, useState } from 'react';
// import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaExpand } from 'react-icons/fa';
// import vedio from '../components/Images/vedio.mp4'

// function Video() {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const [progress, setProgress] = useState(0);

//   const togglePlay = () => {
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   const toggleMute = () => {
//     videoRef.current.muted = !videoRef.current.muted;
//     setIsMuted(videoRef.current.muted);
//   };

//   const handleProgress = () => {
//     const duration = videoRef.current.duration;
//     const currentTime = videoRef.current.currentTime;
//     setProgress((currentTime / duration) * 100);
//   };

//   const handleFullscreen = () => {
//     if (videoRef.current.requestFullscreen) {
//       videoRef.current.requestFullscreen();
//     } else if (videoRef.current.webkitRequestFullscreen) {
//       videoRef.current.webkitRequestFullscreen();
//     }
//   };

//   return (
//     <section className="relative py-16 md:py-24 bg-black">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
//             Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Story</span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
//             Experience the journey behind our passion through this immersive video showcase
//           </p>
//         </div>

//         {/* Video Container */}
//         <div className="relative group rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-purple-500/30">
//           {/* Video Element */}
//           <video
//             ref={videoRef}
//             className="w-full h-auto max-h-[80vh] object-cover"
//             poster="https://via.placeholder.com/1920x1080" // Replace with your thumbnail
//             onTimeUpdate={handleProgress}
//             onClick={togglePlay}
//             muted={isMuted}
//             loop
//           >
//             <source src="your-video-file.mp4" type="video/mp4" />
//             <source src="your-video-file.webm" type="video/webm" />
//             Your browser does not support the video tag.
//           </video>

//           {/* Video Controls */}
//           <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
//             {/* Top Controls */}
//             <div className="flex justify-end">
//               <button 
//                 onClick={handleFullscreen}
//                 className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
//               >
//                 <FaExpand className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Bottom Controls */}
//             <div className="flex flex-col">
//               {/* Progress Bar */}
//               <div className="w-full bg-gray-600 rounded-full h-1.5 mb-3">
//                 <div 
//                   className="bg-blue-500 h-1.5 rounded-full" 
//                   style={{ width: `${progress}%` }}
//                 ></div>
//               </div>

//               <div className="flex items-center justify-between">
//                 <div className="flex items-center space-x-4">
//                   <button 
//                     onClick={togglePlay}
//                     className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
//                   >
//                     {isPlaying ? <FaPause className="w-5 h-5" /> : <FaPlay className="w-5 h-5" />}
//                   </button>
//                   <button 
//                     onClick={toggleMute}
//                     className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
//                   >
//                     {isMuted ? <FaVolumeMute className="w-5 h-5" /> : <FaVolumeUp className="w-5 h-5" />}
//                   </button>
//                 </div>
//                 <span className="text-white text-sm font-medium">
//                   {Math.floor(videoRef.current?.currentTime || 0)}s / {Math.floor(videoRef.current?.duration || 0)}s
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Play Button Overlay */}
//           {!isPlaying && (
//             <div className="absolute inset-0 flex items-center justify-center">
//               <button 
//                 onClick={togglePlay}
//                 className="p-6 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
//               >
//                 <div className="relative">
//                   <FaPlay className="w-12 h-12 text-white" />
//                   <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 </div>
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-12">
//           <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
//             Explore More
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Video;
import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaExpand } from 'react-icons/fa';
import videoFile from '../components/Images/vedio.mp4';
import videoPoster from '../components/Images/newpic.jpg'; // Add a poster image

function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Format time (seconds to MM:SS)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleProgress = () => {
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    setCurrentTime(currentTime);
    setProgress((currentTime / duration) * 100);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const handleSeek = (e) => {
    const rect = e.target.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!videoRef.current) return;
      
      switch (e.key) {
        case ' ':
          togglePlay();
          break;
        case 'm':
          toggleMute();
          break;
        case 'f':
          handleFullscreen();
          break;
        case 'ArrowRight':
          videoRef.current.currentTime += 5;
          break;
        case 'ArrowLeft':
          videoRef.current.currentTime -= 5;
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Story</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the journey behind our passion through this immersive video showcase
          </p>
        </div>

        {/* Video Container */}
        <div 
          className="relative group rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-purple-500/30"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full h-auto max-h-[80vh] object-cover cursor-pointer"
            poster={videoPoster}
            onTimeUpdate={handleProgress}
            onClick={togglePlay}
            onLoadedMetadata={handleLoadedMetadata}
            muted={isMuted}
            loop
          >
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Controls */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-between p-4 transition-opacity duration-300 ${isHovered || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
            {/* Top Controls */}
            <div className="flex justify-end">
              <button 
                onClick={handleFullscreen}
                className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Fullscreen"
              >
                <FaExpand className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Controls */}
            <div className="flex flex-col">
              {/* Progress Bar */}
              <div 
                className="w-full bg-gray-600 rounded-full h-1.5 mb-3 cursor-pointer"
                onClick={handleSeek}
              >
                <div 
                  className="bg-gradient-to-r from-blue-400 to-purple-500 h-1.5 rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={togglePlay}
                    className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <FaPause className="w-5 h-5" /> : <FaPlay className="w-5 h-5" />}
                  </button>
                  <button 
                    onClick={toggleMute}
                    className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <FaVolumeMute className="w-5 h-5" /> : <FaVolumeUp className="w-5 h-5" />}
                  </button>
                  <span className="text-white text-sm font-medium">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={togglePlay}
                className="p-6 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group"
                aria-label="Play"
              >
                <div className="relative">
                  <FaPlay className="w-12 h-12 text-white transform group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Video;