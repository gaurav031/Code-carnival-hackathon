
// import PatProfile from "../patientcompo/PatProfile";
// import PatientSlide from "../patientcompo/PatientSlide";
// import PatientContent from "../patientcompo/PatientContent";

import PatientContent from "../Components/PatientDashBoard/PatientContent"
import PatientSlide from "../Components/PatientDashBoard/PatientSlide"
import PatProfile from "../Components/PatientDashBoard/PatProfile.jsx"

 function PatientRender() {
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
   )
 }
 
 export default PatientRender
 