import heroBackground from '../assets/hero-barbershop.jpg'

const HeroPage = () => {
    // export function Hero() {
    //     const scrolltoSection = (id: string) => {
    //         const element = document.getElementById(id)
    //         if (element) {
    //             element.scrollIntoView({ behavior: 'smooth' })
    //         }
    //     }
    // }
        return (
            <main className="min-h-screen flex items-center pt-20 bg-[#0A0A0A] relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroBackground} alt="BarberShop" className='w-full h-full object-cover ' />
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

                            <div className="flex flex-col sm:flex-row gap-4 ">
                                <button
                                    className='bg-amber-300 text-white rounded-md px-4 py-2 cursor-pointer'
                                    onClick={() => {
                                        window.open("https://wa.me/5585999999999", "_blank")
                                    }}
                                >
                                    Agendar no Whatsapp
                                </button>
                                <button
                                    className='bg-amber-200 text-white rounded-md px-4 py-2 cursor-pointer'
                                    // onClick={() => { scrolltoSection("services") }}
                                >
                                    Ver serviços
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

export default HeroPage;