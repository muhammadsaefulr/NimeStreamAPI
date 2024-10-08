<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).

To install dependencies:
```sh
bun install
```

To run:
```sh
bun run dev
```

<h2>API DOCS</h2>

### Homepage Endpoint
```
/otakudesu/homepage
```

<p>Example Output =></p>

```json
{
    "status": 200,
    "message": "Berhasil Mengambil Data !",
    "data": [
        {
            "title": "Jiisan Baasan Wakagaeru",
            "url": "https://otakudesu.cloud/anime/jiisan-baasan-sub-indo/",
            "thumbnailUrl": "https://otakudesu.cloud/wp-content/uploads/2024/04/Jiisan-Baasan-Wakagaeru.jpg",
            "latestEp": "Episode 10",
            "updateAnime": "Senin"
        },
        {
            "title": "Yoru no Kurage wa Oyogenai",
            "url": "https://otakudesu.cloud/anime/yoru-kurage-oyogenai-sub-indo/",
            "thumbnailUrl": "https://otakudesu.cloud/wp-content/uploads/2024/04/141827.jpg",
            "latestEp": "Episode 10",
            "updateAnime": "Minggu"
        },
        {
            "title": "Blue Archive the Animation",
            "url": "https://otakudesu.cloud/anime/blue-archive-sub-indo/",
            "thumbnailUrl": "https://otakudesu.cloud/wp-content/uploads/2024/04/140995.jpg",
            "latestEp": "Episode 10",
            "updateAnime": "Senin"
        },
        {
            "title": "Tensei Kizoku, Kantei Skill de Nariagaru",
            "url": "https://otakudesu.cloud/anime/tensei-skill-nariagaru-sub-indo/",
            "thumbnailUrl": "https://otakudesu.cloud/wp-content/uploads/2024/04/Tensei-Kizoku-Kantei-Skill-de-Nariagaru.jpg",
            "latestEp": "Episode 10",
            "updateAnime": "Senin"
        },
        {
            "title": "Kimetsu no Yaiba: Hashira Geiko-hen",
            "url": "https://otakudesu.cloud/anime/kimetsu-yaiba-s4-sub-indo/",
            "thumbnailUrl": "https://otakudesu.cloud/wp-content/uploads/2024/05/Kimetsu-no-Yaiba-Hashira-Geiko-hen.jpg",
            "latestEp": "Episode 5",
            "updateAnime": "Senin"
        },
        {
            "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
            "url": "https://otakudesu.cloud/anime/mushoku-tensi-s2-part-2-sub-indo/",
            "thumbnailUrl": "https://otakudesu.cloud/wp-content/uploads/2024/04/Mushoku-Tensei-II-Isekai-Ittara-Honki-Dasu-Part-2.jpg",
            "latestEp": "Episode 9",
            "updateAnime": "Minggu"
        }
    ]
}
```

### Search Anime
```
/otakudesu/searchanime?judul=
```

<p>Example Output =></p>

```json
{
    "status": 200,
    "message": "Berhasil Mengambil Data !",
    "data": [
        {
            "title": "Kaijuu 8-gou Subtitle Indonesia",
            "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/04/Kaijuu-8-gou.jpg",
            "AnimeLinks": "https://otakudesu.cloud/anime/kaiju-eight-sub-indo/",
            "genre": [
                {
                    "titleGenre": "Action",
                    "genreLinks": "https://otakudesu.cloud/genres/action/"
                },
                {
                    "titleGenre": "Military",
                    "genreLinks": "https://otakudesu.cloud/genres/military/"
                },
                {
                    "titleGenre": "Sci-Fi",
                    "genreLinks": "https://otakudesu.cloud/genres/sci-fi/"
                },
                {
                    "titleGenre": "Shounen",
                    "genreLinks": "https://otakudesu.cloud/genres/shounen/"
                }
            ],
            "status": "Status : Ongoing",
            "rating": "Rating : 8.26"
        }
    ]
}

```

### Get Anime Episode 
```
/otakudesu/getanime/:judulAnime
contoh:

/otakudesu/getanime/mushoku-tensi-s2-part-2-sub-indo/
```

<p>Example Output =></p>

