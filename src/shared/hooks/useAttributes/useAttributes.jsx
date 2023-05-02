import { useEffect, useMemo, useState } from 'react';

import { useGlobalContext } from '../../../app';
import { useVariants } from '../useVariants';

export const useAttributes = () => {
  const [values, setValues] = useState([]);
  const { state, methods } = useGlobalContext();
  const variants = useVariants();
  const labels = state.labels;
  const attributes = state?.product?.data?.attributes;

  useEffect(() => {
    const sortedVariants = variants?.flatMap((item) => item.labels);

    const sortedAttributes = attributes?.map((atr) => {
      const newLabels = atr.labels.filter((label) => {
        if (atr.id in labels) return true;
        return sortedVariants?.find((item) => item.attribute_id === atr.id && item.label_id === label.id);
      });

      return { ...atr, labels: newLabels };
    });

    setValues(sortedAttributes);
  }, [attributes, labels, variants]);

  useEffect(() => {
    const isFinished = Object.keys(labels).length === attributes?.length;
    if (isFinished) {
      const variant = variants?.find((atr) => {
        return atr.labels.find((label) => {
          const attribute = Object.keys(labels)[0];
          const labelFromStorage = labels[attribute];

          return label.attribute_id === attribute && label.label_id === labelFromStorage;
        });
      });

      methods.setVariant(variant);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [labels, variants]);

  return useMemo(() => values, [values]);
};
