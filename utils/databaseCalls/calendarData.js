import axios from 'axios';
import { clientCredentials } from '../client';

const dbURL = clientCredentials.databaseURL;

const getAppointments = async () => {
  try {
    const response = await fetch(`${dbURL}/appointments.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const appointmentsJSON = await response.json();
    const appointmentsArr = Object.values(appointmentsJSON);
    if (appointmentsArr) {
      return appointmentsArr;
    }
    return [];
  } catch (e) {
    console.warn(e);
    return 'call failed';
  }
};

const getAppointmentsByTherapistId = async (therapistId) => {
  try {
    const response = await fetch(
      `${dbURL}/appointments.json?orderBy="therapistId"&equalTo="${therapistId}"`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const appointmentsJSON = await response.json();
    const appointmentsArr = Object.values(appointmentsJSON);
    return appointmentsArr;
  } catch (e) {
    console.warn(e);
    return 'call failed';
  }
};

const getAppointmentsByClientId = async (clientId) => {
  try {
    const response = await fetch(
      `${dbURL}/appointments.json?orderBy="clientId"&equalTo="${clientId}"`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const appointmentsJSON = await response.json();
    const appointmentsArr = Object.values(appointmentsJSON);
    return appointmentsArr;
  } catch (e) {
    console.warn(e);
    return 'call failed';
  }
};

const updateAppointment = async (payload) => {
  try {
    const response = await axios.patch(
      `${dbURL}/appointments/${payload.appointmentId}.json`,
      payload,
    );
    return response;
  } catch (e) {
    console.warn(e);
    return 'call failed';
  }
};

const createAppointment = async (payload) => {
  try {
    const response = await axios.post(`${dbURL}/appointments.json`, payload);
    const appointmentId = await response.data.name;
    await updateAppointment({ appointmentId });
    return 'success';
  } catch (e) {
    console.warn(e);
    return 'call failed';
  }
};

const deleteAppointment = async (appointmentId) => {
  try {
    const response = await axios.delete(
      `${dbURL}/appointments/${appointmentId}.json`,
    );
    return response;
  } catch (e) {
    console.warn(e);
    return 'call failed';
  }
};

const getAppointmentByAppointmentId = async (appointmentId) => {
  try {
    const { data } = await axios.get(
      `${dbURL}/appointments/${appointmentId}.json`,
    );
    return data;
  } catch (e) {
    console.warn(e);
    return 'call failed';
  }
};

export {
  getAppointments,
  getAppointmentsByTherapistId,
  getAppointmentsByClientId,
  updateAppointment,
  createAppointment,
  deleteAppointment,
  getAppointmentByAppointmentId,
};
