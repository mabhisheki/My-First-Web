import Container from "@components/Container";
import styles from "./profile.module.scss";

import { useState } from "react";
import Image from "next/image";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@components/Modal";

function Profile({ userData }) {
  let [isEdit, setIsEdit] = useState(false);

  return (
    <Container>
      <div className={styles.profile}>
        {userData && (
          <div>
            <div className={styles.profileImage}>
              <Image
                height="130"
                width="130"
                className={styles.profileImage}
                src="https://picsum.photos/seed/picsum/200"
                alt="image"
              />
            </div>
            <div className={styles.profileNameEdit}>
              <h3 className={styles.profileName}>
                {userData.first_name} {userData.last_name}
              </h3>
              <div
                className={styles.profileEdit}
                onClick={() => setIsEdit(true)}
              >
                <EditIcon />
              </div>
            </div>

            <h3 className={styles.profileHeadline}>{userData.headline}</h3>
          </div>
        )}
        {isEdit && (
          <Modal title="Edit Profile" close={() => setIsEdit(false)}>
            <form>
              <label id="first_name">First Name</label>
              <input id="first_name" value={userData.first_name} type="text" />

              <label id="first_name">Last Name</label>
              <input id="first_name" value={userData.last_name} type="text" />
              <hr />

              <label id="first_name">Headline</label>
              <input id="first_name" value={userData.headline} type="text" />

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

export default Profile;
