import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Eu sou a Vanessa, tenho 20 anos. Sou estudante na área de Análise e Desenvolvimento de Sistemas no campus Ifro Vilhena.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
