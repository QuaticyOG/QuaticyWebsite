import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export default function HireForm({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    discord: '',
    email: '',
    service: '',
    budget: '',
    description: '',
  });

  const [sending, setSending] = useState(false);

  const handleChange = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        'service_b7do5fr', 
        'template_uii1ful', 
        {
          name: form.name,
          discord: form.discord,
          email: form.email,
          service: form.service,
          budget: form.budget,
          description: form.description,
        },
        'Os-ghn2oWSNQHh2uv' 
      );

      toast.success("Request sent! I'll get back to you soon.");
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Failed to send. Try again.');
    }

    setSending(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto text-left space-y-5 bg-card border border-border rounded-2xl p-8"
    >
      <h3 className="text-lg font-semibold text-foreground text-center mb-2">
        Hire Me
      </h3>

      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">Name</Label>
        <Input
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="bg-secondary/50 border-border"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">Discord Username</Label>
        <Input
          required
          placeholder="username#0000"
          value={form.discord}
          onChange={(e) => handleChange('discord', e.target.value)}
          className="bg-secondary/50 border-border"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">Email</Label>
        <Input
          required
          type="email"
          placeholder="you@email.com"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="bg-secondary/50 border-border"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">Service Type</Label>
        <Select
          value={form.service}
          onValueChange={(v) => handleChange('service', v)}
        >
          <SelectTrigger className="bg-secondary/50 border-border">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bot">Discord Bot</SelectItem>
            <SelectItem value="server">Server Setup</SelectItem>
            <SelectItem value="custom">Custom Feature</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">Budget</Label>
        <Input
          placeholder="$50 – $600"
          value={form.budget}
          onChange={(e) => handleChange('budget', e.target.value)}
          className="bg-secondary/50 border-border"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-muted-foreground text-xs">Description</Label>
        <Textarea
          required
          placeholder="Describe what you need..."
          value={form.description}
          onChange={(e) => handleChange('description', e.target.value)}
          className="bg-secondary/50 border-border min-h-[100px]"
        />
      </div>

      <Button
        type="submit"
        disabled={sending}
        className="w-full bg-gradient-to-r from-primary to-accent text-white hover:opacity-90 rounded-full gap-2"
      >
        {sending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {sending ? 'Sending...' : 'Submit Request'}
      </Button>
    </form>
  );
}