import {useState, useRef} from "react";

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const vidRef = useRef < HTMLVideoElement | null > (null);


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
        <div className="hero lazyload p-4">
            <video ref={vidRef}
                className="w-100 cursor-hover play-pause"
                autoPlay
                muted
                loop
                onClick={handleVideoClick}>
                <source src="/supernova.mp4" type="video/mp4"/>
                Sorry, your browser doesn't support videos.
            </video>
        </div>
    );
};

export default Header;
