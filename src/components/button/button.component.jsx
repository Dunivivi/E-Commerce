import { BaseButton, GoogleSignButton, InvertedButton } from "./button.style";

export const BUTTON_TYPES_CLASES = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPES_CLASES.base) =>
  ({
    [BUTTON_TYPES_CLASES.base]: BaseButton,
    [BUTTON_TYPES_CLASES.google]: GoogleSignButton,
    [BUTTON_TYPES_CLASES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
