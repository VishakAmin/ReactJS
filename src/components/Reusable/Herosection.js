    import React from 'react'
    import BackgroundImage from 'gatsby-background-image'

    export default function Herosection({img, title, subtitle, heroclass}) {
        return (
            <BackgroundImage
                className ={heroclass}
                fluid ={img}
            >
            <h1 className ="text-white text-uppercase text-center dispaly-4">{title}</h1>
            <div>   
                <h4 className = "text-warning">{subtitle}</h4>
            </div>            
            </BackgroundImage>
        )
    }
    