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
                    <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)} required >
                        <option value="">Select a Time</option>
                        {props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})}
                    </select>
                </div>
                <div>
                    <label htmlFor='book-guests'>Number of Guests:</label>
                    <input id='book-guests' min="1" value={guests} onChange={(e) => {setGuests(e.target.value)}} type={"number"} placeholder={0} max={10} required></input>
                </div>
                <div>
                    <label htmlFor='book-occasion'>Occasion:</label>
                    <select id='book-occasion' key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                        <option value="">Select Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Reunion</option>
                    </select>
                </div>
                <div className='btnReceive'>
                    <input aria-label='On Click' type={"submit"} value={"Book Table"}></input>
                </div>
            </fieldset>
        </form>
      </section>
    </header>
  )
}

export default BookingForm
props