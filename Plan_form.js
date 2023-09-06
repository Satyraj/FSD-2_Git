import React from 'react'
import './form.css'
function Plan_form() {
  return (
    <div className='mydiv'>
        
        <div className='screen-header'>
        <div className='screen-title'>Build Your Own Trip</div>
        <div className='screen-caption'>Create your travel itinerary. Book your accommodation, tours & flights as a package online</div>
       <div className='container'>
        <form id="form">
        {/* <div className='screen-title'> Have question or comment ?</div> */}

            <input class="inputField" type="text" id="name" placeholder="Where do you want to go ?"/>
           
          <div className='one'>Enter start date
            <input class="inputField" type="date" id="email" placeholder="Enter Date "/>
            <img src="https://i.ibb.co/MfwB0sz/a3.png" alt="a3" border="0" />

            Enter end date<input class="inputField" type="date" id="email" placeholder="Enter Date " />
            </div>
            <input class="inputField" type="number" id="phone" placeholder="Number of traveller "/>
         
            <div class="dropdown">
        <button class="dropdown-toggle menu-item">
            <span class="item-icon">
          <img src="https://i.ibb.co/w4x6xpn/hotel.png" alt="hotel" className='logo_img' border="0"/>
            </span>
            <span class="item-txt">
                Choose Hotel 
            </span>
        </button>
        <ul class="dropdown-menu">
          <li class="menu-item">
            <span class="item-icon">
            <img src="https://i.ibb.co/xGR6FNt/star-icon.png" alt="star-icon" border="0" className='star_img'/>
            <img src="https://i.ibb.co/xGR6FNt/star-icon.png" alt="star-icon" border="0" className='star_img'/>
            <img src="https://i.ibb.co/xGR6FNt/star-icon.png" alt="star-icon" border="0" className='star_img'/>
            {/* <img src="https://i.ibb.co/xGR6FNt/star-icon.png" alt="star-icon" border="0" className='star_img'/> */}

            </span>
            <span class="item-txt">
                4 star Hotel
            </span>
        </li>
          <li class="menu-item">
            <span class="item-icon">
                <i class='bx bx-log-out'></i>
            </span>
            <span class="item-txt">
            3 star Hotel
               
            </span>
        </li>
          <li class="menu-item">
            <span class="item-icon">
                <i class='bx bx-cog' ></i>
            </span>
            <span class="item-txt">
                2 star Hotel
                
            </span>
        </li>
        </ul>
      </div>
<br></br>
            <button type="submit" id="send" className='form_btn form_button'>Book</button>
       

    

        </form>

        </div>
        </div>
    </div>
  )
}

export default Plan_form