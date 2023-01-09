import React from 'react'

const DownloadReport = ({ favoriteWords }) => {

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
        let headers = ['term', 'difficulty']
      
        // Convert users data to a csv
        let vocabWordsCsv = favoriteWords.reduce((acc, word) => {
          const { term, difficulty } = word;
    
          acc.push([term, difficulty])
          return acc
        }, [])

        const todayDate = new Date().toISOString().slice(0, 10);
      
        downloadFile({
          data:  [headers, ...vocabWordsCsv].join('\n'),
          fileName: `${todayDate}-TeacherReport.csv`,
          fileType: 'text/csv',
        })
    }

    return (
        <div>
            <button type='button' onClick={exportToCsv}>
            Download Teacher's Report
            </button>
        </div>
    )
}

export default DownloadReport
