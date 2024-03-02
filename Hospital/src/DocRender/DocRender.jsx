import Content from "../Components/DoctorDashBoard/Content";
import Profile from "../Components/DoctorDashBoard/Profile";
import Sidebar from "../Components/DoctorDashBoard/Sidebar";
function DocRender(){
    return(
        <>
        <div className="dashboard">
            <Sidebar />
            <div  className="dashboard--content">
              <Content />
              <Profile />
            </div>
        </div>
        </>
    )
}
export default  DocRender;