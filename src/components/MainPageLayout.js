import React from 'react'
import Nav from './Nav'
import Title from './Title'

function MainPageLayout({children}) {
    return (
        <div>
            <Title heading="BOX-OFFICE" subHeading="Search for Movies And Actors?" />
            <Nav/>
            {children}
        </div>
    )
}

export default MainPageLayout
