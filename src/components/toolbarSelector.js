import React, { Component } from 'react';
import { Button} from 'react-bootstrap';

class ToolbarSelector extends Component {
    render() {
        return (
        <div className="toolbarSelector">
            <Button id='greeksym' bsSize="small"onClick={this.props.keyboardHandler}> 
                Greek
            </Button>
            
            <Button id='greeksymCap' bsSize="small"onClick={this.props.keyboardHandler}>
                Greek (U) 
            </Button>
            
            <Button id='operator' bsSize="small" onClick={this.props.keyboardHandler}>
                Operators
            </Button>

            <Button id='diacritic' bsSize="small" onClick={this.props.keyboardHandler}>
                Accents
            </Button>

            <Button id='misc' bsSize="small" onClick={this.props.keyboardHandler}>
                Misc
            </Button>

            <Button id='none' bsSize="small" onClick={this.props.keyboardHandler}>
                    <img src={require('../images/toolbar/hide.svg')} width="14" height="14" alt='none' />
            </Button>
        </div>
        );
    }

}

export default ToolbarSelector;