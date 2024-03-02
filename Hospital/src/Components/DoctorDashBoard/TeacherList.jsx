import "./styles/teacherList.css";
import Pataients from "../../patient.json";
import { useNavigate } from "react-router-dom";
const patient = Pataients.patients;
const TeacherList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/addpatient");
  };
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Pataients</h2>
      </div>
      <div className="list--container">
        <section className="box">
          {patient.map((data, index) => (
            <div className="list" key={index}>
              <div className="teacher--detail">
                <img src={data.img} alt={data.name} />
                <h2>
                  {data.name}({data.age}yr)
                </h2>
              </div>
              <div className="other--detail">
                <span>{data.contact}</span>
                <span>
                  {data.medical_history.map((data) => data.condition)}
                </span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TeacherList;
