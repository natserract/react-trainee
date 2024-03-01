import "./App.css";
import { HigherOrderComponentPlayground } from "./components/higher-order-component/playground";
import { ContextPlayground } from "./components/context/playground";
import { DataFetchingPlayground } from "./components/data-fetching/playground";
import EventEmitterPlayground from "./components/event-emitter/playground";
import StateMachinePlayground from "./components/state-machine/playground";
import ReactRouterPlayground from "./components/react-router/playground";
import LocalizationPlayground from "./components/localization/playground";
import RecursiveComponentPlayground from "./components/recursive-component/playground";
import IntersectionObserverPlayground from "./components/intersection-observer/playground";
import PolymorphicComponentPlayground from "./components/polymorphic-component/playground";

function App() {
  return (
    <>
      <HigherOrderComponentPlayground />
      <ContextPlayground />
      <DataFetchingPlayground />
      <EventEmitterPlayground />
      <StateMachinePlayground />
      <ReactRouterPlayground />
      <LocalizationPlayground />
      <RecursiveComponentPlayground />
      <IntersectionObserverPlayground />
      <PolymorphicComponentPlayground />
    </>
  );
}

export default App;
