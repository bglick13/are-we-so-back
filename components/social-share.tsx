"use client";

import { Button } from "@/components/ui/button";
import { Twitter, Facebook, Linkedin, Link2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface SocialShareProps {
  title?: string;
  text?: string;
}

export function SocialShare({
  title = "Are We So Back?",
  text = "Check out if we are so back based on the stock market!",
}: SocialShareProps) {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard.",
    });
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        url
      )}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <Button
        variant="outline"
        size="lg"
        className="gap-2"
        onClick={shareOnTwitter}
      >
        <Twitter className="h-5 w-5" />
        <span>Twitter</span>
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="gap-2"
        onClick={shareOnFacebook}
      >
        <Facebook className="h-5 w-5" />
        <span>Facebook</span>
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="gap-2"
        onClick={shareOnLinkedIn}
      >
        <Linkedin className="h-5 w-5" />
        <span>LinkedIn</span>
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="gap-2"
        onClick={copyToClipboard}
      >
        <Link2 className="h-5 w-5" />
        <span>Copy link</span>
      </Button>
    </div>
  );
}
