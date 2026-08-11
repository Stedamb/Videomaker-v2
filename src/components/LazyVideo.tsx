import { forwardRef, useEffect, useRef, type VideoHTMLAttributes } from 'react';

interface LazyVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
}

const LazyVideo = forwardRef<HTMLVideoElement, LazyVideoProps>(
    ({ src, poster, ...rest }, forwardedRef) => {
        const videoRef = useRef<HTMLVideoElement | null>(null);
        const webmSrc = src.replace(/\.mp4$/i, '.webm');

        useEffect(() => {
            const video = videoRef.current;
            if (!video) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        video.play().catch(() => {});
                    } else {
                        video.pause();
                    }
                },
                { threshold: 0.25 }
            );

            observer.observe(video);
            return () => observer.disconnect();
        }, []);

        return (
            <video
                ref={(node) => {
                    videoRef.current = node;
                    if (typeof forwardedRef === 'function') forwardedRef(node);
                    else if (forwardedRef) forwardedRef.current = node;
                }}
                muted
                loop
                playsInline
                preload="none"
                poster={poster}
                {...rest}
            >
                {webmSrc !== src && <source src={webmSrc} type="video/webm" />}
                <source src={src} type="video/mp4" />
                Sorry, your browser doesn't support videos.
            </video>
        );
    }
);

LazyVideo.displayName = 'LazyVideo';

export default LazyVideo;