```json
{
    "status": 200,
    "message": "Berhasil Mengambil Data !",
    "path": "kaiju-eight-sub-indo",
    "data": {
        "AnimeInfo": [
            {
                "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/04/Kaijuu-8-gou.jpg",
                "title": "Kaijuu 8-gou",
                "rating": "8.26",
                "producer": "Khara, Nippon Columbia, TOHO animation, Shueisha, Sonilude, Toho Music",
                "status": "Ongoing",
                "totalEps": "12",
                "duration": "23 Min.",
                "studio": "Production I.G",
                "releaseDate": "Tanggal Rilis: Apr 13, 2024",
                "genre": [
                    {
                        "genre": "Action",
                        "genreLinks": "https://otakudesu.cloud/genres/action/"
                    },
                    {
                        "genre": "Military",
                        "genreLinks": "https://otakudesu.cloud/genres/military/"
                    },
                    {
                        "genre": "Sci-Fi",
                        "genreLinks": "https://otakudesu.cloud/genres/sci-fi/"
                    },
                    {
                        "genre": "Shounen",
                        "genreLinks": "https://otakudesu.cloud/genres/shounen/"
                    }
                ],
                "sinopsis": "Setiap harinya, umat manusia menghadapi ancaman yang sangat berbahaya oleh para monster yang biasa disebut dengan Kaijuu. Cerita pun berpusat kepada Kafka Hibino, seorang remaja yang bercita-cita untuk bergabung dengan JSDF atau Angkatan Pertahanan Jepang.Sayangnya, ia justru menyerah terhadap mimpi tersebut dan bergabung dengan perusahaan yang Membersihkan para Kaijuu. Dalam melaksanakan tugas tersebut, ia bertemu dengan teman masa kecilnya Bernama Mina Ashiro yang saat ini menjadi komandan di Unik 3. Awalnya, ia merasa canggung namun setelah pertemuan dengan juniornya, Reno Ichikawa yang juga memiliki impian untuk bergabung dengan JSDF, Kafka pun mencoba untuk menambah pengalamannya."
            }
        ],
        "AnimeEps": [
            {
                "title": "Kaijuu 8-gou Episode 9 Subtitle Indonesia",
                "vidLinks": "https://otakudesu.cloud/episode/kajuu8-episode-9-sub-indo/"
            },
            {
                "title": "Kaijuu 8-gou Episode 8 Subtitle Indonesia",
                "vidLinks": "https://otakudesu.cloud/episode/kajuu8-episode-8-sub-indo/"
            },
            {
                "title": "Kaijuu 8-gou Episode 7 Subtitle Indonesia",
                "vidLinks": "https://otakudesu.cloud/episode/kajuu8-episode-7-sub-indo/"
            },
            {
                "title": "Kaijuu 8-gou Episode 6 Subtitle Indonesia",
                "vidLinks": "https://otakudesu.cloud/episode/kajuu8-episode-6-sub-indo/"
            },
            {
                "title": "Kaijuu 8-gou Episode 5 Subtitle Indonesia",
                "vidLinks": "https://otakudesu.cloud/episode/kajuu8-episode-5-sub-indo/"
            },
            {
                "title": "Kaijuu 8-gou Episode 4 Subtitle Indonesia",
                "vidLinks": "https://otakudesu.cloud/episode/kajuu8-episode-4-sub-indo/"
            },
            {
                "title": "Kaijuu 8-gou Episode 3 Subtitle Indonesia",
                "vidLinks": "https://otakudesu.cloud/episode/kajuu8-episode-3-sub-indo/"
            },
            {
                "title": "Kaijuu 8-gou Episode 2 Subtitle Indonesia",
                "vidLinks": "https://otakudesu.cloud/episode/kajuu8-episode-2-sub-indo/"
            },
            {
                "title": "Kaijuu 8-gou Episode 1 Subtitle Indonesia",
                "vidLinks": "https://otakudesu.cloud/episode/kajuu8-episode-1-sub-indo/"
            }
        ]
    }
}

```

### Get Anime Genre
```
/otakudesu/animegenre/:genre/pages/:pageNumber
contoh: 

/otakudesu/animegenre/adventure/pages/1

```

<p>Example Output => </p>

