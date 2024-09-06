import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  // Manually provided error
  error?: Error;
  children: ReactNode;
  fallbackComponent?: (error: Error) => ReactNode;
  ignore?: (error: Error) => boolean;
  onError?: (error: Error) => void;
}

interface State {
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Define a state variable to track whether there is an error or not
    this.state = { error: props.error };
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { error: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error);
    // We can use an error logging service here
    console.log({ error, errorInfo });
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: unknown,
  ) {
    if (this.props.error !== prevProps.error) {
      this.setState({
        error: this.props.error,
      });
    }
  }

  render() {
    if (this.state.error) {
      if (this.props.ignore?.(this.state.error)) {
        return <></>;
      }
      if (this.props.fallbackComponent?.(this.state.error)) {
        return this.props.fallbackComponent(this.state.error);
      }
    }

    // Return children components in case there is no error
    return this.props.children;
  }
}

export default ErrorBoundary;
