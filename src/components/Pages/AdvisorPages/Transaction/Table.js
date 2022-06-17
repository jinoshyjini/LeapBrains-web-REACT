import BootstrapTable from 'react-bootstrap-table-next';
const products = [
    { id: 1, name: "apple", price: 1 },
    { id: 2, name: "orange", price: 2 },
    { id: 3, name: "banana", price: 3 },
    { id: 4, name: "peach", price: 2 },
    { id: 5, name: "carrot", price: 1 },
    { id: 6, name: "grapes", price: 4 },
    { id: 7, name: "mango", price: 1 },
    { id: 8, name: "potatoe", price: 3 },
    { id: 9, name: "onion", price: 3 }
  ];
const columns = [{
  dataField: 'id',
//   text: 'Product ID'
}, {
  dataField: 'name',
//   text: 'Product Name'
}, {
  dataField: 'price',
//   text: 'Product Price'
}];
 
export default () =>
  <BootstrapTable keyField='id' data={ products } columns={ columns } class="table table-borderless"/>