```json 
{
    "status": 200,
    "message": "Berhasil mengambil data !",
    "data": [
        {
            "animeTitle": "KonoSuba Season 3",
            "animeLinks": "https://otakudesu.cloud/anime/konsuba-season-3-sub-indo/",
            "animeStudio": "Drive",
            "animeEpsAvailable": "11 Eps",
            "animeRating": ""
        },
        {
            "animeTitle": "Unnamed Memory",
            "animeLinks": "https://otakudesu.cloud/anime/unnamed-memo-sub-indo/",
            "animeStudio": "ENGI",
            "animeEpsAvailable": "12 Eps",
            "animeRating": "7.34"
        },
        {
            "animeTitle": "Shuumatsu Train Doko e Iku?",
            "animeLinks": "https://otakudesu.cloud/anime/shuumatsu-train-doko-sub-indo/",
            "animeStudio": "EMT Squared",
            "animeEpsAvailable": "12 Eps",
            "animeRating": "7.40"
        },
        {
            "animeTitle": "Dekisokonai to Yobareta Motoeiyuu",
            "animeLinks": "https://otakudesu.cloud/anime/dekisoko-sub-indo/",
            "animeStudio": "Studio Deen, Marvy Jack",
            "animeEpsAvailable": "Unknown Eps",
            "animeRating": "5.09"
        },
        {
            "animeTitle": "Ookami to Koushinryou: Merchant Meets the Wise Wolf",
            "animeLinks": "https://otakudesu.cloud/anime/ookami-koushinryou-2024-sub-indo/",
            "animeStudio": "Passione",
            "animeEpsAvailable": "25 Eps",
            "animeRating": "8.23"
        },
        {
            "animeTitle": "Tensei shitara Dainana Ouji Datta node",
            "animeLinks": "https://otakudesu.cloud/anime/tensei-datta-node-sub-indo/",
            "animeStudio": "Tsumugi Akita Animation Lab",
            "animeEpsAvailable": "Unknown Eps",
            "animeRating": ""
        },
        {
            "animeTitle": "Re:Monster",
            "animeLinks": "https://otakudesu.cloud/anime/re-mnstr-sub-indo/",
            "animeStudio": "Studio Deen",
            "animeEpsAvailable": "12 Eps",
            "animeRating": "7.13"
        },
        {
            "animeTitle": "Lv2 kara Cheat datta Motoyuusha Kouho no Mattari Isekai Life",
            "animeLinks": "https://otakudesu.cloud/anime/lv2-kara-cheat-sub-indo/",
            "animeStudio": "J.C.Staff",
            "animeEpsAvailable": "12 Eps",
            "animeRating": "7.05"
        },
        {
            "animeTitle": "Tsuki ga Michibiku Isekai Douchuu Season 2",
            "animeLinks": "https://otakudesu.cloud/anime/tsuki-michibiku-isekai-douchu-s2-sub-indo/",
            "animeStudio": "J.C.Staff",
            "animeEpsAvailable": "Unknown Eps",
            "animeRating": "7.45"
        },
        {
            "animeTitle": "Tensei Kizoku, Kantei Skill de Nariagaru",
            "animeLinks": "https://otakudesu.cloud/anime/tensei-skill-nariagaru-sub-indo/",
            "animeStudio": "studio MOTHER",
            "animeEpsAvailable": "12 Eps",
            "animeRating": "7.02"
        },
        {
            "animeTitle": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
            "animeLinks": "https://otakudesu.cloud/anime/mushoku-tensi-s2-part-2-sub-indo/",
            "animeStudio": "Studio Bind",
            "animeEpsAvailable": "12 Eps",
            "animeRating": "8.33"
        },
        {
            "animeTitle": "One Piece",
            "animeLinks": "https://otakudesu.cloud/anime/opiece-sub-indo/",
            "animeStudio": "Toei Animation",
            "animeEpsAvailable": "? Eps",
            "animeRating": "8.54"
        },
        {
            "animeTitle": "The New Gate",
            "animeLinks": "https://otakudesu.cloud/anime/new-gate-sub-indo/",
            "animeStudio": "Yokohama Animation Lab, Cloud Hearts",
            "animeEpsAvailable": "Unknown Eps",
            "animeRating": "6.71"
        },
        {
            "animeTitle": "Tensei shitara Slime Datta Ken Season 3",
            "animeLinks": "https://otakudesu.cloud/anime/tensei-shitara-slime-datta-season-3-sub-indo/",
            "animeStudio": "8bit",
            "animeEpsAvailable": "24 Eps",
            "animeRating": "8.34"
        },
        {
            "animeTitle": "Shin no Nakama ja Nai to Yuusha no Party wo Oidasareta node Season 2",
            "animeLinks": "https://otakudesu.cloud/anime/snny-s2-sub-indo/",
            "animeStudio": "Studio Flad",
            "animeEpsAvailable": "12 Eps",
            "animeRating": "6.78"
        }
    ]
}
```

