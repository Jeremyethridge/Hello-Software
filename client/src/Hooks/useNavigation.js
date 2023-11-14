import { useNavigate } from "react-router-dom";

export function useNavigation() {
  const navigate = useNavigate();

  return (path = "/", delay = 2000) => {
    setTimeout(() => {
      navigate(path);
    }, delay);
  };
}
