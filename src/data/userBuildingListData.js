export const gridOrderImage = (props) => (
  <div>
    <img className="rounded-xl h-20 md:ml-3" src={props.Image} alt="avatar" />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);
export const buildingsGrid = [
  {
    field: 'address',
    headerText: 'Street',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'country',
    headerText: 'Country',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'locality',
    headerText: 'City',
    format: 'C2',
    textAlign: 'Center',
    width: '150',
  },
  {
    field: 'postalCode',
    headerText: 'Postal Code',
    format: 'C2',
    textAlign: 'Center',
    width: '150',
  },
  {
    field: 'latitude',
    headerText: 'Latitude',
    format: 'C2',
    textAlign: 'Center',
    editType: 'dropdownedit',
    width: '150',
  },
  {
    field: 'longitude',
    headerText: 'Longitude',
    format: 'C2',
    textAlign: 'Center',
    editType: 'dropdownedit',
    width: '150',
  },
  {
    field: 'type',
    headerText: 'Type',
    format: 'C2',
    textAlign: 'Center',
    width: '150',
  },
];

export const buildingsData = [
  {
    Street: '123 Main Street',
    Number: 1,
    City: 'New York',
    Country: 'United States',
    Latitude: 40.7128,
    Longitude: -74.006,
    Type: 'DetachedHouse',
  },
  {
    Street: '456 Elm Street',
    Number: 2,
    City: 'London',
    Country: 'United Kingdom',
    Latitude: 51.5074,
    Longitude: -0.1278,
    Type: 'ApartmentBuilding',
  },
  {
    Street: '789 Oak Street',
    Number: 3,
    City: 'Paris',
    Country: 'France',
    Latitude: 48.8566,
    Longitude: 2.3522,
    Type: 'DetachedHouse',
  },
  {
    Street: '321 Pine Street',
    Number: 4,
    City: 'Sydney',
    Country: 'Australia',
    Latitude: -33.8651,
    Longitude: 151.2099,
    Type: 'DetachedHouse',
  },
  {
    Street: '654 Maple Street',
    Number: 5,
    City: 'Tokyo',
    Country: 'Japan',
    Latitude: 35.6895,
    Longitude: 139.6917,
    Type: 'ApartmentBuilding',
  },
  {
    Street: '987 Cedar Street',
    Number: 6,
    City: 'Berlin',
    Country: 'Germany',
    Latitude: 52.52,
    Longitude: 13.405,
    Type: 'DetachedHouse',
  },
  {
    Street: '135 Oakwood Street',
    Number: 7,
    City: 'Rio de Janeiro',
    Country: 'Brazil',
    Latitude: -22.9068,
    Longitude: -43.1729,
    Type: 'DetachedHouse',
  },
  {
    Street: '864 Willow Street',
    Number: 8,
    City: 'Moscow',
    Country: 'Russia',
    Latitude: 55.7512,
    Longitude: 37.6184,
    Type: 'ApartmentBuilding',
  },
  {
    Street: '753 Cherry Street',
    Number: 9,
    City: 'Cairo',
    Country: 'Egypt',
    Latitude: 30.0444,
    Longitude: 31.2357,
    Type: 'DetachedHouse',
  },
  {
    Street: '246 Birch Street',
    Number: 10,
    City: 'Mexico City',
    Country: 'Mexico',
    Latitude: 19.4326,
    Longitude: -99.1332,
    Type: 'ApartmentBuilding',
  },
  {
    Street: '159 Walnut Street',
    Number: 11,
    City: 'Mumbai',
    Country: 'India',
    Latitude: 19.076,
    Longitude: 72.8777,
    Type: 'DetachedHouse',
  },
  {
    Street: '357 Spruce Street',
    Number: 12,
    City: 'Toronto',
    Country: 'Canada',
    Latitude: 43.651,
    Longitude: -79.347,
    Type: 'DetachedHouse',
  },
];
