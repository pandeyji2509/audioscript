"use client"

import { useState, useRef } from "react"
import "./AudioUploader.css"

function AudioUploader({ onAudioUpload, isLoading }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedFile) {
      onAudioUpload(selectedFile)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="audio-uploader">
      <div className="upload-area">
        <div className="upload-icon">📁</div>
        <h3>Upload Audio File</h3>
        <p>Drag and drop your audio file here or click to browse</p>
        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="audio/*" className="file-input" />
        <button type="button" onClick={handleUploadClick} className="select-file-btn">
          Select Audio File
        </button>
        {selectedFile && (
          <div className="selected-file">
            Selected: <span>{selectedFile.name}</span>
          </div>
        )}
      </div>
      <button type="submit" className="analyze-btn" disabled={!selectedFile || isLoading}>
        {isLoading ? "Analyzing..." : "Analyze Audio"}
      </button>
    </form>
  )
}

export default AudioUploader

