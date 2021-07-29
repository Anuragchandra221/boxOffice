import React,{memo} from 'react'
import {Link,useLocation} from "react-router-dom"
function Nav() {
    const location = useLocation()
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
        <div className="d-flex align-items-center justify-content-center mb-3">
                {links.map(val =>
                    <button key={val.to} className="mx-2 button">
                        <Link to={val.to} style={
                            {
                                textDecoration: "none"
                                
                            }
                        } className={location.pathname===val.to?"active":"notActive"}>{val.text}</Link>
                    </button>
                )}
        </div>
    )
}

export default memo(Nav)
