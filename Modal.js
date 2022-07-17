import styles from "./Modal.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

function Modal({ close, title, children, ...rest }) {
  return (
    <div className={styles.drawerBg} {...rest}>
      <motion.div
        className={styles.drawer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 300 },
        }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.6 } }}
      >
        <div className={styles.heading}>
          <h2>{title}</h2>
          <div className={styles.cross} onClick={close}>
            <CloseIcon />
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.children}>{children}</div>
      </motion.div>
      <div className={styles.closeBg} onClick={close} />
    </div>
  );
}

export default Modal;
