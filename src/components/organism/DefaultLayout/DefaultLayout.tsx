import { ReactNode } from "react";
import Header from "../../molecules/Header/Header";

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DefaultLayout;
