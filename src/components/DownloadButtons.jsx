import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useFavoriteWordsContext } from '../hooks/useFavoriteWordsContext';

const DownloadButtons = () => {
    const { user } = useAuthContext();
    const { favoriteWords } = useFavoriteWordsContext();
    
    const [name, setName] = useState('')
    const [showNameInput, setShowNameInput] = useState(false);  
    const todayDate = new Date().toISOString().slice(0, 10);

    useEffect(() => {
      if (user) {
        setName(user.name);
      } 
    }, [user])

    const handleClick = (e, cb) => {
      if (!name) {
        setShowNameInput(true);
      } else {
        const formattedName = formatName(name);
        cb(e, formattedName);
        setShowNameInput(false);
      }
    }

    const downloadFile = ({ data, fileName, fileType }) => {
        const blob = new Blob([data], { type: fileType })
      
        const a = document.createElement('a')
        a.download = fileName
        a.href = window.URL.createObjectURL(blob)
        const clickEvt = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true,
        })
        a.dispatchEvent(clickEvt)
        a.remove()
    }

    const formatName = (fullName) => {
      return fullName
              .split(" ")
              .map((word, index) => index == 0 ? word : word[0])
              .join("");
    }

    const exportToStudySetCsv = (e, formattedName) => {
        e.preventDefault()

        // Headers for each column
        let headers = ['Term', 'Definitions']
      
        // Convert users data to a csv
        let vocabWordsCsv = favoriteWords.reduce((acc, word) => {
          const { term, definitions } = word;
    
          // Escape commas in definition strings
          const newDefinitions = definitions.map(definition => `"${definition}"`)
    
          acc.push([term, newDefinitions.join(",")])
          return acc
        }, [])
      
        downloadFile({
          data:  [headers, ...vocabWordsCsv].join('\n'),
          fileName: `${todayDate}-StudySet-${formattedName}.csv`,
          fileType: 'text/csv',
        })
    }

    const exportToReportCsv = (e, formattedName) => {
        e.preventDefault()
      
        // Headers for each column
        let headers = ['Term', 'Difficulty']
      
        // Convert users data to a csv
        let vocabWordsCsv = favoriteWords.reduce((acc, word) => {
          const { term, difficulty } = word;
    
          acc.push([term, difficulty])
          return acc
        }, [])
      
        downloadFile({
          data:  [headers, ...vocabWordsCsv].join('\n'),
          fileName: `${todayDate}-Report-${formattedName}.csv`,
          fileType: 'text/csv',
        })
    }

    return (
      <>
        {showNameInput &&
          <div className="alert alert-warning shadow-lg">
            <div className="flex font-gaegu text-lg lg:text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" color="#A16207" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <label htmlFor="name" className="font-gaegu text-yellow-700 ">Please enter your name:</label>
              <input
              id="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Miles Morales"
              value={name}
              className="bg-transparent p-0.5 uppercase"
              />
            </div>
          </div>
        }
        <div className="flex max-w-sm lg:max-w-xl mx-auto justify-center gap-5 m-5 text-sm lg:text-base">
            <button 
            type='button' 
            onClick={(e) => handleClick(e, exportToStudySetCsv)}
            className="rounded-none lg:rounded-full outline outline-1 bg-yellow-700 outline-yellow-700 hover:border hover:border-yellow-800 hover:bg-yellow-800 font-fredoka-one text-base-100 uppercase"
            >
                Download Study Set
            </button>

            <button 
            type='button' 
            onClick={(e) => handleClick(e, exportToReportCsv)}
            className="rounded-none lg:rounded-full outline outline-1 outline-yellow-700 hover:border hover:border-yellow-700 text-yellow-700 font-fredoka-one uppercase"
            >
                Download Teacher's Report
            </button>
        </div>
      </>
    )
}

export default DownloadButtons
