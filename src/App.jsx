import Layout from './components/Layout';
import Title from './components/Title';
import Searchbar from './components/Searchbar';
import Card from './components/Card';
import Favorites from './components/Favorites';
import DownloadButtons from './components/DownloadButtons';

import { StateContext } from './context/StateContext';

function App() {
 
  return (
    <StateContext>
      <Layout>
        <Title />
        <Searchbar />
        <Card />
        <Favorites />
        <DownloadButtons />
      </Layout>
    </StateContext>
  )
}

export default App
