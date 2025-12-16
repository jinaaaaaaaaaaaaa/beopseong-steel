import DirectionsModal from "./components/modal/directionsModal/DirectionsModal";
import Toast from "./components/toast/Toast";
import AppRouter from "./Router";
import { useModalStore } from "./stores/useModalStore";

function App() {
  const openedModal = useModalStore((s) => s.openedModal);

  return (
    <>
      <AppRouter />
      {openedModal === "directions" && <DirectionsModal />}
      <Toast />
    </>
  );
}

export default App;
