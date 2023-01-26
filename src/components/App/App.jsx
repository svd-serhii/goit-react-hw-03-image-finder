import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';

// const SETTINGS = `?key=${KEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`;

class App extends Component {
  state = {
    request: '',
    data: null,
    loading: false,
  };

  handleSearchSubmit = request => {
    this.setState({ request });
  };

  componentDidMount() {
    this.setState({ loading: true });
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery request={this.state.request} />
        <ToastContainer autoClose={3000} theme="colored" />
      </>
    );
  }
}

export default App;
