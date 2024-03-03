
import React, { useState,useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Row } from 'primereact/row';
import axios from 'axios';
import './style.css'
export default function ColumnGroupDemo() {

    const [data, setData] = useState([]);

    const [filters, setFilters] = useState({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
    

    useEffect(() => {
        axios.get('http://localhost:5000/getdata').then(
            res => {
                setData(res.data);
            }
        );
      }, []);

     
      
const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString();
  };
  
  const formatTime = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString();
  };
  
    const headerGroup = (
        <ColumnGroup>

            <Row>

            <Column field='sno' header="ID" sortable/>
            <Column field='customer_name' header="Name" sortable/>
            <Column field='age' header="Age" sortable/>
            <Column field='location' header="City"   sortable/>
          
                <Column header="Created_At" colSpan={2}    />

            </Row>
            <Row className='pos'>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column></Column>
            <Column field='created_at' header="Date" sortable  body={(rowData) => formatDate(rowData.created_at)} />
            <Column field="created_at" header="Time" sortable body={(rowData) => formatTime(rowData.created_at)} />
           
            </Row>
        </ColumnGroup>
    );



    return (
      <div className='card' style={{marginTop:"10px"}} > {/* Apply background color here */}
      <InputText
        placeholder='Search Here!'
  onInput={(e)=>
    setFilters({
      global: { value: e.target.value, matchMode: FilterMatchMode.CONTAINS },

    })
  }


/>

            <DataTable value={data} headerColumnGroup={headerGroup} tableStyle={{ minWidth: '50rem' }}  
            sortMode='multiple' filters={filters}

            paginator
       rows={20}
      rowsPerPageOptions={[20,40,50]}
      totalRecords={3}
            >

            <Column field='sno' header="ID" sortable/>
            <Column field='customer_name' header="Name" sortable/>
            <Column field='age' header="Age" sortable/>
            <Column field='location' header="City" sortable/>
            <Column field='created_at' header="Date"  sortable  body={(rowData) => formatDate(rowData.created_at)} />
            <Column field="created_at" header="Time" sortable body={(rowData) => formatTime(rowData.created_at)} />
                              </DataTable>
        </div>
    );
}
        