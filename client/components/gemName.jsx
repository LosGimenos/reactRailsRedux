import React, { Component } from 'react';

export default class GemName extends Component {

  checkFavorited() {
    return (this.props.gem.favorited) ? true : false;
  }

  checkStyle() {
    return (this.checkFavorited()) ? this.props.favoriteStyle : this.props.starStyle;
  }

  clickHandler() {
    if (!this.checkFavorited()) {
      this.props.addFavorite(this.props.gem.name, this.props.gem.url);
    } else {
      this.props.removeFavorite(this.props.i);
    }
  }

  render() {
    const { gem } = this.props;

    return (
      <div className={this.props.gemStyle}>
         <div>
          <a href={gem.url || this.props.dependenciesData[gem.name].url} target="_blank">
            <p>{ gem.name }</p>
          </a>
        </div>
        <div className={this.checkStyle()} onClick={this.clickHandler.bind(this)}>
        </div>
      </div>
    );
  }
}
