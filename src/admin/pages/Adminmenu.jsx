import React from 'react'
import Mysidebar from '../components/Mysidebar'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import best1 from '../assets/images/best1.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
function Adminmenu() {
  const generateRow = () =>{
    const row = [];
    for(let i=0; i<=100; i++){
      row.push(
        <tr key={i}>
        <td>{i}</td>
        <td>
          <img src={best1} alt="" /> french fries
        </td>
        <td>6741</td>
        <td>in stock</td>
        <td>$47</td>
        <td>
          <button>edit</button>
          <button>delete</button>
        </td>
      </tr>
      )
    }
    return row;
  }
  return (
    <div className="container-fluid" style={{backgroundColor: "rgba(235, 235, 235, 0.5)"}}>
    <div className="row">
      <div className="col-md-2 border sidebar"><Mysidebar/></div>
      <div className="col-md-10 border content p-md-5">
      <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              MUI
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Core
            </Link>
            <Link
              underline="hover"
              color="text.primary"
              href="/material-ui/react-breadcrumbs/"
              aria-current="page"
            >
              Breadcrumbs
            </Link>
          </Breadcrumbs>
        </div>

        <hr />
        <table>
          <thead>
          <tr>
            <td><h1>menu</h1></td>
          </tr>
          <tr>
            <td>sort</td>
            <td>search</td>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>product id</td>
              <td>product name</td>
              <td>quantity </td>
              <td>status</td>
              <td>price</td>
              <td>operation</td>
            </tr>
            {generateRow()}
          </tbody>
        </table>
        <Stack className='my-4' spacing={5}>
              <Pagination
                count={10}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                  />
                )}
              />
            </Stack>
      </div>
    </div>
  </div>
  )
}

export default Adminmenu