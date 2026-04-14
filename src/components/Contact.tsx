import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "./share/Button";

export const Contact = () => {
    return (
        <section id="contact" className="py-16 lg:py-24 bg-[#0a0a0a]">
            <div className="text-center">
                <h2 className="text-white mb-4">Contato</h2>
            </div>
            <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] py-8 rounded-lg">

                    <h3 className="text-white mb-6">Informações</h3>

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-primary/10 flex justify-center items-center text-yellow-primary shrink-0">
                        <MapPin size={20} />
                    </div>

                    <div>
                        <h4 className="text-white mb-1">Endereço</h4>
                        <p className="text-[#a0a0a0]">Av. Principal, 123 - Centro</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-primary/10 flex justify-center items-center text-yellow-primary shrink-0">
                        <Clock size={20} />
                    </div>

                    <div>
                        <h4 className="text-white mb-1">Horário</h4>
                        <p className="text-[#a0a0a0]">Seg a Sáb: 9:00-19:00</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-yellow-primary/10 flex justify-center items-center text-yellow-primary shrink-0">
                        <Phone size={20}/>
                    </div>

                    <div>
                        <h4 className="text-white mb-1">WhatsApp</h4>
                        <p className="text-[#a0a0a0]">(85) 99999-9999</p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[rgba(212,175,55,0.1)]">
                    <Button
                        variant="primary"
                        onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                        className="w-full"
                    >
                        <div className="flex items-center justify-center gap-2">
                            <Phone size={18} />
                            Chamar no WhatsApp agora
                        </div>
                    </Button>
                </div>
            </div>
        </section>
    );
}
