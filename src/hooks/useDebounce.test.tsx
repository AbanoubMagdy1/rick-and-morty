import React from 'react'
import useDebounce from './useDebounce'
import {renderHook} from '@testing-library/react'
import { waitFor } from '@testing-library/react'

describe('useDebounce', () => {
    test("Uses the initial value and doesn't change immediately", () => {
        const {result, rerender} = renderHook(() => useDebounce('initial', 1000))
        expect(result.current).toBe('initial')
        rerender({value: 'changed', delay: 1000})
        expect(result.current).toBe('initial')
    })

    test('Changes after the delay', () => {
        const {result, rerender} = renderHook(() => useDebounce('initial', 300))
        rerender({value: 'changed', delay: 300})
        expect(result.current).toBe('initial')
        waitFor(() => expect(result.current).toBe('changed'), {timeout: 500})
    })
})