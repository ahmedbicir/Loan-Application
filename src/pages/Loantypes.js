import React from 'react'
import '../App.css';
// import Select from "react-dropdown-select";
import Select from 'react-select';

const actions = [
    {label:"smallloans",value:1},
        {label:"carloans",value:2},
        {label:"financialloans",value:3},
  ];
function Loantypes() {
    // const options=[
    //     {label:"smallloans",value:1},
    //     {label:"carloans",value:2},
    //     {label:"financialloans",value:3},
    // ]
  return (
<div>
 
<div>
<Select options={ actions } />

</div>


</div> 
 )
}

export default Loantypes