import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { yesShow, noShow, fetchSuccess } from './actions';

import YesPage from './components/yes'
import NoPage from './components/no';
import axios from 'axios';

function App(props) {
  const { yes, no, yesShow, noShow, fetchSuccess} = props;

  const handleYesClick = () => {
    yesShow();
    useEffect();
  }
  const handleNoClick = () => {
    noShow();
  }
  const useEffect = () => {
    axios.get('https://www.boredapi.com/api/activity/')
      .then(res=>{
        fetchSuccess(res.data);
      })
  };

  return (
    <div className="App">
      <h1>Are you Bored?</h1>

      <div className='buttons'>
      <button className="yes-button" onClick={handleYesClick}>Yes</button>
      <button className="no-button" onClick={handleNoClick}>No</button>
      </div>

      {
        yes && <YesPage/>
      }

      {
        no && <NoPage/>
      }
      </div>
  );
}

const mapStateToProps = state => {
  return {
    yes: state.yes,
    no: state.no,
  }
}

export default connect(mapStateToProps, {yesShow, noShow, fetchSuccess})(App);