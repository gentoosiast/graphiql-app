import { useAppSelector } from '@/store';

type UseAuth = {
  email: null | string;
};

const useAuth = (): UseAuth => {
  const email = useAppSelector((state) => state.user.email);

  return {
    email,
  };
};

export { useAuth };
