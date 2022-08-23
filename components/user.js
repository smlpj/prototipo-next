import styles from "../styles/user.module.css";

const User = () => {
  return (
    <>
        <div className="user">
            <div className="user__header">
                <h1 className={styles.user__title}>USUARIO</h1>
            </div>
            <div className="user__body">
                <div className="user__input">
                    <input type="user" className={styles.user__inputfield} placeholder="Ingresa tu usuario" />
                </div>
            </div>
        </div>
    </>
  )
}

export default User