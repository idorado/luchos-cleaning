"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { client } from "@/lib/client";

const ContactUsFormSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
});

type ContactUsFormValues = z.infer<typeof ContactUsFormSchema>; // { fullName: string; email: string }

export function ContactUsModal() {
  const [open, setOpen] = useState(false);
  const form = useForm<ContactUsFormValues>({
    defaultValues: {
      fullName: "",
      email: "",
    },
    mode: "onTouched",
    resolver: zodResolver(ContactUsFormSchema),
  });

  const onSubmitForm = async (values: ContactUsFormValues) => {
    form.reset();
    console.log(values);
    const { fullName, email } = values;
    const res = await client.contact.create.$post({ fullName, email });
    console.log(res);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            <Button variant="default" className="font-medium ">
              CONTACT US
            </Button>
        </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="text-foreground">Request a Quote</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmitForm)} className="space-y-4 text-primary">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} className="text-foreground" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} className="text-foreground" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full mt-2" variant="default">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
