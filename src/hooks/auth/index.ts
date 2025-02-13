import { useQuery } from "@tanstack/react-query";

import { checkUser } from "../../services/fetcher";

const useAuth = () => {
  const { data: userAuthenticated, isLoading } = useQuery({
    queryKey: ["check-user"],
    queryFn: checkUser,
  });

  return { userAuthenticated, isLoading };
};

export default useAuth;
