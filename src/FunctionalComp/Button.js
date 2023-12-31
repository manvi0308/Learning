const Button = ({ handleClick }) => (
    /* handleClick is a function defined in parent component */
    <button type="button" onClick={handleClick}>
      Button
    </button>
  );

  export default Button;