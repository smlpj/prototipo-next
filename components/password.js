import styles from "../styles/password.module.css";

const Password = () => {
  return (
    <>
        <div className="password">
            <div className="password__header">
                <h1 className={styles.password__title}>CONTRASEÑA</h1>
            </div>
            <div className="password__body">
                <div className="password__input">
                    <input type="password" className={styles.password__inputfield} placeholder="Ingresa tu contraseña" />
                </div>
                <div className="password__button">
                    <button className="password__button-field">Sign Up</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Password