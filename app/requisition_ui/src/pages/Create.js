import React from "react";

export default function Create({editFormData, handleEditFormChange, handleUpdate, handleSelectChange ,mid_txt , suggestions,onSuggestHandler}) {
  return (
  <div style={{
    position: 'fixed',
    background: '#00000050',
    width: '100%',
    height: '100vh',
    top: '0',
    left: '0'
  }
    
  }>
    <div style={{
        position: 'relative',
        background: '#fff',
        width: '90%',
        height: 'auto',
        top: '0',
        left: '0',
        maxHeight:'90vh',
        marginLeft:'calc(100vh - 85vh - 20px)',
        marginTop:'calc(100vh - 85vh - 20px)',
        borderRadius:'4px',
        padding: '20px',
        padding: '20px',
        border: '1px solid #999',
        overflow: 'auto'
    }
    
    
  }>
      <h6 style={{margin:'1rem'}}>Request Details:</h6>
      {/* <div style={{ marginLeft:'3rem',marginBottom:'2rem',width:'85%', boxShadow: '1px 3px 2px 2px #9E9E9E',borderRadius: '3px'}}> */}
     
    <label style={{margin:'1rem'}} >Vendor ID* : <input required="true" type="text" name="vendor_id" value={editFormData.vendor_id} 
				onChange={handleEditFormChange} ></input>
	</label>

	<label  style={{marginLeft:'3rem'}}>Vendor Name : <input type="text" name="ven_name" 
                                 value={editFormData.ven_name} 
                                onChange={handleEditFormChange}></input>
	</label>

	<label  style={{marginLeft:'3rem'}}>Requestor Name : <input type="text" name="req_name" 
                            value={editFormData.req_name} 
                            onChange={handleEditFormChange}></input>
	</label>
    <label  style={{margin:'1rem'}}>Purchase Group : <input type="text" name="pur_grp" 
                            value={editFormData.pur_grp} 
                            onChange={handleEditFormChange}></input>
	</label>
    
    <label  style={{margin:'1rem'}}>Material ID* : <input required="true" type="text" name="mat_id" 
                            value={editFormData.mat_id} 
                            onChange={handleEditFormChange}></input>
	</label>
    <label  style={{marginLeft:'4rem'}}>Material desc : <input type="text" name="mat_desc" 
                            value={editFormData.mat_desc} 
                            onChange={handleEditFormChange}></input>
	</label>
    <label  style={{margin:'1rem'}}>Material Group* : 
    {/* <input type="text" required="true" name="mat_grp" 
                            value={editFormData.mat_grp} 
                            onChange={handleEditFormChange}></input> */}
    <input type="text" onChange={e => handleSelectChange(e.target.value) } value={mid_txt}>
    
    </input>
    {suggestions && suggestions.map((suggestions,i)=>
    <div key= {i} onClick={()=>onSuggestHandler(suggestions.val)} style={{marginLeft:'7rem', border:'1px solid black', cursor:'pointer'}} className="col-md-8">{suggestions.val}</div>
    )}

	</label>
    <label  style={{marginLeft:'2rem'}}>Delivery Date : <input type="text" name="exp_date" 
                            value={editFormData.exp_date} 
                            onChange={handleEditFormChange}></input>
	</label>
     
    <label style={{marginLeft:'3rem'}}>Quantity* : <input required="true" type="text" name="qty" value={editFormData.qty} 
				onChange={handleEditFormChange} ></input>
	</label>

	<label  style={{margin:'1rem'}}>UOM* : <input type="text" required="true" name="uom" 
                                 value={editFormData.uom} 
                                onChange={handleEditFormChange}></input>
	</label>

	<label  style={{marginLeft:'7rem'}} >Price* : <input required="true" type="text" name="price" 
                            value={editFormData.price} 
                            onChange={handleEditFormChange}></input>
	</label>
    
    <label  style={{marginLeft:'6rem'}}>Currency* : 
    
                            <select value={editFormData.cur} onChange={handleEditFormChange} name="cur">
                                <option value="EUR"  label="EUR"/>
                                <option value="USD"  label="USD" />
                                <option value="PUR"  label="Pounds" />
                            </select>
	</label>
    
<div style={{marginTop:'1rem',display: 'flex',alignItems:'flex-end',width:'95%', justifyContent:'end'}}>
<button type="submit" style={{backgroundColor: '#354a5f',borderColor:'#354a5f',color: '#fff'}} onClick={handleUpdate}>Submit Request</button>
</div>
</div>
</div>

  );
}
