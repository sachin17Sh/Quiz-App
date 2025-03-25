import { useEffect, useState } from "react";

export default function Timer({timeout, onTimeout}) {
    const [remainingTime, setRemainingTime] = useState(timeout)
    useEffect(()=>{
      console.log("Timout")
      const timer =   setTimeout(onTimeout, timeout);
      return () => {
        clearTimeout(timer)
      }
    },[ timeout,onTimeout])
    useEffect(()=>{
      console.log("Interval")
      const Interval =   setInterval(() => {
            setRemainingTime((prevRemainingTime)=> prevRemainingTime-100) 
        }, 100);
        return ()=>{
          clearInterval(Interval)
        }
    },[])

  return (
    <>
      <progress id="question-time"  max={timeout} value={remainingTime}/>
    </>
  )
}
