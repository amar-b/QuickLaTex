/*global chrome*/

import React, { Component } from 'react';
import MathJax from 'react-mathjax2';

import ToolbarSelector from './components/toolbarSelector';
import MenuBar from './components/MenuBar';
import GreekSymKeyboard from './components/GreekSymKeyboard'
import SvgSymKeyboard from './components/svgSymKeyboard'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tex: 'e=mc^{2}',
      keyboard: null,
      SVGkeyboard: null,
      prevTex: null,
      carrotPos: 0,
    }

    this.textAreaRef = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.insertItem = this.insertItem.bind(this);
    this.handleToolbarSelection = this.handleToolbarSelection.bind(this);
    this.clearTextArea = this.clearTextArea.bind(this);

    if (process.env.NODE_ENV === 'production') {
      this.init = this.init.bind(this);
      this.init();
    }
  }

  init() {
    chrome.storage.sync.get("data", function (items) {
      if (!chrome.runtime.error) {
        this.setState({ tex: items.data});
      }
    }.bind(this));
  }

  save(){
    if (process.env.NODE_ENV === 'production') {
      chrome.storage.sync.set({ "data": this.state.tex }, function () {
        if (chrome.runtime.error) {
          console.log("Runtime error.");
        }
      });
    }
  }

  handleInputChange(event) {
    if (this.state.tex !== this.state.prevTex) {
      this.setState({ 
        prevTex: this.state.tex,
        tex: event.currentTarget.value,
      }, () => {
        this.save();
      });
    }
  }

  handleToolbarSelection(event) {
    this.setState({ keyboard: event.currentTarget.id });
  }


  insertItem(event) {
    let curStart = this.textAreaRef.current.selectionStart;
    let curEnd = this.textAreaRef.current.selectionEnd;
    let oldVal = this.state.tex;
    let item = event.currentTarget.id;
    let pos = item.search(/{}/g)

    this.setState({
      prevTex: this.state.tex,
      tex: oldVal.substring(0, curStart) + item + oldVal.substring(curEnd, oldVal.length),
      carrotPos: pos === -1 ? (curStart + item.length) : (curStart + pos + 1)
    }, () => {
      this.updateCarrotPos();
      this.save();
    });
  }

  clearTextArea() {
    this.setState({ tex: '' }, () => {
      this.save();
    });
  }
  
  updateCarrotPos() {
    let pos = this.state.carrotPos;
    this.textAreaRef.current.focus();
    this.textAreaRef.current.selectionStart = pos;
    this.textAreaRef.current.selectionEnd = pos;
  }

  render() {
    let keyboardType =  this.state.keyboard;
    return (
      <div className="App">

        <div>
          <MenuBar text={this.state.tex} clearHandler={this.clearTextArea}/>

          <div className="equation">
            <MathJax.Context input='tex'>
                <MathJax.Node>{this.state.tex}</MathJax.Node>
            </MathJax.Context>
          </div>

          <div className="formArea">
            <div className="textArea">
              <textarea 
                  rows="3"
                  value={this.state.tex} 
                  ref= {this.textAreaRef}
                  onChange={this.handleInputChange} 
                />
            </div>
            <ToolbarSelector keyboardHandler={this.handleToolbarSelection} />
          </div>

          <div className={(keyboardType === 'greeksym') ? "greekSymkeyboard" : "hidden"}>
            <GreekSymKeyboard type='greeksym' insertKey={this.insertItem} />
          </div>
          
          <div className={(keyboardType === 'greeksymCap') ? "greeksymCapKeyboard" : "hidden"}>
            <GreekSymKeyboard type='greeksymCap' insertKey={this.insertItem} />
          </div>

          <div className={(keyboardType === 'operator') ? "operatorKeyboard" : "hidden"}>
           <SvgSymKeyboard type='operator' insertKey={this.insertItem} />
          </div>

          <div className={(keyboardType === 'diacritic') ? "dialecticKeyboard" : "hidden"}>
            <SvgSymKeyboard type='diacritic' insertKey={this.insertItem} />
          </div>          
          
          <div className={(keyboardType === 'misc') ? "MiscKeyboard" : "hidden"}>
            <GreekSymKeyboard type='misc' insertKey={this.insertItem} />
          </div>
        </div >
      </div>

    );
  }
}

export default App;
