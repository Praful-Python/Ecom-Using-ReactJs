import React, { useState } from 'react';
import lady from "../../images/lady.jpg";
import l2 from "../../images/2.jpg";
import l3 from "../../images/3.jpg";


export default function Teammember() {
  const [Menu] = useState([
    {
      id: 1,
      url: "/",
      text: "Home",
      img: lady,
    },
    {
      id: 2,
      url: "/about",
      text: "About",
      img: l2,
    },
    {
      id: 3,
      url: "/",
      text: "Service",
      img: l3,
    },
  ])
  return (
    <div>
      <div class="card-group">
        {Menu.map(menu => {
          return (
            <div class="card">
              <img src={menu.img} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{menu.id}</h5>
                <p class="card-text">{menu.text}</p>
                <p class="card-text">
                  <small class="text-muted">{menu.url}</small>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
