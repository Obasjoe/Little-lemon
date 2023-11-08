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
      <section>
        <form onSubmit={handleSubmit}>
            <fieldset className='formField'>
                <div>
                    <label htmlFor='book-date'>Pick Date:</label>
                    <input id='book-date' value={date} onChange={(e) => handleChange(e.target.value)} type='date' required />
                </div>
                <div>
                    <label htmlFor='book-time'>Pick a Time:</label>
                    <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required />
                        <option value="">Select a Time</option>
                        {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                </div>
            </fieldset>
        </form>
      </section>
    </header>
  )
}

export default BookingForm
props