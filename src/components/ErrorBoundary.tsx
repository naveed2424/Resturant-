import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    const isExtension = error && error.message && /metamask|ethereum|web3|solana|phantom/i.test(error.message);
    if (isExtension) {
      return { hasError: false, error: null };
    }
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const isExtension = error && error.message && /metamask|ethereum|web3|solana|phantom/i.test(error.message);
    if (!isExtension) {
      console.error('Maison Marée caught runtime error:', error, errorInfo);
    }
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.hash = '';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0C1B2A] text-white flex items-center justify-center p-6 select-none">
          <div className="max-w-md w-full bg-[#102334] border border-[#D4AF37]/40 rounded-2xl p-8 text-center shadow-2xl space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <AlertTriangle className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h1 className="font-serif-display text-2xl sm:text-3xl font-bold text-slate-100">
                Maison Marée Paris
              </h1>
              <p className="text-sm text-slate-300 leading-relaxed">
                Une interruption momentanée est survenue lors du chargement de la page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="flex-1 py-3 px-4 rounded-lg bg-[#D4AF37] hover:bg-[#E5C158] text-[#0C1B2A] font-bold text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow"
              >
                <Home className="w-4 h-4" />
                <span>Accueil</span>
              </button>
              <button
                onClick={this.handleReload}
                className="flex-1 py-3 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 font-medium text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Actualiser</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
