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

export { getAppointments, getAppointmentsByTherapistId };