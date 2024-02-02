"use client"

import { X } from "@phosphor-icons/react";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)
    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const option = {
        width: "300",
        height: "250"
    }
    const Play = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoPlayer}
                    className="text-color-primary float-right bg-color-secondary px-3 mb-1">
                    <X size={20} />
                </button>
                <YouTube
                    videoId={youtubeId}
                    onReady={(event) => event.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Maybe this video is damaged or has been deleted. Sorry :(")}
                />
            </div>
        )
    }
    const ButtonOpenPlay = () => {
        return (
        <button
            onClick={handleVideoPlayer}
            className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all">
                Tonton Trailer
        </button>
        )
    }
    return isOpen ? <Play /> : <ButtonOpenPlay/>
}

export default VideoPlayer
