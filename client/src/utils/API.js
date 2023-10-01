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
  return fetch("/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getSingleMemberVolunteer = () => {
  return fetch("/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getALLMemberVolunteer = () => {
  return fetch("/api", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteMembersVolunteers = (email) => {
  return fetch(`/api/${email}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
