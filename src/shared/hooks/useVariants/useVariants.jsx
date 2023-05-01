import { useEffect, useState } from 'react';

import { useGlobalContext } from '../../../app';

export const useVariants = () => {
  const { state } = useGlobalContext();
  const labels = state.labels;
  const variants = state?.product?.data?.variants;
  const [selectedVariants, setSelectedVariants] = useState(variants);

  useEffect(() => {
    const attributes = {};
    const choosedVariant = [];

    variants?.forEach((element) => {
      attributes[element.id] = element.labels;
    });

    Object.entries(attributes)?.forEach(([key, value]) => {
      const method = value.length === Object.keys(labels).length ? 'every' : 'some';

      const result = value[method]((item) => {
        return item.attribute_id in labels && item.label_id === labels[item.attribute_id];
      });

      if (result) {
        const element = variants.find((item) => item.id === key);
        choosedVariant.push(element);
      }
    });

    setSelectedVariants(choosedVariant.length ? choosedVariant : variants);
  }, [labels, variants]);

  return selectedVariants;
};
