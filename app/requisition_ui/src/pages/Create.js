import React from "react";

export default function Create({editFormData, handleEditFormChange, handleUpdate, handleCancelClick}) {
  return (
  <div>
      <h6 style={{margin:'1rem'}}>Request Details:</h6>
      <div style={{ marginLeft:'3rem',marginBottom:'2rem', height: '20vh',width:'85%', boxShadow: '1px 3px 2px 2px #9E9E9E',borderRadius: '3px'}}>
     
    <label style={{margin:'1rem'}}>Vendor ID : <input type="text" name="vendor_id" value={editFormData.vendor_id} 
				onChange={handleEditFormChange} ></input>
	</label>

	<label  style={{margin:'1rem'}}>Vendor Name : <input type="text" name="ven_name" 
                                 value={editFormData.ven_name} 
                                onChange={handleEditFormChange}></input>
	</label>

	<label  style={{margin:'1rem'}}>Requestor Name : <input type="text" name="req_name" 
                            value={editFormData.req_name} 
                            onChange={handleEditFormChange}></input>
	</label>
    <label  style={{margin:'1rem'}}>Purchase Group : <input type="text" name="pur_grp" 
                            value={editFormData.pur_grp} 
                            onChange={handleEditFormChange}></input>
	</label>
    <label  style={{margin:'1rem'}}>Delivery Date : <input type="text" name="exp_date" 
                            value={editFormData.exp_date} 
                            onChange={handleEditFormChange}></input>
	</label>

</div>
<h6 style={{margin:'1rem'}}>Material Details:</h6>
<div style={{ marginLeft:'3rem',marginBottom:'2rem', height: '35vh',width:'85%', boxShadow: '1px 3px 2px 2px #9E9E9E',borderRadius: '3px'}}>

<label  style={{margin:'1rem'}}>Material ID : <input type="text" name="mat_id" 
                            value={editFormData.mat_id} 
                            onChange={handleEditFormChange}></input>
	</label>
    <label  style={{margin:'1rem'}}>Material desc : <input type="text" name="mat_desc" 
                            value={editFormData.mat_desc} 
                            onChange={handleEditFormChange}></input>
	</label>
    <label  style={{margin:'1rem'}}>Material Group : <input type="text" name="mat_grp" 
                            value={editFormData.mat_grp} 
                            onChange={handleEditFormChange}></input>
	</label>
     
    <label style={{margin:'1rem'}}>Quantity : <input type="text" name="qty" value={editFormData.qty} 
				onChange={handleEditFormChange} ></input>
	</label>

	<label  style={{margin:'1rem'}}>UOM: <input type="text" name="uom" 
                                 value={editFormData.uom} 
                                onChange={handleEditFormChange}></input>
	</label>

	<label  style={{margin:'1rem'}}>Price : <input type="text" name="price" 
                            value={editFormData.price} 
                            onChange={handleEditFormChange}></input>
	</label>
    
    <label  style={{margin:'1rem'}}>Currency : <input type="text" name="cur" 
                            value={editFormData.cur} 
                            onChange={handleEditFormChange}></input>
	</label>
    <label  style={{margin:'1rem'}}>Plant : <input type="text" name="plant" 
                            value={editFormData.plant} 
                            onChange={handleEditFormChange}></input>
	</label>

</div>
<div style={{marginTop:'1rem',display: 'flex',alignItems:'flex-end',width:'85%', justifyContent:'end'}}>
<button type="submit" style={{backgroundColor: '#354a5f',borderColor:'#354a5f',color: '#fff'}} onClick={handleUpdate}>Submit Request</button>
</div>
</div>

  );
}
