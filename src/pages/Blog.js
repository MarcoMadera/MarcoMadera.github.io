import React, { Component } from "react";

import "./styles/Blog.css";

export default class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <div className="container">
          <div className="row">
            <div className="Blog__col col-12 col-md-8">
              <h1>Blogs</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                varius consequat gravida. Curabitur eu ante lobortis, venenatis
                diam in, efficitur ex. Phasellus a est quis felis dictum
                tristique. Curabitur id imperdiet elit. Aenean eget lacinia
                turpis, quis elementum quam. Suspendisse a leo nec dolor
                interdum rhoncus. Duis purus libero, vehicula cursus pretium
                nec, posuere ut nisl. Aenean ornare a ex nec varius. Quisque
                sollicitudin nisi atuctor ultricies. Pellentesque eleifend sem
                vel felis commodo, sit amet iaculis mi efficitur. Pellentesque
                posuere venenatis sagittis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                varius consequat gravida. Curabitur eu ante lobortis, venenatis
                diam in, efficitur ex. Phasellus a est quis felis dictum
                tristique. Curabitur id imperdiet elit. Aenean eget lacinia
                turpis, quis elementum quam. Suspendisse a leo nec dolor
                interdum rhoncus. Duis purus libero, vehicula cursus pretium
                nec, posuere ut nisl. Aenean ornare a ex nec varius. Quisque
                sollicitudin nisi atuctor ultricies.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
