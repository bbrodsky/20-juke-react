import React from 'react';



class Albums extends React.Component {
  componentDidMount(){
      this.props.fetchAlbums();
    }

  render(){
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {this.props.albums.map( e => (
          <div key={e.id} className="col-xs-4">
            <a className="thumbnail" href="#">
              <img src={ e.imageUrl } />
              <div className="caption">
                <h5>
                  <span>{e.name}</span>
                </h5>
                <small>Songs: {e.songs.length}</small>
              </div>
            </a>
          </div>
        ))}

        </div>
      </div>
    )
  }
}

export default Albums;
