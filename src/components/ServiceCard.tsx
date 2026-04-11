interface ServiceCardProps {
    icon: React.ReactNode,
    title: string,
    price: string,
    description: string
}

export const ServiceCard = ({ icon, title, price, description }: ServiceCardProps) => {
    return (
        <div className="bg-[#1A1A1A] border border-[rgba(212,175,55,0.2)] rounded-lg p-6 hover:border-yellow-primary 
        transition-all duration-300 hover:shadow-[0_0_30pxrgba(212,175,55,0.1)] group cursor-pointer">
            <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-primary/10 flex justify-center items-center
                group-hover:bg-yellow-primary/20 transition-colors duration-300
                ">
                    {icon}
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-white ">{title}</h3>
                    <p className="text-[#a0a0a0] text-sm">{description}</p>
                </div>
                <div className="pt-2 border-t border-[rgba(212,175,55,0.1)]">
                    <span className="text-yellow-primary">{price}</span>
                </div>
            </div>
        </div>
    );
}

