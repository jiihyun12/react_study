import React from 'react';
import Button from './style';

// const BasicButton = ({ variant, shape, size, border, color, font, children, }) => {
//   return (
//     <Button 
//       variant={variant}
//       shape={shape}
//       size={size}
//       border={border}
//       color={color}
//       font={font}
//       >{children}</Button>
//   );
// };


// 개수가 몇 개인지 모를 때 rest parameter써요
// variant, shape, size, border, color, font,
const BasicButton = ({ children, ...rest}) => {
  return (
    <Button {...rest}>{children}</Button>
  );
};

export default BasicButton;