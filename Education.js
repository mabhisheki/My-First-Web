import Container from "@components/Container";
import styles from "./profile.module.scss";

import { useState } from "react";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@components/Modal";

function Education({ userData }) {
  // console.log(userData)
  let [isEdit, setIsEdit] = useState(false);
  let [isAdd, setIsAdd] = useState(false);
  
  var description = [];
  {
    userData &&
      userData.education_list.forEach((data) => {
        description.push(<h3>Description: {data.description}</h3>);
      });
  }
  const school = [];
  {
    userData &&
      userData.education_list.forEach((data) => {
        school.push(
          <div className={styles.educaionEdit} onClick={() => setIsAdd(true)}>
            {data.school}&emsp;&emsp;{" "}
            <div className={styles.educationEdit}>
              <EditIcon />{" "}
            </div>
          </div>
        );
      });
  }

  const field_of_study = [];
  {
    userData &&
      userData.education_list.forEach((data) => {
        if (data.field_of_study && data.degree)
          field_of_study.push(
            <h3>
              {data.field_of_study}: {data.degree}
            </h3>
          );
      });
  }
  const date = [];
  {
    userData &&
      userData.education_list.forEach((data) => {
        date.push(
          <h3 className="garage-title">
            {data.start_date}-{data.end_date}
          </h3>
        );
      });
  }

  const grade = [];
  {
    userData &&
      userData.education_list.forEach((data) => {
        grade.push(<h3>GPA: {data.grade}</h3>);
      });
  }

  const details = [];
  for (var i = 0; i < 4; i++) {
    details.push(
      <div>
        <div className={styles.school}>{school[i]}</div>

        <div>{field_of_study[i]}</div>
        <div className={styles.garagetitle}>{date[i]}</div>
        <div className={styles.garagetitle}>{grade[i]}</div>
        <div>{description[i]}</div>
      </div>,
      <br />,
      <hr />,
      <br />
    );
    // details.push(<div>{school[i]}</div>,)className={styles.profileName}className="garage-title"
  }
  return (
    <Container>
      <div className={styles.education}>
        <h3 className={styles.educationName}>
          Education{" "}
          <div className={styles.educationEdit} onClick={() => setIsEdit(true)}>
            <AddIcon />
          </div>
        </h3>

        <div>
          {/* <div className={styles.educationNameEdit}> */}
          {details}

          {/* </div> */}
        </div>

        {isEdit && (
          <Modal title="Edit Profile" close={() => setIsEdit(false)}>
            <form>
              <label id="first_name">School</label>
              <input id="first_name" value={userData.school} type="text" />

              <label id="first_name">Field of study</label>
              <input
                id="first_name"
                value={userData.field_of_study}
                type="text"
              />
              <hr />

              <label id="first_name">Degree</label>
              <input id="first_name" value={userData.degree} type="text" />
              <label id="first_name">Start Date</label>
              <input id="first_name" value={userData.start_date} type="text" />
              <label id="first_name">End Date</label>
              <input id="first_name" value={userData.end_date} type="text" />
              <label id="first_name">Grade</label>
              <input id="first_name" value={userData.grade} type="text" />
              <label id="first_name">Description</label>
              <input id="first_name" value={userData.description} type="text" />
              <div className={styles.submitDiv}>
                <input
                  className={styles.submitButton}
                  type="submit"
                  value="Save"
                />
              </div>
            </form>
          </Modal>
        )}
        {isAdd && (
          <Modal
            title="Add your education details"
            close={() => setIsAdd(false)}
          >
            <form>
              <label id="first_name">School</label>
              <input id="first_name" value={userData.school} type="text" />

              <label id="first_name">Field of study</label>
              <input
                id="first_name"
                value={userData.field_of_study}
                type="text"
              />
              <hr />

              <label id="first_name">Degree</label>
              <input id="first_name" value={userData.degree} type="text" />
              <label id="first_name">Start Date</label>
              <input id="first_name" value={userData.start_date} type="text" />
              <label id="first_name">End Date</label>
              <input id="first_name" value={userData.end_date} type="text" />
              <label id="first_name">Grade</label>
              <input id="first_name" value={userData.grade} type="text" />
              <label id="first_name">Description</label>
              <input id="first_name" value={userData.description} type="text" />
              <div className={styles.submitDiv}>
                <input
                  className={styles.submitButton}
                  type="submit"
                  value="Save"
                />
              </div>
            </form>
          </Modal>
        )}
      </div>
    </Container>
  );
}

export default Education;
