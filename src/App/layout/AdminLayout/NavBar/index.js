import React, {Component} from 'react';
import {connect} from 'react-redux';

import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import Aux from "../../../../hoc/_Aux";
import DEMO from "../../../../store/constant";
import * as actionTypes from "../../../../store/actions";

import logo from '../../../../assets/images/logo.png';
import darkLogo from '../../../../assets/images/logo-dark.png'

class NavBar extends Component {
    render() {
        let headerClass = ['navbar', 'pcoded-header', 'navbar-expand-lg', this.props.headerBackColor];
        if (this.props.headerFixedLayout) {
            headerClass = [...headerClass, 'headerpos-fixed'];
        }

        let toggleClass = ['mobile-menu'];
        if (this.props.collapseMenu) {
            toggleClass = [...toggleClass, 'on'];
        }

        let mainLogo = logo;
        if (this.props.headerBackColor === '') {
            mainLogo = darkLogo;
        }

        let mainHeaderClass = ['content-main'];
        if (this.props.fullWidthLayout) {
            mainHeaderClass = [...mainHeaderClass, 'container-fluid'];
        } else {
            mainHeaderClass = [...mainHeaderClass, 'container'];
        }

        let navBar = (
            <Aux>
                <div className={mainHeaderClass.join(' ')}>
                    <div className="m-header">
                        <a className={toggleClass.join(' ')} id="mobile-collapse1" href={DEMO.BLANK_LINK} onClick={this.props.onToggleNavigation}><span/></a>
                        <a href={DEMO.BLANK_LINK} className="b-brand">
                            <img id="main-logo" src={mainLogo} alt="" className="logo" />
                        </a>
                    </div>
                    <a className="mobile-menu" id="mobile-header" href={DEMO.BLANK_LINK}><i className="feather icon-more-horizontal"/></a>
                    <div className="collapse navbar-collapse">
                        <NavLeft/>
                        <NavRight rtlLayout={this.props.rtlLayout} />
                    </div>
                </div>
            </Aux>
        );

        return (
            <Aux>
                <header className={headerClass.join(' ')}>
                    {navBar}
                </header>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        rtlLayout: state.rtlLayout,
        headerBackColor: state.headerBackColor,
        headerFixedLayout: state.headerFixedLayout,
        collapseMenu: state.collapseMenu,
        layout: state.layout,
        fullWidthLayout: state.fullWidthLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onToggleNavigation: () => dispatch({type: actionTypes.COLLAPSE_MENU}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (NavBar);
