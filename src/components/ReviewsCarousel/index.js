// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {indexNum: 0}

  rightArrow = () => {
    const {indexNum} = this.state
    if (indexNum >= 4) {
      this.setState({indexNum: 0})
    } else {
      this.setState(prevState => ({indexNum: prevState.indexNum + 1}))
    }
  }

  leftArrow = () => {
    const {indexNum} = this.state
    if (indexNum <= 0) {
      this.setState({indexNum: 0})
    } else {
      this.setState(prevState => ({indexNum: prevState.indexNum - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {indexNum} = this.state
    const {imgUrl, username, companyName, description} = reviewsList

    const result = reviewsList[indexNum]

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Reviews</h1>
          <img alt={result.username} src={result.imgUrl} />
          <div className="image-control-container">
            <button
              testid="leftArrow"
              onClick={this.leftArrow}
              className="button"
              type="button"
            >
              <img
                alt="left arrow"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              />
            </button>
            <p className="name">{result.username}</p>
            <button
              testid="rightArrow"
              onClick={this.rightArrow}
              className="button"
              type="button"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="companyName">{result.companyName}</p>
          <p className="description">{result.description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
