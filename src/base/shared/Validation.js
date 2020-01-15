export const isValidEmail = email => {
  const regex = /^([\w_\.\-\+])+\@([\w\-]+\.)+([\w]{2,10})+$/;
  return regex.test(email);
};