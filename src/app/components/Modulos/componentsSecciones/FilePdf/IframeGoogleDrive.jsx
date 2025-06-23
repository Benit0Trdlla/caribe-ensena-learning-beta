'use client';

export default function IframeGoogleDrive({ src, onLoad, className }) {
  return (
    <iframe
      src={src}
      allow="fullscreen"
      loading="lazy"
      onLoad={onLoad}
      className={className}
    />
  );
}
