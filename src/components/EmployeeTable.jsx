import React from 'react';
import image from '../assets/employee.jpg'
import growth from '../assets/g1.png'
import i1 from '../assets/i1.png'
import i2 from '../assets/i2.png'
import i3 from '../assets/i3.png'
import f from "../assets/f.jpg"
import f2 from "../assets/f2.jpg"
import f3 from "../assets/f3.jpg"
import e1 from "../assets/e1.jpg"
import e2 from "../assets/e2.jpg"
import e3 from "../assets/e3.jpg"
import e4 from "../assets/e4.jpg"
import e5 from "../assets/e5.jpg"
import e6 from "../assets/e6.jpg"
import e7 from "../assets/e7.jpg"



function EmployeeTable() {
  return (
    <div className="container">
      <div className="table-container">
        <table >
          <thead>
            <tr class="header-row">
              <th>Rank</th>
              <th>Name</th>
              <th>Designation</th>
              <th>No. of hours worked</th>
              <th>Changes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img className="i" src={i1} alt="gold" /> 1</td>
              <td><img className="id-image" src={e1} alt="profile" /> Rakesh Sharma</td>
              <td>UI/UX Designer</td>
              <td>7(42)</td>
              <td><span className="increase">▲ 1.5 hrs</span></td>
            </tr>
            <tr>
              <td><img className="i" src={i2} alt="silver" /> 2</td>
              <td><img className="id-image" src={f} alt="profile" /> Ankita Thakur</td>
              <td>HR Recruiter</td>
              <td>7(41)</td>
              <td><span className="decrease">▼ 1.5 hrs</span></td>
            </tr>
            <tr>
              <td><img className="i" src={i3} alt="bronze" /> 3</td>
              <td><img className="id-image" src={e2} alt="profile" /> Sarah Yadav</td>
              <td>Product Manager</td>
              <td>7(40)</td>
              <td><span className="increase">▲ 1.5 hrs</span></td>
            </tr>
            <tr>
              <td className="centered">4</td>
              <td><img className="id-image" src={f2} alt="profile" /> Harsha Shivhare</td>
              <td>Designer</td>
              <td>7(37)</td>
              <td><span className="increase">▲ 1.5 hrs</span></td>
            </tr>
            <tr>
              <td className="centered">5</td>
              <td><img className="id-image" src={f3} alt="profile" /> Vanhi Rai</td>
              <td>Video Editor</td>
              <td>7(37)</td>
              <td><span className="decrease">▼ 1.5 hrs</span></td>
            </tr>
            <tr>
              <td className="centered">6</td>
              <td><img className="id-image" src={e3} alt="profile" /> Bhanu Sharma</td>
              <td>Business Analyst</td>
              <td>7(32)</td>
              <td><span className="decrease">▼ 1.5 hrs</span></td>
            </tr>
            <tr>
              <td className="centered">8</td>
              <td><img className="id-image" src={e4} alt="profile" /> Sunil Yadav</td>
              <td>Developer</td>
              <td>7(24)</td>
              <td><span className="increase">▲ 1.5 hrs</span></td>
            </tr>
            <tr>
              <td className="centered">9</td>
              <td><img className="id-image" src={e5} alt="profile" /> Akash Roy</td>
              <td>Business Analyst</td>
              <td>7(21)</td>
              <td><span className="decrease">▼ 1.5 hrs</span></td>
            </tr>
            <tr>
              <td className="centered">10</td>
              <td><img className="id-image" src={e6} alt="profile" /> Rohit Soni</td>
              <td>Developer</td>
              <td>7(20)</td>
              <td><span className="decrease">▼ 1.5 hrs</span></td>
            </tr>
            <tr>
              <td className="centered">11</td>
              <td><img className="id-image" src={e7} alt="profile" /> Suraj Chauhan</td>
              <td>Developer</td>
              <td>7(18)</td>
              <td><span className="decrease">▼ 1.5 hrs</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="employee-container">
        <img src={image} alt="employee" className="card-image"/>
        <div className="employee-details">
          <h3 className="blue-violet-text">Employee of the Month</h3>
          <h4 className="name">Rakesh Sharma</h4>
          <p className='ui'>UI/UX Designer</p>
        </div>
        <div>
          <img className="growth" src={growth} alt="growth image" />
        </div>
      </div>
    </div>
  );
}





export default EmployeeTable;
