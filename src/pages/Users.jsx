import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Inject,
  Toolbar,
} from '@syncfusion/ej2-react-grids';

import { userGrid, userData } from '../data/userListData';

import { Header } from '../components';

const Users = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Users" />
      <GridComponent
        dataSource={userData}
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
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Users;
