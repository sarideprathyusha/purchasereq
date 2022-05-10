import React, { useEffect, useState, Fragment } from "react";
import { Container, Box } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { getTableData, getTableCount } from "api";

const columns = [
  { field: "ID", headerName: "ID", width: 250 },
  { field: "title", headerName: "title", flex: 1 },
  { field: "stock", headerName: "stock", flex: 1 }
];

const PAGE_SIZE = 15;

export default function MasterPage() {
   
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // Number of rows which exist on the service
  const [rowCount, setRowCount] = useState(0);

  const loadData = async (isFirstLoad, skip = 0) => {
    try {
      setItems([]);
      setLoading(true);

      if (isFirstLoad) {
        const count = await getTableCount();
        setRowCount(count);
      }

      const _items = await getTableData({
        $top: PAGE_SIZE,
        $skip: skip
      });
      const itemsWithIds = _items.map((item, index) => {
        item.id = index;
        return item;
      });
      setItems(itemsWithIds);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChanged = ({ page }) => {
    loadData(false, page * PAGE_SIZE);
  };

  useEffect(() => {
    //   setItems(sampleSet);
    // when component mounted
    loadData(true);
  }, []);

  return (
    <table class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th  scope="col">Vendor ID</th>
            <th scope="col">Requestor Name </th>
            <th scope="col">Purchase Group</th>
            <th scope="col">Exp Delivery</th>
            <th scope="col">Material ID</th>
            <th scope="col">Material Group</th>
            <th scope="col">Quantity</th>
            <th scope="col">UOM</th>
            <th scope="col">Price</th>
            <th scope="col">Currency</th>
            <th scope="col">Status</th>

          </tr>
        </thead>
        <tbody>
        {items.map((items, index) => (
            <tr>
            <td style={{ fontSize:"14px" }} >{items.vendor_id} </td>
            <td style={{ fontSize:"14px" }}>{items.req_name}
            </td>
            <td style={{ fontSize:"14px" }}>{items.pur_grp}</td>
            <td style={{ fontSize:"14px" }}>{items.exp_date}</td>
            <td style={{ fontSize:"14px" }}>{items.mat_id}</td>
            <td style={{ fontSize:"14px" }}>{items.mat_grp}</td>
            <td style={{ fontSize:"14px" }}>{items.qty}</td>
            <td style={{ fontSize:"14px" }}>{items.uom}</td>
            <td style={{ fontSize:"14px" }}>{items.price}</td>
            <td style={{ fontSize:"14px" }}>{items.cur}</td>
            <Fragment>
            {items.approved ?(<td style={{ color: "#29d129" , fontSize:"14px" }}>Approved</td>):(<td style={{ color: "#FFA500" }}>InProgress</td>)}
            </Fragment>
            
          </tr>
           
          ))}
        
         
        </tbody>
      </table>
  );
}
