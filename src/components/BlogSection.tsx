import React, { useState } from 'react';
import { BLOG_POSTS, BlogPost } from '../data/siteContent';
import { BookOpen, Clock, Calendar, ArrowRight, Check, Sparkles, Send } from 'lucide-react';

interface BlogSectionProps {
  onReadPost: (post: BlogPost) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onReadPost }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section id="blog" className="w-full py-20 lg:py-28 bg-[#fff0f0]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#775a19] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-[#815255]" />
              <span>Conhecimento &amp; Autocuidado</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#211a1a] font-semibold tracking-tight">
              Blog de Estética &amp; Dicas Biomédicas
            </h2>
            <p className="text-base text-[#514444]">
              Artigos educativos para você compreender a anatomia, o colágeno e as melhores escolhas para a saúde e rejuvenescimento da sua pele.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#815255]">
            <Sparkles className="w-4 h-4" />
            <span>Conteúdo 100% embasado cientificamente</span>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="flex flex-col rounded-3xl bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#eedfdf] group cursor-pointer"
              onClick={() => onReadPost(post)}
            >
              <div className="relative h-52 overflow-hidden bg-[#faeaea]">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#775a19] text-xs font-bold shadow-sm">
                  {post.tag}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#514444] mb-2 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#775a19]" /> {post.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#775a19]" /> {post.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#211a1a] mb-2 group-hover:text-[#815255] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#514444] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#faeaea] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#815255] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Ler artigo completo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Club Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border border-[#eedfdf] shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col space-y-1.5 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#775a19] uppercase tracking-wider mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 text-[#815255]" />
              <span>Exclusividade para Pacientes e Seguidoras</span>
            </div>
            <h4 className="font-serif text-2xl font-semibold text-[#211a1a]">
              Clube de Autocuidado Singullaris
            </h4>
            <p className="text-sm text-[#514444]">
              Receba orientações mensais sobre cuidados com a pele, alertas preventivos sobre colágeno e convites prioritários para eventos clínicos restritos.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#faeaea] text-[#815255] font-semibold text-sm border border-[#d49b9e]">
                <Check className="w-4 h-4 text-[#775a19]" />
                <span>Obrigada! Seu e-mail foi cadastrado com sucesso.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu melhor e-mail"
                  required
                  className="px-5 py-3 rounded-full bg-[#fff8f7] border border-[#eedfdf] text-sm text-[#211a1a] placeholder:text-[#837374] focus:outline-none focus:ring-2 focus:ring-[#815255] w-full sm:w-80 shadow-inner"
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-[#815255] hover:bg-[#663b3e] text-white font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
                >
                  <span>Cadastrar</span>
                  <Send className="w-3.5 h-3.5 text-[#ffdadb]" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
