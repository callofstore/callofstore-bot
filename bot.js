const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

// COLE SEU TOKEN AQUI!
const TOKEN = 'MTQzNjQyMjQyMzQzNTI4NDYzMw.Gc92_8.wd_O981BxXG_CGdDgrbr3lEHKZeA4uPZKnZUQI';

// CONFIGURAÇÕES DA LOJA
const CONFIG = {
    emailPix: 'callofstoreoficial@gmail.com',
    site: 'https://callofstore.com',
    vendedorId: ' viper ᵍᵒᵈ \n @Diogo ' // ID DO DISCORD DO VENDEDOR
};

// SISTEMA DE PREÇOS REAIS DA CALL OF STORE COM IMAGENS
const precosReais = {
    // NOVIDADES
    'silent hill f': { 
        preco: 44.90, 
        original: 349.90, 
        desconto: 87,
        imagem: 'https://comicbook.com/wp-content/uploads/sites/4/2025/03/Silent-Hill-f-Key-Art.jpg'
    },
    'dying light the beast': { 
        preco: 34.90, 
        original: 249.00, 
        desconto: 86,
        imagem: 'https://gamingbolt.com/wp-content/uploads/2024/08/Dying-Light-The-Beast-scaled.jpg'
    },
    'hollow knight silksong': { 
        preco: 29.90, 
        original: 59.99, 
        desconto: 50,
        imagem: 'https://www.nintendo-insider.com/wp-content/uploads/2024/08/hollow_knight_silksong_banner.jpg'
    },
    'metal gear solid Δ snake eater': { 
        preco: 44.90, 
        original: 399.50, 
        desconto: 89,
        imagem: 'https://cdn.wccftech.com/wp-content/uploads/2023/10/Metal-Gear-Solid-Delta-Snake-Eater.jpg'
    },
    'clair obscur expedition 33': { 
        preco: 34.90, 
        original: 199.00, 
        desconto: 82,
        imagem: 'https://cdn.wccftech.com/wp-content/uploads/2024/06/clair-obscur-expedition-33-HD-scaled.jpg'
    },
    'marvel\'s spider-man 2': { 
        preco: 34.90, 
        original: 249.90, 
        desconto: 86,
        imagem: 'https://cdn1.epicgames.com/offer/4bc43145bb8245a5b5cc9ea262ffbe0e/EGS_MarvelsSpiderManRemastered_InsomniacGamesNixxesSoftware_S1_2560x1440-73702d11161b29a0b7c40a8b489b1808'
    },
    'no, i\'m not a human': { 
        preco: 24.90, 
        original: 46.99, 
        desconto: 47,
        imagem: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1DdDi9.img?w=1920&h=1080&m=4&q=92'
    },
    'hell is us': { 
        preco: 34.90, 
        original: 179.99, 
        desconto: 81,
        imagem: 'https://tse1.mm.bing.net/th/id/OIP.RymbcQ90j3x5JGYgsIWd7AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
    },

    // MAIS VENDIDOS
    'god of war': { 
        preco: 19.90, 
        original: 199.90, 
        desconto: 90,
        imagem: 'https://image.api.playstation.com/vulcan/img/rnd/202010/2217/LsaRVLF2IU2L1FNtu9d3MKLq.jpg'
    },
    'elden ring': { 
        preco: 24.90, 
        original: 274.50, 
        desconto: 91,
        imagem: 'https://th.bing.com/th/id/R.4639fed79ca6fd43c1050efceeb62017?rik=md6w5YJbvgZEDw&pid=ImgRaw&r=0'
    },
    'the last of us part i': { 
        preco: 34.90, 
        original: 249.90, 
        desconto: 86,
        imagem: 'https://www.fredzone.org/wp-content/uploads/2022/08/The-Last-of-Us-Part-1.webp'
    },
    'god of war ragnarök': { 
        preco: 34.90, 
        original: 249.90, 
        desconto: 86,
        imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png'
    },
    'the last of us part ii remastered': { 
        preco: 39.90, 
        original: 199.90, 
        desconto: 80,
        imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202312/0117/315718bce7eed62e3cf3fb02d61b81ff1782d6b6cf850fa4.png'
    },
    'cyberpunk 2077': { 
        preco: 29.90, 
        original: 199.90, 
        desconto: 85,
        imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg'
    },
    'ghost of tsushima director\'s cut': { 
        preco: 24.90, 
        original: 249.90, 
        desconto: 90,
        imagem: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/ghost-of-tsushima-director-s-cut.jpg'
    },

    // MAIS POPULARES
    'elden ring nightreign': { 
        preco: 34.90, 
        original: 197.90, 
        desconto: 82,
        imagem: 'https://tse4.mm.bing.net/th/id/OIP.qOWuzlKfzefcyF_BC4WFVwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    'need for speed most wanted': { 
        preco: 24.90, 
        original: 59.90, 
        desconto: 58,
        imagem: 'https://cdn1.epicgames.com/spt-assets/5d07664430944a95ae550da120ed0eeb/need-for-speed-most-wanted-a2ek1.jpg'
    },
    'forza horizon 5': { 
        preco: 34.90, 
        original: 249.90, 
        desconto: 86,
        imagem: 'https://gameranx.com/wp-content/uploads/2021/08/ForzaHorizon5_KeyArt_Horiz_RGB_Final.jpg'
    },
    'forza horizon 4': { 
        preco: 24.90, 
        original: 199.90, 
        desconto: 88,
        imagem: 'https://www.comprecar.com.br/storage/news/gallery/big/20574da04ab43b760c06e2e08fe1c56f10102018103529.jpg'
    },
    'silent hill 2': { 
        preco: 34.90, 
        original: 349.90, 
        desconto: 90,
        imagem: 'https://tse3.mm.bing.net/th/id/OIP._N1sOeA6q77EBu_eejOGhQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    's.t.a.l.k.e.r. 2 heart of chornobyl': { 
        preco: 44.90, 
        original: 239.90, 
        desconto: 83,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1643320/header.jpg?t=1700143422'
    },
    'metal gear solid v the phantom pain': { 
        preco: 24.90, 
        original: 129.90, 
        desconto: 81,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/287700/header.jpg?t=1600327932'
    },
    'metro exodus': { 
        preco: 29.90, 
        original: 149.90, 
        desconto: 80,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/412020/header.jpg?t=1582100050'
    },
    'ready or not': { 
        preco: 24.90, 
        original: 149.90, 
        desconto: 83,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1144200/header.jpg?t=1701362335'
    },
    'detroit become human': { 
        preco: 24.90, 
        original: 119.90, 
        desconto: 79,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1222140/header.jpg?t=1572610303'
    },
    'devil may cry 5': { 
        preco: 24.90, 
        original: 129.90, 
        desconto: 80,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/601150/header.jpg?t=1591620415'
    },
    'horizon forbidden west': { 
        preco: 34.90, 
        original: 249.90, 
        desconto: 86,
        imagem: 'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/ki2B2Vb2kCLD2p2K8V0NtwyF.png'
    },
    'dragon ball sparking zero': { 
        preco: 34.90, 
        original: 282.50, 
        desconto: 87,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1272080/header.jpg?t=1700143422'
    },
    'resident evil village': { 
        preco: 34.90, 
        original: 169.00, 
        desconto: 79,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1196590/header.jpg?t=1633060558'
    },
    'call of duty black ops': { 
        preco: 19.90, 
        original: 119.90, 
        desconto: 83,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/42700/header.jpg?t=1581360844'
    },
    'sons of the forest': { 
        preco: 24.90, 
        original: 89.90, 
        desconto: 72,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/1326470/header.jpg?t=1700143422'
    },

    // APENAS R$10
    'the walking dead survival instinct': { 
        preco: 10.00, 
        original: 119.90, 
        desconto: 91,
        imagem: 'https://tse3.mm.bing.net/th/id/OIP.lQVCvp_bj-8Ce_QARxI-sQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    'tomb raider': { 
        preco: 10.00, 
        original: 69.90, 
        desconto: 85,
        imagem: 'https://assets-prd.ignimgs.com/2022/01/20/tomb-raider-definitive-edition-button-1642645033729.jpg'
    },
    'just cause 3': { 
        preco: 10.00, 
        original: 49.90, 
        desconto: 79,
        imagem: 'https://cdn.akamai.steamstatic.com/steam/apps/225540/header.jpg?t=1581360844'
    },
    'grand theft auto san andreas': { 
        preco: 10.00, 
        original: 49.90, 
        desconto: 79,
        imagem: 'https://wallpaperaccess.com/full/3662276.jpg'
    },
    'the witcher 3 wild hunt': { 
        preco: 10.00, 
        original: 89.90, 
        desconto: 88,
        imagem: 'https://static.cdprojektred.com/cms.cdprojektred.com/8db4cdb9ccdd8fe03a546723d30a41cb8567034a.png'
    },
    'crash bandicoot 4 it\'s about time': { 
        preco: 10.00, 
        original: 199.90, 
        desconto: 95,
        imagem: 'https://tse3.mm.bing.net/th/id/OIP.VnB0CQ_cBE7o0kLN2KW1-QHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
    }
};

