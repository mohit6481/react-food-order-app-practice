import mealsImage from '../../../assets/meals.jpg'
import HeaderCartButton from './components/HeaderCartButton/HeaderCartButton';
import classes from './Header.module.css'

const Header = ({onShowCart}) => {
  return <>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton onClick={onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt="A table food of delicious food!" />
    </div>
  </>
};

export default Header;