import { memo, useState } from 'react';

import { ListBox } from '../../shared';

export const Attributes = memo(({ values, variants }) => {
  const [selectedValue, setSelectedValue] = useState({});
  const [selectedVariants, setSelectedVariants] = useState({});

  const handleChange = (e, parentId) => {
    setSelectedValue((prev) => ({ ...prev, [parentId]: e }));
    // setImage(e.image.url);
    // setPrice(e.price);
    setSelectedVariants({});
  };

  const handleVariantChange = (e) => {
    setSelectedVariants(e);

    setSelectedValue(() => {
      return e.labels.reduce((accum, item) => {
        const attribute = values.find((value) => value.id === item.attribute_id);
        const label = attribute.labels.find((value) => value.id === item.label_id);
        accum[attribute.id] = label;

        return accum;
      }, {});
    });
  };

  return (
    <>
      {values?.map((value) => {
        return (
          <ListBox
            items={value.labels}
            label={value.title}
            value={selectedValue[value.id]}
            parentId={value.id}
            onChange={handleChange}
          />
        );
      })}
      <ListBox items={variants} label="Variants" value={selectedVariants} onChange={handleVariantChange} />
    </>
  );
});
