import React from 'react';
import Title from './Title';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Title />

            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
