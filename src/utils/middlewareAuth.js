import { toStringCookies } from "./toStringCookies";

export default async function middlewareAuth(req) {
  const { data } = await fetch("http://localhost:5200/api/user/profile", {
    method: "GET",
    credentials: "include",
    headers: {
      Cookie: toStringCookies(req.cookies),
    },
  }).then((res) => res.json());

  const { user } = data || {};
  const role = user?.role === "ADMIN" ? "admin" : "profile";
  return { role, user };
}
