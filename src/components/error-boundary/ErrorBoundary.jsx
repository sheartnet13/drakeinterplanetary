import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component } from "react";
import { withTranslation } from "react-i18next";
import "./ErrorBoundary.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    const { t } = this.props;
    
    if (this.state.hasError) {
      return (
        <div className="error-boundary-container">
          <div className="error-boundary-content">
            <AlertTriangle
              size={48}
              className="error-boundary-icon"
            />

            <h2 className="error-boundary-title">{t('error.title')}</h2>

            <div className="error-boundary-error">
              <pre>
                {this.state.error?.stack}
              </pre>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="error-boundary-button"
            >
              <RotateCcw size={16} />
              {t('error.reload')}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
