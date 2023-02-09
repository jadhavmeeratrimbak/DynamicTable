import React, { Component } from "react";

// import "./style.css";

class Math1 extends Component {
  sum() {
    var data1 = parseInt(document.getElementById("in1").value);
    var data2 = parseInt(document.getElementById("in2").value);
    var total = data1 + data2;

    if (isNaN(total)) {
      if (isNaN(data1) && Number.isInteger(data2)) {
        console.log("First Empty");
        total = data2;
      }
      if (isNaN(data2) && Number.isInteger(data1)) {
        console.log("Second Empty");
        total = data1;
      }
      if (isNaN(data1) && isNaN(data2)) {
        console.log("Both Empty");
        total = 0;
      }
      console.log(" ");
    }

    document.getElementById("in3").innerHTML = total;
    document.getElementById("in4").innerHTML = "addition";
  }
  sub() {
    var data1 = parseInt(document.getElementById("in1").value);
    var data2 = parseInt(document.getElementById("in2").value);
    var total = data1 - data2;

    if (isNaN(total)) {
      if (isNaN(data1) && Number.isInteger(data2)) {
        console.log("First Empty");
        total = data2;
      }
      if (isNaN(data2) && Number.isInteger(data1)) {
        console.log("Second Empty");
        total = data1;
      }
      if (isNaN(data1) && isNaN(data2)) {
        console.log("Both Empty");
        total = 0;
      }
      console.log(" ");
    }

    document.getElementById("in3").innerHTML = total;
    document.getElementById("in4").innerHTML = "substraction";
  }
  mul() {
    var data1 = parseInt(document.getElementById("in1").value);
    var data2 = parseInt(document.getElementById("in2").value);
    var total = data1 * data2;

    if (isNaN(total)) {
      if (isNaN(data1) && Number.isInteger(data2)) {
        console.log("First Empty");
        total = data2;
      }
      if (isNaN(data2) && Number.isInteger(data1)) {
        console.log("Second Empty");
        total = data1;
      }
      if (isNaN(data1) && isNaN(data2)) {
        console.log("Both Empty");
        total = 0;
      }
      console.log(" ");
    }

    document.getElementById("in3").innerHTML = total;
    document.getElementById("in4").innerHTML = "multipliction";
  }
  div() {
    var data1 = parseInt(document.getElementById("in1").value);
    var data2 = parseInt(document.getElementById("in2").value);
    var total = data1 / data2;

    if (isNaN(total)) {
      if (isNaN(data1) && Number.isInteger(data2)) {
        console.log("First Empty");
        total = data2;
      }
      if (isNaN(data2) && Number.isInteger(data1)) {
        console.log("Second Empty");
        total = data1;
      }
      if (isNaN(data1) && isNaN(data2)) {
        console.log("Both Empty");
        total = 0;
      }
      console.log(" ");
    }

    document.getElementById("in3").innerHTML = total;
    document.getElementById("in4").innerHTML = "division";
  }

  render() {
    return (
      <div className="m-cont">
        <div className="app-cont">
          <h1>Add Two Numbers</h1>

          {/* 
          <img className="pic1" src={Pict1} alt="Y la Pic??" /> */}

          <div className="data-cont">
            <div className="indata">
              <label>Number 1:</label>
              <input type="text" name="perc" id="in1" className="in1" />
            </div>
            <br />

            <div className="indata">
              <label>Number 2:</label>
              <input type="text" name="perc" id="in2" className="in1" />
            </div>
            <br />

            <input
              className="button1"
              type="submit"
              onClick={() => this.sum()}
              value="Addition"
            ></input>
            <input
              className="button1"
              type="submit"
              onClick={() => this.sub()}
              value="Substraction"
            ></input>
            <input
              className="button1"
              type="submit"
              onClick={() => this.mul()}
              value="multiplaction"
            ></input>
            <input
              className="button1"
              type="submit"
              onClick={() => this.div()}
              value="Division"
            ></input>
            <br />
            <br />

            <div className="indata">
              <label>-- Total --</label>
              <div id="in3" className="answ1"></div>
              <div id="in4" className="answ1"></div>
            </div>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Math1;
