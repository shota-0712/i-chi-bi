import React from 'react';
import { Clock, Coffee, Cake } from 'lucide-react';
import { MenuItem } from '../components/menu/menu-item';
import { SocialFeed } from '../components/social/social-feed';
import { SocialWidgetLoader } from '../components/social/social-widget-loader';

export function Crepe() {
  return (
    <div className="pt-20">
      <SocialWidgetLoader />
      {/* Hero */}
      <div 
        className="h-[60vh] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://i.ibb.co/6JXQxzNQ/ichigotyoko.webp?auto=format&fit=crop&w=1200&h=800&q=75")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">クレープ</h1>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">手作りクレープの魅力</h2>
              <p className="text-gray-600">
                一美のクレープは、毎朝丁寧に仕込む生地と、地元の新鮮な食材を使用。
                サクッと香ばしい生地と、季節のフルーツや手作りクリームの組み合わせをお楽しみください。
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-japanese-red" aria-hidden="true" />
                <h3 className="text-xl font-semibold">営業時間</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>14:00～17:00</p>
                <p className="text-sm mt-4">※ラストオーダーは閉店30分前</p>
              </div>
            </div>

            {/* Menu */}
            <div className="space-y-12">
              {/* Sweet Crepes */}
              <div>
                <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-japanese-red">
                  クレープメニュー
                </h3>
                <div className="space-y-6">
                  <MenuItem 
                    name="チョコバナナホイップ"
                    price={700}
                    allergens={['小麦', '乳']}
                    description="チョコレートソースとバナナ、ホイップクリームの定番の組み合わせ"
                  />
                  <MenuItem 
                    name="チョコバナナホイップ mini"
                    price={400}
                    allergens={['小麦', '乳']}
                    description="人気No.1メニューのミニサイズ"
                  />
                  
                  <MenuItem 
                    name="チョコイチゴホイップ"
                    price={800}
                    allergens={['小麦', '乳']}
                    description="チョコレートと新鮮なイチゴ、たっぷりホイップクリーム"
                  />
                  <MenuItem 
                    name="チョコイチゴホイップ mini"
                    price={500}
                    allergens={['小麦', '乳']}
                    description="フルーツたっぷりのミニサイズ"
                  />
                  
                  <MenuItem 
                    name="イチゴクロミツキチョコホイップ"
                    price={800}
                    allergens={['小麦', '乳']}
                    description="黒蜜とイチゴ、チョコレート、ホイップクリームの贅沢な一品"
                  />
                  <MenuItem 
                    name="イチゴクロミツキチョコホイップ mini"
                    price={500}
                    allergens={['小麦', '乳']}
                    description="和と洋の味わいが楽しめるミニサイズ"
                  />
                  
                  <MenuItem 
                    name="コーヒーアーモンドチョコホイップ"
                    price={700}
                    allergens={['小麦', '乳', 'アーモンド']}
                    description="コーヒークリームとアーモンド、チョコレートの大人向け"
                  />
                  <MenuItem 
                    name="コーヒーアーモンドチョコホイップ mini"
                    price={400}
                    allergens={['小麦', '乳', 'アーモンド']}
                    description="コーヒーの香り豊かなミニサイズ"
                  />
                  
                  <MenuItem 
                    name="シナモンホイップ"
                    price={600}
                    allergens={['小麦', '乳']}
                    description="シナモンシュガーとホイップクリームのシンプルな美味しさ"
                  />
                  <MenuItem 
                    name="シナモンホイップ mini"
                    price={300}
                    allergens={['小麦', '乳']}
                    description="香り高いシナモンのミニサイズ"
                  />
                  
                  <MenuItem 
                    name="クレープキジ"
                    price={400}
                    allergens={['小麦', '乳']}
                    description="バター＆シュガーのシンプルクレープ"
                  />
                  <MenuItem 
                    name="クレープキジ mini"
                    price={200}
                    allergens={['小麦', '乳']}
                    description="クレープ生地の美味しさを楽しむミニサイズ"
                  />
                </div>

                <div className="mt-8 bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">トッピング</h4>
                  <div className="space-y-2">
                    <p>・イチゴ追加 ¥200</p>
                    <p>・バナナ追加 ¥100</p>
                    <p>・ホイップクリーム追加 ¥200</p>
                  </div>
                </div>
              </div>

              {/* Drinks */}
              <div>
                <h3 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-japanese-red">
                  ドリンク
                </h3>
                <div className="space-y-6">
                  <MenuItem 
                    name="ホットココア"
                    price={400}
                    allergens={['乳']}
                    description="濃厚な味わいのココア"
                  />
                  <MenuItem 
                    name="ホットコーヒー"
                    price={400}
                    description="香り高い挽きたてコーヒー"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 text-sm text-gray-600">
              <p>※価格は全て税込表示です</p>
              <p>※アレルギー表示は主な原材料のみを表示しています。詳細については係員にお尋ねください。</p>
              <p>※季節や仕入れ状況により、内容が変更になる場合がございます。</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Social Media Feed */}
      <SocialFeed />
    </div>
  );
}

export default { Crepe };