import avatar from '../assets/avatar_unknown.jpg';

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);
export const userGrid = [
  {
    field: 'name',
    headerText: 'Name',
    width: '150',
    editType: 'dropdownedit',
    textAlign: 'Center',
  },
  {
    field: 'countryCode',
    headerText: 'Country Code',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'phoneNumber',
    headerText: 'Phone Number',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'role',
    headerText: 'Role',
    format: 'C2',
    textAlign: 'Center',
    editType: 'numericedit',
    width: '150',
  },
];

export const userData = [
  {
    PhoneNumber: '453197506',
    FirstName: 'Michael',
    LastName: 'John',
    Role: 'Administrator',
    Image: avatar,
  },
  {
    PhoneNumber: '178057012',
    FirstName: 'Sophia',
    LastName: 'Sophia',
    Role: 'Administrator',
    Image: avatar,
  },
  {
    PhoneNumber: '563058042',
    FirstName: 'Alex',
    LastName: 'David',
    Role: 'User',
    Image: avatar,
  },
  {
    PhoneNumber: '354668502',
    FirstName: 'Alex',
    LastName: 'Sarah',
    Role: 'User',
    Image: avatar,
  },
  {
    PhoneNumber: '622709747',
    FirstName: 'Emily',
    LastName: 'Emily',
    Role: 'Administrator',
    Image: avatar,
  },
  {
    PhoneNumber: '845077382',
    FirstName: 'Emily',
    LastName: 'Alex',
    Role: 'User',
    Image: avatar,
  },
  {
    PhoneNumber: '627138403',
    FirstName: 'John',
    LastName: 'Sarah',
    Role: 'Administrator',
    Image: avatar,
  },
  {
    PhoneNumber: '682071013',
    FirstName: 'Emily',
    LastName: 'Emily',
    Role: 'Administrator',
    Image: avatar,
  },
  {
    PhoneNumber: '655357760',
    FirstName: 'John',
    LastName: 'Jane',
    Role: 'Maintainer',
    Image: avatar,
  },
  {
    PhoneNumber: '840511893',
    FirstName: 'Emily',
    LastName: 'Jane',
    Role: 'User',
    Image: avatar,
  },
  {
    PhoneNumber: '752450948',
    FirstName: 'Jane',
    LastName: 'Alex',
    Role: 'User',
    Image: avatar,
  },
  {
    PhoneNumber: '58019583',
    FirstName: 'John',
    LastName: 'Daniel',
    Role: 'Maintainer',
    Image: avatar,
  },
  {
    PhoneNumber: '578223986',
    FirstName: 'Sarah',
    LastName: 'John',
    Role: 'User',
    Image: avatar,
  },
  {
    PhoneNumber: '34015143',
    FirstName: 'Michael',
    LastName: 'John',
    Role: 'Maintainer',
    Image: avatar,
  },
  {
    PhoneNumber: '378032852',
    FirstName: 'Alex',
    LastName: 'Olivia',
    Role: 'User',
    Image: avatar,
  },
];
