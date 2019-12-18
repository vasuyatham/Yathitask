import React, { Component } from 'react'
import MaterialTable from 'material-table';
class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { username: 'murali', email: 'Murali@gmail.com', quentity:'33', id:'5'},
                { username: 'srinivas', email: 'srinivas@gmail.com', quentity:'23', id:'9'  },
                { username: 'vasu', email: 'ysrinivas@gmail.com', quentity:'23', id:'239'  },
                { username: 'Naga', email: 'nsrinivas@gmail.com', quentity:'23', id:'19'  },
              ]
        };
 
    }
    render() {
       const columns = [

            {
                title: "Username",
                field: "username",
            },
            {
                title: "Email",
                field: "email",
            },
            {
                title: "No of brick",
                field: "quentity"
            },
            {
                title: "Id of the User",
                field: "id"
            },


        ]

        return (
            <div>
                <MaterialTable
                    title="Admin Dashboard"
                     columns={columns}
                     data={this.state.data}
                     editable={{
                        isEditable: rowData => rowData.updated_at === null, 
                        isDeletable: rowData => rowData.updated_at === null, 
                        onRowUpdate: (newData, oldData) =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              {
                                const data = this.state.data;
                                const index = data.indexOf(oldData);
          
                                data[index] = newData;
                                this.setState({ data }, () => resolve());
          
                              }
                              resolve()
                            }, 1000)
                          }),
          
                        onRowDelete: oldData =>
                          new Promise((resolve) => {
                            setTimeout(() => {
                              {
                                let data = this.state.data;
                                const index = data.indexOf(oldData);
                                data.splice(index, 1);
                                this.setState({ data }, () => resolve());
          
                              }
                              resolve()
                            }, 1000)
                          }),
                      }}
          
          
                />
            </div>
        )
    }
}

export default Table
