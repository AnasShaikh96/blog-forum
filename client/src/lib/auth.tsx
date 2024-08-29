// import { Navigate, useLocation } from "react-router-dom";
import { z } from "zod";

export const loginInputSchema = z.object({
  email: z.string().min(1, "Required").email("Invalid email"),
  password: z.string().min(5, "Required"),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

export const registerInputSchema = z
  .object({
    email: z.string().min(1, "Required"),
    firstName: z.string().min(1, "Required"),
    lastName: z.string().min(1, "Required"),
    password: z.string().min(1, "Required"),
  })
  .and(
    z
      .object({
        teamId: z.string().min(1, "Required"),
        teamName: z.null().default(null),
      })
      .or(
        z.object({
          teamName: z.string().min(1, "Required"),
          teamId: z.null().default(null),
        })
      )
  );

export type RegisterInput = z.infer<typeof registerInputSchema>;

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // const user = useUser();
  // const location = useLocation();

  // if (!user.data) {
  //   return (
  //     <Navigate
  //       to={`/auth/login?redirectTo=${encodeURIComponent(location.pathname)}`}
  //       replace
  //     />
  //   );
  // }

  // return <></>;

  return children;
};
