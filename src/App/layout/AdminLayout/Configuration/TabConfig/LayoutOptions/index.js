import React, {Component} from 'react';
import {connect} from 'react-redux';
import PerfectScrollbar from 'react-perfect-scrollbar';

import Aux from "../../../../../../hoc/_Aux";
import * as actionTypes from "../../../../../../store/actions";

class LayoutOptions extends Component {
    render() {
        let layoutOption = (
            <div className="form-group mb-0">
                <div className="switch switch-primary d-inline m-r-10">
                    <input type="checkbox" id="box-layouts" checked={this.props.fullWidthLayout} onChange={this.props.onChangeFullWidthLayout} />
                    <label htmlFor="box-layouts" className="cr" />
                </div>
                <label>Full Width Content</label>
            </div>
        );

        let layoutOptionHeaderFixWithoutBox = '';
        let layoutOptionNavFixWithoutBox = '';

        if (this.props.layout !== 'horizontal') {
            layoutOptionHeaderFixWithoutBox = (
                <div className="form-group mb-0">
                    <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="header-fixed" checked={this.props.headerFixedLayout}
                               onChange={this.props.onChangeHeaderFixedLayout}/>
                        <label htmlFor="header-fixed" className="cr"/>
                    </div>
                    <label>Header Fixed</label>
                </div>
            );
            layoutOptionNavFixWithoutBox = (
                <div className="form-group mb-0">
                    <div className="switch switch-primary d-inline m-r-10">
                        <input type="checkbox" id="menu-fixed" checked={this.props.navFixedLayout}
                               onChange={this.props.onChangeNavFixedLayout}/>
                        <label htmlFor="menu-fixed" className="cr"/>
                    </div>
                    <label>Sidebar Fixed</label>
                </div>
            );
        }

        layoutOption = (
            <div>
                {layoutOptionNavFixWithoutBox}
                {layoutOptionHeaderFixWithoutBox}
                {layoutOption}
            </div>
        )

        return (
            <Aux>
                <div className="config-scroll">
                    <PerfectScrollbar>
                        {layoutOption}
                    </PerfectScrollbar>
                </div>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        layout:state.layout,
        navFixedLayout: state.navFixedLayout,
        headerFixedLayout: state.headerFixedLayout,
        fullWidthLayout: state.fullWidthLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onChangeNavFixedLayout: () => dispatch({type: actionTypes.NAV_FIXED_LAYOUT}),
        onChangeHeaderFixedLayout: () => dispatch({type: actionTypes.HEADER_FIXED_LAYOUT}),
        onChangeFullWidthLayout: () => dispatch({type: actionTypes.FULL_WIDTH_LAYOUT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (LayoutOptions);