// let host = "http://localhost:9060";
let host = "https://mern-auth-8t1fq3hwi-tusharsaini24.vercel.app";

// if (process.env.NODE_ENV === "production") {
//   host = process.env.host;
// }
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const getUserRoute = `${host}/api/auth/getUser`;
export const updateProfileRoute = `${host}/api/auth/updateProfile`;
