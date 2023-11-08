import React, { useReducer, useEffect} from 'react';
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';
import Header from './Header';

const Main = () => {
    const seededRandom = function(seed) {
        var m = 2**36 -31;
        var a = 186743;
        var s = seed % m;
        return function () {
            return(s = s * a % m) / m;
        };
    }

    const fetchAPI = function(date) {
        let result = [];
        let random = seededRandom(date.getDate())
    }

  return (
    <div>
      
    </div>
  )
}

export default Main
