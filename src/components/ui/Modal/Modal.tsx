import React, { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Box } from '../Box/Box';
import styles from './Modal.module.css';

const modalRootEl = document.querySelector('#modal');

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Modal = ({ children, open, onClose }: Props) => {
  const element = useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    if (open) {
      modalRootEl?.appendChild(element);
      return () => {
        modalRootEl?.removeChild(element);
      };
    }
  });

  return createPortal(
    <div className={styles.backround} onClick={onClose}>
      <div className={styles.inner}>
        <Box>{children}</Box>
      </div>
    </div>,
    element
  );
};
