import Image from "next/image";

// Images
import ProfilePicture from "../assets/profilePicture.png";
import BgHomeImg from "../assets/bgImgHome.png";
import Logo from "../assets/logo.png";

export default function Home() {
  return (
    <div>
      <section className="h-screen w-full p-4 bg-yellow">
        <div className="relative h-full w-full flex items-end justify-center">
          <Image
            src={BgHomeImg}
            alt="Teste 1"
            fill={true}
            className="object-cover"
          />
          <div className="relative flex flex-col items-center space-y-5 text-white mb-24">
            <div className="w-16 h-16 relative">
              <Image
                src={Logo}
                alt="Logo"
                fill={true}
                className="object-cover"
              />
            </div>
            <h1 className="text-title">Eliseu Miguel</h1>
            <p className="text-lg">Vamos projetar algo juntos ?</p>
          </div>
        </div>
      </section>
      <section className="w-full p-4 flex flex-col md:flex-row md:h-screen">
        <div className="w-80 h-80 relative m-auto md:w-2/5 md:h-full">
          <Image
            src={ProfilePicture}
            alt="Profile Picture"
            fill={true}
            className="object-cover rounded-md"
          />
        </div>
        <div className="md:w-2/5">
          {/* Estilização do canto superior direito */}
          <div className="flex justify-end mt-10">
            <div className="w-10 h-1 bg-yellow" />
            <div className="w-1 h-10 bg-yellow" />
          </div>
          <div className="pb-5 pl-5 pt-2 pr-2">
            <h1 className="text-title">Sobre Mim</h1>
            <p className="text-lg">
              Iniciei meus estudos em 2021 como hobby, sempre lendo, praticando,
              e me “divertindo” (até se estressar com bugs rsrs), mas dado a
              oportunidade, decidi usar o conhecimento para uso profissional.
              <br />
              <br />
              Sendo assim, desde de 2023 atuo como freelancer sendo
              Desenvolvedor Fullstack Nodejs, refatorando e criando novos
              sistemas, automações, correções, etc. Dentre as áreas de destaque,
              estou me desenvolvendo também no campo de IA (Inteligência
              Artificial), a queridinha do momento. Por fim, entre em contato
              para podermos fazer algo juntos.
            </p>
          </div>
          {/* Estilização do canto inferior esquerdo */}
          <div className="flex items-end">
            <div className="w-1 h-10 bg-yellow" />
            <div className="w-10 h-1 bg-yellow" />
          </div>
        </div>
      </section>
    </div>
  );
}
