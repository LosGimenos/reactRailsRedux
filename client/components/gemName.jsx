import React, { Component } from 'react';

export default class GemName extends Component {

  clickHandler() {
    if (!this.props.gem.favorited) {
      console.log('favorited')
      this.props.addFavorite(this.props.gem.name, this.props.gem.url);
    } else {
      console.log('nope')
      this.props.removeFavorite(this.props.i);
    }
  }

  render() {
    console.log(this.props.starStyle, this.props.gemStyle)
    const { gem } = this.props;
    return (
      <div className={this.props.gemStyle}>
         <div>
          <a href={gem.url} target="_blank">
            <p>{ gem.name }</p>
          </a>
        </div>
        <div className={this.props.starStyle} onClick={this.clickHandler.bind(this)}>
        </div>
      </div>
    );
  }
}
