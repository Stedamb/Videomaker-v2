import MovingTextSection from "./sections/MovingTextSection";
import LazyVideo from "./LazyVideo";

import { useState, useRef } from "react";

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const vidRef = useRef<HTMLVideoElement | null>(null);

    const playPauseVideo = () => {
        if (vidRef.current) {
            isPlaying ? vidRef.current.pause() : vidRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const handleVideoClick = () => {
        playPauseVideo();
    };

    return (
        <div>
            <div className="container-min h-[70vh] lg:h-[80vh] lazyload">
                <LazyVideo ref={vidRef}
                    className="cursor-hover play-pause"
                    src="/supernova.mp4"
                    poster="/supernova-poster.jpg"
                    onClick={handleVideoClick} />
            </div>
            <MovingTextSection></MovingTextSection>
        </div>
    );
};

export default Header;
