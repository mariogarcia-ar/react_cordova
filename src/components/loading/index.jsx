import axios from "axios";
import './styles.css';
import { useState } from 'react';

function Loading() {
  const [isLoading, setIsLoading] = useState(false)

  // Add a request interceptor
  axios.interceptors.request.use(function (config) {
      // Do something before request is sent
      setIsLoading(true);
      return config;
    }, function (error) {
      setIsLoading(false);
      // Do something with request error
      return Promise.reject(error);
    });

  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      setIsLoading(false);
      return response;
  }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      setIsLoading(false);
      return Promise.reject(error);
  });

  return (
    <>
    {isLoading && 
      <div id="backdrop">
      <div className="text-center loading">
          <div className="spinner-border" role="status">
              <span className="sr-only"></span>
          </div>
      </div>
      </div>
    }
    </>
    
  )
}

export default Loading
