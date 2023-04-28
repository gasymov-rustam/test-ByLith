import { Flex } from '../Flex';

export const VerticalFlex = (props) => {
  const { align = 'start' } = props;
  return <Flex {...props} direction="column" align={align} />;
};