### Get Anime Stream Source
```
/otakudesu/animesource/:urlAnimeEps
contoh:

/otakudesu/animesource/mt-ithd-s2-p1-episode-5-sub-indo/

```

<p>Example Output => </p>

```json
{
  "status": 200,
  "message": "Berhasil Mengambil Data !",
  "data": {
    "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu Part 2",
    "releaseOn": " 12:39 am",
    "epsNow": "Episode 5 Subtitle Indonesia",
    "sourceLinks": "https://desustream.me/ondesu3/index.php?id=YS8xd3NBYnFsY0M1ZzliRnFDcjg3TERvbFAxTkoyTkcrUkpPSE4rZkRGdz0=",
    "nextEpsLinks": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-6-sub-indo/",
    "AnimeSource": [
      {
        "res": "Mp4 360p",
        "dataList": [
          {
            "title": "ODFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVINWpYWTJuNXdCcjZmTHJ1Ym1aNjlrQ2hVYTdiaTNqQU5uM25ubEZNSnZrdFpDOWp4dDR5OXZvdDJuQ09iRFlMREU0Z1B3UkpNV0JkMHh2SENiWVRZdytnYTZFTjVLLzQ9"
          },
          {
            "title": "Pdrain",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVZK3l6V3czeHJDN0tDTHJhUmdKNnBqZ1ZwYVAzNTdnWWQ="
          },
          {
            "title": "Acefile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVKOFRIVnhuUjhSTGlETDdQUjNJSG9tSGdNSlBPbGhqb2V5bWE5djBJYm9CTlVBZlRwNm82bWhLaDJubHFOVVlHWUVPc0l6aE5YUlZkczlMTEE="
          },
          {
            "title": "GoFile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVQL1RMYXczMDNBN1REWlBxcnVNQ1I0Q289"
          },
          {
            "title": "Mega",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVGOXpQU2dYWmpSYjJGYkxEUmp2Uzd5UWhmS1lTeS9USWU0a0d2bUJZbXVIcFdGOTdROXRla3RhNXNsRCt0VWNML1R1MTMyM05YTTJ3RDhLK05OcENjd1E9PQ=="
          },
          {
            "title": "KFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVENERYWXluWi9BN2VKYy91ZGd0enoxeVpZYStyQjZqc3k2RXlsamtsWitsaFVBczZxOFpHL2pRPT0="
          }
        ]
      },
      {
        "res": "Mp4 480p",
        "dataList": [
          {
            "title": "ODFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVINWpYWTJuNXdCcjZmTHJ1Ym1aNm8xaTVUZmZDcHdDTVBtbVRubEZNSnZrdFpDOWp4dDR5OXZvdDJuQ09iRFlMREU0Z1B3UkpNV0JkMHh2Yk1iWVRZdytnYTZFTjVLLzQ9"
          },
          {
            "title": "Pdrain",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVZK3l6V3czeHJDN0tDTHJhUmdKNnBqbmRuZGZQNDZnVSs="
          },
          {
            "title": "Acefile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVKOFRIVnhuUjhSTGlETDdQUjNJSG9tSGdNSlBPa2hqb2V5bWE5djBJYm9CTlVBZlRwNm82bWhLaDJubHFOVVlHWUVPc0l6aFJaUlZkczlMTEE="
          },
          {
            "title": "GoFile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVQL1RMYXczMDNBN1REWlBxcnVNQ1I0Q289"
          },
          {
            "title": "Mega",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVGOXpQU2dYWmpSYjJGYkxEUnErU2t5Q1IzVDZleTdoY1krWDZZN2tZN21VUkxOKzdpdzV5enVhOVJzMXE3SnNQSFNPc0YrQk5SRmg4VitvbXNFcEt4N3c9PQ=="
          },
          {
            "title": "KFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVENERYWXluWi9BN2VKYy91ZGd0enoxeVpZYStyNWtXRWNtRitZbEJJditsaFVBczZxOFpHL2pRPT0="
          }
        ]
      },
      {
        "res": "Mp4 720p",
        "dataList": [
          {
            "title": "ODFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVINWpYWTJuNXdCcjZmTHJ1Ym1aNnkyeWhVZWJDaXpEWUR6MmJubEZNSnZrdFpDOWp4dDR5OXZvdDJuQ09iRFlMREU0Z1B3UkpNV0JkMHh2WEdiWVRZdytnYTZFTjVLLzQ9"
          },
          {
            "title": "Pdrain",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVZK3l6V3czeHJDN0tDTHJhUmdKNnBqZ2hiTDZQL3lEZ2E="
          },
          {
            "title": "Acefile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVKOFRIVnhuUjhSTGlETDdQUjNJSG9tSGdNSlBPbmhqb2V5bWE5djBJYm9CTlVBZlRwNm82bWhLaDJubHFOVVlHWUVPc0l6aGRUUlZkczlMTEE="
          },
          {
            "title": "GoFile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVQL1RMYXczMDNBN1REWlBxcnVNQ1I0Q289"
          },
          {
            "title": "Mega",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVGOXpQU2dYWmpSYjJGYkxEUnBPZWV5ZzV1SzUreTZpUVNrMG01amhJU2tnaExLc2JLNEthSHU3UktrUkdIQW9ETGFLMFE5a2NWRFZWdzJJaWhNTGljM1E9PQ=="
          },
          {
            "title": "KFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVENERYWXluWi9BN2VKYy91ZGd0enoxeVpZYStxbDNTOHluRzZxc0VBSitsaFVBczZxOFpHL2pRPT0="
          }
        ]
      },
      {
        "res": "MKV 480p",
        "dataList": [
          {
            "title": "ODFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVINWpYWTJuNXdCcjZmTHJ1Ym1aNjBsaVJLYWZmMzBXY0IyMnJubEZNSnZrdFpDOWp4dDR5OXZvdDJuQ09iRFlMREU0Z1B3UkpNV0JkMHhvK2ZLOERPbnVnQXEwQjdhUG9TTTFnPQ=="
          },
          {
            "title": "Pdrain",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVZK3l6V3czeHJDN0tDTHJhUmdKNnBqZ3dJYm9EVzZCQW0="
          },
          {
            "title": "Acefile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVKOFRIVnhuUjhSTGlETDdQUjNJSG9tSGdNSlBPcGhqb2V5bWE5djBJYm9CTlVBZlRwNm82bWhLaDJubHFOVVlHWUVPc0l6azBLQXhONXFiTFpNSitB"
          },
          {
            "title": "GoFile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVQL1RMYXczMDNBN1REWlBxcnVNQ1I0Q289"
          },
          {
            "title": "Mega",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVGOXpQU2dYWmpSYjJGYkxEUm9QK2U5aHB4VUkreTV3RW0rWG1sdkdVcnNsUUxENXJxNnNpY2cvUmtwbHEwTWNIaFQ3NU42RlFRSkhNcjNwZkdFTENnN3c9PQ=="
          },
          {
            "title": "KFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVENERYWXluWi9BN2VKYy91ZGd0enoxeVpZYStyajJ6Y2oyMW1ZNlUwUCtsaFVBczZxOFpHL2pRPT0="
          }
        ]
      },
      {
        "res": "MKV 720p",
        "dataList": [
          {
            "title": "ODFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVINWpYWTJuNXdCcjZmTHJ1Ym1aNnAyeVpFSzZIL25UTWJrMkxubEZNSnZrdFpDOWp4dDR5OXZvdDJuQ09iRFlMREU0Z1B3UkpNV0JkMHhvK2ZLOFBFbnVnQXEwQjdhUG9TTTFnPQ=="
          },
          {
            "title": "Pdrain",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVZK3l6V3czeHJDN0tDTHJhUmdKNnBqZ2wyVWJEKzdSSU8="
          },
          {
            "title": "Acefile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVKOFRIVnhuUjhSTGlETDdQUjNJSG9tSGdNSlBLaGhqb2V5bWE5djBJYm9CTlVBZlRwNm82bWhLaDJubHFOVVlHWUVPc0l6azBLQXhCenFiTFpNSitB"
          },
          {
            "title": "GoFile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVQL1RMYXczMDNBN1REWlBxcnVNQ1I0Q289"
          },
          {
            "title": "Mega",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVGOXpQU2dYWmpSYjJGYkxEUnEvdTA0Z2w4WDRHeTVBMWV3Rm1NcUZFam4yUUxDOHJvd2JUbjBKRlZ6d0NHVm9UN1NLbC9vSE1USjB3SDNiYXlCOEN5bmc9PQ=="
          },
          {
            "title": "KFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVENERYWXluWi9BN2VKYy91ZGd0enoxeVpZYStyVHdqbzV4VnY4bDNRNCtsaFVBczZxOFpHL2pRPT0="
          }
        ]
      },
      {
        "res": "MKV 1080p",
        "dataList": [
          {
            "title": "ODFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVINWpYWTJuNXdCcjZmTHJ1Ym1aN3MwaTVSY2IvMHdtUmN4bXZubEZNSnZrdFpDOWp4dDR5OXZvdDJuQ09iRFlMREU0Z1B3UkpNV0JkMHhvK2ZLOFhHbHFoZTZFWm1NTHdPS2xuNw=="
          },
          {
            "title": "Pdrain",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVZK3l6V3czeHJDN0tDTHJhUmdKNnBqamhxTGFEKzNBSWU="
          },
          {
            "title": "Acefile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVKOFRIVnhuUjhSTGlETDdQUjNJSG9tSGdNSlBLaGhqb2V5bWE5djBJYm9CTlVBZlRwNm82bWhLaDJubHFOVVlHWUVPc0l6azBLQXhCenFiTFpNSitB"
          },
          {
            "title": "GoFile",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVQL1RMYXczMDNBN1REWlBxcnVNQ1I0Q289"
          },
          {
            "title": "Mega",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVGOXpQU2dYWmpSYjJGYkxEUmxldU94aHArZHBHeTNqNEg3aisvcVJVeHRraGxIUGlwcXJEZ3JiZGhwU0dSVXFUTVRvUk4zMGczRVUwUzQ0K1ZiNHlPNnc9PQ=="
          },
          {
            "title": "KFiles",
            "links": "https://desustream.com/safelink/link/?id=eXRoOHNYVG9UdnVENERYWXluWi9BN2VKYy91ZGd0enoxeVpZYStyL3lpUlM1RCtNcWtNcCtsaFVBczZxOFpHL2pRPT0="
          }
        ]
      }
    ],
    "epsList": [
      {
        "title": "Episode 12",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-12-sub-indo/"
      },
      {
        "title": "Episode 11",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-11-sub-indo/"
      },
      {
        "title": "Episode 10",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-10-sub-indo/"
      },
      {
        "title": "Episode 9",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-9-sub-indo/"
      },
      {
        "title": "Episode 8",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-8-sub-indo/"
      },
      {
        "title": "Episode 7",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-7-sub-indo/"
      },
      {
        "title": "Episode 6",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-6-sub-indo/"
      },
      {
        "title": "Episode 5",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-5-sub-indo/"
      },
      {
        "title": "Episode 4",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-4-sub-indo/"
      },
      {
        "title": "Episode 3",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-3-sub-indo/"
      },
      {
        "title": "Episode 2",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-2-sub-indo/"
      },
      {
        "title": "Episode 1",
        "links": "https://otakudesu.cloud/episode/mt-ithd-s2-p1-episode-1-sub-indo/"
      }
    ],
    "resultPdrain": [
      {
        "res": "Mp4 360p",
        "links": "https://pixeldrain.com/api/file/JTt8hGSw"
      },
      {
        "res": "Mp4 480p",
        "links": "https://pixeldrain.com/api/file/8Zi6iCPT"
      },
      {
        "res": "Mp4 720p",
        "links": "https://pixeldrain.com/api/file/Gf3fnamp"
      },
      {
        "res": "MKV 480p",
        "links": "https://pixeldrain.com/api/file/C5rEGAEL"
      },
      {
        "res": "MKV 720p",
        "links": "https://pixeldrain.com/api/file/FKMuoDGd"
      },
      {
        "res": "MKV 1080p",
        "links": "https://pixeldrain.com/api/file/wW1eouWt"
      }
    ]
  }
}
```

