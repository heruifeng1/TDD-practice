import React, { Component } from 'react'
class ErrorBoundary extends Component {
  state = {
    error: null,
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    return {
      error,
      hasError: true,
    }
  }

  render() {
    const { hasError, error } = this.state
    const { children } = this.props
    if (hasError) {
      return (
        <h2 data-testid="number-result">Error: {error.message}</h2>
      )
    }
    return children
  }
}
export default ErrorBoundary
