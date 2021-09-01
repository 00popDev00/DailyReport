import React from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import "./index.scss";
import Constant from "../../../constant/bill";

const App = () => {
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithMethod = () => {
    let element = container.current || document.body;
    savePDF(element, {
      paperSize: "A4",
      margin: 15,
      fileName: `Report for ${new Date().getFullYear()}`,
    });
  };

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <div>
      <div className="example-config">
        <button className="k-button" onClick={exportPDFWithComponent}>
          Export with component
        </button>
        &nbsp;
        <button className="k-button" onClick={exportPDFWithMethod}>
          Export with method
        </button>
      </div>
      <div className="border rounded p-2">
        <PDFExport
          ref={pdfExportComponent}
          paperSize="A4"
          margin={40}
          fileName={`Report for ${new Date().getFullYear()}`}
          author="KendoReact Team"
        >
          <div ref={container}>
            <table className="cm-doc">
              <tbody>
                <tr>
                  <td colSpan="6">
                    <p>
                      {Constant.gstin} : <span>{Constant.company.gstin}</span>
                    </p>
                    <p>
                      {Constant.pan} : <span>{Constant.company.pan}</span>
                    </p>
                  </td>
                  <td colSpan="6">
                    <p className="text-end">
                      <span>Original copy of Reciept</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">
                    <p className="text-center">
                      <span>Tax Invoice</span>
                    </p>
                    <p>
                      <span>{Constant.company.name}</span>
                    </p>
                    <p>
                      <span>{Constant.company.address}</span>
                    </p>
                    <p>
                      <span>Tel: {Constant.company.tel[0]}</span>
                    </p>
                    <p>
                      <span>Email: {Constant.company.email}</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <p>
                      <span>{Constant.invoiceNumber}:</span>
                    </p>
                    <p>
                      <span>{Constant.invoiceDate}:</span>
                    </p>
                    <p>
                      <span>{Constant.placeOfSupply}:</span>
                    </p>
                    <p>
                      <span>{Constant.reverseCharge}:</span>
                    </p>
                    <p>
                      <span>{Constant.po}:</span>
                    </p>
                    <p>
                      <span>{Constant.poDate}:</span>
                    </p>
                  </td>
                  <td colSpan="6">
                    <p>
                      <span>{Constant.contactPerson}:</span>
                    </p>
                    <p>
                      <span>{Constant.contactNumber}:</span>
                    </p>
                    <p>
                      <span>{Constant.ref}:</span>
                    </p>
                    <p>
                      <span>{Constant.remark}:</span>
                    </p>
                    <p>
                      <span>{Constant.vendorCode}:</span>
                    </p>
                    <p>
                      <span>{Constant.challanDate}:</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="6">
                    <p>
                      <span>{Constant.billTo}:</span>
                    </p>
                    <p>
                      <span>_</span>
                    </p>
                  </td>
                  <td colSpan="6">
                    <p>
                      <span>{Constant.shipTo}:</span>
                    </p>
                    <p>
                      <span>__</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">
                    <p>
                      <span>{Constant.consignee}:</span>
                    </p>
                    <p>
                      <span>{Constant.customer.email}:</span>
                    </p>
                    <p>
                      <span>{Constant.customer.mobile}:</span>
                    </p>
                    <p>
                      <span>{Constant.customer.gstin}:</span>
                    </p>
                    <p>
                      <span>{Constant.customer.cst}:</span>
                    </p>
                    <p>
                      <span>{Constant.customer.pan}:</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="8">
                    <p>
                      <span>{Constant.orderNumber}:</span>
                    </p>
                    <p>
                      <span>{Constant.orderDescription}:</span>
                    </p>
                  </td>
                  <td colSpan="4">
                    <p>
                      <span>{Constant.challanNumber}:</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="12"></td>
                </tr>
                <tr>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.descriptionTable.sn}</span>
                    </p>
                  </th>
                  <th colSpan="4">
                    <p>
                      <span>{Constant.descriptionTable.description}</span>
                    </p>
                  </th>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.descriptionTable.hsnOrSac}</span>
                    </p>
                  </th>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.descriptionTable.uom}</span>
                    </p>
                  </th>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.descriptionTable.qty}</span>
                    </p>
                  </th>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.descriptionTable.rate}</span>
                    </p>
                  </th>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.descriptionTable.discount}</span>
                    </p>
                  </th>
                  <th colSpan="2">
                    <p>
                      <span>{Constant.descriptionTable.amount}</span>
                    </p>
                  </th>
                </tr>
                <EntryTemplate />
                <tr>
                  <td colSpan="10">
                    <p>
                      <span>{Constant.total}</span>
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      <span>0.00</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="10">
                    <p>
                      <span>{Constant.addCgst}</span>
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      <span>0.00</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="10">
                    <p>
                      <span>{Constant.addSgst}</span>
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      <span>0.00</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="10">
                    <p>
                      <span>{Constant.grandTotal}</span>
                    </p>
                  </td>
                  <td colSpan="2">
                    <p>
                      <span>0.00</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="12">
                    <p>
                      <span>{Constant.amountInWords}</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="5"></td>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.taxTable.taxRate}</span>
                    </p>
                  </th>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.taxTable.taxableAmount}</span>
                    </p>
                  </th>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.cgst}</span>
                    </p>
                  </th>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.sgst}</span>
                    </p>
                  </th>
                  <th colSpan="1">
                    <p>
                      <span>{Constant.taxTable.taxableAmount}</span>
                    </p>
                  </th>
                  <td colSpan="2"></td>
                </tr>
                <tr>
                  <td colSpan="5"></td>
                  <td colSpan="1">
                    <p>
                      <span>0.00</span>
                    </p>
                  </td>
                  <td colSpan="1">
                    <p>
                      <span>0.00</span>
                    </p>
                  </td>
                  <td colSpan="1">
                    <p>
                      <span>0.00</span>
                    </p>
                  </td>
                  <td colSpan="1">
                    <p>
                      <span>0.00</span>
                    </p>
                  </td>
                  <td colSpan="1">
                    <p>
                      <span>0.00</span>
                    </p>
                  </td>
                  <td colSpan="2"></td>
                </tr>
                <tr>
                  <td colSpan="12">
                    <p>
                      <span>{Constant.amountInWords}</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">
                    <p>
                      <span>Bank Detail</span>
                    </p>
                  </th>
                  <th colSpan="2">
                    <p>
                      <span>{Constant.bankTable.bankName}</span>
                    </p>
                  </th>
                  <th colSpan="4">
                    <p>
                      <span>{Constant.bankTable.branch}</span>
                    </p>
                  </th>
                  <th colSpan="2">
                    <p>
                      <span>{Constant.bankTable.acNumber}</span>
                    </p>
                  </th>
                  <th colSpan="2">
                    <p>
                      <span>{Constant.bankTable.ifsc}</span>
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan="2">
                    <p>
                      <span>Bank Detail</span>
                    </p>
                  </th>
                  <th colSpan="2">
                    <p>
                      <span>bankName</span>
                    </p>
                  </th>
                  <th colSpan="4">
                    <p>
                      <span>branch.branch.branch</span>
                    </p>
                  </th>
                  <th colSpan="2">
                    <p>
                      <span>005123010619</span>
                    </p>
                  </th>
                  <th colSpan="2">
                    <p>
                      <span>ICIC0000052</span>
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan="6">
                    <p>
                      <span>For {Constant.company.name}</span>
                    </p>
                  </th>
                  <th colSpan="6">
                    <p>
                      <span> {Constant.customerSignature}</span>
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan="6">
                    <p></p>
                  </th>
                </tr>
                <tr>
                  <th colSpan="6">
                    <p>
                      <span>For {Constant.ownerSignature}</span>
                    </p>
                  </th>
                </tr>
                <tr>
                  <th colSpan="12">
                    <p>
                      <span>{Constant.tnc}</span>
                    </p>
                  </th>
                </tr>
                <tr>
                  <td colSpan="12">
                    <p>
                      <span>
                        1. Goods once sold will not be taken back. 2. Interest @
                        18% p.a. will be charged if the payment is not made with
                        in the stipulated time. 3. Subject to 'Gujarat'
                        Jurisdiction only.
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </PDFExport>
      </div>
    </div>
  );
};

export default App;

const EntryTemplate = () => {
  return (
    <tr>
      <td colSpan="1">
        <p>
          <span>{Constant.descriptionTable.sn}</span>
        </p>
      </td>
      <td colSpan="4">
        <p>
          <span>Maintenance of EPABX and IP Office Manager.</span>
        </p>
      </td>
      <td colSpan="1">
        <p>
          <span>12345678</span>
        </p>
      </td>
      <td colSpan="1">
        <p>
          <span>12345678</span>
        </p>
      </td>
      <td colSpan="1">
        <p>
          <span>12345678</span>
        </p>
      </td>
      <td colSpan="1">
        <p>
          <span>12345678</span>
        </p>
      </td>
      <td colSpan="1">
        <p>
          <span>12345678</span>
        </p>
      </td>
      <td colSpan="2">
        <p>
          <span>12345678</span>
        </p>
      </td>
    </tr>
  );
};
