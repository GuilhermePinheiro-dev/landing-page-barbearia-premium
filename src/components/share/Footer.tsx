import { Camera, MapPin, Phone } from "lucide-react";

export const Footer = () => {
    return (
        <footer className=" bg-[#0a0a0a] border-t border-[rgba(212,175,55,0.2)] py-8">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="text-[#a0a0a0] text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Barbearia Navalha. Todos os direitos reservados.
                    </div>


                    <ul className="flex items-center gap-6 ">
                        <li>
                            <a href="https://www.instagram.com/barbearianavalha/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-[#a0a0a0] hover:text-yellow-primary transition-colors duration-300"
                            >
                                <Camera size={20} />
                                <span className="text-sm ml-2">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/5511999999999/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-[#a0a0a0] hover:text-yellow-primary transition-colors duration-300"
                            >
                                <Phone size={20} />
                                <span className="text-sm ml-2">WhatsApp</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://maps.google.com/?q=Barbearia+Navalha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex text-[#a0a0a0] hover:text-yellow-primary transition-colors duration-300"
                            >
                                <MapPin size={20} />
                                <span className="text-sm ml-2">Localização</span>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    );
}

