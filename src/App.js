import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
import axios from 'axios';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import ColumnGroupDemo from './components/ColumnGroupDemo';
function App() {
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
const splitDateTime = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  return {
    date: dateTime.toLocaleDateString(),
    time: dateTime.toLocaleTimeString(),
  };
};


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
  <Column field="created_at" header="Date" body={(rowData) => formatDate(rowData.created_at)} />
<Column field="created_at" header="Time" body={(rowData) => formatTime(rowData.created_at)} />


      </Row>
  </ColumnGroup>
);






  return (
    <div className="App">

    <img src='/logo.png'  style={{width:"200px",marginTop:"20px"}}alt='' />
    <ColumnGroupDemo/>    </div>
  );
}

export default App;