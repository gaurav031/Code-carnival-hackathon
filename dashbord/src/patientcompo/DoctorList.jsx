import "../styles/teacherList.css";
import data from "../data.json";
import { useNavigate } from "react-router-dom";
const TeacherList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/addpatient");
  };
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Doctors</h2>
      </div>
      <div className="list--container">
        <section className="box">
          {data.map((data, index) => (
            <div className="list" key={index}>
              <div className="teacher--detail">
                <img src={data.img} alt={data.name} />
                <h2>{data.name}</h2>
              </div>
              <div className="other--detail">
                {/* <span>{data.qualification.map((data) => `${data} + " "`)}</span> */}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TeacherList;