// Sistema de pedidos
const pedidos = new Map();
let nextPedidoId = 1;

// FUNÇÃO PARA ENCONTRAR CANAL DE TICKETS
function encontrarCanalTickets(guild) {
    // Tenta encontrar o canal de tickets de várias formas
    const canalTickets = guild.channels.cache.find(ch => 
        ch.name === '🎫┆abrir-ticket' || 
        ch.name.includes('ticket') || 
        ch.name.includes('abrir-ticket') ||
        ch.name.includes('suporte') ||
        ch.name.includes('tickets')
    );
    return canalTickets;
}

// FUNÇÃO PARA CRIAR MENSAGEM FIXADA
async function criarMensagemFixa(canal) {
    try {
        // Primeiro, tenta apagar mensagens fixadas existentes
        const mensagens = await canal.messages.fetchPinned();
        mensagens.forEach(async (msg) => {
            await msg.unpin();
        });

        // Cria a mensagem fixada
        const embedFixo = new EmbedBuilder()
            .setTitle('🎮 **CALL OF STORE - SUA LOJA DE JOGOS**')
            .setDescription('🔥 **Promoções insanas em keys Steam!**\n\n📦 **Entrega instantânea** • 🛡️ **Produtos verificados** • 💰 **Melhores preços**')
            .setImage('https://comicbook.com/wp-content/uploads/sites/4/2025/03/Silent-Hill-f-Key-Art.jpg')
            .addFields(
                { 
                    name: '🛒 **COMO COMPRAR**', 
                    value: '1. Use `/comprar [nome do jogo]`\n2. Clique em "Finalizar Compra"\n3. Siga as instruções de pagamento\n4. Receba sua key via DM!' 
                },
                { 
                    name: '💎 **CATEGORIAS**', 
                    value: '• **Novidades** - Lançamentos quentes\n• **Mais Vendidos** - Preferidos da galera\n• **Populares** - Jogos em alta\n• **Apenas R$10** - Ofertas especiais' 
                },
                { 
                    name: '⚡ **VANTAGENS**', 
                    value: '✅ Estoque real • ✅ Keys originais • ✅ Entrega em 2-5 min • ✅ Suporte 24/7 • ✅ Pagamento via PIX' 
                }
            )
            .setColor(0x8A2BE2)
            .setFooter({ text: 'Call of Store © 2024 - Todos os direitos reservados' })
            .setTimestamp();

        const rowFixo = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setLabel('🌐 Site Oficial')
                    .setURL('https://callofstore.com')
                    .setStyle(ButtonStyle.Link),
                new ButtonBuilder()
                    .setLabel('💬 Suporte')
                    .setCustomId('suporte_fixo')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setLabel('🔥 Promoções')
                    .setCustomId('promocoes_fixo')
                    .setStyle(ButtonStyle.Success)
            );

        const mensagem = await canal.send({ 
            embeds: [embedFixo], 
            components: [rowFixo] 
        });
        
        // Fixa a mensagem
        await mensagem.pin();
        console.log('✅ Mensagem fixada criada com sucesso!');
        
    } catch (error) {
        console.error('❌ Erro ao criar mensagem fixada:', error);
    }
}

