import { css } from '@emotion/css';

import { appTheme } from '@/layouts';

export const success = css`
  &.MuiSnackbarContent-root {
    background-color: ${appTheme.palette.success.main};
  }
`;

export const error = css`
  &.MuiSnackbarContent-root {
    background-color: ${appTheme.palette.error.dark};
  }
`;

export const info = css`
  &.MuiSnackbarContent-root {
    background-color: ${appTheme.palette.info.main};
  }
`;

export const warning = css`
  &.MuiSnackbarContent-root {
    background-color: ${appTheme.palette.warning.main};
  }
`;
