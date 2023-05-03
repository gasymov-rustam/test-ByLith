import { Listbox } from '@headlessui/react';
import clsx from 'clsx';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { useMobile } from '../../hooks';
import { FlexAlign, FlexJustify, HorizontalFlex } from '../Flex';
import { Text, TextSize } from '../Text';

import cls from './ListBox.module.scss';

export const CHOOSE_LABEL = 'Choose';

const createName = (items, label, value, isMobile) => {
  const str = items.find((item) => item.id === value)?.title;

  return str ?? `${isMobile ? label : `${CHOOSE_LABEL} ${label}`}`;
};

const createObjectNames = (items) => {
  return items.reduce((acc, item) => {
    return { ...acc, [item.id]: item.title };
  }, {});
};

export const ListBox = (props) => {
  const { className, items, value, label, parentId, onChange } = props;
  const isMobile = useMobile();
  const [names] = useState(createObjectNames(items));

  const handleChange = (e) => {
    onChange(e, parentId);
  };

  return (
    <Listbox value={items} as="div" onChange={handleChange} className={clsx(cls.wrapper, className)}>
      <Listbox.Button className={cls.btn}>
        <HorizontalFlex justify={FlexJustify.BETWEEN} align={FlexAlign.CENTER}>
          <Text
            textSize={TextSize.LIGHT}
            value={value?.id ? names[value?.id] : createName(items, label, value, isMobile)}
            className={clsx(cls.text, cls.textOverflow)}
          />

          <IoIosArrowDown className={cls.text} />
        </HorizontalFlex>
      </Listbox.Button>

      <Listbox.Options className={clsx(cls.options, className)}>
        <Listbox.Option
          className={({ active }) => clsx({ [cls.active]: active }, cls.opacity)}
          value={`Choose ${label}`}
        >
          <Text textSize={TextSize.LIGHT} value={`Choose ${label}`} className={clsx(cls.text)} />
        </Listbox.Option>

        {items.map((item, idx) => {
          return (
            <Listbox.Option key={idx} className={({ active }) => clsx({ [cls.active]: active })} value={item}>
              <Text textSize={TextSize.LIGHT} value={item?.title} className={clsx(cls.text)} />
            </Listbox.Option>
          );
        })}
      </Listbox.Options>
    </Listbox>
  );
};
