import React from 'react'
import AppointMent from './AppointMent/AppointMent'
import NavBar from '../Shared/NavBar/NavBar'
import Banner from './Banner/Banner'
import Doctors from './Doctors/Doctors'
import Services from './Services/Services'

const Home = () => {
    return (
        <div>
            {/* <h2>In the name of Allah - home</h2> */}
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <AppointMent></AppointMent>
            <Doctors></Doctors>
        </div>
    )
}

export default Home
