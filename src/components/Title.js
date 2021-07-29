import React,{memo} from 'react'

function Title({heading, subHeading}) {
    console.log("rendered")
    return (
        <div className="d-flex align-items-center mb-2" style={
            {
                flexDirection: "column"
            }
        }>
            <h1 style={
                {
                    color: "rgb(8, 10, 149)"
                }
            }>{heading}</h1>
            <p>{subHeading}</p>
        </div>
    )
}

export default memo(Title)
