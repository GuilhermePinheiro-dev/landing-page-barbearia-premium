const Footer = () => {
    return (
        <footer className=" bg-[#0a0a0a] border-t border-[rgba(212,175,55,0.2)] py-8 mx-4 sm:mx-6 lg:mx-8">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-6">
                    <div className="text-[#a0a0a0] text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Barbearia Navalha. Todos os direitos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;