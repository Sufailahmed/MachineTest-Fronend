import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";



import revenueData from "./data.json";
import sourceData from "./sourceData.json";
import { Link } from 'react-router-dom';

import Contact from './Contact';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";

function Dashboard() {
  const [user,setUser]=useState("");
  useEffect(()=>{
    const existinguserString = sessionStorage.getItem('existinguser');

    // Step 2: Parse the JSON string into an object
    const existinguser = JSON.parse(existinguserString);
    
    // Step 3: Access the username property
    const username = existinguser.username;

    setUser(username)
  },[])



  return (
   <>
   <div className="App">
   <div class="container">
    <nav>
      <ul>
       <Link to='/dashboard'><li>Dashboard</li></Link> 
       <Link to='/about'><li>About</li></Link> 
       <Link to='/contact'><li>Contact</li></Link> 
       {
        user=="admin"?
        <Link to='/admin'><li>Admin</li></Link> 

       :' '}
  
      
      </ul>
    </nav>
  </div>
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              },
            ],
          }}
          options={{
            elements: {
              line: {
                tension: 0.5,
              },
            },
            plugins: {
              title: {
                text: "Monthly Revenue & Cost",
              },
            },
          }}
        />
      </div>

      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderRadius: 5,
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Source",
              },
            },
          }}
        />
      </div>

      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
                borderColor: [
                  "rgba(43, 63, 229, 0.8)",
                  "rgba(250, 192, 19, 0.8)",
                  "rgba(253, 135, 135, 0.8)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              title: {
                text: "Revenue Sources",
              },
            },
          }}
        />
      </div>
      
    </div>
   
   </>
  )
}

export default Dashboard