import { format } from 'date-fns';
import PropTypes from 'prop-types';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardHeader,
  Divider,
  SvgIcon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material';
import { Scrollbar } from '../../components/scrollbar';

import { SeverityPill } from '../../components/severity-pill';

import React, { useState } from 'react';


import Checkbox from '@mui/material/Checkbox';

const statusMap = {
  pending: 'warning',
  delivered: 'success',
  refunded: 'error'
};

export const OrdersStates = (props) => {
  const {orders :initialOrders = [], sx } = props;
  const [orders, setOrders] = React.useState(initialOrders);

  return (
    <Card sx={sx}>
      <CardHeader title="Customers" />
      <Scrollbar sx={{ flexGrow: 1 }}>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Customer Id
                </TableCell>
                <TableCell>
                  Customer Name
                </TableCell>
                <TableCell>
                  Phone Number
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Availability
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => {

                return (
                  <TableRow
                    hover
                    key={order.customer_id}
                  >
                    <TableCell>
                      {order.customer_id}
                    </TableCell>
                    <TableCell>
                      {order.customer_name}
                    </TableCell>
                    <TableCell>
                      {order.phone_number}
                    </TableCell>
                    <TableCell>
                      {order.address.city},{order.address.street}
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[order.status]}>
                        {order.status}
                      </SeverityPill>
                    </TableCell> 

                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={(
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          )}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </CardActions>
    </Card>
  );
};

OrdersStates.prototype = {
  orders: PropTypes.array,
  sx: PropTypes.object
};