client.once('ready', async () => {
    console.log(`✅ Bot conectado como ${client.user.tag}`);
    client.user.setActivity('Call of Store | /ajuda');

    // Cria mensagem fixada em todos os servidores
    client.guilds.cache.forEach(async (guild) => {
        const canalCompras = guild.channels.cache.find(ch => ch.name === '🛒┆comprar-aqui');
        if (canalCompras) {
            await criarMensagemFixa(canalCompras);
        }
    });
});

// Quando alguém entra no servidor (vindo do site)
client.on('guildMemberAdd', async (member) => {
    setTimeout(async () => {
        const canalCompras = member.guild.channels.cache.find(ch => ch.name === '🛒┆comprar-aqui');
        
        if (canalCompras) {
            const canalTickets = encontrarCanalTickets(member.guild);
            
            const embed = new EmbedBuilder()
                .setTitle('🎮 Bem-vindo à Call of Store!')
                .setDescription(`Olá ${member}! 👋\n\nVocê veio do nosso site? Use o comando abaixo para consultar preços:`)
                .setImage('https://cdn.wccftech.com/wp-content/uploads/2023/10/Metal-Gear-Solid-Delta-Snake-Eater.jpg')
                .addFields(
                    { name: '🛒 Comando de Compra', value: '`/comprar [nome do jogo]`' },
                    { name: '💡 Exemplo', value: '`/comprar God of War`' },
                    { name: '🔥 Promoções', value: '`/promoções` para ver ofertas' },
                    { name: '🎫 Suporte', value: canalTickets ? `Vá para ${canalTickets}` : 'Use `/suporte` para ajuda' }
                )
                .setColor(0x8A2BE2);
            
            canalCompras.send({ content: `${member}`, embeds: [embed] });
        }
    }, 3000);
});

