import './App.css';
import { Component, Fragment } from 'react';
import { sampleText } from './sampleText';
import { marked, Marked } from 'marked';


class App extends Component {
  state = {
    text : sampleText
  }
  // methodes utilisée uniquement dans les composants de typle class
  componentDidMount(){
    const text = localStorage.getItem('text')
    if (text){
      this.setState({text})

    }else{
      this.setState({text : sampleText})
    }
    console.log('je suis monté!');
  }
  componentDidUpdate(){
    const {text} = this.state
    localStorage.setItem('text', text)
  }
  handleChange = event => {
    const text = event.target.value
    this.setState({text})
  }
  // sanitized est pour ne pas interpreter les balise html
  renderText = (text) => {
    const __html = marked(text, {sanitize: true})
    return {__html}
  }
  render(){
    return (
      <Fragment>
        
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <textarea
              onChange={this.handleChange}
              value={this.state.text} 
              className = "form-control"
              rows="35">
              </textarea> 
            </div> 
            <div className="col-sm-6">
                {/* Gestion de l'affichage du texte potentiellement dangereux  */}
              <div dangerouslySetInnerHTML={this.renderText(this.state.text) }>

              </div>
            </div> 
          </div>
        </div> 
      </Fragment>
  
    );
  }
  
}

export default App;
