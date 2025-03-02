"use client"

import { useState } from "react"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import AudioUploader from "./components/AudioUploader"
import ResponseDisplay from "./components/ResponseDisplay";
import "./App.css"

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [responses, setResponses] = useState([])
  const [currentResponse, setCurrentResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAudioAnalysis = async (audioFile) => {
    setIsLoading(true)
    try {
      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Create a URL for the audio file
      const audioUrl = URL.createObjectURL(audioFile)

      // Simulate a response from the API
      const newResponse = {
        id: Date.now().toString(),
        timestamp: new Date().toLocaleString(),
        audioName: audioFile.name,
        analysis: `Analysis of "${audioFile.name}": This audio appears to be ${Math.random() > 0.5 ? "a human voice speaking clearly" : "background noise with some speech"}. The audio quality is ${Math.random() > 0.5 ? "good" : "moderate"} with ${Math.random() > 0.7 ? "no" : "some"} background noise. The content seems to be about ${["technology", "nature", "education", "business"][Math.floor(Math.random() * 4)]}.`,
        audioUrl,
      }

      setCurrentResponse(newResponse)
      setResponses((prev) => [newResponse, ...prev])
    } catch (error) {
      console.error("Error analyzing audio:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const viewPreviousResponse = (response) => {
    setCurrentResponse(response)
  }

    return (
      <div className="app">
        <Header toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Sidebar
            isOpen={sidebarOpen}
            responses={responses}
            onResponseClick={viewPreviousResponse}
            currentResponseId={currentResponse?.id}
          />
          <main style={{ 
            width: sidebarOpen ? 'calc(100% - 300px)' : '100%',
            marginLeft: sidebarOpen ? '300px' : '0',
            transition: 'margin-left 0.3s ease'
          }}>
            <div className="content">
            <div className="upload-section">
              <h2>Upload Audio</h2>
              <AudioUploader onAudioUpload={handleAudioAnalysis} isLoading={isLoading} />
            </div>
            {currentResponse && <ResponseDisplay response={currentResponse} isLoading={isLoading} />}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

