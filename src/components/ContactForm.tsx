import { useState, useEffect } from "react";
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
  const [isFormValid, setIsFormValid] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  // Validate form whenever formData changes
  useEffect(() => {
    const isValid = Object.values(formData).every(value => value.trim() !== "");
    setIsFormValid(isValid);
  }, [formData]);

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
    
    // Format the message for WhatsApp with proper URL encoding
    const whatsappMessage = encodeURIComponent(
      `Name: ${formData.name}\n` + 
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service Required: ${formData.service}\n` +
      `Message: ${formData.message}`
    );

    // WhatsApp API URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=9779840807275&text=${whatsappMessage}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
    
    // Show success toast
    toast({
      title: "Redirecting to WhatsApp",
      description: "You will be redirected to WhatsApp to send your message.",
    });
    
    setIsSubmitting(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
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
        <Label htmlFor="service">Service Required</Label>
        <Select
          onValueChange={handleServiceChange}
          value={formData.service}
          required
        >
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Air-Conditioning & Ventilation">Air-Conditioning & Ventilation</SelectItem>
            <SelectItem value="Lifts & Escalators">Lifts & Escalators</SelectItem>
            <SelectItem value="Electrical Installation">Electrical Installation</SelectItem>
            <SelectItem value="Plumbing & Sanitary">Plumbing & Sanitary</SelectItem>
            <SelectItem value="Floor & Wall Tiling">Floor & Wall Tiling</SelectItem>
            <SelectItem value="Painting">Painting</SelectItem>
            <SelectItem value="Carpentry & Wood Flooring">Carpentry & Wood Flooring</SelectItem>
            <SelectItem value="False Ceiling & Light Partitions">False Ceiling & Light Partitions</SelectItem>
            <SelectItem value="Sanitary & Pipes Repairing">Sanitary & Pipes Repairing</SelectItem>
            <SelectItem value="Plaster Works">Plaster Works</SelectItem>
            <SelectItem value="Building Cleaning Services">Building Cleaning Services</SelectItem>
            <SelectItem value="Other Services">Other Services</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about what you need..."
          required
          className="mt-1 min-h-[120px]"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-khum-primary hover:bg-khum-primary/90"
        disabled={isSubmitting || !isFormValid}
      >
        {isSubmitting ? "Sending..." : "Send Message via WhatsApp"}
      </Button>
    </form>
  );
};

export default ContactForm;
