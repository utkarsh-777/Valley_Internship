import React from "react";
import CanvasJSReact from '../canvasjs.react';
import dataJSON from "../data";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const PieChart = () => {
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
          text: "Department Wise Sales"
        },
        data: [{
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label}</b>: {y}%",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{label} - {y}%",
          dataPoints: dataJSON.map(item=>(
            {y:parseInt(item["Percentage"].replace("%","")),label:item["Department Name"]}
          ))
        }]
      }
    return(
      <div>
        <CanvasJSChart options = {options} />
      </div>
    )
}

export default PieChart;