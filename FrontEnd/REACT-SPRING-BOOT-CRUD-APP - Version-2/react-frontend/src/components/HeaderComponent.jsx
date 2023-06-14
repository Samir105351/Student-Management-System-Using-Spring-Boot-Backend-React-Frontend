import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div className='row'>
                            <a href='/students' className='navbar-brand'>&nbsp;&nbsp;&nbsp;Student Management System</a>
                        </div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;