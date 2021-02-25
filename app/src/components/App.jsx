import React, { useState, useEffect } from 'react'
import Button from './generic/button/button'
import DropDown from './generic/dropdown/dropdown'
import {axiosInstance} from '../api/axios'
import {getCurrentLocation} from '../utils/geolocation'
import Timer from './generic/timer/timer'
import axios from 'axios'

const App = ({employee}) => {
  const [worker, setWorker] = useState({}); 
  const [workerRequestIn, setWorkerRequestIn] = useState({
    employeeId : '',
    workEntryIn : {
      coordinates : {
        latitude : 0.1,
        longitude : 0.1
      }
    }
  }); 
  const [workerRequestOut, setWorkerRequestOut] = useState({
    employeeId : '',
    workEntryOut : {
      coordinates : {
        latitude : 0.1,
        longitude : 0.1
      }
    }
  }); 

  useEffect(() => {
      setWorker(employee);
  },[])

  const checkInOut = () => {
    let checkInOut = 'clock-in';
    let data = {...workerRequestIn}
    if(worker.employee.workStatus == 'online')  {
      checkInOut = 'clock-out';
      data = {...workerRequestOut};
    }
    const location  = getCurrentLocation();
    data.employeeId = worker.employee.id;
    axiosInstance.post(`/work-entries/${checkInOut}`, data)
      .then(response => {
        setWorker(response.data);
      });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center rounded-full bg-bg dark:bg-bg-dark py-2 w-auto m-16">
        <Timer className='flex-1 text-center dark:text-white mx-3.5' dateIn={worker?.workEntryIn?.date} dateOut={worker?.workEntryOut?.date} workStatus={worker?.employee?.workStatus} ></Timer> 
        <div className="flex-1 flex justify-center items-center mx-3.5">
          {(worker?.employee?.workStatus == 'online') ? (
            <>
            <Button kind="tertiary" className='py-2 px-14 justify-self-center'>Pausar</Button>
            <Button kind="secondary" className='py-2 px-14 justify-self-center mx-4' onClick={checkInOut}>Salir</Button>
            </>
          ):
            <Button kind="primary" className='py-2 px-14 justify-self-center' onClick={checkInOut}>Entrar</Button>
          }
        </div>
        <span className='border-r border-gray-400 h-7'></span>
       <div className='flex-1 flex justify-center items-center min-w-max mx-3.5'>
        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
        <DropDown >{`${worker?.employee?.firstName} ${worker?.employee?.lastName}`}</DropDown>
      </div>
      </div>
    </div>
  )
}

export default App
