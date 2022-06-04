import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallbackComponent?: (error: Error) => ReactNode;
  ignore?: (error: Error) => boolean;
}

interface State {
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Define a state variable to track whether is an error or not
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can use your own error logging service here
    console.log({ error, errorInfo });
  }

  render() {
    // Check if the error is thrown
    if (this.state.error) {
      if (this.props.ignore?.(this.state.error)) {
        return <></>;
      }
      if (this.props.fallbackComponent?.(this.state.error)) {
        return this.props.fallbackComponent(this.state.error);
      }
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
