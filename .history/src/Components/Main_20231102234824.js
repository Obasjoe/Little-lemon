import React, { useReducer } from 'react';
import { Routes, Route, useNavigate, Router } from 'react-router-dom';
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
        let random = seededRandom(date.getDate());

        for(let i = 17; i <= 23; i++) {
            if(random() < 0.5) {
                result.push(i + ':00');
            }
            if(random() < 0.5) {
                result.push(i + ':30');
            }
        }
        return result;
    };
    const submitAPI = function(formData) {
        return true;
    };

    const initialState = {availableTimes: fetchAPI(new Date())}
    const [state, dispatch] = useReducer(updateTimes, initialState);

    function updateTimes(state, date) {
        return {availableTimes: fetchAPI(new Date(date))}
    }

    const navigate = <Router>useNavigate();</Router>
    function submitForm (formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
    }
  return (
    <main>
        <Routes>
            <Route path='/' element={<Header />} />
            <Route path='/booking' element={<Booking availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
            <Route path='/confirmed' element={<ConfirmedBooking />} />
        </Routes>
    </main>
  )
}

export default Main
