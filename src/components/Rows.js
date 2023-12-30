import { useState } from "react";



// function RenderRows({rowData, setRowData}){
//   const [name, setName] = useState('');

//   const handleNameChange = (e) => {
//     //setRowData([{...rowData,[e.target.name]:e.target.value}]);
//     console.log("inside Render Rows riow data" + {...rowData[0]});
//     setName(e.target.value);

//     setRowData(
//       rowData.map((row) => {
//       if(row.id === e.target.id){
//         return {...rowData,
//           [row.name]:e.target.value}
//       }
//     }))

//     console.log(...rowData);
//     console.log(e.target.value);
//   }

//   return(rowData.map((row) => {
//     return(
//         <tr className='.table-data' key={row.id}> 
//             <td id={row.id}> <input className='input' onChange={handleNameChange}/> </td>
//             <td id= {row.id} ><button className="button"> </button> </td>
//             <td id= {row.id} name='count'> <input className='input' value= '0'/>
//             </td>
//         </tr>
//     );})
//   )
// }

export default function AddDefaultRow() {

  let [rowData,setRowData] = useState([
    {
      id: 1,
      name: '',
      voteStatus: false,
      count: 0
    }, 
    {
      id: 2,
      name: '',
      voteStatus: false,
      count: 0
    }, 
    {
      id: 3,
      name: '',
      voteStatus: false,
      count: 0
      }, 
  ]);

  const handleNameChange = (e,index) => {

    const newState = rowData.map((obj,i) => {
      if(index == i){
        return {...obj, name:e.target.value};
      }else
        return obj;
    })
    setRowData(newState);
  }

  const handleButtonClick = (e,index) => {
    
    const newState = rowData.map((obj,i) => {
      if(index == i){
        let voteCount = obj.count;
        voteCount++;
        return {...obj, count:voteCount};
      }else
        return obj;
    })

    setRowData(newState);
  }

  return(
    <div className="maindiv">
      <table className='table' >
        <thead>
          <th> Name </th>
          <th> Vote </th>
          <th> Count </th>
        </thead>
       
       {
       rowData.map((row, index) => {
        return ( <tr className='.table-data' key={row.id}> 
          <td key = {index} > <input id = {index} type="text" className='input' onChange={(e) => handleNameChange(e,index)}/> </td>
          <td key = {index} > <button id = {index}  className="button" onClick={ (e) => handleButtonClick(e,index)}> </button> </td>
          <td key = {index}  name='count'> <input id = {index} className='input' value= {row.count}/>
          </td>
        </tr>)
       })  
       }
        
    </table>
 </div>
  )   

}
