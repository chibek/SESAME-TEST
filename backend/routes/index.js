import express from 'express';
import axios from 'axios';

export const getWorkEntries =  () => {
  return axios.get(`${process.env.api_url}/work-entries`, {
  headers: {
    'Authorization': `Bearer ${process.env.token}`
  }
  }).then((res) => {
    if(res.status != 200) return "err"
    if(res.data) return res.data.data;
   
  })
  .catch((error) => {
    console.error('error')
  })
}

export const getWorkEntrie =  (id) => {
  return axios.get(`${process.env.api_url}/work-entries?id=${id}`, {
  headers: {
    'Authorization': `Bearer ${process.env.token}`
  }
  }).then((res) => {
    if(res.status != 200) return "err"
    if(res.data) return res.data.data;
   
  })
  .catch((error) => {
    console.error('error')
  })
}

export const postWorkEntrieClockIn =  (object) => {
  return axios.post(`${process.env.api_url}/work-entries/clock-in`,object,{
    headers: {
      'Authorization': `Bearer ${process.env.token}`
    }
  }).then((res) => {
    if(res.status != 200) return "err"
    if(res.data) return res.data.data;

  })
  .catch((error) => {
    console.error('error')
  })
}

export const postWorkEntrieClockOut =  (object) => {
  return axios.post(`${process.env.api_url}/work-entries/clock-out`,object,{
    headers: {
      'Authorization': `Bearer ${process.env.token}`
    }
  }).then((res) => {
    if(res.status != 200) return "err"
    if(res.data) return res.data.data;
   
  })
  .catch((error) => {
    console.error('error')
  })
}