import axios from 'axios';
import { Pizza } from './types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
  'pizza/fetchPizzasStatus',
  async params => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Pizza[]>(
      `https://66071801be53febb857f2531.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);
