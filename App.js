import LoginProvider from "./context/LoginProvider";
import UserProvider from "./context/UserProvider";
import { NavigationContainer } from '@react-navigation/native';
import RouteApp from "./navigation/RouteApp";

export default function App() {

  return (
    <LoginProvider>
      <UserProvider>
        <NavigationContainer>
          <RouteApp/>
        </NavigationContainer>
      </UserProvider>
    </LoginProvider>
  )

}

