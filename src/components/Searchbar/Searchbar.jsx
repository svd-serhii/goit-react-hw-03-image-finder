import { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    request: '',
  };

  handleChangeRequest = event => {
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.request.trim() === '') {
      toast.error('Input correct search request!');
      return;
    }
    this.props.onSubmit(this.state.request);
    this.setState({ request: '' });
  };

  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              value={this.state.request}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChangeRequest}
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
