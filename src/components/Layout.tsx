import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Facebook } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className={`fixed w-full z-50 ${isHome ? 'absolute' : 'bg-japanese-indigo'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 md:py-6">
            <Link to="/" className="flex items-center" aria-label="ホームページへ">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-lg font-bold">一美</span>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/lunch" className="text-white hover:text-japanese-gold transition">
                ランチ
              </Link>
              <Link to="/izakaya" className="text-white hover:text-japanese-gold transition">
                居酒屋
              </Link>
              <Link to="/drinks" className="text-white hover:text-japanese-gold transition">
                ドリンク
              </Link>
              <Link to="/crepe" className="text-white hover:text-japanese-gold transition">
                クレープ
              </Link>
              <Link to="/ryokan" className="text-white hover:text-japanese-gold transition">
                宿泊案内
              </Link>
              <Link to="/activities" className="text-white hover:text-japanese-gold transition">
                周辺案内
              </Link>
              <Link to="/store-info" className="text-white hover:text-japanese-gold transition">
                店舗情報
              </Link>
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2 -mr-2 focus:outline-none"
              aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-japanese-indigo z-50 overflow-y-auto">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-6">
                <Link 
                  to="/lunch" 
                  className="text-white hover:text-japanese-gold transition text-lg"
                >
                  ランチ
                </Link>
                <Link 
                  to="/izakaya" 
                  className="text-white hover:text-japanese-gold transition text-lg"
                >
                  居酒屋
                </Link>
                <Link 
                  to="/drinks" 
                  className="text-white hover:text-japanese-gold transition text-lg"
                >
                  ドリンク
                </Link>
                <Link 
                  to="/crepe" 
                  className="text-white hover:text-japanese-gold transition text-lg"
                >
                  クレープ
                </Link>
                <Link 
                  to="/ryokan" 
                  className="text-white hover:text-japanese-gold transition text-lg"
                >
                  宿泊案内
                </Link>
                <Link 
                  to="/activities" 
                  className="text-white hover:text-japanese-gold transition text-lg"
                >
                  周辺案内
                </Link>
                <Link 
                  to="/store-info" 
                  className="text-white hover:text-japanese-gold transition text-lg"
                >
                  店舗情報
                </Link>
                <div className="pt-4 flex space-x-6">
                  <a 
                    href="https://www.instagram.com/ichigo__ichibi/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-japanese-gold transition"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://x.com/ichigo_ichibi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-japanese-gold transition"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/share/12DF9aSZmwS/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-japanese-gold transition"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="relative">
        {children}
      </main>

      <footer className="bg-japanese-indigo text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">御食事・居酒屋『一期一美』</h3>
              <p className="text-gray-300">
                〒299-1176<br />
                千葉県君津市内蓑輪122-1<br />
                <span className="text-sm">（君津市役所から車で5分・小糸川近く）</span>
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">営業時間</h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  <p className="font-medium">【お食事・居酒屋】</p>
                  <p>ランチ 11:00～14:00 (L.O.13:30)</p>
                  <p>クレープ 14:00～17:00</p>
                  <p>居酒屋 17:00～22:00 (L.O.21:30)</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">宿泊</h3>
              <div className="text-gray-300">
                <p>チェックイン 15:00～22:00<br />
                チェックアウト ～10:00<br />
                ※早朝チェックアウト可</p>
                <p className="mt-2 text-sm">Wi-Fi完備・駐車場あり</p>
              </div>
              <div className="mt-4 flex space-x-4">
                <a 
                  href="https://www.instagram.com/ichigo__ichibi/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-japanese-gold transition"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://x.com/ichigo_ichibi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="text-white hover:text-japanese-gold transition"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/share/12DF9aSZmwS/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white hover:text-japanese-gold transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p>© 2024 御食事・居酒屋『一期一美』 All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}