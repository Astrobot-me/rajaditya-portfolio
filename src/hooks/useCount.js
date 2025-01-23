import { useCallback, useEffect, useState } from "react";


export default function TimerCountdown({targetDate}) {
  const [time, setTime] = useState({});

  const calculateTimeLeft = () => {
    const difference = Date.parse(targetDate) - Date.now();
   
    //Jan 26 2025 16:00:00 GMT+0530
    // target date format


    // console.log(`Differece : ${typeof targetDate} ${difference}`);

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  

  useEffect(() => {
    
    setInterval(()=>{
      
      const timeObject  = calculateTimeLeft();
      setTime(timeObject)
    },1000) 
    
  }, []);

  
  return time
}
