import React, { Component } from "react"
import Img from "gatsby-image"

class Itemlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.item.edges,
    }
  }
  render() {
    return (
      <section className="container">
        <div className="py-5">
          <headind title="Vegetable">
            <div className="row">
              {this.state.items.map(({ node }) => {
                return (
                  <div key={node.id} className="col-11 col-md-6 d-flex mx-auto">
                    <Img fixed={node.image.fixed} />
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex">
                        <h6 className="mb-0 text-black">{node.name}</h6>
                        <h6 className="mb-0 text-black">{node.tite}</h6>
                        <h6 className="mb-0 text-success ml-3">
                          $$${node.price}
                        </h6>
                      </div>
                      <button
                        className="btn btn-warning snipcart-add-item"
                        data-item-id={node.id}
                        data-item-price={node.price}
                        data-item-url="https://pypra-react-ecom.netlify.app/"
                        data-item-name={node.name}
                        data-item-file-guid={node.image.fluid}
                      >
                        join now
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </headind>
        </div>
      </section>
    )
  }
}
export default Itemlist