// Sistema de Comandos
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    // COMANDO: /ajuda
    if (message.content === '/ajuda') {
        const canalTickets = encontrarCanalTickets(message.guild);
        
        const embed = new EmbedBuilder()
            .setTitle('🎮 **Call of Store - Comandos**')
            .setDescription('Lista de comandos disponíveis:')
            .setThumbnail('https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1700143422')
            .addFields(
                { name: '🛒 **COMPRAS**', value: '`/comprar [jogo]` - Consultar preço\n`/promoções` - Ver promoções\n`/pix` - Info Pagamento PIX' },
                { name: '🎫 **SUPORTE**', value: '`/suporte` - Abrir ticket de ajuda\n`/status [pedido]` - Ver status do pedido' },
                { name: '💎 **INFORMAÇÕES**', value: '`/site` - Acessar site\n`/estoque [jogo]` - Ver disponibilidade' },
                { name: '📞 **CANAL DE TICKETS**', value: canalTickets ? canalTickets.toString() : '🎫┆abrir-ticket' }
            )
            .setColor(0x8A2BE2);

        message.reply({ embeds: [embed] });
    }

    // COMANDO: /pix
    if (message.content === '/pix') {
        const embed = new EmbedBuilder()
            .setTitle('💰 **Pagamento via PIX**')
            .setDescription('**Forma de pagamento oficial da Call of Store**')
            .setThumbnail('https://cdn-icons-png.flaticon.com/512/2331/2331965.png')
            .addFields(
                { name: '📧 E-mail PIX', value: `**${CONFIG.emailPix}**`, inline: true },
                { name: '🏦 Chave', value: 'E-mail', inline: true },
                { name: '⏱️ Confirmação', value: '2-5 minutos', inline: true },
                { name: '📋 **Como Pagar**', value: '1. Abra seu app bancário\n2. Selecione PIX\n3. Cole o e-mail acima\n4. Envie o valor exato\n5. Envie o comprovante para nós' },
                { name: '⚡ **Vantagens**', value: '✅ Pagamento instantâneo\n✅ Key liberada em 2-5 min\n✅ Sem taxas\n✅ Mais seguro' },
                { name: '🛡️ **Importante**', value: '• Envie o valor **exato**\n• **Só pague após** confirmar o pedido\n• Guarde o comprovante\n• Key enviada por DM após pagamento' }
            )
            .setColor(0x4CAF50);

        message.reply({ embeds: [embed] });
    }

    // COMANDO: /comprar
    if (message.content.startsWith('/comprar ')) {
        const jogo = message.content.replace('/comprar ', '');
        const jogoLower = jogo.toLowerCase();
        
        const embed = new EmbedBuilder()
            .setTitle('🎮 **Consulta de Preço**')
            .setDescription(`🔍 Procurando **${jogo}** na Call of Store...`)
            .setColor(0x00BFFF);

        const msg = await message.reply({ embeds: [embed] });

        setTimeout(() => {
            const jogoInfo = precosReais[jogoLower];
            const canalTickets = encontrarCanalTickets(message.guild);
            
            if (jogoInfo) {
                const embedAtualizado = new EmbedBuilder()
                    .setTitle(`🎮 **${jogo}**`)
                    .setDescription('🎯 **PREÇO OFICIAL DA LOJA**')
                    .setImage(jogoInfo.imagem)
                    .addFields(
                        { name: '💰 Preço', value: `**R$ ${jogoInfo.preco.toFixed(2)}**`, inline: true },
                        { name: '⏰ Original', value: `~~R$ ${jogoInfo.original.toFixed(2)}~~`, inline: true },
                        { name: '🎁 Desconto', value: `**-${jogoInfo.desconto}% OFF**`, inline: true },
                        { name: '🛒 Status', value: '✅ Em estoque', inline: true },
                        { name: '⏱️ Entrega', value: '⚡ Instantânea', inline: true },
                        { name: '💳 Pagamento', value: 'PIX', inline: true }
                    )
                    .setColor(0x4CAF50);

                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId(`finalizar_${jogoLower}`)
                            .setLabel('🛒 Finalizar Compra')
                            .setStyle(ButtonStyle.Success),
                        new ButtonBuilder()
                            .setCustomId('info_pix')
                            .setLabel('💰 Info PIX')
                            .setStyle(ButtonStyle.Primary)
                    );

                msg.edit({ embeds: [embedAtualizado], components: [row] });
            } else {
                const embedAtualizado = new EmbedBuilder()
                    .setTitle(`🎮 **${jogo}**`)
                    .setDescription('🔍 **JOGO ENCONTRADO!**')
                    .setThumbnail('https://cdn-icons-png.flaticon.com/512/1828/1828843.png')
                    .addFields(
                        { name: '💡 Como comprar', value: 'Abra um ticket de suporte para consultar preço e disponibilidade' },
                        { name: '🎫 Suporte', value: canalTickets ? `Vá para ${canalTickets}` : 'Use `/suporte` para ajuda' },
                        { name: '⏱️ Atendimento', value: '2-5 minutos' }
                    )
                    .setColor(0xFF9800);

                msg.edit({ embeds: [embedAtualizado] });
            }
        }, 1500);
    }

    // COMANDO: /promoções
    if (message.content === '/promoções') {
        const embed = new EmbedBuilder()
            .setTitle('🔥 **PROMOÇÕES EM DESTAQUE**')
            .setDescription('🎮 **Ofertas especiais por tempo limitado!**')
            .setImage('https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg?t=1700143422')
            .addFields(
                { 
                    name: '💎 **NOVIDADES**', 
                    value: 'Silent Hill F - R$ 44,90 (-87%)\nDying Light The Beast - R$ 34,90 (-86%)\nHollow Knight Silksong - R$ 29,90 (-50%)' 
                },
                { 
                    name: '🏆 **MAIS VENDIDOS**', 
                    value: 'God of War - R$ 19,90 (-90%)\nElden Ring - R$ 24,90 (-91%)\nThe Last of Us Part I - R$ 34,90 (-86%)' 
                },
                { 
                    name: '💰 **APENAS R$ 10**', 
                    value: 'The Witcher 3 - R$ 10,00\nGTA San Andreas - R$ 10,00\nCrash Bandicoot 4 - R$ 10,00 (-95%)' 
                }
            )
            .setFooter({ text: '🎯 Use /comprar [jogo] para ver preço exato' })
            .setColor(0xFF4081);

        message.reply({ embeds: [embed] });
    }

    // COMANDO: /suporte
    if (message.content === '/suporte') {
        const canalTickets = encontrarCanalTickets(message.guild);
        
        const embed = new EmbedBuilder()
            .setTitle('🎫 **Sistema de Suporte**')
            .setDescription('**Precisa de ajuda?**')
            .setThumbnail('https://cdn-icons-png.flaticon.com/512/3082/3082383.png')
            .addFields(
                { name: '🛒 Dúvidas de Compra', value: 'Tire todas suas dúvidas' },
                { name: '🔑 Problemas com Key', value: 'Key não funcionou?' },
                { name: '💳 Pagamento PIX', value: 'Dúvidas sobre pagamento' },
                { name: '📞 Contato Imediato', value: canalTickets ? `Abra um ticket em ${canalTickets}` : 'Use o canal de tickets' }
            )
            .setColor(0xFF9800);
        
        message.reply({ embeds: [embed] });
    }

    // COMANDO: /site
    if (message.content === '/site') {
        const embed = new EmbedBuilder()
            .setTitle('🌐 **Site Oficial**')
            .setDescription('**Acesse nosso catálogo completo:**')
            .setThumbnail('https://cdn-icons-png.flaticon.com/512/1006/1006771.png')
            .addFields(
                { name: '🛒 Site da Loja', value: `[${CONFIG.site}](${CONFIG.site})` },
                { name: '🎮 Vantagens', value: '• Ver todos os jogos\n• Fotos e descrições\n• Filtros por categoria\n• Interface profissional' },
                { name: '💡 Como funciona', value: '1. Veja os jogos no site\n2. Volte aqui no Discord\n3. Use `/comprar [jogo]`' }
            )
            .setColor(0x8A2BE2);

        message.reply({ embeds: [embed] });
    }

    // Detecção automática para ajudar usuários
    const keywords = ['site', 'comprar', 'jogo', 'comando', 'preço', 'quanto custa'];
    const hasKeyword = keywords.some(keyword => 
        message.content.toLowerCase().includes(keyword)
    );
    
    if (hasKeyword && message.content.length > 5 && !message.content.startsWith('/')) {
        const canalCompras = message.guild.channels.cache.find(ch => ch.name === '🛒┆comprar-aqui');
        
        if (canalCompras && message.channel.id !== canalCompras.id) {
            const embed = new EmbedBuilder()
                .setTitle('🎯 Precisa de Ajuda?')
                .setDescription(`${message.author}, para consultar preços de jogos:`)
                .setThumbnail('https://cdn-icons-png.flaticon.com/512/1828/1828884.png')
                .addFields(
                    { name: '💬 Comando Rápido', value: '`/comprar [nome do jogo]`' },
                    { name: '📝 Exemplos', value: '`/comprar God of War`\n`/comprar The Witcher 3`' },
                    { name: '🔍 Canal Correto', value: `Vá para ${canalCompras}` }
                )
                .setColor(0x00BFFF);
            
            message.reply({ embeds: [embed] });
        }
    }
});

