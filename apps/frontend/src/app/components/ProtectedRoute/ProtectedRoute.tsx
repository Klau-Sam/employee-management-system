import { Navigate } from 'react-router-dom';
import { ROUTE } from '../../routes';

type Props = {
  user?: boolean;
  element: React.ReactNode;
};

export const ProtectedRoute = ({ element, user = false }: Props) => {
  if (user) {
    return element;
  }
  return <Navigate to={`/${ROUTE.REGISTRATION}`} />;
};
