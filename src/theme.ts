import { extendTheme } from '@chakra-ui/react';

import { cssReset } from './cssCustomReset';

export const themes = extendTheme({
  styles: {
    global: {
      ...cssReset,
    },
  },
});
