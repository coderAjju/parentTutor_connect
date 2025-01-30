import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const generateTimeOptions = () => {
  let options = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      let formattedHour = hour % 12 === 0 ? 12 : hour % 12;
      let amPm = hour < 12 ? "AM" : "PM";
      let formattedTime = `${formattedHour}:${minute
        .toString()
        .padStart(2, "0")} ${amPm}`;
      options.push({ value: formattedTime, label: formattedTime });
    }
  }
  return options;
};

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  return (
    <div className="flex flex-col mt-6 items-center justify-center p-5  rounded-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-200 mb-4">
        Select Date & Time
      </h2>

      {/* Date Picker */}
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="dd/mm/yyyy"
        className="px-4 py-2 w-full rounded-md shadow-md focus:outline-none mb-4"
        calendarClassName="bg-white rounded-md shadow-lg p-2"
      />

      {/* Time Picker */}
      <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-lg max-w-md mx-auto">
        <h2 className="text-xl font-semibold text-gray-200 mb-4">
          Select a Time
        </h2>

        <Select
          options={generateTimeOptions()}
          onChange={(option) => setSelectedTime(option.value)}
          placeholder="Choose Time"
          className="w- text-gray-900"
        />

        {selectedTime && (
          <p className="mt-4 text-gray-300">
            Selected Time: <span className="font-bold">{selectedTime}</span>
          </p>
        )}
      </div>

      <button className="btn btn-primary">Book Appointment</button>
    </div>
  );
};

export default DateTimePicker;
