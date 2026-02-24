import { useState, useEffect } from "react";
import NotFound from "./pages/not-found/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
import Home from "./pages/home/Home";
import Specifications from "./pages/specifications/Specifications";
import Contact from "./pages/contact/Contact";
import Careers from "./pages/careers/Careers";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";
import Cookies from "./pages/cookies/Cookies";
import LoadingScreen from "./components/loading-screen/LoadingScreen";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/home"} component={Home} />
      <Route path={"/specifications"} component={Specifications} />
      <Route path={"/privacy"} component={Privacy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/cookies"} component={Cookies} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/careers"} component={Careers} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate resource loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen onLoadComplete={() => setIsLoading(false)} />;
  }

  return (
    <ErrorBoundary>
      <Router />
    </ErrorBoundary>
  );
}

export default App;
