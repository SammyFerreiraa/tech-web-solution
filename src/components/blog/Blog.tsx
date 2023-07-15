import React from 'react'
import ItemBlog from './ItemBlog'

const posts = [
  {
    title: 'Como criar um site responsivo que impressiona',
    text: 'Descubra as melhores práticas para o desenvolvimento de sites responsivos que se adaptam perfeitamente a diferentes dispositivos, proporcionando uma experiência excepcional aos usuários.',
    creator: 'Sammy Ferreira',
    time: 26,
    image:
      'https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-segmentacao-em-varios-dispositivos_114360-7305.jpg?w=1060&t=st=1689070881~exp=1689071481~hmac=bc0430553e41c373ef5056ab3cdb20cd977045fd0f3a8e9c7bba66039f72e2d6',
    id: 1,
  },
  {
    title: 'Design centrado no usuário: Criando interfaces intuitivas',
    text: 'Saiba como aplicar os princípios do design centrado no usuário para criar interfaces intuitivas, que facilitam a navegação e a interação do usuário com o seu site.',
    creator: 'Sammy Ferreira',
    time: 38,
    image:
      'https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-equipe-de-design_114360-4531.jpg?w=1060&t=st=1689070780~exp=1689071380~hmac=8a9bf88729633f59e2b8cf2cd24688c78a55ad7bd348226ff4632ef0dcbc0ede',
    id: 2,
  },
  {
    title: 'A importância da otimização de velocidade para o seu site',
    text: 'Explore a importância de otimizar o desempenho e a velocidade do seu site, incluindo técnicas eficazes para melhorar o tempo de carregamento e a experiência do usuário.',
    creator: 'Sammy Ferreira',
    time: 10,
    image:
      'https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-carregamento-rapido_114360-747.jpg?w=1060&t=st=1689070915~exp=1689071515~hmac=576fabca6909b8eb6cd20ac585bdbd0c438478599f724d51b38f8b07377df7ba',
    id: 3,
  },
  {
    title: 'Integração perfeita: Como conectar seu site a APIs externas',
    text: 'Descubra como integrar sistemas e APIs externas ao seu site para ampliar suas funcionalidades e oferecer recursos avançados aos seus usuários.',
    creator: 'Sammy Ferreira',
    time: 58,
    image:
      'https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-interface-de-programacao-de-aplicativos_114360-9195.jpg?w=1060&t=st=1689071071~exp=1689071671~hmac=f6661bd7c37c59b931fe00ea17ae3afd212f5da8d52ee11ff05ae7ab0c1ad9c1',
    id: 4,
  },
  {
    title: 'Tendências em design de interfaces para 2023',
    text: 'Fique por dentro das últimas tendências em design de interfaces, desde esquemas de cores modernos até layouts inovadores, que podem inspirar a aparência do seu próximo projeto.',
    creator: 'Sammy Ferreira',
    time: 39,
    image:
      'https://img.freepik.com/vetores-gratis/fundo-gradiente-ui-ux_23-2149051555.jpg?w=1060&t=st=1689071366~exp=1689071966~hmac=81170fd682b608f9a2b22489ff7db6e59027c3be0338aac8c531d9eb74d7dfba',
    id: 5,
  },
]

const Blog = () => {
  return (
    <section
      id="blog"
      className="mb-24 flex flex-col gap-12 px-8 xl:flex-row xl:gap-28"
    >
      {
        // TITLE POST
      }
      <div className="flex min-w-fit flex-row items-center justify-center gap-4">
        <div className="h-14 w-2 bg-sky-600"></div>
        <p className=" flex-1 border-l-sky-700 text-2xl font-black">Blog</p>
      </div>

      {
        // BLOG POSTS
      }

      <div className="grid grid-cols-1 gap-14 px-4 py-8 sm:grid-cols-2 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-8">
        {
          // INDIVIDUAL POSTS
        }
        {posts.map((post) => (
          <ItemBlog
            title={post.title}
            text={post.text}
            creator={post.creator}
            time={post.time}
            image={post.image}
            key={post.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Blog
