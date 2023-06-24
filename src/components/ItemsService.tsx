import {
  MonitorSmartphone,
  Pencil,
  AppWindow,
  DatabaseBackup,
} from 'lucide-react'

export function ItemsService() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <div className="mb-8 flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-4 p-4 transition-colors hover:text-sky-600">
          <MonitorSmartphone size={70} className="" />
          <div>
            <h3 className="mb-4 text-center  text-xl font-bold">
              Desenvolvimento de sites responsivos
            </h3>
            <p className=" text-center text-[#333333]">
              Criamos sites que se adaptam a diferentes dispositivos, como
              desktops, tablets e smartphones, garantindo uma experiência de
              usuário consistente e agradável.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-4 p-4 transition-colors hover:text-sky-600">
          <Pencil size={70} className="" />
          <div>
            <h3 className="mb-4 text-center  text-xl font-bold">
              Design de interface do usuário (UI) e design de experiência do
              usuário (UX)
            </h3>
            <p className=" text-center text-[#333333]">
              Nossa equipe de design se concentra em criar interfaces intuitivas
              e atraentes, priorizando a usabilidade e a satisfação do usuário.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-4 p-4 transition-colors hover:text-sky-600">
          <AppWindow size={70} className="" />
          <div>
            <h3 className="mb-4 text-center  text-xl font-bold">
              Desenvolvimento de aplicativos web interativos
            </h3>
            <p className=" text-center text-[#333333]">
              Além de sites, também podemos desenvolver aplicativos web
              interativos que permitem aos usuários interagir com a empresa de
              forma dinâmica.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8 flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-start gap-4 p-4 transition-colors hover:text-sky-600">
          <DatabaseBackup size={70} className="" />
          <div>
            <h3 className="mb-4 text-center  text-xl font-bold">
              Integração de sistemas e APIs
            </h3>
            <p className=" text-center text-[#333333]">
              Caso sua empresa necessite integrar sistemas existentes ou
              utilizar serviços de terceiros, podemos ajudar a integrar essas
              soluções em seu site.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
