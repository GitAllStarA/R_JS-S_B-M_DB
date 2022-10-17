import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <div>
                <footer className='footer'>
                    <span className='text-muted'> level up copyrights 2022. </span>
                </footer>
            </div>
        );
    }
}

FooterComponent.propTypes = {

};

export default FooterComponent;