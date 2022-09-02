let host = "http://localhost:9060";

if (process.env.NODE_ENV === "production") {
  host = process.env.host;
}
export const registerRoute = `${host}/api/auth/register`;
export const loginRoute = `${host}/api/auth/login`;
export const getUserRoute = `${host}/api/auth/getUser`;
export const updateProfileRoute = `${host}/api/auth/updateProfile`;
