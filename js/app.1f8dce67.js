(function(e){function o(o){for(var t,r,i=o[0],l=o[1],u=o[2],d=0,c=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&c.push(s[r][0]),s[r]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);p&&p(o);while(c.length)c.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,o=0;o<n.length;o++){for(var a=n[o],t=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(t=!1)}t&&(n.splice(o--,1),e=l(l.s=a[0]))}return e}var t={},r={1:0},s={1:0},n=[];function i(e){return l.p+"js/"+({}[e]||e)+"."+{2:"ccfe85ec",3:"ebf0d8c3",4:"74771008"}[e]+".js"}function l(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var o=[],a={2:1};r[e]?o.push(r[e]):0!==r[e]&&a[e]&&o.push(r[e]=new Promise((function(o,a){for(var t="css/"+({}[e]||e)+"."+{2:"625f45e6",3:"31d6cfe0",4:"31d6cfe0"}[e]+".css",s=l.p+t,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var u=n[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===t||d===s))return o()}var c=document.getElementsByTagName("style");for(i=0;i<c.length;i++){u=c[i],d=u.getAttribute("data-href");if(d===t||d===s)return o()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=o,p.onerror=function(o){var t=o&&o.target&&o.target.src||s,n=new Error("Loading CSS chunk "+e+" failed.\n("+t+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=t,delete r[e],p.parentNode.removeChild(p),a(n)},p.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){r[e]=0})));var t=s[e];if(0!==t)if(t)o.push(t[2]);else{var n=new Promise((function(o,a){t=s[e]=[o,a]}));o.push(t[2]=n);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=i(e);var c=new Error;u=function(o){d.onerror=d.onload=null,clearTimeout(p);var a=s[e];if(0!==a){if(a){var t=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;c.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",c.name="ChunkLoadError",c.type=t,c.request=r,a[1](c)}s[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(o)},l.m=e,l.c=t,l.d=function(e,o,a){l.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,o){if(1&o&&(e=l(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)l.d(a,t,function(o){return e[o]}.bind(null,t));return a},l.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(o,"a",o),o},l.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=o,u=u.slice();for(var c=0;c<u.length;c++)o(u[c]);var p=d;n.push([0,0]),a()})({0:function(e,o,a){e.exports=a("2f39")},"0047":function(e,o,a){},"2f39":function(e,o,a){"use strict";a.r(o);a("e6cf"),a("5319"),a("7d6e"),a("e54f"),a("985d"),a("0047");var t=a("2b0e"),r=a("1f91"),s=a("42d2"),n=a("b05d");t["a"].use(n["a"],{config:{},lang:r["a"],iconSet:s["a"]});var i=function(){var e=this,o=e.$createElement,a=e._self._c||o;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},l=[],u={name:"App"},d=u,c=a("2877"),p=Object(c["a"])(d,i,l,!1,null,null,null),m=p.exports,_=a("2f62");t["a"].use(_["a"]);var f=function(){const e=new _["a"].Store({modules:{},strict:!1});return e},h=a("8c4f");const g=[{path:"/",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"8b24"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"e51e"))}];var b=g;t["a"].use(h["a"]);var w=function(){const e=new h["a"]({scrollBehavior:()=>({x:0,y:0}),routes:b,mode:"hash",base:""});return e},v=async function(){const e="function"===typeof f?await f({Vue:t["a"]}):f,o="function"===typeof w?await w({Vue:t["a"],store:e}):w;e.$router=o;const a={router:o,store:e,render:e=>e(m),el:"#q-app"};return{app:a,store:e,router:o}},y=a("a925"),k={about_us_1:"Welcome to Adazul Brasil Pool. We are a group of independent individuals in partnership with Cardano ambassador: Marcus Vinicius who work to protect the Cardano network and support our ecosystem. The goal is to donate 30% of our pool rewards to NGOs working towards the preservation of wild life.",about_us_2:"We are still in the beginning, our pool is small but with your delegation we can grow and start receiving consistent rewards, therefore been able to maintaining the flow of donations to these non profitable institutions. We will always keep this site updated with donations receipts.",goals_title:"Goals",why_join_us_title:"Why Join Us?",security_title:"Security",security_1:"We currently use Linux servers with all preventive measures to increase the security of our pool. In addition, we use separate servers for block production and for our public relays. We also use the hybrid workflow to sign any modification on our pool. This basically means that we do not do all the work inside our servers.",security_2:"It is important to emphasize that we keep our important keys encrypted in a cold environment, outside of any internet connection to further increase security.",reliability_title:"Reliability",reliability_1:"Currently we have two active relays in the US Region. We made this decision to reduce start-up costs. However, it is important to note that our pool was designed with multiple relays in mind with their own dns.",reliability_2:"We plan to add 3 more relays. This will come with the demand for the growth of the pools. The new relays will be added in different parts of the world to decrease latency and increase performance.",decentralization_title:"Decentralization",decentralization_1:"We are committed to keep Cardano network as decentralized as possible. For that we are against the creation of secondary pools of the same owner. You will never see Adazul Brasil Pool 2 for example using our dns relays.",decentralization_2:"We don't want to see large groups controlling a majority of pools on the network, so we made that decision. However, this does not prevent us from partnering with pools that make multiple pools. We want to encourage the network to support small pools like us.",support_small_pools_title:"Support Small Pools",support_small_pools_1:"Support in smaller pools is essential for the healthy and decentralized development of the Cardano network. In smaller pools the rewards become larger but less frequently. The ideal is to maintain a medium sized pool producing good rewards each epoch.\nWith your delegation Adazul can one day reach a medium sized pool allowing more effective rewards for everyone.",support_small_pools_2:"With your delegation in our pool we can one day reach a medium sized pool allowing more effective rewards for everyone.",support_nature_title:"Support Nature",support_nature_1:"Our pool is committed to making monthly donations to non-governmental institutions that work towards protecting the planet, wild life and its endangered species. One of our goals is to donate $2.000 by the end of 2021.\nWe will have a specific session on this site that displays donation receipts. We also plan to open governance polls with delegators so that the community can vote on which institution we should contribute to.",support_nature_2:"We will have a specific session on this site to deal with donation receipts. We also plan to open polls with delegators so that the community can vote on which institution we should contribute to.",engaged_team_title:"Engaged Team",engaged_team_1:"We have an extremely engaged team that works for the success of the pool and its long-term life. Our operator and creator of the pool is Tauan Binato, a software engineer who has been working in the field for some years. Adazul also have a partnership with Cardano Ambassador Marcus Vinicius who spreads knowledge about Cardano and manages our social channels. We also have a very talented graphical design team that focuses mainly on making sure Adazul can become an icon of hope in the ecosystem.",how_to_stake_title:"How to stake?",pool_infos_title:"Pool Informations",pool_infos_ticker:"Tickers represent pools, they are not unique so make sure you are delegating to the correct ID.",pool_infos_id:"Identification of a registered pool. Use this ID to delegate to our pool.",server_location_title:"Server Location",server_location_1:"Server relay location.",initial_steps_title:"Initial steps",initital_steps_1:"Currently the recommended way to delegate your ADA to a pool is through an official wallet. You can choose between the official Daedalus or Yoroi. Once you have your Cardano wallet set up, look for the staking area inside the wallet where you can search for the pools. You can search for pools by name but it is recommended to use the ID as it is a unique identifier. Delegating ADA to a pool will never take your coins out of your possession and will never lock them. Enjoy the freedom of a third generation blockchain.",contact_us_title:"Contact Us",our_medias_title:"Social Channels",telegram_info_latin:"Official Telegram group for portuguese/spanish speakers",telegram_info_english:"Official Telegram group for english speakers",telegram_info_channel:"Official Telegram channel for Cardano/Crypto/Pool news in english",telegram_info_partner:"Crypto partner group for portuguese/spanish speakers",twitter_official_pool:"Official Twitter Pool",twitter_official_brand:"Official Twitter Brand",instagram_official_brand:"Official Instagram Brand",youtube_partner:"Crypto youtube channel partner",goals_nature_title_1:"Nature",goals_nature_title_2:"Raise $2000",goals_nature_text:"Our most ambitious goal. Raising $2,000 dollars by the end of 2021 in total donations from the pool rewards. We will accomplish this by setting aside 30% from the total rewards received from the pool (not the member delegator rewards, pools do not have access to their reward) to target NGOs chosen by Adazul Brasil Pool delegators.",goals_transparency_1:"Transparency",goals_transparency_2:"Monthly Updates",goals_transparency_text:"It is imperative that everything happens in the most transparent way possible. Therefore we will keep a public ledger with epoch's rewards and the amounts to be donated. Every month that Adazul receives rewards and donations are possible, a photo of donation receipts will be uploaded to our social networks. We also plan in person visits to NGOs when possible. Especially in the event of a very rewarding month that entails a donation of considerable value. If this happens we will release videos of the event.",goals_performance_1:"Performance",goals_performance_2:"At least one block per epoch",goals_performance_text:"Of course, all of this will be possible when we reach a considerable active stake size. The value we are considering as a target is 1.5 Million active stake and beyond. Upon reaching this milestone, we will be able to produce at least 1 block per epoch, ensuring more powerful monthly donations.",goals_community_1:"Community",goals_community_2:"Conduct Monthly Surveys",goals_community_text:"To ensure that our delegators have an active voice, we will conduct monthly surveys on various topics relevant to the moment. The most important event will take place on a monthly basis where delegators will decide the next NGO to receive our donation.",btn_about_us:"About us",btn_join_us:"Join us",btn_how_to_stake:"How to Stake",btn_contact_us:"Contact us",tooltip_japanese:"Japanese",tooltip_portuguese:"Portuguese",tooltip_english:"English"},z={about_us_1:"Bem-vindo à Adazul Brasil Pool. Somos um grupo de indivíduos independentes em parceria com o embaixador da Cardano: Marcus Vinicius que trabalha para proteger a rede da Cardano e apoiar o nosso ecossistema. Fornecemos 30% das recompensas do operador da pool para ONGs que trabalham para preservar o meio ambiente. ",about_us_2:"Ainda estamos no começo, nossa pool é pequena mas com a sua delegação podemos crescer e começar a receber recompensas mais consistentes para manter doações mensais constantes para as instituições sem fins lucrativos. Manteremos este site sempre atualizado com os recibos de doações.",goals_title:"Objetivos",why_join_us_title:"Por que se juntar a nós?",security_title:"Segurança",security_1:"Atualmente usamos servidores Linux com todas as medidas preventivas para aumentar a segurança da nossa pool. Além disso, usamos servidores separados para produção de blocos e para nossos relays públicos. Também utilizamos fluxo de trabalho híbrido para assinar qualquer modificação de certificado ou transação na pool. Isso basicamente significa que não fazemos todo o trabalho dentro de nossos servidores.",security_2:"É importante enfatizar que mantemos nossas chaves importantes criptografadas em um ambiente frio, fora de qualquer conexão de internet para aumentar ainda mais nossa segurança.",reliability_title:"Confiabilidade",reliability_1:"Atualmente nós temos dois relays ativos. Tomamos essa decisão para reduzir custos iniciais para a pool. Porém é importante lembrar que a pool já foi pensada para escalabilidade sendo possível adicionarmos mais com a demanda. ",reliability_2:"Planejamos adicionar mais 3 relays. Isso virá com a demanda pelo crescimento das pools. Os novos relés serão adicionados em diferentes partes do mundo para diminuir a latência e aumentar o desempenho.",decentralization_title:"Descentralização",decentralization_1:"Estamos empenhados em manter a rede Cardano o mais descentralizada possível. Por isso, somos contra a criação de pools secundários do mesmo proprietário. Você nunca verá o Adazul Brasil Pool 2, por exemplo, usando nossos relays dns.",decentralization_2:"Não queremos ver grandes grupos controlando a maioria dos pools na rede, então tomamos essa decisão. No entanto, isso não nos impede de fazer parceria com pools que formam vários pools. Queremos encorajar a rede a oferecer suporte a pequenas pools como nós.",support_small_pools_title:"Apoio à pools menores",support_small_pools_1:"O suporte de pools menores é essencial para o desenvolvimento saudável e descentralizado da rede Cardano. Em pools menores, as recompensas se tornam maiores, mas com menos frequência. O ideal é manter uma pool de tamanho médio, obtendo boas recompensas em cada época.",support_small_pools_2:"Com a sua delegação na nossa pool, podemos um dia chegar a uma pool de tamanho médio, permitindo recompensas mais eficazes para todos.",support_nature_title:"Ajude o Meio-ambiente",support_nature_1:"Nossa pool está empenhada em fazer doações mensais para instituições não governamentais que visam proteger o meio ambiente ou animais em extinção. Uma de nossas metas é doar US $ 2.000 até o final de 2021.",support_nature_2:"Teremos uma seção específica neste site para tratar dos recebimentos de doações. Também planejamos abrir enquetes com delegadores para que a comunidade possa votar em qual instituição devemos contribuir.",engaged_team_title:"Time empenhado",engaged_team_1:"Temos uma equipa extremamente empenhada que trabalha para o sucesso da pool e a sua longevidade. Nosso operador e criador da pool é Tauan Binato, um engenheiro de software que trabalha no campo há alguns anos. Também temos uma parceria com o Embaixador da Cardano, Marcus Vinicius, que divulga conhecimento sobre a Cardano e atua nas nossas redes sociais. Também temos pessoas focadas no design da marca como um todo, garantindo que possamos ser vistos pelo maior número de pessoas possível.",how_to_stake_title:"Como fazer stake?",pool_infos_title:"Informações da pool",pool_infos_ticker:"Tickers representam pools, eles não são exclusivos, portanto, certifique-se de delegar para o ID correto.",pool_infos_id:"Identificação de uma pool registrada. Use este ID para delegar a nossa pool.",server_location_title:"Localização do servidor",server_location_1:"Localização do servidor de relay",initial_steps_title:"Primeiros passos",initital_steps_1:"Atualmente, a forma recomendada de delegar seus ADA a uma pool é por uma carteira oficial.\n              Você pode escolher entre Daedalus ou Yoroi. Depois de configurar sua carteira Cardano, procure a área de staking dentro da carteira onde você poderá encontrar as pools\n              Você pode pesquisar pools por nome, mas é recomendado usar o ID, pois é um identificador único.\n              Delegar ADA a um pool nunca tirará suas moedas de sua carteira e nunca as trancará.\n              Desfrute da liberdade de uma blockchain de terceira geração.",more_oficial_infos:"Mais informações oficiais aqui.",contact_us_title:"Contatos",our_medias_title:"Nossas mídias",telegram_info_latin:"Grupo oficial do Telegram para falantes de português / espanhol",telegram_info_english:"Grupo oficial do Telegram para falantes de inglês",telegram_info_channel:"Grupo oficial do Telegram para notícias de Cardano/Cripto/Pool em inglês ",telegram_info_partner:"Grupo parceiro para falantes de português / espanhol",twitter_official_pool:"Official Twitter Pool",twitter_official_brand:"Official Twitter Brand",instagram_official_brand:"Official Instagram Brand",youtube_partner:"Canal cripto parceiro no Youtube",goals_nature_title_1:"Natureza",goals_nature_title_2:"Levantar $2000 dólares",goals_nature_text:"Nosso objetivo mais ambicioso. Levantar 2.000 dólares até o final de 2021 em doações totais com as recompensas da pool. Faremos isso separando 30% de toda a recompensa da pool (não a recompensa dos membros, as pools não têm acesso à recompensa) para direcionar as ONGs votadas pelos delegadores",goals_transparency_1:"Transparência",goals_transparency_2:"Atualizações Mensais",goals_transparency_text:"É importante que tudo aconteça da forma mais transparente possível. Para isso manteremos uma planilha pública com as premiações da época e os valores a serem doados. Todo mês que tiver uma recompensa a ser doada, enviaremos a foto dos comprovantes para nossas redes sociais.\n          Também planejamos ir pessoalmente às ONGs, quando possível. Principalmente se o mês trouxer uma doação de valor considerável. Caso isso aconteça lançaremos vídeos sobre o evento.",goals_performance_1:"Performance",goals_performance_2:"Pelo menos um bloco por época",goals_performance_text:"Claro, tudo isso só é possível se atingirmos um tamanho de Stake ativo considerável. O valor que estamos considerando como meta é 1,5 milhão. Ao atingir esse valor, poderemos produzir no mínimo 1 bloco por época, garantindo doações mensais mais potentes.",goals_community_1:"Comunidade",goals_community_2:"Conduzir enquetes mensais",goals_community_text:"Para garantir que nossos delegadores tenham voz ativa, realizaremos pesquisas mensais sobre vários tópicos relevantes para o momento. O evento mais importante acontecerá mensalmente, onde os delegadores decidirão a próxima ONG a receber nossa doação.",btn_about_us:"Sobre nós",btn_join_us:"Junte-se",btn_how_to_stake:"Como fazer Stake",btn_contact_us:"Contato",tooltip_japanese:"Japonês",tooltip_portuguese:"Português",tooltip_english:"Inglês"},O={about_us_1:"アダズルブラジルプールへようこそ。私たちは、カルダノアンバサダーであるマーカスビニシウスと協力して、カルダノネットワークを保護し、私たちのエコシステムをサポートする独立した個人のグループです。私たちは、野生動物の保護に取り組んでいるNGOにプール報酬の30％を提供しています。",about_us_2:"私たちはまだ始まったばかりで、私たちのプールは小さいですが、あなたの代表団と一緒に私たちは成長し、これらの非営利団体に寄付し続けるために一貫した報酬を受け取り始めることができます。このサイトは常に寄付の領収書で更新されます。",goals_title:"目標",why_join_us_title:"なぜ私たちに参加するのですか？",security_title:"セキュリティ",security_1:"現在、プールのセキュリティを強化するために、あらゆる予防策を講じたLinuxサーバーを使用しています。さらに、ブロックの作成とパブリックリレーに別々のサーバーを使用します。また、ハイブリッドワークフローを使用して、プールの変更に署名します。これは基本的に、サーバー内ですべての作業を行うわけではないことを意味します。",security_2:"セキュリティをさらに強化するために、インターネット接続の外部で、寒い環境で重要なキーを暗号化しておくことを強調することが重要です。",reliability_title:"信頼性",reliability_1:"現在、米国地域には2つのアクティブなリレーがあります。この決定は、初期費用を削減するために行われました。ただし、プールは、独自のDNSを使用して複数のリレーを念頭に置いて設計されていることに注意してください。",reliability_2:"さらに3つのリレーを追加する予定です。これは、プールの成長に対する需要に伴います。新しいリレーは、待ち時間を短縮し、パフォーマンスを向上させるために、世界のさまざまな地域に追加されます。",decentralization_title:"地方分権化",decentralization_1:"私たちは、カルダノネットワークを可能な限り分散化することをお約束します。そのため、同じ所有者のセカンダリプールの作成に反対しています。たとえば、DNSリレーを使用しているAdazul Brasil Pool2は表示されません。",decentralization_2:"大規模なグループがネットワーク上のプールの大部分を制御することを望まないため、その決定を下しました。ただし、これは、複数のプールを作成するプールとの提携を妨げるものではありません。私たちは、ネットワークが私たちのような小さなプールをサポートすることを奨励したいと思います。",support_small_pools_title:"小さなプールをサポートする",support_small_pools_1:"カルダノネットワークの健全で分散型の開発には、より小さなプールでのサポートが不可欠です。小さなプールでは、報酬は大きくなりますが、頻度は低くなります。理想は、中規模のプールを維持し、各エポックで優れた報酬を獲得することです。",support_small_pools_2:"私たちのプールにあなたの代表団がいると、いつの日か中規模のプールにたどり着き、誰にとってもより効果的な報酬を得ることができます。",support_nature_title:"自然をサポートする",support_nature_1:"私たちのプールは、環境や絶滅危惧種の動物を保護することを目的とした非政府機関への毎月の寄付に取り組んでいます。私たちの目標の1つは、2021年末までに$ 2.000を寄付することです。",support_nature_2:"このサイトでは、寄付の領収書を処理するための特定のセッションがあります。また、コミュニティがどの機関に貢献すべきかについて投票できるように、代表者との投票を開く予定です。",engaged_team_title:"従事するチーム",engaged_team_1:"私たちはプールの成功とその長期的な生活のために働く非常に熱心なチームを持っています。プールの運営者および作成者は、この分野で数年間働いているソフトウェアエンジニアのTauanBinatoです。また、カルダノに関する知識を広め、ソーシャルメディアで活動しているカルダノアンバサダーのマーカスビニシウスともパートナーシップを結んでいます。また、ブランド全体のデザインにこだわる方もいらっしゃるので、できるだけ多くの方に見ていただけるようにしています。",how_to_stake_title:"賭ける方法は？",pool_infos_title:"プール情報",pool_infos_ticker:"ティッカーはプールを表します。一意ではないため、正しいIDに委任していることを確認してください。",pool_infos_id:"登録されたプールの識別。このIDを使用して、プールに委任します。",server_location_title:"サーバーの場所：サンタクララ-米国",server_location_1:"リレーサーバーの場所",initial_steps_title:"ステップバイステップ",initital_steps_1:"現在、ADAをプールに委任するための推奨される方法は、公式ウォレットを使用することです。DeadalusまたはYoroiから選択できます。カルダノウォレットをセットアップしたら、プールを検索できるウォレット内のステーキングエリアを探します。プールは名前で検索できますが、IDは一意の識別子であるため、IDを使用することをお勧めします。ADAをプールに委任しても、コインが持ち去られたり、ロックされたりすることはありません。第三世代のブロックチェーンの自由をお楽しみください。",more_oficial_infos:"詳細はこちら。",contact_us_title:"お問い合わせ",our_medias_title:"私たちのメディア",telegram_info_latin:"ラテンアメリカの公式-ポルトガル語/スペイン語話者のための公式電報グループ",telegram_info_english:"オフィシャルインターナショナル-英語を話す人のためのオフィシャルテレグラムグループ",telegram_info_channel:"国際ニュースチャンネル-英語のカルダノ/暗号/プールニュースの公式電報チャンネル",telegram_info_partner:"ポルトガル語/スペイン語話者のための暗号パートナーグループ",twitter_official_pool:"公式Twitterプール",twitter_official_brand:"公式Twitterブランド",instagram_official_brand:"公式Instagramブランド",youtube_partner:"チャンネルパートナー",goals_nature_title_1:"自然",goals_nature_title_2:"$ 2.000を調達",goals_nature_text:"私たちの最も野心的な目標。プールの報酬からの寄付の合計で2021年の終わりまでに2,000ドルを調達します。これを行うには、すべての報酬の30％をプールから分離し（メンバーの報酬ではなく、プールは報酬にアクセスできません）、委任者によって投票されたNGOをターゲットにします。",goals_transparency_1:"透明性",goals_transparency_2:"毎月の更新",goals_transparency_text:"すべてが可能な限り最も透過的な方法で行われることが重要です。このために、エポックの報酬と寄付金額を記載した公開スプレッドシートを保管します。毎月、寄付される報酬があり、領収書の写真をソーシャルネットワークに送信します。また、可能な場合は直接NGOに行く予定です。特にその月がかなりの価値のある寄付をもたらす場合。これが発生した場合は、イベントに関するビデオを公開します。",goals_performance_1:"パフォーマンス",goals_performance_2:"エポックごとに少なくとも1つのブロック",goals_performance_text:"もちろん、これはすべて、かなりのアクティブなステークサイズに達した場合にのみ可能です。目標として検討している値は150万です。この値に達すると、エポックごとに少なくとも1ブロックを生成できるようになり、より強力な毎月の寄付が保証されます。",goals_community_1:"コミュニティ",goals_community_2:"毎月の調査を実施する",goals_community_text:"代表者の積極的な発言を確実にするために、その瞬間に関連するさまざまなトピックについて毎月調査を実施します。最も重要なイベントは毎月開催され、代表者は私たちの寄付を受け取る次のNGOを決定します。",btn_about_us:"私たちは誰ですか",btn_join_us:"参加しませんか",btn_how_to_stake:"賭ける方法",btn_contact_us:"お問い合わせ",tooltip_japanese:"日本語",tooltip_portuguese:"ポルトガル語",tooltip_english:"英語"},C={"en-us":k,"pt-br":z,jpn:O};t["a"].use(y["a"]);const T=new y["a"]({locale:"en-us",fallbackLocale:"en-us",messages:C});var q=({app:e})=>{e.i18n=T};const A="";async function P(){const{app:e,store:o,router:a}=await v();let r=!1;const s=e=>{r=!0;const o=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=o},n=window.location.href.replace(window.location.origin,""),i=[q];for(let u=0;!1===r&&u<i.length;u++)if("function"===typeof i[u])try{await i[u]({app:e,router:a,store:o,Vue:t["a"],ssrContext:null,redirect:s,urlPath:n,publicPath:A})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==r&&new t["a"](e)}P()}});