'use client'
import { useState, useEffect, useRef } from 'react';
import './VideoIntro.css';

const VideoIntro = ({ children }) => {
  const [showVideo, setShowVideo] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Reproducir el video cuando el componente se monta
  useEffect(() => {
    if (showVideo && videoRef.current) {
      const playVideo = async () => {
        try {
          await videoRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          console.error("Error al reproducir el video:", error);
          setShowVideo(false);
        }
      };

      playVideo();
    }
  }, [showVideo]);

  const skipIntro = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowVideo(false);
  };

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <div>
      {showVideo ? (
        <div className="video-intro-container">
          <video
            ref={videoRef}
            className="fullscreen-video"
            autoPlay
            muted
            onEnded={handleVideoEnd}
            playsInline
            preload='auto'
          >
            {/* Video por defecto (pantallas grandes) */}
            <source
              src="/VideoIntroSrc/org.mp4"
              type="video/mp4"
              media="(min-width: 821px)"
            />

            {/* Video para móviles (pantallas pequeñas) */}
            <source
              src="/VideoIntroSrc/org-new_1.mp4"
              type="video/mp4"
              media="(max-width: 820px)"
            />
          </video>

          <div className="video-controls">
            <button onClick={skipIntro} className="skip-button">
              Saltar Intro
            </button>
          </div>

          {/* {!isPlaying && (
            <div className="loading-overlay">
              <div className="spinner"></div>
              <p>Cargando video introductorio...</p>
            </div>
          )} */}
        </div>
      ) : (
        <div className="main-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default VideoIntro;