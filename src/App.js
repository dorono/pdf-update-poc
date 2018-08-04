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
      newPdfName: '',
      newPdfId: '',
      newPdfHash: '',
    };
  }

  getChains = () => {
    apolloApi.fetchChains()
    .then((chains) => {
      this.setState({
        chains: chains.data.items,
      });
    });
  }

  componentDidMount () {
    this.getChains();
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    apolloApi.createChain(
      {
        pdfId: this.state.newPdfId,
        pdfName: this.state.newPdfName,
      },
      this.state.newPdfHash
    )
    .then(() => this.getChains());
  }

  render() {
    // return (<div></div>);
    let pdfRows = this.state.chains.map((chain, idx) => {
      return (
        <PdfRow
          chainId={chain.chain_id}
          key={`chain_${idx}`}
        />
      )
    });


    return (
      <div
        id="main"
      >
        <form
          onSubmit={this.handleSubmit}
        >
          <div>
            <label>
              PDF ID:
              <input
                type="text"
                name="newPdfId"
                value={this.state.newPdfId}
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div>
            <label>
              Name:
              <input
                type="text"
                name="newPdfName"
                value={this.state.newPdfName}
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div>
            <label>
              PDF Hash:
              <input
                type="text"
                name="newPdfHash"
                value={this.state.newPdfHash}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>

        <table
          className="pdfList"
        >
          <tbody>
            { pdfRows }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
