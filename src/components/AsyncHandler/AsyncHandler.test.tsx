import React from 'react';
import { render, screen } from '@testing-library/react';
import AsyncHandler from './AsyncHandler';

describe('AsyncHandler', () => {
    test('Show loader only on loading', () => {
        render(<AsyncHandler loading={true} error="Error" children={<div data-testid="div"/>}/>)
        expect(screen.getByRole('progressbar')).toBeInTheDocument()
        expect(screen.getByRole('alert')).not.toBeInTheDocument()
        expect(screen.queryByTestId('div')).not.toBeInTheDocument()
    })

    test('Show Error only', () => {
        render(<AsyncHandler loading={false} error="Error" children={<div data-testid="div"/>}/>)
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
        expect(screen.queryByRole('alert')).toBeInTheDocument()
        expect(screen.queryByTestId('div')).not.toBeInTheDocument()
    })

    test('Show Error only', () => {
        render(<AsyncHandler loading={false} error="" children={<div data-testid="div"/>}/>)
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument()
        expect(screen.queryByRole('alert')).not.toBeInTheDocument()
        expect(screen.queryByTestId('div')).toBeInTheDocument()
    })
})