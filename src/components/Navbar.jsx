import React from 'react'

const Navbar = () => {
    const today = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March','April','May','June','July','August','September','October','November','December']
    const currentDayOfWeek = daysOfWeek[today.getDay()];
    const currentMonthOfYear = monthsOfYear[today.getMonth()];
    let date = currentDayOfWeek + ', ' + currentMonthOfYear + ' ' + today.getDate() + ', ' + today.getFullYear();

  return (
    <nav className="nav">
        <div className='logo'>
            <img className='logo-img' src="/logo.svg" ></img>
            <span>My Notes</span>
        </div>
        <div className='user'>
          <div><img className='user-pic' src='/user-profile.jpg'></img></div>
          <div className='date'>
              <span className='title'>Welcome, Scott!</span>
              <span>{date}</span>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
