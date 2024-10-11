/** @format */

interface SocialLinks {
  twitter: string;
  linkedin: string;
  github: string;
}

export interface PersonalInfoInterface {
  id: string;
  name: string;
  subtitle: string;
  bio: string;
  profile_image: string;
  contact_email: string;
  social_links: SocialLinks;
}

interface ApiResponse {
  status: boolean;
  message: string;
  info: PersonalInfoInterface;
}
