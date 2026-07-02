import { AnimatePresence, motion } from "motion/react";
import axios from 'axios'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from 'react-router';
import { useMutation } from "@tanstack/react-query";
import { signinUser } from "@/api/auth";

export function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const signinMutation = useMutation({
    mutationFn: signinUser,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);

      navigate("/dashboard")
    },
    onError: (err) => {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? "Somethis went wrong")

      } else {
        setError("Somethis went wrong");
      }

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  })

  async function signin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    signinMutation.mutate({
      username,
      password
    });

  }

  return (
    <div className="flex min-h-[calc(99vh-4rem)] items-center justify-center px-4">
      <Card className="w-full max-w-md border-zinc-800">
        <CardHeader>
          <CardTitle className="text-2xl">Login to Use higgsfiled</CardTitle>
          <CardDescription className="text-zinc-400">
            Enter your username and password to continue.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={signin} className="space-y-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="johndoe"
                  required
                  onChange={(e) => { setUsername(e.target.value) }}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  onChange={(e) => { setPassword(e.target.value) }}
                /> 

                <AnimatePresence>
                  {error && (
                    <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-md border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-500"
                    >
                      {error}
                    </motion.div>
                  )}
                </AnimatePresence> 
              </Field>
            </FieldGroup>

            <Button
              className="w-full border cursor-pointer"
              type="submit"
              disabled={signinMutation.isPending}
            >
              {signinMutation.isPending ? "Sign In..." : "Sign In"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}