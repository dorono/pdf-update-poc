import React, { Component } from 'react';

import apolloApi from '../api/apolloApi.js';

import EntityList from './EntityList';


class ChainList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chains: [],
      newEntityName: '',
      newEntityId: '',
      entityFileHash: '',
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
        entityId: this.state.newEntityId,
        pdfName: this.state.newEntityName,
      },
      this.state.entityFileHash
    )
    .then(() => this.getChains());
  }

  render() {
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
                name="newEntityId"
                value={this.state.newEntityId}
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div>
            <label>
              Entity Name:
              <input
                type="text"
                name="newEntityName"
                value={this.state.newEntityName}
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div>
            <label>
              Entity File Hash:
              <input
                type="text"
                name="entityFileHash"
                value={this.state.entityFileHash}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <input type="submit" value="Submit" />
        </form>

        <EntityList
          entities={this.state.chains}
        />
      </div>
    );
  }
}

export default ChainList;
