import React from 'react'
import {Link} from "react-router-dom"
function Nav() {

    const links = [
        {
            to:"/",
            text: "HOME"
        },
        {
            to:"/starred",
            text: "STARRED"
        }
    ]

    return (
        <div>
            <ul>
                {links.map(val =>
                    <li key={val.to}>
                        <Link  to={val.to}>{val.text}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Nav
