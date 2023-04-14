import React, { useState } from "react";
import Todos from "./components/Todos";
import EditTodo from "./components/EditTodo";
import { useRoutes, Link, useQueryParams } from "raviger";

const routes = {
  '/': () => <Todos />,
  '/edit/:id': ({id}) => <EditTodo id={id} />,
}

function App() {
  const [query, setQuery] = useQueryParams();
  const route = useRoutes(routes, query);

  return <>{route}</>;
}

export default App;