namespace my.requests;

entity Requests {
  key vendor_id : String;
  req_name  : String;
  pur_grp  : String;
  exp_date : String;
  mat_id : String;
  mat_grp : String;
  qty : String;
  uom : String;
  price : String;
  cur : String;
  plant :String;
  approved : Boolean 
}