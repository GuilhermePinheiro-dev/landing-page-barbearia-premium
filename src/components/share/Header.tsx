import { useState } from 'react'
import logoBarbearia from '../../assets/logo-barbearia.jpg'
import { Button } from './Button'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[rgba(212,175,55,0.2)]">
            <div className="mx-auto flex max-w-360 items-center justify-between px-6 py-4">
                <div className='flex items-center gap-2'>
                    <img src={logoBarbearia} alt="Logo barbearia Navalha" className='h-10 w-10 rounded object-cover' />
                    <span className='text-white font-semibold'>Barbearia Navalha</span>
                </div>

                <div className='flex items-center gap-3'>
                    <button
                        type='button'
                        className='inline-flex h-10 w-10 items-center justify-center rounded-md  text-white transition hover:bg-white/10 md:hidden'
                        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((value) => !value)}
                    >
                        <span className='text-[30px]'>{menuOpen ? '✕' : '☰'}</span>
                    </button>

                    <nav className='hidden md:block'>
                        <ul className='flex items-center gap-6'>
                            <li className='text-white hover:text-[#d4af37] transition-colors duration-300 cursor-pointer'
                            onClick={() => scrollToSection("hero")}>Inicio</li>
                            <li className='text-white hover:text-[#d4af37] transition-colors duration-300 cursor-pointer'
                            onClick={() => scrollToSection("services")}>Serviços</li>
                            <li className='text-white hover:text-[#d4af37] transition-colors duration-300 cursor-pointer'
                            onClick={() => scrollToSection("contact")}>Contato</li>
                            <li>
                                <Button
                                    variant='primary'
                                    className='ml-2'
                                    onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                                >
                                    Agendar
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {menuOpen && (
                <nav className='md:hidden border-t border-white/10 bg-[#0A0A0A]/95 px-6 py-4'>
                    <ul className='flex flex-col gap-4'>
                        <li className='text-white hover:text-[#d4af37] transition-colors duration-300 cursor-pointer'>Inicio</li>
                        <li className='text-white hover:text-[#d4af37] transition-colors duration-300 cursor-pointer'>Serviços</li>
                        <li className='text-white hover:text-[#d4af37] transition-colors duration-300 cursor-pointer'>Contato</li>
                        <li>
                            <Button
                                variant='primary'
                                className='w-full'
                                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                            >
                                Agendar
                            </Button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}

