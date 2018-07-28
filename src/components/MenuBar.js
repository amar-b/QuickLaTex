import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const FA = require('react-fontawesome')

class MenuBar extends Component {
    newWindow(){
        window.open('index.html','_blank')
    }
    render() {
        return (
            <div className='MenuBar'>
                <Button id='fullscreen' bsSize="small" onClick= {this.newWindow}>
                    <FA name='external-link' />
                </Button>

                <CopyToClipboard text={this.props.text}>
                    <Button id='clipcopy' bsSize="small">
                        <FA name='clipboard' />
                    </Button>
                </CopyToClipboard>

                <Button id='clear' bsSize="small" onClick={this.props.clearHandler}>
                    <FA name='trash' />
                </Button>

            </div>
        );
    }
}


export default MenuBar;