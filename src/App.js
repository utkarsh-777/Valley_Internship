import React from "react";
import 'semantic-ui-css/semantic.min.css';
import {
  Container,
  Tab
} from "semantic-ui-react";
import Table from "./components/table";
import PieChart from "./components/pieChart"

const App = () => {

  const panes = [{menuItem:"Tab1",render: ()=><Tab.Pane><Table /></Tab.Pane>},
  {menuItem:"Tab2",render: ()=><Tab.Pane><PieChart /></Tab.Pane>}
  ]

  return(
    <Container style={{marginTop:"30px"}}>
    <h2 style={{marginBottom:"30px"}}>Assignment Valley Internship</h2>
      <Tab panes={panes} />
    </Container>
  )
}

export default App;


