import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import apolloApi from './api/apolloApi.js';

const PdfRow = (props) => {
  return (
    <tr>
      <td>
        { props.chainId }
      </td>
    </tr>
  );
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chains: [],
    };
  }

  componentDidMount () {
    apolloApi.fetchChains();


    // this.setState({
    //   chains: apolloApi.fetchChains(),
    // });
  }

  render() {
    return (<div></div>);
    // let pdfRows = this.state.chains.map((chain, idx) => {
    //   return (
    //     <PdfRow
    //       chainId={chain.chain_id}
    //       key={`chain_${idx}`}
    //     />
    //   )
    // });


    // return (
    //   <table>
    //     { pdfRows }
    //   </table>
    // );
  }
}

export default App;
