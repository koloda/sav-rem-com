
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, FileText, Image, MessageCircle, ArrowLeft } from "lucide-react";

const AdminDashboard = () => {
  useEffect(() => {
    document.title = "SAV-REM - Panel administracyjny";
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-company-dark">
              <ArrowLeft size={20} />
              <span>Powrót do strony głównej</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-company-dark">
              SAV<span className="text-company-yellow">-REM</span> Panel administracyjny
            </h1>
          </div>

          <Button variant="outline" className="flex items-center space-x-2">
            <Settings size={16} />
            <span>Ustawienia</span>
          </Button>
        </header>

        <Tabs defaultValue="about" className="space-y-4">
          <TabsList className="grid grid-cols-4 gap-4">
            <TabsTrigger value="about" className="flex items-center space-x-2">
              <FileText size={18} />
              <span>O nas</span>
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center space-x-2">
              <Settings size={18} />
              <span>Usługi</span>
            </TabsTrigger>
            <TabsTrigger value="portfolio" className="flex items-center space-x-2">
              <Image size={18} />
              <span>Portfolio</span>
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex items-center space-x-2">
              <MessageCircle size={18} />
              <span>Opinie</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Edycja sekcji O nas</CardTitle>
                <CardDescription>Zarządzaj zawartością sekcji O nas na stronie głównej</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tu będzie edytor zawartości sekcji O nas. W pełnej implementacji mógłby zawierać formularze 
                  do edycji tekstu, zdjęć i innych elementów tej sekcji.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link to="/admin/edit/about">
                  <Button>Edytuj sekcję</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Edycja usług</CardTitle>
                <CardDescription>Zarządzaj listą oferowanych usług</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tu będzie edytor zawartości sekcji Usługi. W pełnej implementacji mógłby zawierać listę usług 
                  z możliwością dodawania, edycji i usuwania.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link to="/admin/edit/services">
                  <Button>Edytuj usługi</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="portfolio" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Zarządzanie portfolio</CardTitle>
                <CardDescription>Dodawaj i usuwaj projekty z portfolio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tu będzie edytor zawartości sekcji Portfolio. W pełnej implementacji mógłby zawierać galerię zdjęć 
                  z możliwością dodawania, edycji i usuwania projektów.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link to="/admin/edit/portfolio">
                  <Button>Edytuj portfolio</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Zarządzanie opiniami</CardTitle>
                <CardDescription>Dodawaj i edytuj opinie klientów</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tu będzie edytor zawartości sekcji Opinie. W pełnej implementacji mógłby zawierać listę opinii 
                  z możliwością dodawania, edycji i usuwania.
                </p>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Link to="/admin/edit/testimonials">
                  <Button>Edytuj opinie</Button>
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} SAV-REM. Panel administracyjny. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
