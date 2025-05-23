import { Button } from "./ui/button";


export default function Hero() {
    return (
        <section className="container flex flex-col items-center justify-center gap-6 py-24 text-center md:py-32">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Conviertete en <br />
                un desarrollador{"  "}
                <span className="bg-gradient bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
                    Full Stack
                </span>
                <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
                    Aprende todo lo relacionado con el desarrollo de software y sus nuevas tecnologías
                </p>
                <div className="flex flex-col pt-5 sm:flex-row justify-center">
                    <Button 
                        variant="default" className="bg-gradient-to-r from-blue-500 to-violet-500 text-white">
                        Acceder a los cursos
                    </Button>
                    
                </div>
            </h1>
        </section>
    )
}
