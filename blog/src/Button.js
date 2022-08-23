import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Button ({text}){
    return(
        <div>
    <button className={styles.btn}>{text}</button>
    <button className={styles.btn2}>{text}</button>
    </div>
    )
}
Button.propTypes = {
    text:PropTypes.string.isRequired,
};
export default Button;
















// react-create-app사용할때는 function에서 return 하는것이 하나라도 항상()으로 감싸줘야 된다
// import style from "./" 은 styles가 css 코드를 가지고 있는 객체로 변화됨 그래서 style.btn라는 style객체안에 클래스 네임이 btn인 것을 이용할 수 있음
