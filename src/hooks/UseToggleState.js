import React from 'react';

export const UseToggleState = (initialState = false) => {
  const [open, setOpen] = React.useState(initialState);

  const toggleState = React.useCallback(() => {
    setOpen(!open);
  }, [open]);

  return [open, toggleState];
};