// Sistema de Botões
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    // Botão FINALIZAR COMPRA
    if (interaction.customId.startsWith('finalizar_')) {
        const jogo = interaction.customId.replace('finalizar_', '');
        const jogoInfo = precosReais[jogo];
        const pedidoId = nextPedidoId++;
        const canalTickets = encontrarCanalTickets(interaction.guild);
        
        // Salva o pedido
        pedidos.set(pedidoId, {
            jogo: jogo,
            preco: jogoInfo.preco,
            usuario: interaction.user.tag,
            userId: interaction.user.id,
            status: 'aguardando_pagamento',
            data: new Date()
        });
        
        const embed = new EmbedBuilder()
            .setTitle('🛒 **FINALIZAR COMPRA**')
            .setDescription(`**Pedido #${pedidoId} - ${jogo.toUpperCase()}**`)
            .setImage(jogoInfo.imagem)
            .addFields(
                { name: '💰 Valor', value: `**R$ ${jogoInfo.preco.toFixed(2)}**`, inline: true },
                { name: '🎁 Desconto', value: `-${jogoInfo.desconto}% OFF`, inline: true },
                { name: '⏱️ Entrega', value: '⚡ 2-5 minutos', inline: true },
                { name: '👤 Comprador', value: `**${interaction.user.tag}**`, inline: true },
                { name: '📧 **E-MAIL PIX**', value: `**${CONFIG.emailPix}**` },
                { name: '💳 **INSTRUÇÕES DE PAGAMENTO**', value: '1. Abra seu app bancário\n2. Selecione PIX\n3. Cole o e-mail acima\n4. Envie o valor **EXATO**\n5. **GUARDE O COMPROVANTE**' },
                { name: '📋 **PRÓXIMOS PASSOS**', value: `1. Efetue o pagamento PIX\n2. Abra ticket ${canalTickets ? `em ${canalTickets}` : 'no canal de suporte'}\n3. Envie o comprovante\n4. Receba a key via DM` },
                { name: '🛡️ **GARANTIA**', value: '✅ Entrega instantânea\n✅ Suporte 24/7\n✅ Produto verificado' }
            )
            .setFooter({ text: '⚠️ Só efetue o pagamento após confirmar o pedido com nosso time' })
            .setColor(0x4CAF50);

        await interaction.reply({ 
            embeds: [embed],
            ephemeral: true 
        });

        // ENVIA NOTIFICAÇÃO PARA O CANAL DE TICKETS
        await enviarNotificacaoTickets(interaction, pedidoId, jogo, jogoInfo);

        // Envia DM com as informações também para o comprador
        try {
            const dmEmbed = new EmbedBuilder()
                .setTitle(`📦 Seu Pedido #${pedidoId}`)
                .setDescription(`**${jogo.toUpperCase()}** - R$ ${jogoInfo.preco.toFixed(2)}`)
                .setThumbnail(jogoInfo.imagem)
                .addFields(
                    { name: '📧 PIX', value: CONFIG.emailPix },
                    { name: '💳 Valor', value: `R$ ${jogoInfo.preco.toFixed(2)}` },
                    { name: '📋 Comprovante', value: canalTickets ? `Envie para: ${canalTickets}` : 'Envie para o canal de tickets' }
                )
                .setColor(0x2196F3);
            
            await interaction.user.send({ embeds: [dmEmbed] });
        } catch (error) {
            console.log('Não foi possível enviar DM para o usuário');
        }
    }

    // Botão INFO PIX
    if (interaction.customId === 'info_pix') {
        const embed = new EmbedBuilder()
            .setTitle('💰 **Informações PIX**')
            .setDescription('**Pagamento via PIX - Call of Store**')
            .setThumbnail('https://cdn-icons-png.flaticon.com/512/2331/2331965.png')
            .addFields(
                { name: '📧 E-mail PIX', value: `**${CONFIG.emailPix}**` },
                { name: '🏦 Tipo', value: 'Chave E-mail' },
                { name: '⏱️ Confirmação', value: '2-5 minutos' },
                { name: '✅ Vantagens', value: '• Pagamento instantâneo\n• Sem taxas\n• Mais seguro\n• Key liberada rápido' },
                { name: '📋 Como Pagar', value: '1. Abra seu banco\n2. PIX → Pagar\n3. Cole o e-mail\n4. Envie valor exato\n5. Guarde comprovante' },
                { name: '🛡️ Importante', value: '• Só pague após confirmar pedido\n• Envie valor exato\n• Key enviada por DM\n• Suporte 24/7' }
            )
            .setColor(0x2196F3);

        await interaction.reply({ 
            embeds: [embed],
            ephemeral: true 
        });
    }

    // Botões da mensagem fixada
    if (interaction.customId === 'suporte_fixo') {
        const canalTickets = encontrarCanalTickets(interaction.guild);
        
        const embed = new EmbedBuilder()
            .setTitle('🎫 **Suporte Call of Store**')
            .setDescription('**Como obter ajuda:**')
            .addFields(
                { name: '📞 Canal de Tickets', value: canalTickets ? canalTickets.toString() : '🎫┆abrir-ticket' },
                { name: '🕒 Atendimento', value: '2-5 minutos' },
                { name: '📋 O que podemos ajudar', value: '• Dúvidas de compra\n• Problemas com keys\n• Pagamento PIX\n• Outras questões' }
            )
            .setColor(0xFF9800);

        await interaction.reply({ embeds: [embed], ephemeral: true });
    }

    if (interaction.customId === 'promocoes_fixo') {
        const embed = new EmbedBuilder()
            .setTitle('🔥 **PROMOÇÕES**')
            .setDescription('Use os comandos abaixo:')
            .addFields(
                { name: '🛒 Ver Preço', value: '`/comprar [nome do jogo]`' },
                { name: '🔥 Todas as Promoções', value: '`/promoções`' },
                { name: '💎 Categorias', value: '• Novidades\n• Mais Vendidos\n• Populares\n• Apenas R$10' }
            )
            .setColor(0xFF4081);

        await interaction.reply({ embeds: [embed], ephemeral: true });
    }
});

