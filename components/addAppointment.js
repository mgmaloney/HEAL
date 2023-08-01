/* eslint-disable import/no-extraneous-dependencies */
import { styled, Box } from '@mui/system';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Modal from '@mui/base/Modal';
import { DateTimePicker } from '@mui/x-date-pickers';
import React, { useState } from 'react';

const Backdrop = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return <div className={clsx({}, className)} ref={ref} {...other} />;
});

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = (theme) => ({
  width: 400,
  borderRadius: '12px',
  padding: '16px 32px 24px 32px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
  boxShadow: `0px 2px 24px ${
    theme.palette.mode === 'dark' ? '#000' : '#383838'
  }`,
});

export default function AddAppointment({ openModal, setOpenModal }) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const handleClose = () => setOpenModal(false);

  return (
    <>
      <StyledModal
        open={openModal}
        onClose={handleClose}
        slots={{ backdrop: StyledBackdrop }}
      >
        <>
          <Box sx={style}>
            <h2 id="unstyled-modal-title">Text in a modal</h2>
            <p id="unstyled-modal-description">Aliquid amet deserunt earum!</p>

            <DateTimePicker
              label="Start Date"
              onChange={(newValue) => setStartDate(newValue.toString())}
            />
            {console.warn('startdate', startDate)}

            <DateTimePicker
              label="End Date"
              onChange={(newValue) => setEndDate(newValue.toString())}
            />

            {console.warn('enddate', endDate)}
          </Box>
        </>
      </StyledModal>
    </>
  );
}

AddAppointment.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
