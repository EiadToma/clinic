import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getAppointments } from '../../redux/Secertaria';
import { SelectedDate } from '../../redux/Secertaria';
const Calendar = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [calendarDays, setCalendarDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

const dispatch = useDispatch()

  useEffect(() => {
    generateCalendar(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  const generateCalendar = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calendarArray = [];

    // Create headers for the days of the week
    daysOfWeek.forEach((day) => {
      calendarArray.push({ day, type: 'header' });
    });

    // Create empty boxes for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarArray.push({ day: null, type: 'empty' });
    }

    // Create boxes for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      calendarArray.push({ day, type: 'date' });
    }

    setCalendarDays(calendarArray);
  };


  const handlePrevMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;

    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleDateClick = (day) => {
    setSelectedDate(new Date(currentYear, currentMonth, day).getDate());
    dispatch(SelectedDate({year:currentYear,month:currentMonth,day:day}))
    dispatch(getAppointments({day:day,month:currentMonth,year:currentYear}))
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className=" flex h-screen">
      <div className="w-full mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
            <button onClick={handlePrevMonth} className="text-white">
              Previous
            </button>
            <h2 className="text-white">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
            <button onClick={handleNextMonth} className="text-white">
              Next
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 p-4">
            {calendarDays.map((item, index) => (
              <div
                key={index}
                className={`text-center py-2 border cursor-pointer ${item.type === 'date' && selectedDate === item.day ? 'bg-blue-500 text-white' : ''
                  }`}
                onClick={item.type === 'date' ? () => handleDateClick(item.day) : null}
              >
                {item.day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
