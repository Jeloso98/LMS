"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; //Hook para obtener la ruta
import { useState } from "react"; //Hook para manejar estado
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { DarkModeToggle } from "./DarkModeToggle";
import { BookOpen, Code2, Laptop, Menu } from "lucide-react";
import { cn } from "@/lib/utils"; //Funcion para combinar clases
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"; //Componente para el menu lateral
import { SearchInput } from "./SearchInput";


// ELementos de navegación con etiquetas, rutas y iconos

const navItems = [
    {label: "Cursos", href: "/cursos", icon: BookOpen},
    {label: "Retos", href: "/retos", icon: Code2, badge: "Muy pronto"},
    {label: "Proyectos", href: "/proyectos", icon: Laptop},
]
export default function Header() {
    const pathname = usePathname(); //Ruta actual
    const [isOpen, setIsOpen] = useState(false); //Estado para el menu lateral
    return(
        <header className= "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            {/* Contenedor principal */}
            <div className="container flex h-16 items-center justify-between">
                {/*Logo y navegación*/}
                <div className="flex items-center gap-2">
                    {/*Logo*/}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
                            <Code2 className="h-5 w-5" />
                        </div>
                        <span className="text-xl font-bold sm:block hidden">ADSO</span>
                        <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">Beta</span>
                    </Link>
                    {/* Navegación */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link 
                            key={item.label}
                            href={item.href}
                            className={cn("flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50", 
                                pathname === item.href 
                                    ? "text-foreground" // Si la ruta actual es igual a la ruta del item, resaltar el texto
                                    : "text-foreground/60" // Sino usar un color mas claro
                                )}> 
                            <item.icon className="h-4 w-4" />
                            {item.label}
                            {item.badge && (
                                <span className="rounded-md bg-red-500 px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
                                    {item.badge}
                                </span>
                            )}
                            </Link>
                        ))}
                    </nav>  
                </div>
                {/* Botones de usuario y modo oscuro */}
                <div className="flex items-center gap-4">
                    <DarkModeToggle />
                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                   {/* Barra de busqueda */}
                   <SearchInput />
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="outline" className="hidden md:inline-flex">Iniciar sesión</Button>
                        </SignInButton>
                    </SignedOut>
                    {/* Navegación Móvil */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="md:hidden">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Abrir menú</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px]">
                            <nav className="flex flex-col gap-2">
                                {navItems.map((item) => (
                                    <Link 
                                    key={item.label}
                                    href={item.href}
                                    className={cn("flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted/50", 
                                        pathname === item.href 
                                            ? "text-foreground" // Si la ruta actual es igual a la ruta del item, resaltar el texto
                                            : "text-foreground/60" // Sino usar un color mas claro
                                        )}> 
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                    {item.badge && (
                                        <span className="rounded-md bg-red-500 px-1.5 py-0.5 text-xs font-medium text-muted-foreground">
                                            {item.badge}
                                        </span>
                                    )}
                                    </Link>
                                ))}
                            </nav>
                            {/* Boton para iniciar sesión en pantallas de movil */}                         
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <Button variant="outline" className="w-full">Iniciar sesión</Button>
                                </SignInButton>
                            </SignedOut>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    );    
}