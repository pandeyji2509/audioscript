"use client"

import { useState } from "react"
import "./ResponseDisplay.css"

function ResponseDisplay({ response, isLoading }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioElement, setAudioElement] = useState(null)

  const togglePlayback = () => {
    if (!audioElement) {
      const audio = new Audio(response.audioUrl)
      audio.addEventListener("ended", () => setIsPlaying(false))
      setAudioElement(audio)
      audio.play()
      setIsPlaying(true)
    } else {
      if (isPlaying) {
        audioElement.pause()
      } else {
        audioElement.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="response-display">
      <div className="response-header">
        <h2>Analysis Results</h2>
        <button onClick={togglePlayback} disabled={isLoading} className="playback-btn">
          {isPlaying ? "⏸ Pause Audio" : "▶ Play Audio"}
        </button>
      </div>
      <div className="response-content">
        <div className="response-item">
          <h3>File Name</h3>
          <p>{response.audioName}</p>
        </div>
        <div className="response-item">
          <h3>Timestamp</h3>
          <p>{response.timestamp}</p>
        </div>
        <div className="response-item">
          <h3>Analysis</h3>
          <p>{response.analysis}</p>
        </div>
        <div className="response-item">
          <h3>Audio Player</h3>
          <audio
            controls
            src={response.audioUrl}
            className="audio-player"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default ResponseDisplay

