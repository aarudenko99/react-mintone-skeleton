import React, {Component} from 'react';
import {Dropdown} from 'react-bootstrap';
import windowSize from 'react-window-size';

import NavSearch from './NavSearch';
import Aux from "../../../../../hoc/_Aux";
import DEMO from "../../../../../store/constant";

class NavLeft extends Component {

    render() {

        return (
            <Aux>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><NavSearch/></li>
                    <li className="nav-item">
                        <Dropdown>
                            <Dropdown.Toggle as='a' variant='link' id="h-drop" className='h-drop'>
                                Dropdown
                            </Dropdown.Toggle>
                            <Dropdown.Menu as='ul' className="pro-body">
                                <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="fas fa-circle"/> Profile</a></li>
                                <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="fas fa-circle"/> My Messages</a></li>
                                <li><a href={DEMO.BLANK_LINK} className="dropdown-item"><i className="fas fa-circle"/> Lock Screen</a></li>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </Aux>
        );
    }
}

export default windowSize(NavLeft);
