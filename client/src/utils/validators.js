export function checkEmail(email) {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
}

export function checkPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

export function checkPayment(link) {
  const regex =
    /^(https?:\/\/|http?:\/\/)?([\da-zA-Z.-]+)\.([a-zA-Z.]{2,})([/\w.-]*)*\/?$/;

  return regex.test(link);
}
