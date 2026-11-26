import React,{useState, useRef} from "react";
import "./Electricity.css";

const Electricity=()=>{
    const cid = useRef();
    const cname = useRef();
    const currentReading = useRef();
    const previousReading = useRef();

    const [bill, setBill] = useState(null);

    const print_bill = () =>
    {
        let c_id = cid.current.value;
        let c_name = cname.current.value;
        let curr_read = Number(currentReading.current.value);
        let prev_read = Number(previousReading.current.value);
        
        if (curr_read < prev_read) {
            alert("Current reading cannot be less than previous reading");
            return;
        }

        let units = curr_read - prev_read;
        let rate = 0;

        if (units < 300){
            rate = 1.75;
        }
        else if (units >= 300 && units < 500){
            rate = 3.0;
        }
        else{
            rate = 7.25;
        }
        let total_bill = (units * rate).toFixed(2)

        setBill({
            c_id,
            c_name,
            curr_read,
            prev_read,
            units,
            total_bill,
        });
    };
    return(
        <>
        <div className="container">
            <div className="form-section">
                <h2>Electricity Bill</h2>
                <div>
                    <label>Consumer Id :</label>
                    <input type="text" ref={cid} />
                </div>
                <div>
                    <label>Consumer Name :</label>
                    <input type="text" ref={cname}/>
                </div>
                <div>
                    <label>Current Reading :</label>
                    <input type="number" ref={currentReading}/>
                </div>
                <div>
                    <label>Previous reading :</label>
                    <input type="number" ref={previousReading}/>
                </div>
                <div>
                    <button onClick={print_bill}>Print Bill</button>
                </div>

                
        </div>
        {bill &&(
                    <div className="output-section">
                        <h3>OutPut Format</h3>
                        <p>Consumer Id:{bill.c_id}</p>
                        <p>Consumer Name:{bill.c_name}</p>
                        <p>Current Reading:{bill.curr_read}</p>
                        <p>Previous Reading:{bill.prev_read}</p>
                        <p>Units:{bill.units}</p>
                        <p>Total Bill:{bill.total_bill}</p>
                    </div>
                )}
            </div>
        </>
    );
};
export default Electricity;