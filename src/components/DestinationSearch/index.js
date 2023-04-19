import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationList} = this.props
    const searchResults = destinationList.filter(eachDestinatiion =>
      eachDestinatiion.name.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <div>
          <h1>Destination Search</h1>
          <div>
            <input
              type="search"
              placeholder="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul>
            {searchResults.map(eachDestinatiion => (
              <DestinationItem
                key={eachDestinatiion.id}
                destinationDetails={eachDestinatiion}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
