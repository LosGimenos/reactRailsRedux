import React, { Component } from 'react';

export default class GemName extends Component {

  checkFavorited() {
    if (this.props.favoritesList) {
      for (let i = 0; i < this.props.favoritesList.length || 0; i++) {
        if (this.props.gem.name == this.props.favoritesList[i].name) {
          return true;
        }
      }
      return false;
    }
  }

  checkStyle() {
    return (this.checkFavorited()) ? this.props.favoriteStyle : this.props.starStyle;
  }

  clickHandler() {
    if (!this.checkFavorited()) {
      this.props.addFavorite(this.props.gem.name, this.props.gem.url);
    } else {
      let i = this.props.favoritesList.findIndex((favorite) => {
        return favorite.name == this.props.gem.name;
      })
      this.props.removeFavorite(i);
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
