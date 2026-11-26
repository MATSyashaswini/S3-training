
import React, { useState, useRef } from "react";
import "./Product.css";

const Product = () => {

    const pid = useRef();
    const pname = useRef();
    const price = useRef();
    const quantity = useRef();

    const [invoice, setInvoice] = useState(null);

    const print_invoice = () => {

        let p_id = pid.current.value;
        let p_name = pname.current.value;
        let p_price = Number(price.current.value);
        let p_qut = Number(quantity.current.value);

        let total = p_price * p_qut;
        let discount = 0;

        if (total < 20000) {
            discount = total * 0.15;
        }
        else if (total >= 20000 && total < 50000) {
            discount = total * 0.21;
        }
        else {
            discount = total * 0.31;
        }

        let gst = total * 0.18;
        let final_bill = total - discount + gst;

        setInvoice({
            p_id,
            p_name,
            p_price,
            p_qut,
            total,
            discount: discount.toFixed(2),
            gst: gst.toFixed(2),
            final_bill: final_bill.toFixed(2)
        });
    };

    return (
        <div className="page-container">

            <div className="invoice-wrapper">

                <div className="form-card">

                    <h2>Product Billing</h2>
                    <p className="subtitle">Enter product details to generate invoice</p>

                    <div className="input-group">
                        <label>Product ID</label>
                        <input type="text" ref={pid} placeholder="Enter product ID" />
                    </div>

                    <div className="input-group">
                        <label>Product Name</label>
                        <input type="text" ref={pname} placeholder="Enter product name" />
                    </div>

                    <div className="input-group">
                        <label>Price (₹)</label>
                        <input type="number" ref={price} placeholder="Enter price" />
                    </div>

                    <div className="input-group">
                        <label>Quantity</label>
                        <input type="number" ref={quantity} placeholder="Enter quantity" />
                    </div>

                    <button className="generate-btn" onClick={print_invoice}>
                        Generate Invoice
                    </button>

                </div>

                {invoice && (
                    <div className="invoice-card">

                        <div className="invoice-header">
                            <h2>Invoice</h2>
                            <span>✓ Generated</span>
                        </div>

                        <div className="product-details">
                            <p><strong>Product ID:</strong> {invoice.p_id}</p>
                            <p><strong>Product Name:</strong> {invoice.p_name}</p>
                            <p><strong>Price:</strong> ₹{invoice.p_price}</p>
                            <p><strong>Quantity:</strong> {invoice.p_qut}</p>
                        </div>

                        <div className="bill-details">
                            <div><span>Total</span><strong>₹{invoice.total.toFixed(2)}</strong></div>
                            <div><span>Discount</span><strong className="discount">- ₹{invoice.discount}</strong></div>
                            <div><span>GST (18%)</span><strong>₹{invoice.gst}</strong></div>
                        </div>

                        <div className="final-total">
                            <span>Final Bill</span>
                            <h2>₹{invoice.final_bill}</h2>
                        </div>

                    </div>
                )}

            </div>

        </div>
    );
};

export default Product;
