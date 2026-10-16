import { projects } from './data'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">私のプロジェクト一覧</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-slate-800 rounded-2xl shadow-lg overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <img src={p.image} alt={p.name} className="w-full aspect-[3/2] object-cover" />

            <div className="p-4">
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="text-slate-300 mt-1">{p.description}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((tag) => (
                  <span key={tag} className="bg-cyan-900 text-cyan-200 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-yellow-400">
                {'★'.repeat(p.rating)}{'☆'.repeat(5 - p.rating)}
              </p>

              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 text-cyan-400 hover:underline"
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