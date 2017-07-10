import React, { Component } from 'react';

export default class GemName extends Component {

  checkFavorited() {
    if (this.props.favorites) {
      for (let i = 0; i < this.props.favorites.length; i++) {
        if (this.props.gem.name == this.props.favorites[i].name) {
          return true;
        }
      }
      return false;
    }
  }

  checkStyle() {
    return (this.checkFavorited()) ? this.props.favoriteStyle : this.props.starStyle;
  }

  findFavoritesData() {
    this.props.favorites.forEach((favorite) => {
      if (this.props.gem.name == favorite.name) {
        return favorite.url;
      }
    })
  }

  clickHandler() {
    if (!this.checkFavorited()) {
      this.props.addFavorite(this.props.gem.name,
                             this.props.gem.url ||
                             this.props
                              .dependenciesData[this.props.gem.name]
                              .url);
    } else {
      let i = this.props.favorites.findIndex((favorite) => {
        return favorite.name == this.props.gem.name;
      })
      this.props.removeFavorite(i);
    }
  }

  render() {
    const { gem } = this.props;
    console.log(gem)
    return (
      <div className={this.props.gemStyle}>
         <div>
          <a href={gem.url ||
                   this.props.dependenciesData[gem.name].url} target="_blank">
            <p>{ gem.name }</p>
          </a>
        </div>
        <div className={this.checkStyle()} onClick={this.clickHandler.bind(this)}>
        </div>
      </div>
    );
  }
}
