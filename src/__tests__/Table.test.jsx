import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'

import Table from "@/components/Global/Table/Table";

describe('Table', () => {
  render(<Table 
    headingColumns={['Name', 'xx', 'xx']}
    title="Manage Customers"/>, 
    { wrapper: MemoryRouter }) 
  it('renders navigation', () => {
    render(<Table headingColumns={['Name', 'xx', 'xx']}
    title="Manage Customers"/>, 
    { wrapper: MemoryRouter }) 
  });
 
});