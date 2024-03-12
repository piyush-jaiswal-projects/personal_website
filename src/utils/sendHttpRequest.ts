export enum req {
  get = "GET",
  post = "POST",
  put = "PUT",
  delete = "DELETE",
}

const sendHttpRequest = async (uri: string, reqType: req, body?: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${uri}`, {
      method: reqType,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const resData = await res.json();
    return resData;
  } catch (error) {
    console.log(error);
    return {
      success: false,
      msg: "Request failed!",
    };
  }
};

export default sendHttpRequest;
