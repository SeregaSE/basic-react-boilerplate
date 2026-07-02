import { MemoryRouter } from 'react-router-dom';

import App from '@components/App';
import { render, screen } from '@testing-library/react';

test('renders the home page by default', () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );

    expect(screen.getByText('basic react boilerplate')).toBeInTheDocument();
    expect(
        screen.getByRole('link', { name: 'go to about' })
    ).toBeInTheDocument();
});

test('renders the about page at /about', () => {
    render(
        <MemoryRouter initialEntries={['/about']}>
            <App />
        </MemoryRouter>
    );

    expect(
        screen.getByRole('link', { name: 'go to home' })
    ).toBeInTheDocument();
});
