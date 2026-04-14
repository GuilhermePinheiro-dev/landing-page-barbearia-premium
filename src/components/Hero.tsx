import heroBackground from '../assets/hero-barbershop.jpg'
import { Button } from './share/Button';

export const HeroPage = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center pt-20 bg-[#0A0A0A] relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img src={heroBackground} alt="BarberShop" className='w-full h-full object-cover ' />
                <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] via-[#0A0A0A]/75 to-[#0A0A0A]/20"></div>
                <div className="absolute inset-0 bg-[#0A0A0A]/40"></div>
            </div>

            <div className='max-w-360 mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10'>
                <div className='grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24'>
                    <div className='flex flex-col gap-6 lg:gap-8 text-center'>
                        <h1 className='text-white drop-shadow-lg max-w-xl'>
                            Corte na régua, barba alinhada e atendimento de respeito
                        </h1>

                        <p className='text-[#A0A0A0] text-lg max-w-xl drop-shadow'>
                            Transforme seu visual em nossa barbearia. Profissionais especializados, ambiente premium e serviço de excelência para o homem moderno
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 sm:pl-[15%]">
                            <Button
                                variant="primary"
                                onClick={() => {
                                    window.open("https://wa.me/5585999999999", "_blank")
                                }}
                            >
                                Agendar no Whatsapp
                            </Button>

                            <Button
                                variant='secundary'
                                className='text-amber-500'
                                onClick={() => scrollToSection("services")}
                            >
                                Ver serviços
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

