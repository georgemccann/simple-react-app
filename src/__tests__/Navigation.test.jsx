import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'

import Navigation from "@/components/Global/Navigation/Navigation";

describe('Navigation', () => {
  render(<Navigation />, { wrapper: MemoryRouter }) 
  it('renders navigation', () => {
    render(<Navigation />, { wrapper: MemoryRouter }) 
  });
 
});