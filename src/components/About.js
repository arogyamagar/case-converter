import React from 'react'

export default function About(props) {
  return (
    <div className='container' style={{backgroundColor: props.mode==="dark"?"black":"white",color: props.mode==="dark"?"white":"black"}}>
        <h1 className='my-3'>About us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button style={{backgroundColor: props.mode==="dark"?"black":"white",color: props.mode==="dark"?"white":"black"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div style={{backgroundColor: props.mode==="dark"?"black":"white",color: props.mode==="dark"?"white":"black"}} className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempora, eaque asperiores sint veritatis laboriosam nobis illo sapiente saepe ullam nisi perferendis fugit id illum, optio porro consequuntur aliquam reprehenderit!
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button style={{backgroundColor: props.mode==="dark"?"black":"white",color: props.mode==="dark"?"white":"black"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to Use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div style={{backgroundColor: props.mode==="dark"?"black":"white",color: props.mode==="dark"?"white":"black"}} className="accordion-body">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, eius quo consequuntur officiis earum natus aspernatur reiciendis quia excepturi nesciunt, dignissimos doloremque porro quis itaque deserunt. Delectus expedita iure suscipit.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button style={{backgroundColor: props.mode==="dark"?"black":"white",color: props.mode==="dark"?"white":"black"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible</strong>    
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div style={{backgroundColor: props.mode==="dark"?"black":"white",color: props.mode==="dark"?"white":"black"}} className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus voluptate sit accusantium beatae aliquid praesentium cupiditate labore perspiciatis, vel officiis sapiente corporis recusandae, temporibus maxime voluptates vero optio consequuntur non!    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
