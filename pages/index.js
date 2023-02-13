import styles from "../styles/Home.module.css";
import Header from "../Components/Header";
import SupplyDetails from "../Components/SupplyDetails";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <SupplyDetails/>
      
    </div>
  );
}
