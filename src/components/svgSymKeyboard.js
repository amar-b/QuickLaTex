import React, { PureComponent } from 'react';
import { Button, ButtonToolbar, ButtonGroup } from 'react-bootstrap';

const keyboardConfig = require('../keyboardConfig');

class SvgSymKeyboard extends PureComponent {

    render() {
        const type = this.props.type;
        const keyboardObj = keyboardConfig[type];

        var buttonList = [];
        var buttonGroupList = [];

        var itemList = keyboardObj.items;
        const buttonsize = { minWidth: keyboardObj.minWidth };
        const itemListLength = Object.keys(itemList).length;
        var itemCount = 0;

        for (let sym in itemList) {
            buttonList.push(
                <Button
                    style={buttonsize}
                    onClick={this.props.insertKey}
                    id={itemList[sym].tex + ' '}
                    key={'btn' + sym} >
                    <img src={itemList[sym].img} alt={sym} />
                </Button>
            );
            itemCount++;
            if (itemCount % 8 === 0 || itemListLength === itemCount) {
                buttonGroupList.push(
                    <ButtonToolbar key={'btn-toolBar' + itemCount}> <ButtonGroup>
                        {buttonList}
                    </ButtonGroup></ButtonToolbar>
                )
                buttonList = [];
            }
        }

        return buttonGroupList
    }
}



export default SvgSymKeyboard;