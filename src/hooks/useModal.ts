import React, { useState } from 'react';

function useModal() {
  const [isShowing, setIsShowing] = useState(false);

  const handleModalVisible = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e);
    setIsShowing(!isShowing);
  };

  return { isShowing, handleModalVisible };
}

export default useModal;
