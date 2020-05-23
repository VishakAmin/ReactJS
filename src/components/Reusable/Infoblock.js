import React from 'react'
import Heading from "./Heading"
import {Link} from 'gatsby'



export default function Infoblock({heading}) {
    return (
        <section className = "bg-theme my-5 py-4">
          <div className = "container">
            <Heading title = {heading}/>
            <div className="col-10 col-sm-8 mx-auto text-center">
                <p className="lead text-white mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius earum non quam omnis praesentium quasi dicta perspiciatis. Quo, nobis ducimus quia voluptatum perspiciatis accusamus minus tempore facilis repudiandae ullam adipisci. Cumque quisquam odit nostrum nulla rem impedit voluptates possimus voluptatem saepe veritatis aspernatur temporibus aliquam obcaecati, fugiat, et sint. Laboriosam reiciendis vel quo praesentium fugiat ea quas, mollitia officiis.
                </p>
                <Link to = "/about/">
                    <button className = "btn btn-warning bt-lg">
                    {heading}
                    </button>
                </Link>
            </div>
          </div>  
        </section>
    )
}
