import React from "react";
import dataJSON from "../data";

import {
    Table
} from "semantic-ui-react";

const TableComponent = () => {
    return(
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Department Name</Table.HeaderCell>
            <Table.HeaderCell>Sales</Table.HeaderCell>
            <Table.HeaderCell>Percentage</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {dataJSON.map(item=>{
          return(
            <Table.Row>
              <Table.Cell>{item['Department Name']}</Table.Cell>
              <Table.Cell>{item['Sales']}</Table.Cell>
              <Table.Cell>{item['Percentage']}</Table.Cell>
            </Table.Row>
          )
        })}
        </Table.Body>
      </Table>
    )
}

export default TableComponent;