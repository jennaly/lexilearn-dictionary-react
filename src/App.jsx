import Layout from './components/Layout';

import Searchbar from './components/Searchbar';
import Card from './components/Card';
import Favorites from './components/Favorites';
import DownloadButtons from './components/DownloadButtons';

import { WordContextProvider } from './context/WordContext';

function App() {
 
  return (
    <WordContextProvider>
      <Layout>
        <Searchbar />
        <Card />
        <Favorites />
        <DownloadButtons />
      </Layout>
    </WordContextProvider>
  )
}

export default App
