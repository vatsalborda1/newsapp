import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,description,image,url,} = this.props
    return (
      <div className="container my-3">
        <div class="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              {description}
            </p>
            <a href={url} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
