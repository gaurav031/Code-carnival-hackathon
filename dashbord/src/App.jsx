import "./App.css";
import PatProfile from "./patientcompo/PatProfile";
import PatientSlide from "./patientcompo/PatientSlide";
import PatientContent from "./patientcompo/PatientContent";

function App() {
  return (
    <>
      <div className="dashbord">
        <PatientSlide />
        <div className="dashbord--content">
          <PatientContent />
          <PatProfile />
        </div>
      </div>
    </>
  );
}

export default App;
