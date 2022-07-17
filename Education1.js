import Container from "@components/Container";
import styles from "./profile.module.scss";
import users from "@data/db.json";

import { useEffect, useState } from "react";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";
import Modal from "@components/Modal";
import { style } from "@mui/system";

function Education1({ userData }) {
  let [isEdit, setIsEdit] = useState(false);
  let [isAdd, setIsAdd] = useState(false);
  var i = 1;
  //   console.log(userData);
  return (
    <Container>
      <div className={styles.education}>
        <div className={styles.educationEdit} onClick={() => setIsAdd(true)}>
          <AddIcon />
        </div>
        <h3 className={styles.educationName}>
          Education
          <div className={styles.educationEdit} onClick={() => setIsEdit(true)}>
            <EditIcon />{" "}
          </div>
        </h3>

        {userData && (
          <div>
            {userData.education_list.map((id) => (
              <>
                <div className={styles.school}>{id.school}&emsp;&emsp; </div>
                {/* <div className={styles.school}>{id.school}</div> */}

                <div>{id.field_of_study}</div>
                <div className={styles.garagetitle}>
                  {id.start_date} - {id.end_date}
                </div>

                <div className={styles.garagetitle}>Grade: {id.grade}</div>
                <div>{id.description}</div>
                <br />
                <hr />
              </>
            ))}
          </div>
        )}
        {isEdit && (
          <Modal title="Edit Profile" close={() => setIsEdit(false)}>
            <form >
              {userData && (
                  <div className={style.formGroup}>
                  {userData.education_list.map((id) => (
                      <>
                    <div >
                      <h1 className={styles.educationName}>Education {i++}</h1>
                      <label id="first_name">School</label>
                      <input id="first_name" value={id.school} type="text" />

                      <label id="first_name">Field of study</label>
                      <input
                        id="first_name"
                        value={id.field_of_study}
                        type="text"
                      />
                      <hr />

                      <label id="first_name">Degree</label>
                      <input id="first_name" value={id.degree} type="text" />
                      <label id="first_name">Start Date</label>
                      <input
                        id="first_name"
                        value={id.start_date}
                        type="text"
                      />
                      <label id="first_name">End Date</label>
                      <input id="first_name" value={id.end_date} type="text" />
                      <label id="first_name">Grade</label>
                      <input id="first_name" value={id.grade} type="text" />
                      <label id="first_name">Description</label>
                      <input
                        id="first_name"
                        value={id.description}
                        type="text"
                      />
                      <div className={styles.submitDiv}></div>
                  </div>
                    </>
                  ))}
                  <input
                    className={styles.submitButton}
                    type="submit"
                    value="Save"
                  />
                </div>
              )}
            </form>
          </Modal>
        )}
        {isAdd && (
          <Modal title="Add new education" close={() => setIsAdd(false)}>
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

export default Education1;
