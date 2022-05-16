import React, { useEffect, useState, Fragment } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import NotFound from "pages/NotFound";
import AppBar from "components/AppBar";
import MasterPage from "pages/MasterPage";
import Create from "pages/Create";



  
const App = () => {

    const [createForm, setcreateForm] = useState(null);
    const [homeSel, setHomeSel]=useState(true);
    const [createSel, setCreateSel]=useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [mid_txt, setMid_txt] = useState("");
    const [suggestions, setSuggestions]= useState([]);
    const suggestionSet = [
        {id:1, val:"ET"},
        {id:2, val:"GID"},
        {id:3, val:"MOUSE_GCM"},
        {id:4, val:"HDI"},
        {id:5, val:"IT"},
        {id:6, val:"GP"},
        {id:7, val:"EXT"},
        {id:8, val:"HEAD_PHONES"}
    ];


const onHomePage = async () => {
    // const { data } = await instance.get("/Books/$count");
    setHomeSel(true);
    setCreateSel(false);
   
    setcreateForm(null);
  };
  const onCreatePage = async () => {
    // const { data } = await instance.get("/Books/$count");
    setHomeSel(false);
    setCreateSel(true); 
    setcreateForm(true);
  };  
  const [editFormData, setEditFormData] = useState(
    {
        "vendor_id":"",
        "req_name":"",
        "pur_grp":"",
        "exp_date":"",
        "mat_id":"",
        "qty":"",
        "uom":"",
        "price":"",
        "cur":"",
        "plant":"",
        "ven_name":"",
        "mat_desc":"",
        "approved": false 
     }
  );
  const handleEditFormChange = (event) =>{
    event.preventDefault();
    setEditFormData({...editFormData,[event.target.name]: event.target.value});


};

const handleSelectChange = (mid_txt) =>{

    let matched = [];
    if(mid_txt.length>0){
        matched = suggestionSet.filter(suggestionSet =>{
            const regex = new RegExp(mid_txt,'gi');
            return suggestionSet.val.match(regex)
        }

        )

    }
    setSuggestions(matched);
    setMid_txt(mid_txt);
   
    


};
const onSuggestHandler =(mid_txt)=>{
    setMid_txt(mid_txt);
    setSuggestions([]);
};

const handleEditFormSubmit = (event)=>{
    
      event.preventDefault();
    
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ vendor_id:editFormData.vendor_id,
            req_name:editFormData.req_name,
            pur_grp:editFormData.pur_grp,
            exp_date:editFormData.exp_date,
            mat_id:editFormData.mat_id,
            mat_grp:mid_txt,
            qty:editFormData.qty,
            uom:editFormData.uom,
            price:editFormData.price,
            cur:editFormData.cur,
            plant:editFormData.plant,
            approved: false })
    
        };
      
        fetch('bookshop_destination_srv/Requests', requestOptions).then(response => response.json());
        // instance.get("/functionCall(param='"+ query +"')"); 
      
          console.log(editFormData);
          setEditFormData(
            {
                "vendor_id":"",
                "req_name":"",
                "pur_grp":"",
                "exp_date":"",
                "mat_grp":"",
                "qty":"",
                "uom":"",
                "price":"",
                "cur":"",
                "plant":"",
                "ven_name":"",
                "mat_desc":"",
                "approved": false 
             }
          );
          setHomeSel(true);
          setCreateSel(false);
         
          setcreateForm(null);
          setMid_txt("");
        //   setEditItemId(null);
        //   loadData(true);
    
      
      
      

  };
   

  return (
  
          <div className="App">
              <nav className="navbar navbar-expand-lg" style={{ color: "white" , backgroundColor:"#354a5f"}}>
      <div>
       

        <div className="collapse navbar-collapse">
        
        <h3 style={{marginLeft:"1rem"}}>Purchase Requisition</h3>
        
            <button type="submit" style={{borderColor:'white',color: 'white',marginLeft:'50rem',backgroundColor: '#354a5f'}} onClick={onCreatePage}>+ Create Request</button>
            
        </div>
      </div>
    </nav>

    <div>
 
    <form onSubmit={handleEditFormSubmit} style={{display:'flex', flexWrap:'wrap',justifyContent:'space-between'}}>
  <Fragment>
            {createForm ?
            (<Create editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleSelectChange={handleSelectChange} mid_txt ={mid_txt} suggestions={suggestions} onSuggestHandler={onSuggestHandler}/>):(<MasterPage/>)
            }


            {/* <MasterPage/> */}
            </Fragment>
            
           

    </form>
    </div>

   
            
    </div>
   
      
    
  );
};

export default App;


