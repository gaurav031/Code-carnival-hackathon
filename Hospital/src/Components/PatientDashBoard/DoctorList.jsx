import "../styles/teacherList.css";
import doctorData from "../../data.json";
import { useNavigate } from "react-router-dom";
const TeacherList = () => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/userdata/${id}`);
  };
  return (
    <div className="teacher--list">
      <div className="list--header">
        <h2>Doctors</h2>
      </div>
      <div className="list--container">
        <section className="box">
          {doctorData.map((data, index) => (
            <div
              className="list"
              onClick={() => handleClick(data.id)}
              key={index}
            >
              <div className="teacher--detail">
                <img src={data.img} alt={data.name} />
                <h2>{data.name}</h2>
              </div>
              <div className="other--detail">
                <span>{data.qualification}</span>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default TeacherList;
