import React, { useState } from 'react';


const BookingForm = (props) => {

    const [occasion, setOccasion] = useState("");
    const [guests, setGuests] = useState("");
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    const handleChange = (e) => {
        e.preventDefault();
        props.dispatch(e);
    }


  return (
    <header>
      
    </header>
  )
}

export default BookingForm
props