
// Unit tests for: MainHeader




import { render, screen } from '@testing-library/react';

import { MainHeader } from '../MainHeader';



// Mock the Navbar component
jest.mock("../../Navbar/index", () => ({
  Navbar: () => <div data-testid="navbar">Mocked Navbar</div>,
}));

describe('MainHeader() MainHeader method', () => {
  // Happy Path Tests
  describe('Happy Path', () => {
    it('should render the CompanyName correctly', () => {
      // Test to ensure the CompanyName is rendered as expected
      render(<MainHeader />);
      const companyNameElement = screen.getByText('HELLO SOFTWARE');
      expect(companyNameElement).toBeInTheDocument();
    });

    it('should render the Navbar component', () => {
      // Test to ensure the Navbar component is rendered
      render(<MainHeader />);
      const navbarElement = screen.getByTestId('navbar');
      expect(navbarElement).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe('Edge Cases', () => {
    it('should render without crashing when no props are passed', () => {
      // Test to ensure the component renders without any props
      render(<MainHeader />);
      const topOScreenElement = screen.getByText('HELLO SOFTWARE');
      expect(topOScreenElement).toBeInTheDocument();
    });

    // Since MainHeader does not take any props or have any complex logic,
    // there are limited edge cases to test. If the component had props or state,
    // we would test those here.
  });
});

// End of unit tests for: MainHeader
