import { Hono } from "hono";
import { SignUpInput } from "@/lib/types";
import { auth } from "@/lib/auth";
import { ErrorBox } from "../partials/components/error";
import { SuccessBox } from "../partials/components/success";
import { APIError } from "better-auth/api";
import { SignInPage } from "../partials/auth/signInPage";

const authRouter = new Hono();
authRouter.get("/sign-in", (c) => {
    return c.html(SignInPage());
})
authRouter.post("/sign-up", async (c) => {
  try {
    const data = (await c.req.json()) as SignUpInput;
    const userData = await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
    });
    return c.html(SuccessBox(`${userData.user.name} user created successfully`), 201);
  } catch (error) {
    if (error instanceof APIError) {
        console.log("APIauthError: ",error.message);
      return c.html(ErrorBox(error.message), 400);
    }
    console.log("authError: ",error instanceof Error ? error.message : "Unknown error");
    return c.html(ErrorBox("Something went wrong"), 500);
  }
});

export default authRouter;
