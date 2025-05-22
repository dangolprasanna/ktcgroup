
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleServiceChange = (value: string) => {
    setFormData({
      ...formData,
      service: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name">Your Name</Label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="mt-1"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
            className="mt-1"
          />
        </div>
      </div>
      
      <div>
        <Label htmlFor="service">Service of Interest</Label>
        <Select value={formData.service} onValueChange={handleServiceChange}>
          <SelectTrigger id="service" className="mt-1">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="air-conditioning">Air-Conditioning & Ventilation</SelectItem>
            <SelectItem value="lifts">Lifts & Escalators</SelectItem>
            <SelectItem value="electrical">Electrical Installation</SelectItem>
            <SelectItem value="plumbing">Plumbing & Sanitary</SelectItem>
            <SelectItem value="tiling">Floor & Wall Tiling</SelectItem>
            <SelectItem value="painting">Painting</SelectItem>
            <SelectItem value="carpentry">Carpentry & Wood Flooring</SelectItem>
            <SelectItem value="ceiling">False Ceiling & Light Partitions</SelectItem>
            <SelectItem value="sanitary-repair">Sanitary & Pipes Repairing</SelectItem>
            <SelectItem value="plaster">Plaster Works</SelectItem>
            <SelectItem value="cleaning">Building Cleaning Services</SelectItem>
            <SelectItem value="other">Other Services</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please provide details about your service requirements"
          rows={5}
          className="mt-1"
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-khum-primary hover:bg-khum-secondary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Submit Request"}
      </Button>
    </form>
  );
};

export default ContactForm;
