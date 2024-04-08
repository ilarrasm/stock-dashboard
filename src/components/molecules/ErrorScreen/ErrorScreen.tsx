import { Button } from "@mui/material";

const ErrorScreen = () => {
  return (
    <div>
      Hubo un error! Recargue la pagina:
      <Button onClick={() => window.location.reload()}>Click Aquí</Button>
    </div>
  );
};

export default ErrorScreen;