### Get Anime Ongoing list
```
/otakudesu/ongoin-anime/page/:pageNum
contoh:

/otakudesu/ongoing-anime/page/1

```

<p>Example Output => </p>

```json
{
  "status": 200,
  "message": "Berhasil mengambil data !",
  "data": [
    {
      "title": "Isekai Suicide Squad",
      "epsNow": " Episode 10",
      "AnimeLinks": "https://otakudesu.cloud/anime/suicide-squad-sub-indo/",
      "updateAnime": " Kamis",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/06/Isekai-Suicide-Squad.jpg"
    },
    {
      "title": "Shikanoko Nokonoko Koshitantan",
      "epsNow": " Episode 7",
      "AnimeLinks": "https://otakudesu.cloud/anime/shikanoko-nokotan-sub-indo/",
      "updateAnime": " Jumat",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/Shikanoko-Nokonoko-Koshitantan.jpg"
    },
    {
      "title": "Sengoku Youko: Senma Konton-hen",
      "epsNow": " Episode 5",
      "AnimeLinks": "https://otakudesu.cloud/anime/sengoku-youko-s2-sub-indo/",
      "updateAnime": " Kamis",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/Sengoku-Youko-Senam-Konton.jpg"
    },
    {
      "title": "Oshi no Ko Season 2",
      "epsNow": " Episode 7",
      "AnimeLinks": "https://otakudesu.cloud/anime/oshi-ko-s2-sub-indo/",
      "updateAnime": " Rabu",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/143302.jpg"
    },
    {
      "title": "Tokidoki Bosotto Russia-go de Dereru Tonari no Alya-san",
      "epsNow": " Episode 7",
      "AnimeLinks": "https://otakudesu.cloud/anime/tokidoki-bosotto-russia-alya-san-sub-indo/",
      "updateAnime": " Kamis",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/Tokidoki-Bosotto-Russia-go-de-Dereru-Tonari-no-Alya-san.jpg"
    },
    {
      "title": "Maougun Saikyou no Majutsushi wa Ningen datta",
      "epsNow": " Episode 8",
      "AnimeLinks": "https://otakudesu.cloud/anime/maougun-saikyou-majutsushi-ningen-sub-indo/",
      "updateAnime": " Kamis",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/06/142013.jpg"
    },
    {
      "title": "Tasuuketsu",
      "epsNow": " Episode 5",
      "AnimeLinks": "https://otakudesu.cloud/anime/tasuketsu-sub-indo/",
      "updateAnime": " Rabu",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/143629.jpg"
    },
    {
      "title": "Isekai Shikkaku",
      "epsNow": " Episode 6",
      "AnimeLinks": "https://otakudesu.cloud/anime/isekai-sikaku-sub-indo/",
      "updateAnime": " Rabu",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/Isekai-Shikkaku.jpg"
    },
    {
      "title": "Katsute Mahou Shoujo to Aku wa Tekitai shiteita.",
      "epsNow": " Episode 6",
      "AnimeLinks": "https://otakudesu.cloud/anime/katsute-mahou-sheteita-sub-indo/",
      "updateAnime": " Selasa",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/Katsute-Mahou-Shoujo-to-Aku-wa-Tekitai-shiteita..jpg"
    },
    {
      "title": "Shinmai Ossan Boukensha",
      "epsNow": " Episode 6",
      "AnimeLinks": "https://otakudesu.cloud/anime/shinmai-ossan-boukensha-sub-indo/",
      "updateAnime": " Selasa",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/Shinmai-Ossan-Boukensha.jpg"
    },
    {
      "title": "Shy Season 2",
      "epsNow": " Episode 6",
      "AnimeLinks": "https://otakudesu.cloud/anime/shy-s2-sub-indo/",
      "updateAnime": " Senin",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/Shy-S2.jpg"
    },
    {
      "title": "Ookami to Koushinryou: Merchant Meets the Wise Wolf",
      "epsNow": " Episode 19",
      "AnimeLinks": "https://otakudesu.cloud/anime/ookami-koushinryou-2024-sub-indo/",
      "updateAnime": " Selasa",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/04/Ookami-to-Koushinryou.jpg"
    },
    {
      "title": "Na Nare Hana Nare",
      "epsNow": " Episode 6",
      "AnimeLinks": "https://otakudesu.cloud/anime/nare-hana-sub-indo/",
      "updateAnime": " Senin",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/143526.jpg"
    },
    {
      "title": "Mayonaka Punch",
      "epsNow": " Episode 6",
      "AnimeLinks": "https://otakudesu.cloud/anime/myonka-punch-sub-indo/",
      "updateAnime": " Random",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/Mayonaka-Punch.jpg"
    },
    {
      "title": "VTuber Nandaga Haishin Kiri Wasuretara Densetsu ni Natteta",
      "epsNow": " Episode 6",
      "AnimeLinks": "https://otakudesu.cloud/anime/vtuber-nankiritara-sub-indo/",
      "updateAnime": " Senin",
      "thumbnailImage": "https://otakudesu.cloud/wp-content/uploads/2024/07/VTuber-Nandaga-Haishin-Kiri-Wasuretara-Densetsu-ni-Natteta.jpg"
    }
  ]
}
```

