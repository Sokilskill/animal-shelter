import { Icon, IconProps } from '@chakra-ui/react';

export const ArrowIcon: React.FC<IconProps> = (props) => (
  <Icon
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="6" y1="2" x2="14" y2="8" />
    <line x1="6" y1="14" x2="14" y2="8" />
  </Icon>
);
