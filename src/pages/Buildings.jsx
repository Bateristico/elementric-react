import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { useStateContext } from '../context/ContextProvider';
import { buildingsGrid } from '../data/userBuildingListData';
import { Header } from '../components';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;
const authToken = sessionStorage.getItem('authToken');

const Buildings = () => {
  const { currentOrganization } = useStateContext();

  // API related code (MUST BE CHANGED TO CONTEXT)
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBuildings = async () => {
      const response = await axios.get(
        `${BASE_URL}/buildings?organisationId=${currentOrganization}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response.data;
    };

    const fetchLeaks = async () => {
      const response = await axios.get(
        `${BASE_URL}/buildings/apartments-leaks`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      return response.data;
    };

    const fetchData = async () => {
      setIsPending(true);
      try {
        const [buildings, leaks] = await Promise.all([
          fetchBuildings(),
          fetchLeaks(),
        ]);
        const updatedBuildings = buildings.map((building) => {
          const leak = leaks.find((leak) => leak.id === building.id);
          if (leak) {
            return { ...building, status: 'error' };
          } else {
            return { ...building, status: 'operative' };
          }
        });
        setData(updatedBuildings);
        setIsPending(false);
      } catch (error) {
        setError(error.message);
        setIsPending(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {!isPending ? (
        <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
          <Header category="Page" title="Buildings" />
          <GridComponent
            id="gridcomp"
            dataSource={data}
            allowPaging
            allowSorting
          >
            <ColumnsDirective>
              {buildingsGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject
              services={[
                Resize,
                Sort,
                ContextMenu,
                Filter,
                Page,
                ExcelExport,
                PdfExport,
                Edit,
              ]}
            />
          </GridComponent>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Buildings;