// FUNÇÃO PARA ENVIAR NOTIFICAÇÃO PARA O CANAL DE TICKETS
async function enviarNotificacaoTickets(interaction, pedidoId, jogo, jogoInfo) {
    try {
        const canalTickets = encontrarCanalTickets(interaction.guild);
        
        if (!canalTickets) {
            console.log('❌ Canal de tickets não encontrado');
            // Tenta enviar DM para o vendedor como fallback
            await enviarNotificacaoVendedorDM(interaction, pedidoId, jogo, jogoInfo);
            return;
        }

        const embedTicket = new EmbedBuilder()
            .setTitle('🛒 **NOVO PEDIDO RECEBIDO!**')
            .setDescription(`**Pedido #${pedidoId} - ${jogo.toUpperCase()}**`)
            .setImage(jogoInfo.imagem)
            .addFields(
                { name: '👤 **COMPRADOR**', value: `**${interaction.user.tag}**\n(ID: ${interaction.user.id})`, inline: true },
                { name: '💰 Valor', value: `R$ ${jogoInfo.preco.toFixed(2)}`, inline: true },
                { name: '🎁 Desconto', value: `-${jogoInfo.desconto}% OFF`, inline: true },
                { name: '⏰ Data/Hora', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true },
                { name: '📋 Status', value: '🟡 Aguardando Pagamento', inline: true },
                { name: '💳 Método', value: 'PIX', inline: true },
                { name: '📱 Contato Comprador', value: `Clique para enviar DM: <@${interaction.user.id}>` },
                { name: '📧 E-mail PIX', value: `**${CONFIG.emailPix}**` },
                { name: '📋 Ações', value: '• Aguardando comprovante\n• Verificar pagamento\n• Enviar key via DM' }
            )
            .setColor(0xFFA500)
            .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
            .setFooter({ text: 'Call of Store - Sistema de Pedidos' })
            .setTimestamp();

        // Botões para o canal de tickets
        const rowTicket = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(`marcar_pago_${pedidoId}`)
                    .setLabel('✅ Marcar como Pago')
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId(`enviar_key_${pedidoId}`)
                    .setLabel('🔑 Enviar Key')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId(`cancelar_pedido_${pedidoId}`)
                    .setLabel('❌ Cancelar Pedido')
                    .setStyle(ButtonStyle.Danger)
            );

        // Envia a mensagem no canal de tickets
        await canalTickets.send({ 
            content: `📦 **NOVO PEDIDO #${pedidoId}!** <@${CONFIG.vendedorId}>`,
            embeds: [embedTicket],
            components: [rowTicket]
        });

        console.log(`✅ Notificação enviada para o canal de tickets - Pedido #${pedidoId} - Comprador: ${interaction.user.tag}`);

        // Confirma para o comprador que o pedido foi recebido
        await interaction.followUp({ 
            content: `✅ Pedido #${pedidoId} recebido! Foi criado um ticket para seu atendimento.`,
            ephemeral: true 
        });

    } catch (error) {
        console.error('❌ Erro ao enviar notificação para o canal de tickets:', error);
        
        // Fallback: tenta enviar DM para o vendedor
        try {
            await enviarNotificacaoVendedorDM(interaction, pedidoId, jogo, jogoInfo);
        } catch (fallbackError) {
            console.error('❌ Também não foi possível enviar notificação alternativa:', fallbackError);
        }
    }
}

