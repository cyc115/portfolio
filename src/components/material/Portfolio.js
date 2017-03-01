import React from 'react'
import Flipper from './flipper/Flipper'

class Portfolio extends React.Component {

  constructor(props) {
    super(props) 
    this.state = { idx: 0, face: true }
    this.flip = this.flip.bind(this)
  }  

  componentDidMount() {
    this.timer = setInterval(() => {
      this.flip()
      console.log('interval');
    }, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
 
  flip () {
    this.setState({ idx: ((this.state.idx+1) %3) ,face : !this.state.face})
    //console.log();
  }
 
  render() {
    return (
      <div>
        <Flipper
          index={this.state.idx}
          face={this.state.face}
          style={{
            width: '100px',
          }}
        >
          <article>hello1dsa</article>
          <article>hello2</article>
          <article>hello3</article>
        </Flipper>
      </div>
    )
  }
}

export default Portfolio
