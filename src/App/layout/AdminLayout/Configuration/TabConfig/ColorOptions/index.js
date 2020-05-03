import React, {Component} from 'react';
import {connect} from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Aux from "../../../../../../hoc/_Aux";
import * as actionTypes from "../../../../../../store/actions";
import DEMO from "../../../../../../store/constant";

class ColorOptions extends Component {
    render() {
        let colorOptions = '';
        colorOptions = (
            <div>
                <h6>Header Background Color</h6>
                <div className="theme-color header-color small">
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('')} className={this.props.headerBackColor === '' ? 'active' : ''} data-value="header-default"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('header-blue')} className={this.props.headerBackColor === 'header-blue' ? 'active' : ''} data-value="header-blue"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('header-red')} className={this.props.headerBackColor === 'header-red' ? 'active' : ''} data-value="header-red"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('header-purple')} className={this.props.headerBackColor === 'header-purple' ? 'active' : ''} data-value="header-purple"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('header-info')} className={this.props.headerBackColor === 'header-info' ? 'active' : ''} data-value="header-info"><span/><span/></a>
                    <a href={DEMO.BLANK_LINK} onClick={() => this.props.onChangeHeaderBackColor('header-dark')} className={this.props.headerBackColor === 'header-dark' ? 'active' : ''} data-value="header-dark"><span/><span/></a>
                </div>
            </div>
        );


        return (
            <Aux>
                <div className="config-scroll">
                    <PerfectScrollbar>
                        {colorOptions}
                    </PerfectScrollbar>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout: state.layout,
        headerBackColor: state.headerBackColor
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeHeaderBackColor: (headerBackColor) => dispatch({type: actionTypes.HEADER_BACK_COLOR, headerBackColor: headerBackColor})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ColorOptions);