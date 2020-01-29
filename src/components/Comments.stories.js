import React from 'react';
import Comments from './Comments';

export default {
  title: 'Comments'
}

export function empty() {
  return <Comments comments={[]} />;
}

export function paged() {
  return <Comments comments={[1, 2, 3]} />;
}

export function loading() {
  return <Comments comments={null} />;
}
