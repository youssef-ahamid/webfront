"use client";

import { Input, Button, Card, Tab, Tabs } from "@nextui-org/react";
import { Credentials } from "@/auth";
import { z } from "zod";
import { FormEvent, useState } from "react";
import { zodValidate } from "@/utils/zod";
import { api } from "@/utils/api";
import { signIn } from "next-auth/react";

export function LoginForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { success, issues, data } = zodValidate(
      { email, password },
      {
        email: z.string().email(),
        password: z.string().min(8),
      }
    );

    if (!success) {
      setMessage(issues.map((issue) => issue.message).join("\n"));
      return;
    }

    setLoading(true);
    const { loggedIn, message, user } = await api.login(data);

    if (!loggedIn) {
      setMessage(message || "An error occurred");
      setLoading(false);
      return;
    }

    setMessage("");
    console.log(user);
    await signIn("credentials", {
      email,
      password,
    });
    setLoading(false);

    window.location.pathname = "/admin";
  };

  return (
    <form
      onSubmit={submit}
      className="w-full max-w-[24rem] mx-auto p-6 flex-col items-stretch space-y-6"
    >
      <div className="flex flex-col space-y-4 w-full">
        <Input
          className="w-full"
          id="email"
          placeholder="name@example.com"
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          className="w-full"
          id="password"
          placeholder="Password"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
      {message && <p aria-live="polite">{message}</p>}
    </form>
  );
}

export function SignupForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { success, issues, data } = zodValidate(
      { email, password, name },
      {
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(8),
      }
    );

    if (!success) {
      setMessage(issues.map((issue) => issue.message).join("\n"));
      return;
    }

    setLoading(true);
    const { success: registered, message, user } = await api.register(data);
    setLoading(false);

    if (!registered) {
      setMessage(message || "An error occurred");
      return;
    }

    setMessage("");
    console.log(user);
  };

  return (
    <form
      onSubmit={submit}
      className="w-full max-w-[24rem] mx-auto p-6 flex-col items-stretch space-y-6"
    >
      <div className="flex flex-col space-y-4 w-full">
        <Input
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button type="submit" className="w-full">
        Register
      </Button>
      {message && <p aria-live="polite">{message}</p>}
    </form>
  );
}

export default function Login() {
  return (
    <div className="flex flex-col pt-4 items-center min-h-screen">
      <Tabs aria-label="Options" color="primary">
        <Tab key="login" title="Login">
          <Card className="w-80">
            <LoginForm />
          </Card>
        </Tab>
        <Tab key="videos" title="Register">
          <Card className="w-80">
            <SignupForm />
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
