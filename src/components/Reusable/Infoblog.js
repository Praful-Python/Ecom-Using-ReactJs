import React from "react"
//import { Link } from "gatsby"

export default function Infoblog({ heading }) {
  return (
    <div>
      <section
        className="content-section bg-primary text-white text-center"
        id="services"
      >
        <div className="container">
          <div className="content-section-heading">
            <h3 className="text-secondary mb-0">{heading}</h3>
            <h2 className="mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
          </div>
          <button type="button" class="btn btn-dark mb-2">Dark</button>
        </div>
      </section>
    </div>
  )
}
