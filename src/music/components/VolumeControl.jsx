import { useEffect, useRef } from "react";
import { FaVolumeMute, FaVolumeOff } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setVolume } from "../../store/play/playSlice";

export const VolumeControl = () => {

    
    const dispatch = useDispatch();
  const volume = useSelector(state => state.play.volume);
  const audioRef = useRef();
  const volumeRef = useRef(1);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.volume = volumeRef.current;
    }
  }, [volume]);

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value / 100;
    volumeRef.current = newVolume;
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    dispatch(setVolume(newVolume));
  };

  return (
    <div className="flex justify-center gap-x-2 text-white">
      <button className="opacity-70 hover:opacity-100 transition" onClick={() => handleVolumeChange({ target: { value: volume < 0.1 ? volumeRef.current * 100 : 0 } })}>
        {volume < 0.1 ? <FaVolumeMute /> : <FaVolumeOff />}
      </button>
      <input
        type="range"
        className='range'
        value={volume * 100}
        max={100}
        min={0}
        onChange={handleVolumeChange}
      />
      <audio ref={audioRef} />
    </div>
  );
};