import React from 'react'
import NavBar from '../../components/Common/NavBar'
import Contact from '../../components/Common/Contact'
import Footer from '../../components/Common/Footer'

function Temp ()
{
    return (
        <div>
            <NavBar />

            <form>
                Username:
                <br />
                <input type="text" name="username" />
                <br />
                Email id:<br />
                <input type="text" name="email_id" />
                <br />
                Name:<br />
                <input type="text" name="name" />
                <br />
                Key:<br />
                <input type="text" name="key" />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <Contact />
            <Footer />
        </div>
    )
}

export default Temp