import React, { Component } from 'react';

export default class GemName extends Component {

  clickHandler() {
    if (!this.props.gem.favorited) {
      this.props.addFavorite(this.props.gem.name, this.props.gem.url);
    } else {
      this.props.removeFavorite(this.props.i);
    }
  }

  render() {
    const { gem } = this.props;
    return (
      <div className="details__name">
         <div>
          <a href={gem.url} target="_blank">
            <p>{ gem.name }</p>
          </a>
        </div>
        <div className="details__star" onClick={this.clickHandler.bind(this)}>
        </div>
      </div>
    );
  }
}
