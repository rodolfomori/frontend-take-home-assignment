import * as React from 'react';
import {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect
} from 'react';

import { differenceInMonths, addMonths } from 'date-fns';
interface DataContextData {
  totalAmount: string;
  monthlyAmount: string;
  setTotalAmount: Function;
  chosenMonth: number;
  chosenYear: number;
  mounthQuantity: number;
  increaseDate: Function;
  decreaseDate: Function;
}

const DataContext = createContext<DataContextData>({} as DataContextData);

export const DataProvider: React.FC = ({ children }) => {
  const [date] = useState<Date>(new Date());
  const firtsPlanning = new Date(addMonths(date, 48));
  const [totalAmount, setTotalAmount] = useState<string>('25000');
  const [monthlyAmount, setMonthlyAmount] = useState<string>('521');
  const [mounthQuantity, setMounthQuantity] = useState<number>(1);
  const [chosenMonth, setChosenMonth] = useState<number>(
    firtsPlanning.getMonth()
  );
  const [chosenYear, setChosenYear] = useState<number>(
    firtsPlanning.getFullYear()
  );

  const increaseDate = useCallback(() => {
    if (chosenMonth === 11) {
      setChosenMonth(0);
      setChosenYear(chosenYear + 1);
    } else {
      setChosenMonth(chosenMonth + 1);
    }
  }, [chosenMonth, chosenYear]);

  const decreaseDate = useCallback(() => {
    const newDate = new Date(chosenYear, chosenMonth);

    if (differenceInMonths(newDate, date) > 0) {
      if (chosenMonth === 0) {
        setChosenMonth(11);
        setChosenYear(chosenYear - 1);
      } else {
        setChosenMonth(chosenMonth - 1);
      }
    }
  }, [chosenMonth, chosenYear, date]);

  useEffect(() => {
    const newDate = new Date(chosenYear, chosenMonth);
    setMounthQuantity(differenceInMonths(newDate, date) + 1);
  }, [chosenMonth, chosenYear, date, mounthQuantity]);

  useEffect(() => {
    setMonthlyAmount(
      `${(Number(totalAmount) / mounthQuantity).toFixed(0).toString()}`
    );
  }, [mounthQuantity, totalAmount]);

  return (
    <DataContext.Provider
      value={{
        totalAmount,
        setTotalAmount,
        monthlyAmount,
        chosenMonth,
        chosenYear,
        mounthQuantity,
        increaseDate,
        decreaseDate
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useData(): DataContextData {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useData must be used within an DataProvider');
  }

  return context;
}
