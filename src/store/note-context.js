import React from 'react';

const noteContext = React.createContext({
  open: false,
  notes: {},
});

export default noteContext;
