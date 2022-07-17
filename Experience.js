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


function Experience({ userData }) {
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
               Experience
      
          <div className={styles.educationEdit} onClick={() => setIsEdit(true)}>
            <EditIcon />{" "}
          </div>
          </h3>

        {userData && (
          <div>
            {userData.experience_list.map((id) => (
              <>
                <div className={styles.title}>{id.title}&emsp;&emsp; </div>
                {/* <div className={styles.title}>{id.title}</div> */}

                <div>{id.employment_type}</div>
                <div>{id.company_name}</div>
                <div className={styles.garagetitle}>Current Job {id.current_job}</div>
                <div className={styles.garagetitle}>
                  {id.start_date} - {id.end_date}
                </div>
              
                <div>{id.description}</div>
                <div>{id.location}</div>
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
                  {userData.experience_list.map((id) => (
                      <>
                    <div >
                      <h1 className={styles.experienceName}>Experience {i++}</h1>
                      <label id="first_name">Title</label>
                      <input id="first_name" value={id.title} type="text" />

                      <label id="first_name">Employ Type</label>
                      <input
                        id="first_name"
                        value={id.employment_type}
                        type="text"
                      />
                      
                      
                      <label id="first_name">Company Name</label>
                      <input
                        id="first_name"
                        value={id.company_name}
                        type="text"
                      />
                      
                      <label id="first_name">Current Job</label>
                      <input id="first_name" value={id.current_job} type="text" />
                     
                      <hr />
                      <label id="first_name">Start Date</label>
                      <input
                        id="first_name"
                        value={id.start_date}
                        type="text"
                      />
                      <label id="first_name">End Date</label>
                      <input id="first_name" value={id.end_date} type="text" />
              
                      <label id="first_name">Description</label>
                      <input
                        id="first_name"
                        value={id.description}
                        type="text"
                      />
                       <label id="first_name">Location</label>
                      <input
                        id="first_name"
                        value={id.location}
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
          <Modal title="Add new experience" close={() => setIsAdd(false)}>
            <form>
              <label id="first_name">Title</label>
              <input id="first_name" value={userData.title} type="text" />

              <label id="first_name">Employ Type</label>
              <input
                id="first_name"
                value={userData.employment_type}
                type="text"
              />
               <label id="first_name">Company Name</label>
              <input
                id="first_name"
                value={userData.company_name}
                type="text"
              />
              <hr />
              <label id="first_name">Current Job</label>
              <input id="first_name" value={userData.current_job} type="text" />
              <label id="first_name">Start Date</label>
              <input id="first_name" value={userData.start_date} type="text" />
              <label id="first_name">End Date</label>
              <input id="first_name" value={userData.end_date} type="text" />
              <label id="first_name">Description</label>
              <input id="first_name" value={userData.description} type="text" />
              <label id="first_name">Location</label>
              <input
                id="first_name"
                value={userData.location}
                type="text"
              />
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

export default Experience;

