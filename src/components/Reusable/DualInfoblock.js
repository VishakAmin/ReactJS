import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'


export default function DualInfoblock({heading}) {
    return (
        <section className= "my-4 py-4 bg-theme">
            <div className="container">
                <Heading title = {heading} />
                <div className = "row">
                 <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nulla, dignissimos quos, amet, nostrum sint accusamus aperiam blanditiis quibusdam eaque voluptas quia. Accusamus deleniti autem pariatur debitis illo quae est modi quis veritatis consectetur eius velit atque provident, fugit, enim voluptates non. Natus quod magnam aperiam magni praesentium recusandae ipsa fuga placeat. Corporis pariatur at autem, alias aliquam cupiditate reiciendis quidem quam dignissimos dolore ipsam modi vero? Hic, cupiditate omnis architecto ducimus libero atque expedita quisquam sunt tenetur, eos quibusdam vitae minus error repellendus at laboriosam ipsa et adipisci officiis ratione rem provident dolore laudantium? Repellat magnam perspiciatis eos aperiam!
                        </p>  
                 </div>
    
                 <div className="col-4">
                 <div className="card bg-dark" >
                 <img src="https://images.pexels.com/photos/3561340/pexels-photo-3561340.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img-top" alt="Images goes here"/>
                 <div className="card-body">
                   <h5 className="card-title text-success">Just Click photo</h5>
                   <p className="card-text text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolor debitis quae, adipisci, quia excepturi nulla rem deserunt eum doloribus ex voluptatibus assumenda id. Perferendis necessitatibus fugiat odio natus ad.</p>
                  <Link to = "/about/">
                   <button className="btn btn-warning btn-block">
                   {heading}
                   </button>
                   </Link>
                 </div>
                </div>
                </div>
                </div>
                </div>
        </section>
    )
}
