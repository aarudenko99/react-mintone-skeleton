import React, {Component} from 'react';
import windowSize from 'react-window-size';
import Aux from "../../../../../../hoc/_Aux";
import DEMO from "../../../../../../store/constant";
import {connect} from "react-redux";

class NavSearch extends Component {
    state = {
        isOpen: false
    };

    render() {
        let mainSearchClass = ['position-relative'];
        if (this.props.fullWidthLayout) {
            mainSearchClass = [...mainSearchClass, 'container-fluid'];
        } else {
            mainSearchClass = [...mainSearchClass, 'container'];
        }

        let searchContent = '';
        if (this.state.isOpen) {
            searchContent = (
                <div className="search-bar open">
                    <div className={mainSearchClass.join(' ')}>
                        <input type="text" className="form-control border-0 shadow-none" placeholder="Search here" />
                        <button type="button" className="close" aria-label="Close" onClick={() => this.setState({isOpen: false
                        })}>
                            <span aria-hidden="true"><i className="feather icon-x" /></span>
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <Aux>
                <a href={DEMO.BLANK_LINK} className="pop-search" onClick={() => this.setState({isOpen: true})}><i className="feather icon-search"/></a>
                {searchContent}
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        fullWidthLayout: state.fullWidthLayout
    }
};

export default connect(mapStateToProps) (windowSize(NavSearch));