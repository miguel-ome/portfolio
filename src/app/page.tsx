import Image from "next/image";
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
            <h1 className="text-5xl">Eliseu Miguel</h1>
            <p className="text-lg">Vamos projetar algo juntos ?</p>
          </div>
        </div>
      </section>
      <section className="h-screen w-full p-4">
        <h1>Ola</h1>
      </section>
    </div>
  );
}
