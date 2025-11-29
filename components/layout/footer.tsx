"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import React, { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  function validateEmail(value: string) {
    // basic email validation
    return /.+@.+\..+/.test(value);
  }

  const onSubmit = (ev?: React.FormEvent) => {
    if (ev) ev.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast({ title: "Please fill all fields", description: "Name, email and message are required.", });
      return;
    }

    if (!validateEmail(email)) {
      toast({ title: "Invalid email", description: "Please enter a valid email address." });
      return;
    }

    // Fake submission; In real app, call API endpoint
    console.info("Contact form submitted:", { name, email, message });

    toast({ title: "Thanks for reaching out!", description: "We'll get back to you soon.", });
    resetForm();
  };

  return (
    <footer className="w-full px-4 md:px-6 lg:px-8 py-8 bg-card/60 border-t border-border/30 backdrop-blur-md">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left column - branding */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Jatayu
          </h3>
          <p className="text-sm text-muted-foreground max-w-sm">
            A focused platform for marine data: monitoring, analysis, and visualization. Built with care, for insights.
          </p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div>
              <div className="text-xs">Email</div>
              <div>contact@jatayu.local</div>
            </div>
            <div>
              <div className="text-xs">Phone</div>
              <div>+91 0000 000 000</div>
            </div>
          </div>
        </div>

        {/* Middle column - quick links */}
        <div className="text-sm text-muted-foreground">
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline text-muted-foreground">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/environmental" className="hover:underline text-muted-foreground">
                Environmental Health
              </a>
            </li>
            <li>
              <a href="/visualization" className="hover:underline text-muted-foreground">
                Visualization (WebGIS)
              </a>
            </li>
            <li>
              <a href="/reports" className="hover:underline text-muted-foreground">
                Reports & Governance
              </a>
            </li>
          </ul>
        </div>

        {/* Right column - Contact form */}
        <Card variant="glass">
          <CardHeader>
            <CardTitle className="text-base">Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form action="#" onSubmit={onSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-label="Your name"
                  required
                  name="name"
                  autoComplete="name"
                />
                <Input
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Your email"
                  type="email"
                  required
                  name="email"
                  autoComplete="email"
                />
              </div>
              <Textarea
                placeholder="Tell us how we can help..."
                className="w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Message"
                required
                name="message"
                autoComplete="off"
              />
              <div className="flex items-center justify-end">
                <Button type="submit" className="h-9">
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-[1400px] mt-6 text-xs text-muted-foreground text-center">
        <div>© {new Date().getFullYear()} Jatayu — Built by the community. All rights reserved.</div>
      </div>
    </footer>
  );
}
