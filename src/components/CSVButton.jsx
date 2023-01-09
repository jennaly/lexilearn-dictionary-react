import React from 'react';


const CSVButton = ({ favoriteWords }) => {

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
      
    const exportToCsv = e => {
        e.preventDefault()
      
        // Headers for each column
        let headers = ['term', 'definitions']
      
        // Convert users data to a csv
        let vocabWordsCsv = favoriteWords.reduce((acc, word) => {
          const { term, definitions } = word;
    
          // Escape commas in definition strings
          const newDefinitions = definitions.map(definition => `"${definition}"`)
    
          acc.push([term, newDefinitions.join(",")])
          return acc
        }, [])

        const todayDate = new Date().toISOString().slice(0, 10);
      
        downloadFile({
          data:  [headers, ...vocabWordsCsv].join('\n'),
          fileName: `${todayDate}-StudySet.csv`,
          fileType: 'text/csv',
        })
    }

    return (
        <div>
            <button type='button' onClick={exportToCsv}>
            Export to CSV
            </button>
        </div>
    )
}

export default CSVButton
