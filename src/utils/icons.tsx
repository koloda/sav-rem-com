
import React from 'react';
import { Home, Wrench, CheckCircle, Edit, Image, Map } from "lucide-react";

type IconName = 'Home' | 'Wrench' | 'CheckCircle' | 'Edit' | 'Image' | 'Map';

export const getIcon = (iconName: IconName) => {
  switch (iconName) {
    case 'Home':
      return <Home className="w-10 h-10 text-company-yellow mb-4" />;
    case 'Wrench':
      return <Wrench className="w-10 h-10 text-company-yellow mb-4" />;
    case 'CheckCircle':
      return <CheckCircle className="w-10 h-10 text-company-yellow mb-4" />;
    case 'Edit':
      return <Edit className="w-10 h-10 text-company-yellow mb-4" />;
    case 'Image':
      return <Image className="w-10 h-10 text-company-yellow mb-4" />;
    case 'Map':
      return <Map className="w-10 h-10 text-company-yellow mb-4" />;
    default:
      return <Home className="w-10 h-10 text-company-yellow mb-4" />;
  }
};
