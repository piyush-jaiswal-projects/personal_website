const logError = (err: any) => {
  console.log(err);
};

const getErrorMessage = (err: any): string => {
  return err.message || "Some error occurred!";
};

export { logError, getErrorMessage };
