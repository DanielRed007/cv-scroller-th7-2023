import React from 'react';
import { render, screen } from '@testing-library/react';
import CurriculumVitae from '../CurriculumVitae';

describe("Curriculum Vitae Test Cases", () => {
    test('renders title', () => {
        render(<CurriculumVitae />);
        const linkElement = screen.getByText(/Mesu/i);
        expect(linkElement).toBeInTheDocument();
      });
});
