import styles from "../style";
import { arrowUp } from "../assets";

const book = () => {
  alert('Позвоните нам по номеру: +998 (90) 512-84-44')
}

const GetStarted = () => (
  <div onClick={book} className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Связаться</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">С Нами</span>
      </p>
    </div>
  </div>
);

export default GetStarted;