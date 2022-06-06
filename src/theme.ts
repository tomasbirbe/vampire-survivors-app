import { extendTheme } from '@chakra-ui/react';

import { cssReset } from './cssCustomReset';

export const theme = extendTheme({
  styles: {
    global: {
      ...cssReset,
    },
  },
});
