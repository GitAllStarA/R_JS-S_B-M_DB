import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                    <header>
                        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                            <div>
                                <a href="https://www.github.com/gitallstara" className='navbar-brand'>Employee Management App</a>
                            </div>
                        </nav>
                    </header>
            </div>
        );
    }
}

HeaderComponent.propTypes = {

};

export default HeaderComponent;