import React, { Component, ReactNode } from 'react';

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg-page">
          <div className="text-center p-8">
            <span className="text-6xl mb-4 block">😢</span>
            <h1 className="text-2xl font-bold text-text-primary mb-2">¡Ups! Algo salió mal</h1>
            <button onClick={() => window.location.reload()} className="btn-primary mt-4">
              Reiniciar Juego
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}