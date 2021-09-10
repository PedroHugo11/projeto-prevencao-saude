import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";
import { AdminRoom } from "./pages/AdminRoom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { UserProfileForm } from "./pages/UserProfileForm";
import { UserHealthForm } from "./pages/UserHealthForm";
import { UserFamilyForm } from "./pages/UserFamilyForm";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
          <Route path="/user/profile" component={UserProfileForm} />
          <Route path="/user/health" component={UserHealthForm} />
          <Route path="/user/family" component={UserFamilyForm} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
