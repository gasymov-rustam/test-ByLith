import { memo, useEffect, useState } from 'react';

import { useGlobalContext } from '../../app';
import { ListBox } from '../../shared';

export const Attributes = memo(({ className }) => {
  const [selectedVariants, setSelectedVariants] = useState({});
  const { state, methods } = useGlobalContext();
  const { labels } = state;
  const variants = state?.product?.data?.variants;
  const values = state?.product?.data?.attributes;

  const handleChange = (e, parentId) => {
    methods.setLabels({ attribute_id: parentId, label_id: e.id });
  };

  const handleVariantChange = (e) => {
    setSelectedVariants(e);
    methods.setWithResetLabels(e);
  };

  useEffect(() => {
    if (!labels?.length) {
      setSelectedVariants({});
    }
  }, [labels]);

  return (
    <>
      {!!values?.length &&
        values?.map((value) => {
          const selectedValue = labels?.find((label) => label.attribute_id === value.id);

          return (
            <ListBox
              key={value.id}
              items={value.labels}
              label={value.title}
              value={selectedValue}
              parentId={value.id}
              onChange={handleChange}
              className={className}
            />
          );
        })}
      {variants?.length && (
        <ListBox
          items={variants}
          label="Variants"
          value={selectedVariants}
          onChange={handleVariantChange}
          className={className}
        />
      )}
    </>
  );
});
