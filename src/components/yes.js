import React from "react"
import axios from "axios";
import { connect } from 'react-redux'
import { fetchSuccess } from "../actions";

const YesPage = props => {
    const { data, fetchSuccess } = props;

    const useEffect = () => {
        axios.get('https://www.boredapi.com/api/activity/')
          .then(res=>{
            fetchSuccess(res.data);
          })
      };

    return(
        <div>
        <h2>Try to {data.activity}</h2>
        <h3 className="price">Price {data.price * 10 }/10</h3>
        <h3 className="difficulty">Difficulty {data.accessibility * 10 }/10</h3>
        <p>Not Interested in this one?</p>
        <button className="try-button" onClick={useEffect}>Try Again</button>
        </div>
        );
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
} 

export default connect(mapStateToProps, {fetchSuccess})(YesPage);