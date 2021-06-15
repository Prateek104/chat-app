import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import Contacts from './Contacts';
import { ContactsProvider } from '../contexts/ContactsProvider';

const setup = (props) => {
  const component = (
    <ContactsProvider {...props}>
      <Contacts />
    </ContactsProvider>
  );
  const renderResult = render(component);
  return renderResult;
};

describe('<Contacts />', () => {
  
  it('should render contacts component', () => {
    const props = { contacts: ["Test Contact"], createContact: jest.fn() };
    setup(props);
  });

  it('should render contacts component with proper names', () => {
    const props = { contacts: [{ id: '12', name: 'Prateek Mishra' }, { id: '13', name: 'Alice Mishra'}], createContact: jest.fn() }
    
    const renderResult = setup(props);
    const { getByText } = renderResult;
    
    expect(getByText('Prateek Mishra')).toBeInTheDocument()
  })
})