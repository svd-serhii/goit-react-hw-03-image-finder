import { Component } from 'react';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '31646897-e0e737d73d0d9524e45efe21c';

class ImageGallery extends Component {
  state = {
    data: null,
    loading: false,
    error: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevProps.request;
    const newQuery = this.props.request;
    if (prevQuery !== newQuery) {
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}?key=${KEY}&q=${newQuery}&image_type=photo&orientation=horizontal&per_page=12&`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`The search ${newQuery} has not given any results`)
          );
        })
        .then(data => this.setState({ data }))
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    return (
      <>
        {this.state.error && <h1>{this.state.error.message}</h1>}
        {this.state.loading && <div>Loading... </div>}
        {!this.props.request && <h1> Input a word to search for a picture </h1>}
        {this.state.data && <ul className="gallery"></ul>}
      </>
    );
  }
}

export default ImageGallery;
