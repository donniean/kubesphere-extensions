import React from 'react';

import { StylesConstants } from '@ks-console/shared';

export default function App() {
  return (
    <h1>
      Hello {StylesConstants.DEFAULT_PAGE_HEADER_HEIGHT} {t('TS_EXAMPLE.TITLE')}
    </h1>
  );
}
