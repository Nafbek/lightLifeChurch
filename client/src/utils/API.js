const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "";

export const createContact = (data) => {
  return fetch(`${API_BASE_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getContact = (email) => {
  return fetch(`${API_BASE_URL}/contact/email`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createMemberVolunteer = (data) => {
  console.log(API_BASE_URL);
  return fetch(`${API_BASE_URL}/api/membership`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      purpose: JSON.stringify(data.purpose),
      fullName: data.fullName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      volunteerismArea: data.volunteerismArea,
    }),
  });
};

export const getSingleMemberVolunteer = (email) => {
  return fetch(`${API_BASE_URL}/api/membership/${email}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getALLMemberVolunteer = () => {
  return fetch(`${API_BASE_URL}/membership`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteMembersVolunteers = (email) => {
  return fetch(`${API_BASE_URL}/api/membership/${email}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
