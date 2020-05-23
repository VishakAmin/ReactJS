import React from 'react'
import Heading from '../Reusable/Heading'


export default function Contact() {
    return (
        <section className = "py-3">
            <Heading title = "Contact Us"/>
            <div className="col-10 col-sm-8 mx-auto">
                <form action ="https://formspree.io/aminvishak@example.com" method = "POST">
                    <div className ="form-group">
                        <input type="text" 
                        name="name"
                         id="name"
                        placeholder="name" 
                        className = "form-control" 
                        />
                    </div>
                    <div className ="form-group">
                        <input 
                        type="email" 
                        name="email "
                         id="email"
                        placeholder="You Email" 
                        className = "form-control" />
                    </div>
                    <div className ="form-group">
                        <input 
                        type="test" 
                        name="phone"
                         id="phone"
                        placeholder="You Mobile" 
                        className = "form-control" />
                    </div>
                    <div className ="form-group">
                        <textarea 
                        type="text" 
                        name="description"
                         id="description"
                        placeholder="Your Meassage" 
                        className = "form-control" />
                    </div>
                    <button
                    type = "submit" className ="btn btn-outline-info btn-block"
                    >
                    submit
                    </button>
                    
                    

                </form>
            </div>
            </section>
    )
}
