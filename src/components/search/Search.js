import React, {Component} from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import './search.css'
import {connect} from 'react-redux'
import {searchMovies,searchInput} from "../../store/popular-movies/actions";

class Search extends Component{
    state = {
        input:''
    }
    timeout = null;
    movieSearch = (e) => {
        this.setState({input:e.target.value})
        clearTimeout(this.timeout)

        this.timeout = setTimeout(() => {
            this.props.search(this.state.input)
            this.props.searching(this.state.input)
        },500)
    }

    render(){
        return (
            <MDBCol
                md="12"
                className={'mt-n4'}
                style={{
                    border:'1px solid #1C2331',
                    background:`linear-gradient(rgba(28,35,49, 1), rgba(28,35,49, 1))`
                }}
            >
                <div className="input-group md-form form-sm form-1 pl-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text purple lighten-3" id="basic-text1">
                <MDBIcon className="text-white" icon="search" />
              </span>
                    </div>
                    <input
                        className="form-control my-0 py-1"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        onChange={this.movieSearch}
                        value={this.state.input}
                    />
                </div>
            </MDBCol>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searching: (input) => dispatch(searchMovies(input)),
        search : (input) => dispatch(searchInput(input))
    }
}

export default connect(null,mapDispatchToProps) (Search);