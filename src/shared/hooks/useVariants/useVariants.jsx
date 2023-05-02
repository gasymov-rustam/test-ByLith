import { useCallback, useEffect, useState } from 'react';

import { useGlobalContext } from '../../../app';

export const useVariants = () => {
  const { state } = useGlobalContext();
  const labels = state.labels;
  const variants = state?.product?.data?.variants;
  const [selectedVariants, setSelectedVariants] = useState(variants);

  const filter = useCallback((variants, key, item) => {
    return variants.filter((variant) => {
      return variant.labels.find((label) => {
        return key === label.attribute_id && item === label.label_id;
      });
    });
  }, []);

  const filterCurrentVariants = useCallback(() => {
    if (!Object.keys(labels).length) return variants;

    let newVariants;

    Object.entries(labels).forEach(([key, item], index) => {
      newVariants = index === 0 ? filter(variants, key, item) : filter(newVariants, key, item);
    });

    return newVariants;
  }, [labels, variants, filter]);

  useEffect(() => {
    const filteredVariants = filterCurrentVariants();

    setSelectedVariants(filteredVariants);
  }, [variants, labels, filterCurrentVariants]);

  return selectedVariants;
};
