import React from "react";
import {
  FaTiktok,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function SocialLinks({ 
  className = "", 
  iconSize = "w-4 h-4", 
  iconColor = "text-white",
  hoverColor = "hover:text-[#D68C45]",
  showLabels = false,
  customWrapper = null
}) {
  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/profile.php?id=61581382018162", // Thay đổi URL thực tế
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "https://www.tiktok.com/@vitvangsociu", // Thay đổi URL thực tế
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@E.C.O-GreenTechGamification", // Thay đổi URL thực tế
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.linkedin.com%2Fin%2Fe-c-o-green-tech-gamification-1318b7388%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExUU9OSm45RTE2emcxZm5MWAEe0cPMjZIBql6uVuU3vhlglF7KwEtIcIeM7yZa9IoTKMiQdZY-4j2ynZktugM_aem_IglM1eoh3On4QZoPFEBdCA&h=AT2EmNXFI8RFFoVdT9-K8Jo5kJLUy999-vSbOOj-0sSIVSfPlPkmKg7MzPs3CGA4VXVcNWgECEmmG5OQ3VfEoBeZCxP8MkkunZKO2P6LzYJkWAc0uavPQTmitMuCWSryxLFPNw", // Thay đổi URL thực tế
    }
  ];

  const handleClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        const iconElement = (
          <button
            onClick={() => handleClick(social.url)}
            className={`${iconColor} ${social.color} transition-colors duration-300 cursor-pointer`}
            title={social.name}
            aria-label={`Visit our ${social.name} page`}
          >
            <IconComponent className={iconSize} />
          </button>
        );

        return (
          <div key={social.name} className="flex flex-col items-center">
            {customWrapper ? customWrapper(iconElement) : iconElement}
            {showLabels && (
              <span className="text-xs text-gray-400 mt-1">{social.name}</span>
            )}
          </div>
        );
      })}
    </div>
  );
}
