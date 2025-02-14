import React, {useEffect, useState} from "react";
import axios from "axios";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';

const List = (props) => {
  const [userList, setUserList] = useState({});

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log("*********",res.data);
        setUserList(res.data)
      }).catch((error) => {
        // On error, set the error state
      });
  }, []);


    return (
      <>
        <Stack spacing={2}>
        {userList?.length>0 ? userList?.map((getItem) => {
          return(<Item key={getItem.id}>            
              <Stack direction="row" spacing={2} >
                  <Item><input type="checkbox" name="userList" value={getItem.id} /></Item>
                  <Item>{getItem.name}</Item>
                  <Item>{getItem.username}</Item>
                  <Item>{getItem.email}</Item>
                  <Item>Edit</Item>
              </Stack>                      
          </Item>)
          }) : <div>Not Found</div>}
          <Item ><input type="button" name="userDelete" value="Delete"/></Item>
        </Stack>
      </>
    );
  };
  
  export default List;
  