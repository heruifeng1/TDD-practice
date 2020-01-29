import { render } from '@testing-library/react';
import React from 'react';
import { empty, loading, paged } from './ui.stories';

test('should render empty', () => {
  render(empty())
});

test('should render paged', () => {
  render(paged())
});

test('should render loading', () => {
  render(loading())
});
