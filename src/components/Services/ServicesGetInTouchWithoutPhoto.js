"use client";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaUser, FaEnvelope, FaPhone, FaEdit } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FiArrowUpRight } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import HomeHeading from "../custom ui/HomeHeading";
import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
  lastname: z.string().min(2, {
    message: "Numele trebuie să aibă cel puțin 2 caractere.",
  }),
  firstname: z.string().min(2, {
    message: "Prenumele trebuie să aibă cel puțin 2 caractere.",
  }),
  email: z.string().email({
    message: "Adresa de email trebuie să fie validă.",
  }),
  phone: z.string().min(10, {
    message: "Numărul de telefon trebuie să aibă cel puțin 10 caractere.",
  }),
  message: z.string().min(10, {
    message: "Mesajul trebuie să aibă cel puțin 10 caractere.",
  }),
});

export default function ServicesGetInTouchWithoutPhoto() {
  const recaptchaRef = useRef();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastname: "",
      firstname: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values) {
    // Get the reCAPTCHA token
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    const templateParams = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      phone: values.phone,
      message: values.message,
      "g-recaptcha-response": recaptchaValue, // Add the token to templateParams
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (response) => {
          form.reset();
          recaptchaRef.current.reset();
          toast({
            title: "Cererea a fost trimisă cu succes!",
            description: "Vă vom contacta în cel mai scurt timp posibil.",
          });
        },
        (err) => {
          toast({
            title: "Cererea a eșuat!",
            description: "Vă rugăm să încercați din nou.",
          });
        }
      );
  }

  return (
    <section className="bg-white w-full ">
      <div>
        <HomeHeading
          smallTitle="Intreaba-ne orice"
          smallTitleCSS="justify-start"
          bigTitle="Ai un proiect viitor?"
          bigTitleSecond="Trimite-ne un mesaj acum!"
          bigTitleCSS="justify-center text-left mb-6"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <FaUser className="absolute flex top-4 left-3 text-gray-400" />
                        <Input
                          placeholder="Numele tau"
                          {...field}
                          className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <FaUser className="absolute flex top-4 left-3 text-gray-400" />
                        <Input
                          placeholder="Prenumele tau"
                          {...field}
                          className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <FaEnvelope className="absolute flex top-4 left-3 text-gray-400" />
                        <Input
                          placeholder="Adresa de email"
                          {...field}
                          className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <FaPhone className="absolute flex top-4 left-3 text-gray-400" />
                        <Input
                          placeholder="Numarul tau de telefon"
                          {...field}
                          className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <FaEdit className="absolute flex top-4 left-3 text-gray-400" />
                      <Textarea
                        placeholder="Mesajul tau"
                        {...field}
                        className="w-full pl-10 pr-4 py-3 border-2 rounded bg-gray-100 border-[#E5E7EB]"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}
            />
            <button
              type="submit"
              className="relative bg-custom-blue px-6 py-3 flex items-center justify-center text-white rounded-sm clip-bottom-right group lg:mt-10 mt-2 mb-6 lg:mb-0 w-full sm:w-[290px] mx-auto"
            >
              <div className="absolute inset-0 overflow-hidden">
                <div className="h-1/2 transform bg-custom-orange -translate-x-[110%] group-hover:-translate-x-0 transition-transform duration-500"></div>
                <div className="h-1/2 bg-custom-orange transform translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
              <div className="flex items-center relative z-10">
                <span>Trimite mesajul</span>
                <FiArrowUpRight className="pl-2 text-2xl transition-transform duration-500 group-hover:rotate-45" />
              </div>
            </button>
          </form>
        </Form>
      </div>
    </section>
  );
}
