import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import {Form, Input, Button} from "@heroui/react";
import { Home, Mail, Phone } from "lucide-react";
import React, { useState } from "react";

export default function DocsPage() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});

  const validateForm = (): boolean => {
    const newErrors: { name?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', { name, message });
      // Add your form submission logic here (e.g., API call)
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Contact Us</h1>
          <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-[0.2em] text-white sm:text-4xl">GET IN TOUCH</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Phone */}
          <div className="flex items-center justify-center gap-4">
            <Phone className="h-6 w-6" />
            <div>
              <div className="text-sm font-medium">Phone</div>
              <div className="text-sm opacity-90">+4917624252364</div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center gap-4">
            <Mail className="h-6 w-6" />
            <div>
              <div className="text-sm font-medium">E-Mail</div>
              <div className="text-sm opacity-90">@ebex@inbox.lv</div>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center justify-center gap-4">
            <Home className="h-6 w-6" />
            <div>
              <div className="text-sm font-medium">Address</div>
              <div className="text-sm opacity-90">123 Anywhere St., Any City</div>
            </div>
          </div>
        </div>
      </div>
          <div className="mt-8 mb-8">
            <Form onSubmit={onSubmit}>
            {/* Name Input */}
            <Input
              className="mt-5 mb-5"
              isRequired
              label="Name"
              labelPlacement="outside"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={!!errors.name}
              errorMessage={errors.name}
            />
            {/* Email Input */}
            <Input
              className="mt-5 mb-5"
              isRequired
              label="Email"
              labelPlacement="outside"
              name="email"
              placeholder="Enter your email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Message Input */}
            <Input
              isRequired
              className="mt-5 mb-5"
              label="Message"
              labelPlacement="outside"
              name="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              isInvalid={!!errors.message}
              errorMessage={errors.message}
              // multiple={true} // If your Input component supports multiline (e.g., for textarea)
              // minRows={4} // Adjust based on your UI library
            />

            {/* Submit Button */}
            <Button className="mt-6 mb-6" type="submit" variant="bordered">
              Submit
            </Button>
          </Form>
          </div>
          
        </div>
      </section>
    </DefaultLayout>
  );
}



