import { projects } from './data'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8 text-center">私のプロジェクト一覧</h1>

      <div className="flex flex-wrap justify-center gap-8 w-full">
        {projects.map((p) => (
          <div
            key={p.name}
            className="w-full max-w-2xl bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <img src={p.image} alt={p.name} className="w-full aspect-[3/2] object-cover" />

            <div className="p-6">
              <h2 className="text-2xl font-bold">{p.name}</h2>
              <p className="text-lg text-slate-300 mt-2">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="bg-cyan-900 text-cyan-200 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-2xl text-yellow-400">
                {'★'.repeat(p.rating)}{'☆'.repeat(5 - p.rating)}
              </p>

              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-lg text-cyan-400 hover:underline"
              >
                GitHubで見る →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App