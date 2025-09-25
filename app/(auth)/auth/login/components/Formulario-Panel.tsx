"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader2, Lock, Settings, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { formularioLoginSchema, FormularioLoginType } from "@/common/forms";

export default function FormularioPanel() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(true);

  const formLogin = useForm<FormularioLoginType>({
    resolver: zodResolver(formularioLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: FormularioLoginType) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Form submitted: ", values);
      //   form.reset();
    } catch (err) {
      console.error("Error: ", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-none shadow-none space-y-4">
      <CardHeader>
        <CardTitle className="text-3xl">Sign in</CardTitle>
        <CardDescription className="text-xl">
          Ingresa tu email y contraseña para loguearte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...formLogin}>
          <form
            onSubmit={formLogin.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* Email */}
            <FormField
              control={formLogin.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    <div className="relative w-full">
                      <Settings className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        {...field}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`h-12 pl-10 bg-white transition-all duration-200 ${
                          focusedField === "email"
                            ? "ring-1 focus-visible:ring-[#21d3fd]"
                            : ""
                        }`}
                        placeholder="tu-email@dominio.com"
                      />
                    </div>
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={formLogin.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    <div className="relative w-full">
                      <Lock className="absolute left-3 top-6 transform -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                      <Input
                        {...field}
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField(null)}
                        className={`h-12 pl-10 bg-white border-border transition-all duration-200 ${
                          focusedField === "password"
                            ? "ring-1 focus-visible:ring-[#21d4fd]"
                            : ""
                        }`}
                        placeholder="Password"
                        type={showPassword ? "password" : "text"}
                      />
                      {showPassword ? (
                        <Eye
                          className="absolute right-3 top-4 w-5 h-5 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      ) : (
                        <EyeOff
                          className="absolute right-3 top-4 w-5 h-5 cursor-pointer"
                          onClick={() => setShowPassword(!showPassword)}
                        />
                      )}
                    </div>
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Remember-Me */}
            {/* <FormField
                control={formLogin.control}
                name=""
            /> */}

            <Button
              disabled={isSubmitting}
              className="w-full cursor-pointer bg-gradient-to-r from-[#21d4fd] to-[#2152ff] hover:scale-105 text-white py-6 text-xl font-bold rounded-2xl group"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                  Iniciando...
                </>
              ) : (
                <>
                  LOG IN
                  <Zap className="ml-3 h-7 w-7 group-hover:rotate-12 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
