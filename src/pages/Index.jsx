import React from 'react';

import Searchbar from '../components/Searchbar';
import Card from '../components/Card';
import Favorites from '../components/Favorites';
import DownloadButtons from '../components/DownloadButtons';

const Index = () => {
    return (
        <div>
            <Searchbar />
            <Card />
            <Favorites />
            <DownloadButtons />
        </div>
    )
}

export default Index