// FUNÇÃO FALLBACK PARA ENVIAR NOTIFICAÇÃO AO VENDEDOR VIA DM
async function enviarNotificacaoVendedorDM(interaction, pedidoId, jogo, jogoInfo) {
    try {
        const vendedor = await client.users.fetch(CONFIG.vendedorId);
        
        if (!vendedor) {
            console.log(`❌ Vendedor com ID ${CONFIG.vendedorId} não encontrado`);
            return;
        }

        const embedVendedor = new EmbedBuilder()
            .setTitle('🛒 **NOVO PEDIDO RECEBIDO!**')
            .setDescription(`**Pedido #${pedidoId} - ${jogo.toUpperCase()}**`)
            .setImage(jogoInfo.imagem)
            .addFields(
                { name: '👤 **COMPRADOR**', value: `**${interaction.user.tag}**\n(ID: ${interaction.user.id})`, inline: true },
                { name: '💰 Valor', value: `R$ ${jogoInfo.preco.toFixed(2)}`, inline: true },
                { name: '🎁 Desconto', value: `-${jogoInfo.desconto}% OFF`, inline: true },
                { name: '⏰ Data/Hora', value: `<t:${Math.floor(Date.now() / 1000)}:F>`, inline: true },
                { name: '📋 Status', value: '🟡 Aguardando Pagamento', inline: true },
                { name: '💳 Método', value: 'PIX', inline: true },
                { name: '📱 Contato Comprador', value: `Clique para enviar DM: <@${interaction.user.id}>` }
            )
            .setColor(0xFFA500)
            .setThumbnail(interaction.user.displayAvatarURL({ dynamic: true }))
            .setFooter({ text: 'Call of Store - Sistema de Pedidos' })
            .setTimestamp();

        await vendedor.send({ 
            content: `📦 **NOVO PEDIDO #${pedidoId}!**`,
            embeds: [embedVendedor]
        });

        console.log(`✅ Notificação enviada para o vendedor via DM - Pedido #${pedidoId}`);

    } catch (error) {
        console.error('❌ Erro ao enviar notificação para o vendedor:', error);
    }
}

// CONECTA O BOT
client.login(TOKEN).catch(console.error);