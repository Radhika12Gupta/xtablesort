import React, { useState } from 'react'

const Table = () => {
    const [data,setData]=useState([
        { date: "2022-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-01", views: 100, article: "Article 1" },
    
        { date: "2023-09-02", views: 150, article: "Article 2" },
    
        { date: "2023-09-02", views: 120, article: "Article 3" },
    
        { date: "2020-09-03", views: 200, article: "Article 4" }
    ])

    const handleSortDate=()=>{
        let sortedData=[...data]
        sortedData.sort(function(a,b){
            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.date) - new Date(a.date);
          });

          setData(sortedData)
         
    }

    const handleSortViews=()=>{
        let sortedData=[...data]
        sortedData.sort(function(a,b){
            return b.views - a.views;
          });
          setData(sortedData)
    }

  return (
    <div>
        <h1>Date and Views Table</h1>
        <button onClick={(e)=>handleSortDate()}>Sort by Date</button>
        <button onClick={(e)=>handleSortViews()}>Sort by Views</button>
         <br/>
        <table style={{display:"inline",alignItems:"center",justifyContent:"center"}}>
            <thead>
            <tr>
                <th>Date</th>
                <th>Views</th>
                <th>Article</th>
            </tr>
            </thead>
            
            
        {data.map((item,index)=>{
         return  <tbody key={index}>
                <tr>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
                </tr>
           
                </tbody>
            })}
             
        </table>
      
    </div>
  )
}

export default Table
