İTÜ Blockchain klübü Devs komitesi 1. proje

Blockchain ağı üzerindeki swap işlemlerini ve pool mekanizmalarını simüle eden konsol uygulaması.

Kullanılan teknolojiler:
- Node.js
- Firebase

Kullanılan kütüphaneler:
- chalk
- inquirer
- crypto-js

Firebase yapılandırması:    
- Koleksiyonlar:
  - wallets
    [
        {
            id: '4Do1g2gt9TPurfOhyXfq', //string (firebase'de otomatik olarak olusturulur)
            public_key: 'f79cd12b3b0141d1f72c6642f668474125719c2a1b399f4c48932ebfaa2e1384', //string
            balances: { tokenA: 65114, tokenB: 76529.66400106624 } //mapping => number
        }
    ]
  - pools
    [
        {
            id: '6IT5tYtwLa420cMymliE', //string (firebase'de otomatik olarak olusturulur)
            k: 1279974.4201012463, //number
            token_1: { tokenA: 1186.0094441794727 }, //mapping => number
            token_2: { tokenB: 1079.227847959324 } //mapping => number
        }
    ]



https://github.com/exTypen  
https://github.com/mericcintosun  
https://github.com/aboveStars  


