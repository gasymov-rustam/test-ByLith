import { memo } from 'react';

import { VerticalFlex } from '../../shared/ui/Flex/VerticalFlex/VerticalFlex';

export const Header = memo(() => {
  return (
    <VerticalFlex>
      <h1>Header</h1>
    </VerticalFlex>
  );
});
