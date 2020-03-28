import React from 'react';
import {
  MDBDataTable,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBBadge
} from 'mdbreact';
import SectionContainer from './sectionContainer';

class UserDirectory extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/Rotarepmi/exjson/db')
      .then(res => res.json())
      .then(json => {
        let data = json;
        let { columns, rows } = json;
        console.log(json);
        console.log(data);
        console.log(columns);
        console.log(rows);

        columns.push({
          label: 'Own Data',
          field: 'id',
          sort: 'asc',
          width: 150
        });

        rows = rows.map((row, key) => ({
          ...row,
          id: (
            <MDBBadge
              color='info'
              className='w-100'
              searchvalue={key}
              key={key}
            >
              {key}
            </MDBBadge>
          )
        }));

        data = {
          columns,
          rows
        };
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <MDBContainer className='mt-3'>
            <SectionContainer
              noBorder
            >
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTable
                    striped
                    bordered
                    hover
                    scrollX
                    scrollY
                    maxHeight='400px'
                    data='https://my-json-server.typicode.com/Rotarepmi/exjson/db'
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
      </MDBContainer>
    );
  } 
}
export default UserDirectory;
