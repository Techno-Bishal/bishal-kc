import React, { useState, useRef } from "react";
import { FaMusic, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showPrompt, setShowPrompt] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleUserChoice = (playMusic: boolean) => {
    setShowPrompt(false);
    if (playMusic && audioRef.current) {
      audioRef.current.play().catch((error) => console.error("Music play error:", error));
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);
    }
  };

  return (
    <>
      {showPrompt && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-purple-800 text-white p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-lg font-semibold">Would you like to play background music?🎧</h2>
            <p className="items-center">❤️🙏</p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => handleUserChoice(true)}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg"
              >
                Yes
              </button>
              <button
                onClick={() => handleUserChoice(false)}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 rounded-lg"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {!showPrompt && isPlaying && (
        <div className="fixed bottom-4 right-4 p-2 bg-purple-700 text-white rounded-full shadow-lg">
          <button
            onClick={handleToggleMute}
            className="flex items-center justify-center p-2 bg-purple-500 hover:bg-purple-600 rounded-full"
          >
            {isMuted ? <FaVolumeMute className="text-sm" /> : <FaVolumeUp className="text-sm" />}
          </button>
        </div>
      )}

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/music.mpeg" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};
