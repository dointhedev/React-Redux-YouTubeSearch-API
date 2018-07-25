import React, { Component } from "react";
import SearchForm from "./SearchForm";
import { Container, Row, Col} from 'reactstrap';
import "./styles.css";

class Search extends Component {
  constructor(props){
    super(props);
    this.state = { term: ''};
        //results: []
  }

  handleInputChange = term => {
    const value = term.target.value;
    this.setState({term: value});
    this.props.onSearchTermChange(value)
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchGiphy(this.state.search);
  // };

  render() {
    return (
      <Container className="search">
           <SearchForm  handleInputChange={this.handleInputChange}/>
      </Container>
    );
  }
}

export default Search;
