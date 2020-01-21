const mongoose = require('mongoose');

const { Schema } = mongoose;

const QualitySchema = new Schema({
  RDM_Number: Number,
  Part_Number: String,
  Part_Description: String,
  Supplier_Name: String,
  Supplier_Number: String,
  Qty_Defective: Number,
  Qty_Rejected: Number,
  Unit_Cost: Number,
  Total_Cost: Number,
  Planner: Number,
  Buyer: String,
  RDM_Date: Date,
  RDM_Close_Date: Date,
  Qty_Received: Number,
  Corrective_Action_Request: String,
  Corrective_Action_Accepted: String,
  CA_Close_Date: Date,
  PCA_Due_Date: Date,
  ID24_hour_Response: String,
  Reason_Code: String,
  Reason_for_Rejection: String,
  Comments: String,
  PO: String,
  Date_Material_Received: Date,
  Responsibility: String,
  RMA_Number: String,
  Return_to_supplier_for_Rework: String,
  Return_to_supplier_for_Replacement: String,
  Supplier_Part_Reworked_by_X_Rite: String,
  Do_not_replace__credit_only_: String,
  In_House_Rejection: String,
  Debit_Memo_Number: String,
  COM_Shipper_Number: String,
  Employee_Name: String,
  Copy_to_Supplier: String,
  Processed_By: String,
  RejectedDetail: String,
  SeverityCode: Number,
});

module.exports = mongoose.model('quality', QualitySchema);