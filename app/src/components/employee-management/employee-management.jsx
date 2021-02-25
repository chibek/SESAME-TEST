import React, { useState, useEffect } from 'react'
import {axiosInstance} from '../../api/axios'
import SesameBar from '../sesame-bar/sesame-bar'

const EmployeeManagement = () => {
    const [workers, setWorkers] = useState({}); 
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get(`/work-entries`)
         .then((response) => {
           setWorkers(response.data[0]);
           setLoading(false);
         });
       },[])

       if (isLoading) return <div>Loading...</div>;
       return (
        <div className="w-screen h-screen dark:bg-gray-500 bg-screen">
            <SesameBar employee={workers} />
        </div>
       )
}

export default EmployeeManagement;