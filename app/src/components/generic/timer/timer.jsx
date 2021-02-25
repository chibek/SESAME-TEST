import React, { useState, useEffect } from "react";
import moment from 'moment';

const Timer = ({ dateIn, dateOut, workStatus, className }) => {
  const classNames = [className,'justify-self-center'];
  className = classNames.join(' ');

  const [currentDate, setCurrentDate] = useState(new Date());
  const [oldDate, setOldDate] = useState(new Date(dateOut));
  const [workerStatus, setWorkerStatus] = useState(workStatus);

  const [secondsDiff, setSecondsDiff] = useState();
  const [minutesDiff, setMinutesDiff] = useState();
  const [hoursDiff, setHoursDiff] = useState();
  const [minutesDiffTotal, setMinutesDiffTotal] = useState();
  const [secondsDiffTotal, setSecondsDiffTotal] = useState();
  const [hoursDiffTotal, setHoursDiffTotal] = useState();
  
  function pad(num) {
    return ("0"+num).slice(-2);
}

  useEffect(() => {
      const timeoutId = setTimeout(() => {
        setCurrentDate(new Date());
      }, 1000);
    return () => clearTimeout(timeoutId);
  }, [currentDate]);

  useEffect(() => {
    setWorkerStatus(workStatus);
    return () => workerStatus;
  }, [workStatus]);

  useEffect(() => {
      //Current Time
      const diffCurrentDate = moment(currentDate).diff(moment(dateIn));
      const diffDurationCurrentDate = moment.duration(diffCurrentDate);
      setSecondsDiff(pad(diffDurationCurrentDate.seconds()));
      setMinutesDiff(pad(diffDurationCurrentDate.minutes()));
      setHoursDiff(pad(diffDurationCurrentDate.hours()));
      //Time worked
      if(dateOut){
        const diffTotal = moment(dateOut).diff(moment(dateIn));
        const diffDurationTotal = moment.duration(diffTotal);
        setSecondsDiffTotal(pad(diffDurationTotal.seconds()));
        setMinutesDiffTotal(pad(diffDurationTotal.minutes()));
        setHoursDiffTotal(pad(diffDurationTotal.hours()));
      }
  }, [currentDate, dateIn, dateOut]);

  return (
      <div className={className}>
        {dateOut ? (
        <span>{hoursDiffTotal}:{minutesDiffTotal}:{secondsDiffTotal}</span>
      ) : (
        <>
        <span>{hoursDiff}:{minutesDiff}:{secondsDiff}</span>
        <span className='text-gray-400'> / {hoursDiffTotal}:{minutesDiffTotal}:{secondsDiffTotal}</span>
        </>
      )}
      </div>
  );
};

export default Timer;