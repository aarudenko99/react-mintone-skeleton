import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";
import * as actionTypes from "../../../../../store/actions";

class Layout extends Component {
    render () {
        let layoutOption = '';
        layoutOption = (
            <div>
                <h6>Layouts</h6>
                <div className="theme-color layout-type">
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeLayoutType('menu-dark')} title="Default Layout" className={this.props.layoutType === 'menu-dark' ? 'active' : ''} data-value="menu-dark"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeLayoutType('menu-light')} title="Light" className={this.props.layoutType === 'menu-light' ? 'active' : ''} data-value="menu-light"><span/><span/></a>
                </div>
                <a href={DEMO.BLANK_LINK} onClick={() => this.props.onReset('dark')} title="Reset" className="btn btn-block btn-danger" data-value="reset">Reset</a>
            </div>
        );
        return (
            <Aux>
                {layoutOption}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layoutType: state.layoutType
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeLayoutType: (layoutType) => dispatch({type: actionTypes.LAYOUT_TYPE, layoutType: layoutType}),
        onReset: (layoutType) => dispatch({type: actionTypes.RESET, layoutType: layoutType}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (Layout);