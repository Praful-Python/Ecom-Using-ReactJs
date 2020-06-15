import React from "react"
import BackgroundImage from "gatsby-background-image"
export default function Superman({img, title, subtitle, superClass}) {
  return (
    <div>
      <BackgroundImage className={superClass} fluid={img}>
        <h1 className="text-black text-uppercase display-4">{title}</h1>
        <div>
          <h4 className="text-warning">{subtitle}</h4>
        </div>
      </BackgroundImage>
    </div>
  )
}
