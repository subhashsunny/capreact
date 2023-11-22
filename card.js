import React from "react";
import "./card.css";
 
class FValidation extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm =
      this.submituserRegistrationForm.bind(this);
  }
  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields,
    });
  }
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      alert("Form Submitted Successfully");
    }
  }
  validateForm() {
    let fields = this.state.fields;
    let fvalid = true;
    let errors = {};
   
    if (!fields["BillNumber"]) {
      fvalid = false;
      errors["BillNumber"] = "*this field cannot be empty";
    }
    if (fields["BillNumber"]) {
        fvalid = false;
        errors["BillNumber"] = "*Please the vaild bill no of five digits.";
      }
      if (!fields["BillNumber"]) {
        fvalid = false;
        errors["BillNumber"] = "*Please enter a valid bill number.";
      }
    if (!fields["Amount"]) {
      fvalid = false;
      errors["Amount"] = "*field cannot be empty.";
    }
 
    this.setState({
      errors: errors,
    });
    return fvalid;
  }
  render() {
    return (
        
     <div id="main-registration-container">
        <center><h1>Bill Payments</h1></center>
        <center>
        <table>
            <tr>
                <td>
                <div id="register">
             
                  <form
                    method="post"
                    name="userRegistrationForm"
                    onSubmit={this.submituserRegistrationForm}
                  >
                 
                   <label> Type of Transaction &nbsp; &nbsp; &nbsp;</label>
                  <select
                      name="Select the Bill Type"
                      value={this.state.fields.username}
                      onChange={this.handleChange}
                    >
                      <option value="">Select...</option>
                      <option value="option1">DTH payment</option>
                      <option value="option2">Electricity Bill</option>
                      <option value="option2">Phone Bill</option>
                      {/* Add more options as needed */}
                    </select>
                    <div className="errorMsg">
                      {this.state.errors.transaction}
                    </div>
                    <br></br>
                    <br></br>
                    <label>Bill Number</label>
                    <input
                      type="text"
                      name="Bill Number"
                      value={this.state.fields.BillNumber}
                      onChange={this.handleChange}
                    />
                    <div className="errorMsg">
                      {this.state.errors.BillNumber}
                    </div>
                    <label>Amount </label>
                    <input
                      type="number"
                      name="Amount"
                      value={this.state.fields.mobileno}
                      onChange={this.handleChange}
                    />
                    <div className="errorMsg">{this.state.errors.Amount}</div>
 
                    <input type="submit" className="button" value="Pay" />
                  </form>
                 
                </div>
                </td><td></td><td>
                    <img src="./Images/card.png" height="350px"/>
                </td>
                </tr>
                </table>
                </center>
              </div>
          
      
    );
  }
}
export default FValidation;