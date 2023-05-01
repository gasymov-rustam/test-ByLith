import { memo, useCallback, useEffect } from 'react';

import { useGlobalContext } from '../../app';
import { ListBox, useAttributes } from '../../shared';

export const Attributes = memo(({ className }) => {
  const values = useAttributes();
  const { state, methods } = useGlobalContext();
  const { labels } = state;

  const handleChange = useCallback(
    (e, parentId) => {
      methods.setLabels({ attribute_id: parentId, label_id: e.id });
    },
    [methods],
  );

  useEffect(() => {
    return () => {
      methods.setResetLabels();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {values?.map((value) => {
        return (
          <ListBox
            key={value.id}
            items={value.labels}
            label={value.title}
            value={labels[value.id]}
            parentId={value.id}
            onChange={handleChange}
            className={className}
          />
        );
      })}
    </>
  );
});
