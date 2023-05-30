import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { userGrid } from '../data/userListData';
import { Header } from '../components';
import { useStateContext } from '../context/ContextProvider';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;
const authToken = sessionStorage.getItem('authToken');

const Users = () => {
  // API related code (MUST BE CHANGED TO CONTEXT)
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const { currentOrganization } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/organisations/${currentOrganization}/users`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        console.log('Users for this organization', response.data);
        setData(response.data);
        setIsPending(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {!isPending ? (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
          <Header category="Page" title="Users" />
          <GridComponent
            dataSource={data}
            allowPaging
            allowSorting
            toolbar={['Search']}
            width="auto"
          >
            <ColumnsDirective>
              {userGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Page]} />
          </GridComponent>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Users;
