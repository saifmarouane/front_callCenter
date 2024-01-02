import { SvgIcon } from '@mui/material';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';

export const items = [
  {
    title: 'Orders',
    path: '/customers',
    icon: <SvgIcon fontSize="small"><ShoppingBagIcon /></SvgIcon>,
    roles: ['user', 'admin']
  },
  {
    title: 'Products Order 1',
    path: '/OrderDetailsPage',
    icon: <SvgIcon fontSize="small"><ShoppingBagIcon /></SvgIcon>,
    roles: ['user', 'admin']
  },
  {
    title: 'Products Order',
    path: '/',
    icon: <SvgIcon fontSize="small"><ShoppingBagIcon /></SvgIcon>,
    roles: ['user', 'admin']
  },
  {
    title: 'Customers',
    path: '/ordersstate',
    icon: <SvgIcon fontSize="small"><UsersIcon /></SvgIcon>,
    roles: ['user', 'admin']
  },
  {
    title: 'Account',
    path: '/account',
    icon: <SvgIcon fontSize="small"><UserIcon /></SvgIcon>,
    roles: ['user', 'admin']
  },
  {
    title: 'Login',
    path: '/auth/login',
    icon: <SvgIcon fontSize="small"><LockClosedIcon /></SvgIcon>,
    roles: ['user', 'admin']
  },
  {
    title: 'Register',
    path: '/auth/register',
    icon: <SvgIcon fontSize="small"><UserPlusIcon /></SvgIcon>,
    roles: ['user', 'admin']
  },
  {
    title: 'Error',
    path: '/404',
    icon: <SvgIcon fontSize="small"><XCircleIcon /></SvgIcon>,
    roles: ['user', 'admin']
  }
];

export const filterItemsByRole = (items, userRole) => {
  return items.filter(item => item.roles.includes(userRole));
};
