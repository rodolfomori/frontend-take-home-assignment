import { renderHook, act } from '@testing-library/react-hooks';
import { addMonths } from 'date-fns';
import { advanceTo, clear } from 'jest-date-mock';

import {
  useGoalCalculation,
  GoalCalculationProvider
} from '../../src/hooks/goalCalculation';

describe('GoalCalculation hook', () => {
  it('should be able to decrease date', () => {
    advanceTo(new Date(2018, 5, 27, 0, 0, 0));
    const date = new Date();
    const firtsPlanning = addMonths(date, 48);

    const { result } = renderHook(() => useGoalCalculation(), {
      wrapper: GoalCalculationProvider
    });

    act(() => {
      result.current.decreaseDate();
      result.current.setTotalAmount(10000);
    });

    expect(result.current.chosenMonth).toBe(firtsPlanning.getMonth() - 1);
    expect(result.current.chosenYear).toBe(firtsPlanning.getFullYear());
    expect(result.current.monthlyAmount).toBe('213');
    expect(result.current.mounthQuantity).toBe(47);
    expect(result.current.totalAmount).toBe(10000);
  });

  it('should be able to decrease date in January', () => {
    advanceTo(new Date(2018, 0, 27, 0, 0, 0));
    const date = new Date();

    const firtsPlanning = addMonths(date, 48);

    const { result } = renderHook(() => useGoalCalculation(), {
      wrapper: GoalCalculationProvider
    });

    act(() => {
      result.current.decreaseDate();
    });

    expect(result.current.chosenMonth).toBe(11);
    expect(result.current.chosenYear).toBe(firtsPlanning.getFullYear() - 1);
  });

  it('should be able to increase date', () => {
    advanceTo(new Date(2018, 5, 27, 0, 0, 0));
    const date = new Date();
    const firtsPlanning = addMonths(date, 48);

    const { result } = renderHook(() => useGoalCalculation(), {
      wrapper: GoalCalculationProvider
    });

    act(() => {
      result.current.increaseDate();
      result.current.setTotalAmount(25000);
    });

    expect(result.current.chosenMonth).toBe(firtsPlanning.getMonth() + 1);
    expect(result.current.chosenYear).toBe(firtsPlanning.getFullYear());
    expect(result.current.monthlyAmount).toBe('510');
    expect(result.current.mounthQuantity).toBe(49);
    expect(result.current.totalAmount).toBe(25000);
  });

  it('should be able to increase date in December', () => {
    advanceTo(new Date(2018, 11, 27, 0, 0, 0));
    const date = new Date();

    const firtsPlanning = addMonths(date, 48);

    const { result } = renderHook(() => useGoalCalculation(), {
      wrapper: GoalCalculationProvider
    });

    act(() => {
      result.current.increaseDate();
    });

    expect(result.current.chosenMonth).toBe(0);
    expect(result.current.chosenYear).toBe(firtsPlanning.getFullYear() + 1);
    clear();
  });
});
