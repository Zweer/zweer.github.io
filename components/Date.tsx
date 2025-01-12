import { DateTime } from 'luxon';
import React from 'react';

export function DateComponent({ dateString }: { dateString: string }) {
  return (
    <time dateTime={dateString}>
      {DateTime.fromISO(dateString).toLocaleString(DateTime.DATETIME_FULL)}
    </time>
  );
}
