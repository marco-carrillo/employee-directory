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
import NbrRecords from './nbrRecords';

class UserDirectory extends React.Component {
  state = {
    data: {},
    records:"10",
    gender: "both",
    nationality: "all"
  };

  //*********************************************************/
  //  will wait until component loads before fetching data   /
  //*********************************************************/
  componentDidMount() {
       this.getsRandomEmployees(10);  // Calls to fetch 100 users from API
  }

  //********************************************************************************************/
  //  This function calls the API that returns random names to be included in the dataTable    */
  //********************************************************************************************/
  getsRandomEmployees = (records) => {
    fetch(`https://randomuser.me/api/?results=${records}`)
      .then(res => res.json())
      .then(json => {
        let rawdata = json.results;

        //****************************************************************************************/
        //  Columns array defines the name of the column, the name of the "rows" array that will 
        //  feed the data for this column, how it will be sorted by default, and its width
        //****************************************************************************************/
        let columns= [
          {
            label: 'Name',
            field: 'name',
            sort: 'asc',
            width: 250
          },
          {
            label: 'Gender',
            field: 'gender',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Email',
            field: 'email',
            sort: 'asc',
            width: 250
          },
          {
            label: 'Age',
            field: 'age',
            sort: 'asc',
            width: 75
          },
          {
            label: 'Phone',
            field: 'phone',
            sort: 'asc',
            width: 140
          },
          {
            label: 'Cell phone',
            field: 'cell',
            sort: 'asc',
            width: 140
          },
          {
            label: 'Office',
            field: 'office',
            sort: 'asc',
            width: 75
          }
        ];

        let rows=[];
        let data=[];
        
        rows=rawdata.map((row,key)=>({
          name: `${row.name.title} ${row.name.first} ${row.name.last}`,
          gender: row.gender,
          email: row.email,
          age: row.dob.age,
          phone: row.phone,
          cell: row.cell,
          office: row.nat
        }));

        //******************************************/
        // Data structure required by MDBootstrap  */
        //******************************************/
        data = {
          columns,
          rows
        };
        this.setState({ data });
      });
  }

  //********************************************************************/
  //  This function is called whenever the user selects to retrieve    */
  //  more employees, either 100, 500, or 1,000 employees              */
  //********************************************************************/
  handleRecordsChange = (changeEvent) =>{
    this.setState({...this.state,records: changeEvent.target.value});
    this.getsRandomEmployees(changeEvent.target.value);  // Calling the API to refresh data
  }


  //********************************************************************/
  //  Rendering the datatable with all of the information from users
  //********************************************************************/
  render() {
    const { data } = this.state;
    return (
      <MDBContainer className='mt-3'>
            <NbrRecords whichOne={this.state.records} onChange={this.handleRecordsChange}/>
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
                    data={data}
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
      </MDBContainer>
    );
  } 
}
export default UserDirectory;
